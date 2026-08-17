function Card({ children, className = "", padding = "p-6" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg ${padding} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
