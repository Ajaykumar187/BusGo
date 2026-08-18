const COLORS = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-rose-100 text-rose-700",
  info: "bg-route/15 text-cyan-700",
  neutral: "bg-ink/8 text-ink/70",
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
