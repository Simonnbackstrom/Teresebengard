import Hero from "@/components/Hero";
import Tjanster from "@/components/Tjanster";
import Boken from "@/components/Boken";
import Citat from "@/components/Citat";
import OmPreview from "@/components/OmPreview";
import KontaktCTA from "@/components/KontaktCTA";
import MellanRum from "@/components/MellanRum";
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
      <MellanRum />
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
