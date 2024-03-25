import sgMail from "@sendgrid/mail";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(SENDGRID_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  const msg = {
    from: ADMIN_EMAIL,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  };

  await sgMail.send(msg);
};
