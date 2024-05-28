import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string; 
};

const Button = ({ children, size = "medium",className }: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-lg px-8 py-5",
  };

  return (
    <button
      className={twMerge(
        " bg-yellowngo text-white rounded-full px-3 py-1",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
