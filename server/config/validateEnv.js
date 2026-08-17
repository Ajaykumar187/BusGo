const REQUIRED_ENV_VARS = [
  "MONGO_URI",
  "JWT_SECRET",
  "RAZORPAY_KEY_ID",
  "RAZORPAY_KEY_SECRET",
];

const validateEnv = () => {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      `❌ Missing required environment variable(s): ${missing.join(", ")}`
    );
    console.error(
      "   Copy server/.env.example to server/.env and fill in the values."
    );
    process.exit(1);
  }

  if (process.env.JWT_SECRET.length < 16) {
    console.warn(
      "⚠️  JWT_SECRET is short — use a long, random string in production."
    );
  }
};

export default validateEnv;
