import nodemailer from "nodemailer";
import { UKR_NET_EMAIL, UKR_NET_PASSWORD } from "../constants/envConstants.js";

const config = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = (emailOptions) => {
  transporter.sendMail({
    ...emailOptions,
    from: UKR_NET_EMAIL,
  });
};
export default sendEmail;
