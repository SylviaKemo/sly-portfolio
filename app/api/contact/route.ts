/**
 * POST /api/contact — sends the contact form to Sylvia's inbox via Resend.
 * Needs RESEND_API_KEY and CONTACT_EMAIL (see .env.example).
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never fill in. Bots usually do,
  // so pretend it worked and send nothing.
  if (asText(body.website)) {
    return Response.json({ ok: true });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const message = asText(body.message);

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return Response.json({ error: "Your message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    // In production a missing key would silently lose messages, so fail loudly.
    if (process.env.NODE_ENV === "production") {
      return Response.json({ error: "Email is not configured." }, { status: 500 });
    }
    // Local development: just log the message.
    console.log("Contact form (email not configured):", { name, email, message });
    return Response.json({ ok: true });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    }),
  });

  if (!response.ok) {
    console.error("Resend error:", response.status, await response.text());
    return Response.json({ error: "Could not send the message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
