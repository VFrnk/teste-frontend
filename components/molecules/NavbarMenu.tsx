import Link from "next/link";
import type SectionType from "@/types/sectionType";

interface NavbarMenuProps {
  sections: SectionType[];
}

export default function NavbarMenu({ sections }: NavbarMenuProps) {
  return (
    <nav aria-label="Seções da página">
      <ul className="flex gap-4 font-sans">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="text-sm font-sans font-semibold tracking-tight underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}