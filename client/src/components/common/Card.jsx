function Card({ children, className = "", padding = "p-6", surface = "light" }) {
  return (
    <div
      className={`${surface === "dark" ? "glass-dark" : "glass-light"} rounded-2xl ${padding} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
