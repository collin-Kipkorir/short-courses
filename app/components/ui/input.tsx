// app/components/ui/input.tsx
import React from "react";

export const Input = ({ value, onChange, type, placeholder, className }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type: string, placeholder: string, className?: string }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};
