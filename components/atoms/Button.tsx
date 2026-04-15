import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  variant: "primary" | "secondary",
}

export default function Button({children, className, variant, ...props} : ButtonProps) {
  const variantStyles = {
    primary: "bg-white/20 hover:bg-white/30",
    secondary: "bg-white/20 hover:bg-red-800",
  }

  const baseStyle = "rounded-lg font-bold active:scale-95 transition-all";

  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  )
}