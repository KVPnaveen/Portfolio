import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'naveenmadhawa2022@gmail.com';

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  try {
    let transporter;
    let usedTestAccount = false;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    } else if (process.env.NODE_ENV !== 'production') {
      // In development, fall back to Ethereal test account so emails can be previewed.
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usedTestAccount = true;
    } else {
      return res.status(500).json({
        message:
          'Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.',
      });
    }

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER || 'no-reply@example.com'}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
      `,
    });

    const responsePayload = { message: 'Your message has been sent successfully.' };
    if (usedTestAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) responsePayload.previewUrl = previewUrl;
    }

    return res.json(responsePayload);
  } catch (error) {
    // In development return more detailed error info to help debugging.
    const devDetail = process.env.NODE_ENV === 'production' ? undefined : String(error?.message || error);
    const payload = { message: 'Could not send your message. Check your SMTP settings and try again.' };
    if (devDetail) payload.error = devDetail;
    return res.status(500).json(payload);
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});