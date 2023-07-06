import nodemailer from "nodemailer";

const user = process.env.user;
const pass = process.env.pass;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  service: "gmail",
  secure: true,
  auth: {
    user,
    pass,
  },
});

export const mailOptions = {
  to: user,
  from: user,
};
