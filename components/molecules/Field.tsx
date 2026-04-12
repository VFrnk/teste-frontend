import { useFormContext } from "react-hook-form";

import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";

interface FieldProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
}

export default function Field({id, name, placeholder = '', type = 'text' }: FieldProps) {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div>
      <Label 
        id={id}
        name={name}/>
      
      <Input 
        id={id} 
        placeholder={placeholder} 
        type={type} 
        {...register(id)}/>
      
      {errors[id] && 
      <span 
        className="text-red-500 text-sm">
        {errors[id].message as string}
      </span>}
    </div>
  )
}