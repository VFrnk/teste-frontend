import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({className, ...props }: InputProps) {
  const baseStyle = "focus:outline focus:outline-foreground/60 p-3 py-1 h-9 w-full rounded-md border border-white/20";
  
  return (
    <input 
      className={`${baseStyle} ${className}`} 
      {...props} />
  )
}