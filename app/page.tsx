import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
// e.g. in app/page.tsx or any section component
import TreatmentCards, { TreatmentItem } from "@/components/TreatmentCards";

const treatments: TreatmentItem[] = [
  {
    title: "Dental Implants",
    href: "/treatments/dental-implants",
    image: { src: "/images/preventive.jpg", alt: "Dental implants" },
    excerpt:
      "Considering an implant? We review bone quality, materials, healing time and alternatives so you decide with confidence.",
  },
  {
    title: "Crowns & Bridges",
    href: "/treatments/crowns-bridges",
    image: { src: "/images/full-mouth.jpg", alt: "Crowns and bridges" },
    excerpt:
      "Zirconia or e.max? Single crown or bridge? We explain options, lab quality, and long-term maintenance.",
  },
  {
    title: "Veneers / Smile Makeover",
    href: "/treatments/veneers-smile",
    image: { src: "/images/smile.jpeg", alt: "Veneers" },
    excerpt:
      "Do you really need veneers? We compare minimally invasive options like aligners, bonding and whitening.",
  },
  {
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    image: { src: "/images/preventive.jpg", alt: "Teeth whitening" },
    excerpt:
      "Learn about in-office vs home kits, sensitivity risk, and when whitening is (or isn’t) a good idea.",
  },
  {
    title: "Full-Arch / All-on-4",
    href: "/treatments/full-arch-all-on-4",
    image: { src: "/images/full-mouth.jpg", alt: "All-on-4" },
    excerpt:
      "Big decision, big value in a second opinion. We review plan, implants/abutments, provisional wear, travel timing and costs.",
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
        <TreatmentCards items={treatments} className="py-1 md:py-1" />
      </section>
    </main>
  );
}