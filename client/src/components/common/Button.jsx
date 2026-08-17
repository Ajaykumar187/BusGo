const VARIANTS = {
  primary: "bg-blue-700 hover:bg-blue-800 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  outline: "border border-blue-700 text-blue-700 hover:bg-blue-50",
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
