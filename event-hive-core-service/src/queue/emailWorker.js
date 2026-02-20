import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import { redisConnection } from "../configs/redis.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const worker = new Worker(
  "emailQueue",
  async (job) => {
    const { to, subject, text } = job.data;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
  },
  {
    connection: redisConnection,
  }
);
