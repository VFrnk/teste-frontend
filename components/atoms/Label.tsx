interface LabelProps {
  id: string;
  name: string;
}

export default function Label( { id, name }: LabelProps) {
  return (
    <label 
      className="tracking-wide block font-semibold text-sm" 
      htmlFor={id}>
      {name}
    </label>
  )
}