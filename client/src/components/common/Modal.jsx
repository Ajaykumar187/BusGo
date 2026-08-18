import { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-light rounded-2xl shadow-2xl w-full max-w-md p-6"
      >
        <div className="flex justify-between items-center mb-4">

          {title && (
            <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
          )}

          <button
            onClick={onClose}
            className="text-ink/40 hover:text-ink text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>

        </div>

        {children}

      </div>
    </div>
  );
}

export default Modal;
