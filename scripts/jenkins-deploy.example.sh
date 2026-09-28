#!/usr/bin/env bash
# Example Jenkins "Execute shell" for this repo (Next.js standalone + Traefik).
#
# Old React: REACT_APP_API_URL at build time.
# This app: NEXT_PUBLIC_SITE_URL + NEXT_PUBLIC_API_URL at build time (contact → API /contact).

set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-alexis-frontend}"
DOMAIN="${DOMAIN:-alexiswebworks.com}"
SITE_URL="${SITE_URL:-https://${DOMAIN}}"
API_URL="${API_URL:-https://api.alexiswebworks.com}"

docker build --no-cache \
  --build-arg "NEXT_PUBLIC_SITE_URL=${SITE_URL}" \
  --build-arg "NEXT_PUBLIC_API_URL=${API_URL}" \
  -t "${IMAGE_NAME}:${BUILD_NUMBER}" .

container_id="$(docker ps -q --filter "name=^/${IMAGE_NAME}$")"

if [ -n "$container_id" ]; then
  docker stop "$container_id"
  docker rm "$container_id"
  echo "Detenido y eliminado el contenedor ${container_id}"
else
  echo "No se encontró un contenedor con el nombre '${IMAGE_NAME}'."
fi

docker run -d \
  -l "traefik.enable=true" \
  -l "traefik.http.routers.${IMAGE_NAME}.rule=Host(\`${DOMAIN}\`)" \
  -l "traefik.http.routers.${IMAGE_NAME}.service=${IMAGE_NAME}" \
  -l "traefik.http.routers.${IMAGE_NAME}.tls=true" \
  -l "traefik.http.routers.${IMAGE_NAME}.tls.certResolver=letsEncrypt" \
  -l "traefik.http.routers.${IMAGE_NAME}.entryPoints=https" \
  -l "traefik.http.services.${IMAGE_NAME}.loadbalancer.server.port=3000" \
  -l "traefik.docker.network=traefik-net" \
  --name "${IMAGE_NAME}" \
  --network traefik-net \
  ${GOOGLE_SITE_VERIFICATION:+-e "GOOGLE_SITE_VERIFICATION=${GOOGLE_SITE_VERIFICATION}"} \
  "${IMAGE_NAME}:${BUILD_NUMBER}"
