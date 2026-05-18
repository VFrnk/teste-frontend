import type SectionType from "@/types/sectionType";
import Section from "@/components/molecules/Section";
import Navbar from "@/components/organisms/Navbar";

interface HomeProps {
  sections: SectionType[];
}

export default function Home({ sections }: HomeProps) {
  return (
    <>
      <Navbar sections={sections} />

      <header className="flex flex-col px-12 md:px-32 py-8 gap-2 border-b-1 border-foreground/10">
        <div className="uppercase text-sm text-foreground/60">
          Techstore · 2026
        </div>
        <h1 className="text-3xl font-sans font-semibold tracking-tight">
          Sua Jornada Digital Começa Aqui!
        </h1>
        <h2 className="text-foreground/70">
          Tecnologia de ponta com o melhor custo-benefício do Brasil.
        </h2>
      </header>

      <main className="px-12 md:px-32 py-4 flex flex-col">
        {sections.map((section) => (
          <Section key={section.id} section={section}/>
        ))}
      </main>
    </>
  );
}