import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

export default function Button({children, className, ...props} : ButtonProps) {
  const baseStyle = "bg-white/20 rounded-lg font-bold h-9 w-2/3 self-center hover:bg-white/30 active:scale-95 transition-all";

  return (
    <button 
      className={`${baseStyle} ${className}`}
      {...props}>
      {children}
    </button>
  )
}