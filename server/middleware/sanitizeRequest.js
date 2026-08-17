// express-mongo-sanitize tries to reassign req.query, which is a
// getter-only property in Express 5 and throws. This does the same
// job (stripping keys starting with "$" or containing ".") by mutating
// objects in place instead of reassigning them, so it works with
// req.body, req.params, and req.query on Express 5.
const sanitizeObject = (obj) => {
  if (!obj || typeof obj !== "object") return;

  for (const key of Object.keys(obj)) {
    if (key.startsWith("$") || key.includes(".")) {
      delete obj[key];
      continue;
    }

    if (obj[key] && typeof obj[key] === "object") {
      sanitizeObject(obj[key]);
    }
  }
};

const sanitizeRequest = (req, res, next) => {
  sanitizeObject(req.body);
  sanitizeObject(req.params);
  sanitizeObject(req.query);
  next();
};

export default sanitizeRequest;
