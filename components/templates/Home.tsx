import type SectionType from "@/types/section";
import Section from "@/components/molecules/Section";
import Navbar from "@/components/organisms/Navbar";

interface HomeProps {
  sections: SectionType[];
}

export default function Home({ sections }: HomeProps) {
  return (
    <>
      <Navbar sections={sections} />

      <header className="px-12 md:px-32 py-8">
        <h1 className="text-3xl font-sans font-semibold tracking-tight">
          Bem-vindo à TechStore: Sua Jornada Digital Começa Aqui!
        </h1>
      </header>

      <main className="px-12 md:px-32 py-4 flex flex-col gap-24">
        {sections.map((section) => (
          <Section
            key={section.id}
            content={section.content}
            id={section.id}
            title={section.title}
          />
        ))}
      </main>
    </>
  );
}