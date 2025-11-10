import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionHeader
          variant="section"
          align="center"
          title="How We Work"
          highlight="How"
          subtitleColor="text-[#3FB8FF]"
          subtitle="We review your case, provide second opinions, and connect you with trusted clinicians."
        />
        {/* Section content */}
      </section>
    </main>
  );
}