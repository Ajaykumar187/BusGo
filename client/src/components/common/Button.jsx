const VARIANTS = {
  primary: "ember-glow bg-gradient-to-r from-ember to-ember-light text-white",
  secondary: "bg-ink/5 hover:bg-ink/10 text-ink",
  danger: "bg-rose-600 hover:bg-rose-700 text-white",
  outline: "border border-ember text-ember hover:bg-ember/10",
};

function Button({
  children,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-semibold transition-colors
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${VARIANTS[variant] || VARIANTS.primary}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
