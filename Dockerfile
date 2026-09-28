# syntax=docker/dockerfile:1
#
# Build stages use Node on Alpine (not shipped to production).
# Runner uses Google's distroless Node image — no shell, apk, or npm in the final layer
# (fewer CVEs vs node:*-alpine as the runtime image).

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat \
  && apk upgrade --no-cache
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_SITE_URL=https://alexiswebworks.com
ARG NEXT_PUBLIC_API_URL=https://api.alexiswebworks.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NODE_ENV=production

RUN npm run build

FROM gcr.io/distroless/nodejs22-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static

USER nonroot
EXPOSE 3000

# Runtime: optional GOOGLE_SITE_VERIFICATION (see env.production.example)
CMD ["server.js"]
