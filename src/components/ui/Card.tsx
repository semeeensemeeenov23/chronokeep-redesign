interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-dark-100 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl ${className}`}>
      {children}
    </div>
  );
};