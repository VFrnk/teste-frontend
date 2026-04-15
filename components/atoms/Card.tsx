interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({children, className}: CardProps) {
  const baseStyle = "flex flex-col bg-card px-6 py-4 border border-white/20 rounded-xl";

  return (
    <div className={`${baseStyle} ${className}`}>
      {children}
    </div>
  );
}