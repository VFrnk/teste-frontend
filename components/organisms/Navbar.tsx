import Link from "next/link";

import type SectionType from "@/types/sectionType";
import NavbarMenu from "@/components/molecules/NavbarMenu";

interface NavbarProps {
  sections: SectionType[];
}

export default function Navbar({ sections }: NavbarProps) {
  return (
    <div className="px-12 md:px-32 py-2 flex justify-between items-center">

      <NavbarMenu sections={sections} />

      <div className="flex gap-4">
        <Link className="px-4 py-2 text-sm font-sans font-semibold rounded-md h-8 flex items-center bg-foreground text-background" href="/login">
          Entrar
        </Link>
        <Link className="px-4 py-2 text-sm font-sans font-semibold rounded-md h-8 flex items-center bg-background text-foreground border border-[var(--border)]" href="/register">
          Cadastrar-se
        </Link>
      </div>

    </div>
  )
}