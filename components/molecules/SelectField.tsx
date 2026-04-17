import { useFormContext } from "react-hook-form";

import Label from "@/components/atoms/Label";

interface FieldProps {
  id: string;
  name: string;
  children: React.ReactNode;
}

export default function Field({ id, name, children }: FieldProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <Label
        id={id}
        name={name} />

      <select id={id} {...register(id)} name={name}>
        {children}
      </select>

      {errors[id] &&
        <span
          className="text-red-500 text-sm">
          {errors[id].message as string}
        </span>}
    </div>
  )
}