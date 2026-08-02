const nodemailer = require('nodemailer');

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const getTransporter = () => {
  const { SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error('Email service is not configured. Set SMTP_USER and SMTP_PASS in backend/.env');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const sendContactEmail = async ({ name, email, message }) => {
  const transporter = getTransporter();
  const receiver = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: receiver,
    replyTo: email,
    subject: `New message from ${name} — Portfolio Contact`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f1f5f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #64748b; font-size: 12px;">Sent from your portfolio contact form</p>
      </div>
    `,
  });
};

module.exports = sendContactEmail;
