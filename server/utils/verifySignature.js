import crypto from "crypto";

// Verifies a Razorpay checkout (client-side) payment signature.
// See: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/#step-4-verify-payment-signature
const verifySignature = (orderId, paymentId, signature) => {
  const body = `${orderId}|${paymentId}`;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  return expectedSignature === signature;
};

export default verifySignature;
