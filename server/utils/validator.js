// Small, dependency-free validation helpers used outside of the
// express-validator route chains (e.g. inside services/controllers
// where a quick check is needed without a full validator chain).

export const isValidEmail = (email) => {
  if (typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const isValidPhone = (phone) => {
  if (typeof phone !== "string") return false;
  return /^[0-9]{10}$/.test(phone.trim());
};

export const isValidMongoId = (id) => {
  if (typeof id !== "string") return false;
  return /^[0-9a-fA-F]{24}$/.test(id);
};

export const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

export const isPositiveNumber = (value) =>
  typeof value === "number" && !Number.isNaN(value) && value > 0;

export const isFutureDate = (date) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return false;

  // Compare on the date only, ignoring time-of-day, so "today" is valid.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return parsed >= today;
};
