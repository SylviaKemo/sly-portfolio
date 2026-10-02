/** Builds the email Sylvia receives when someone sends the contact form. */

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

/** Escape visitor input so it can never inject HTML into the email. */
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactEmail({ name, email, message }: ContactMessage) {
  const subject = `New message from ${name}`;

  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const safeEmail = escapeHtml(email);
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#222;">
      <p style="margin:0 0 16px;">
        <strong>Name:</strong> ${escapeHtml(name)}<br>
        <strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a>
      </p>
      <p style="margin:0;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    </div>`;

  return { subject, html, text };
}
