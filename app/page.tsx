import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import TreatmentCards, { TreatmentItem } from "@/components/TreatmentCards";

const treatments: TreatmentItem[] = [
  {
    title: "Full Mouth Implant",
    excerpt:
      "Achieve a complete smile transformation with our full-arch implant solutions—designed for function, comfort, and a natural look.",
    href: "/treatments/full-mouth-implant",
    image: { src: "/images/full-mouth.jpg", alt: "Full mouth implant" },
  },
  {
    title: "Non-Invasive Smile Aesthetics",
    excerpt:
      "Explore minimally invasive options tailored to your case. We clarify when veneers, aligners, or other options make sense.",
    href: "/treatments/smile-aesthetics",
    image: { src: "/images/treatments/smile-aesthetics.jpg", alt: "Smile aesthetics" },
  },
  {
    title: "Preventive Dental Care",
    excerpt:
      "Focus on long-term oral health: gum care, bite stability, and maintenance plans that protect your investment.",
    href: "/treatments/preventive-care",
    image: { src: "/images/treatments/preventive.jpg", alt: "Preventive dental care" },
  },
];

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
          subtitleColor="text-[#000000]"
          subtitle="We review your case, provide second opinions, and connect you with trusted clinicians."
        />
        <TreatmentCards items={treatments} className="py-10 md:py-14" />
      </section>
    </main>
  );
}