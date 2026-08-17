const COLORS = {
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
  neutral: "bg-gray-100 text-gray-700",
};

function Badge({ children, color = "neutral" }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
        COLORS[color] || COLORS.neutral
      }`}
    >
      {children}
    </span>
  );
}

export default Badge;
