import Link from "next/link";

import type SectionType from "@/types/sectionType";
import NavbarMenu from "@/components/molecules/NavbarMenu";

interface NavbarProps {
  sections: SectionType[];
}

export default function Navbar({ sections }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 px-12 md:px-32 py-2 flex justify-between items-center border-b-1 border-foreground/10 bg-background">

      <NavbarMenu sections={sections} />

      <div className="flex gap-4">
        <Link className="px-4 py-2 text-sm font-sans font-semibold rounded-md h-8 flex items-center bg-foreground hover:bg-foreground/80 text-background transition-all duration-500" href="/login">
          Entrar
        </Link>
        <Link className="px-4 py-2 text-sm font-sans font-semibold rounded-md h-8 flex items-center bg-background hover:bg-foreground/20 text-foreground border border-foreground/20 transition-all duration-500" href="/register">
          Cadastrar-se
        </Link>
      </div>

    </div>
  )
}