import SectionType from "@/types/sectionType";

interface SectionProps {
  section: SectionType;
}

export default function Section({ section }: SectionProps) {
  const { id, title, label, content } = section;
  
  return (
    <section id={id} className="flex gap-8 py-8 border-b border-foreground/10 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 min-w-[120px] pt-1 shrink-0">
        {label}
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-foreground/60 font-mono leading-relaxed">{content}</p>
      </div>
    </section>
  );
}