import { processPayment } from "../services/paymentService.js";
import { emailQueue } from "../queue/emailQueue.js";
export const processPaymentHandler = async (req, res) => {
  try {
    const { booking_id } = req.body;
    const user_id = req.user.id;
    const email = req.user.email;
    const response = await processPayment(booking_id, user_id);
    await emailQueue.add("sendEmail", {
      to: email,
      subject: "Event Booking Confirmed",
      text: "Your booking is confirmed 🎉",
    });
    res.status(200).json({
      message: "Payment processed successfully",
      data: response || {},
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
