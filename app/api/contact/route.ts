import { contactProjectTypes } from "@/src/config/contact";
import { NextResponse } from "next/server";

const PROJECT_TYPES = new Set<string>(contactProjectTypes);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Portfolio contact";
  const toEmail = process.env.BREVO_CONTACT_TO_EMAIL;

  if (!apiKey || !senderEmail || !toEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, projectType, message } = body as Record<string, unknown>;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof projectType !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const trimmed = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    projectType: projectType.trim(),
    message: message.trim(),
  };

  if (
    !trimmed.firstName ||
    !trimmed.lastName ||
    !trimmed.email ||
    !trimmed.projectType ||
    !trimmed.message
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(trimmed.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!PROJECT_TYPES.has(trimmed.projectType)) {
    return NextResponse.json({ error: "Select a valid project type." }, { status: 400 });
  }

  const fullName = `${trimmed.firstName} ${trimmed.lastName}`;
  const htmlContent = `
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(trimmed.email)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(trimmed.projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(trimmed.message).replace(/\n/g, "<br />")}</p>
  `.trim();

  const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      replyTo: { email: trimmed.email, name: fullName },
      to: [{ email: toEmail }],
      subject: `Portfolio inquiry — ${trimmed.projectType}`,
      htmlContent,
    }),
  });

  if (!brevoResponse.ok) {
    const brevoError = await brevoResponse.text().catch(() => "");
    console.error("Brevo API error:", brevoResponse.status, brevoError);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
