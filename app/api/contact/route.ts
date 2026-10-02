/**
 * POST /api/contact — sends the contact form to Sylvia's inbox via Resend.
 * Needs RESEND_API_KEY and CONTACT_EMAIL (see .env.example).
 */
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  // Without a key (e.g. local development) just log the message.
  if (!apiKey || !to) {
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
    return Response.json({ error: "Could not send the message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
