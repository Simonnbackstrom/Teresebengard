import Hero from "@/components/Hero";
import Tjanster from "@/components/Tjanster";
import Boken from "@/components/Boken";
import Citat from "@/components/Citat";
import OmPreview from "@/components/OmPreview";
import KontaktCTA from "@/components/KontaktCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <Tjanster />
      </ScrollReveal>
      <ScrollReveal>
        <Boken />
      </ScrollReveal>
      <ScrollReveal>
        <Citat />
      </ScrollReveal>
      <ScrollReveal>
        <OmPreview />
      </ScrollReveal>
      <ScrollReveal>
        <KontaktCTA />
      </ScrollReveal>
    </main>
  );
}
