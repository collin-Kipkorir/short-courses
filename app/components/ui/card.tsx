// app/components/ui/card.tsx
export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white shadow-lg rounded-lg ${className}`}>{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);
