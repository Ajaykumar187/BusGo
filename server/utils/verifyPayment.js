import crypto from "crypto";

// Verifies a Razorpay *webhook* payload signature. This is different from
// verifySignature.js (which checks the client-side checkout signature) —
// webhooks are signed with a separate "webhook secret" configured in the
// Razorpay dashboard and sign the raw request body, not "orderId|paymentId".
// Useful if/when a POST /api/payment/webhook route is added for
// server-to-server payment confirmation.
const verifyWebhookSignature = (rawBody, signature, webhookSecret) => {
  if (!rawBody || !signature || !webhookSecret) return false;

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  return expectedSignature === signature;
};

export default verifyWebhookSignature;
