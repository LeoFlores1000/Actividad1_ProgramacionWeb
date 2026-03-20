import { useEffect } from "react";

export default function Toast({ mensaje, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="toast">
      <span>✅</span>
      <span>{mensaje}</span>
    </div>
  );
}