import Link from "next/link";
import type SectionType from "@/types/section";

interface NavbarMenuProps {
  sections: SectionType[];
}

export default function NavbarMenu({ sections }: NavbarMenuProps) {
  return (
    <nav aria-label="Seções da página">
      <ul className="flex gap-4 font-sans">
        {sections.map((section) => (
          <li
            key={section.id}
            className="border-b-2 border-transparent hover:border-inherit transition-all duration-300"
          >
            <Link
              href={`#${section.id}`}
              className="text-sm font-sans font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}