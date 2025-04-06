// app/components/ui/button.tsx
import React from "react";

export const Button = ({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};
