// Simple animated checkmark shown on the booking-success page.
// Uses a CSS stroke-draw animation instead of a heavy animation library.
function SuccessAnimation() {
  return (
    <div className="flex justify-center">
      <svg
        className="w-24 h-24"
        viewBox="0 0 52 52"
      >
        <circle
          className="success-circle"
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
        />
        <path
          className="success-check"
          fill="none"
          stroke="#16a34a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 27l7 7 17-17"
        />
      </svg>

      <style>{`
        .success-circle {
          stroke-dasharray: 151;
          stroke-dashoffset: 151;
          animation: draw-circle 0.6s ease-out forwards;
        }
        .success-check {
          stroke-dasharray: 36;
          stroke-dashoffset: 36;
          animation: draw-check 0.4s 0.5s ease-out forwards;
        }
        @keyframes draw-circle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes draw-check {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

export default SuccessAnimation;
