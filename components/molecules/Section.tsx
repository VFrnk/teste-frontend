interface SectionProps {
  id: string;
  title: string;
  content: string;
}

export default function Section({ title, content, id }: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-2">
      <h2 className="text-xl tracking-tight font-semibold">
        {title}
      </h2>
      <p className="text-lg text-foreground/80 font-mono tracking-wide">
        {content}
      </p>
    </section>
  );
}