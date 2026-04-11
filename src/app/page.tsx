import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Approche from "@/components/sections/Approche";
import Temoignages from "@/components/sections/Temoignages";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />         {/* gère ses propres vagues Hero→Stats et Stats→Services */}
        <Services />
        <WaveDivider from="#162618" to="#1F3828" index={0} />
        <Approche />
        <WaveDivider from="#1F3828" to="#0D1C14" index={1} />
        <Temoignages />
        <WaveDivider from="#0D1C14" to="#243D2A" index={2} />
        <FAQ />
        <WaveDivider from="#243D2A" to="#111E16" index={3} />
        <Contact />
        <WaveDivider from="#111E16" to="#070F09" index={4} />
      </main>
      <Footer />
    </>
  );
}
