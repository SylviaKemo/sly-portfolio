/**
 * Builds the email Sylvia receives when someone sends the contact form.
 * Email clients only support simple HTML, so styles are inline and the
 * layout uses tables.
 */

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

// Site colours (Midnight plum theme)
const plum = "#1d1135";
const pink = "#ffc0cb";
const muted = "#6b6080";
const soft = "#f7f4fb";

/** Escape visitor input so it can never inject HTML into the email. */
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function receivedAt() {
  return new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Nairobi",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function buildContactEmail({ name, email, message }: ContactMessage) {
  const firstName = name.split(" ")[0];
  const time = receivedAt();
  const replyLink = `mailto:${email}?subject=${encodeURIComponent("Re: your message to Sylvia")}`;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const subject = `New enquiry from ${name}`;

  const text = [
    `New enquiry from your portfolio`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Received: ${time} (Nairobi)`,
    ``,
    `Message:`,
    message,
    ``,
    `Reply to this email to answer ${firstName} directly.`,
  ].join("\n");

  const detailRow = (label: string, value: string) => `
    <tr>
      <td style="padding:6px 0;width:90px;color:${muted};font-size:13px;">${label}</td>
      <td style="padding:6px 0;color:${plum};font-size:15px;">${value}</td>
    </tr>`;

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1edf6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1edf6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="background:${plum};padding:28px 32px;">
                <div style="color:${pink};font-size:12px;letter-spacing:2px;text-transform:uppercase;">New portfolio enquiry</div>
                <div style="color:#ffffff;font-size:24px;font-weight:bold;margin-top:8px;">Message from ${safeName}</div>
              </td>
            </tr>

            <!-- Sender details -->
            <tr>
              <td style="padding:24px 32px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  ${detailRow("Name", safeName)}
                  ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color:${plum};">${safeEmail}</a>`)}
                  ${detailRow("Received", `${time} (Nairobi)`)}
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:16px 32px;">
                <div style="color:${muted};font-size:13px;margin-bottom:8px;">Message</div>
                <div style="background:${soft};border-left:4px solid ${pink};border-radius:6px;padding:16px 18px;color:${plum};font-size:15px;line-height:1.6;">${safeMessage}</div>
              </td>
            </tr>

            <!-- Reply button -->
            <tr>
              <td style="padding:8px 32px 32px;">
                <a href="${escapeHtml(replyLink)}" style="display:inline-block;background:${pink};color:${plum};text-decoration:none;font-weight:bold;font-size:14px;padding:12px 24px;border-radius:999px;">Reply to ${escapeHtml(firstName)}</a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="border-top:1px solid #eee8f3;padding:16px 32px;color:${muted};font-size:12px;">
                Sent from the contact form on your portfolio. You can also just hit Reply.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
