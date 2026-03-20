import { useEffect, useState } from "react";

export default function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`page ${visible ? "fade-in" : ""}`}>
      {children}
    </div>
  );
}