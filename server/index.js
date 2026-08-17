// This file is the real npm entry point. ES module `import` statements are
// hoisted and evaluated before any other code in a file runs, so validating
// env vars *inside* server.js happens too late (route files already import
// things like the Razorpay client, which reads env vars at import time).
// Using a dynamic import() here delays loading server.js until after we've
// confirmed the required environment variables are present.
import dotenv from "dotenv";
dotenv.config();

import validateEnv from "./config/validateEnv.js";

validateEnv();

await import("./server.js");
