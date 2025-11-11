import CtaToStart from "@/components/CtaToStart";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
// e.g. in app/page.tsx or any section component
import TreatmentCards, { TreatmentItem } from "@/components/TreatmentCards";
import WhyUs from "@/components/WhyUs";
import FAQ, { FaqItem } from "@/components/FAQ";


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

const faqItems: FaqItem[] = [
  {
    q: "Are you a clinic?",
    a: "No. TürkiyeDental is clinic-independent. We provide education and second opinions so you can decide confidently.",
  },
  {
    q: "Can you help me compare two treatment plans?",
    a: "Yes. We review your x-rays, photos, and quotes to explain differences in materials, timelines, risks, and total cost.",
  },
  {
    q: "Do you work only with clinics in Türkiye?",
    a: "We can review cases for any location. When referrals are requested, we point to verified providers in Türkiye and abroad.",
  },
  {
    q: "How much does a second opinion cost?",
    a: "We offer a free initial review and transparent pricing for more detailed case assessments when needed.",
  },
  {
    q: "What files should I send?",
    a: "OPG or CBCT (if available), recent photos, and any treatment quotes. More context helps us give clearer guidance.",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "2px" }}>
        <CtaToStart />
      </div>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionHeader
          variant="section"
          align="center"
          title="Discover the Right Treatment for Your Smile"
          highlight="Right Treatment"
          subtitleColor="text-[#000000]"
          subtitle="Learn about key dental treatments and make informed choices with expert-backed insights."
        />
        <TreatmentCards items={treatments} className="py-1 md:py-1" />
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionHeader
          variant="section"
          align="center"
          title="Trusted Guidance, Proven Expertise"
          highlight="Proven Expertise"
          subtitleColor="text-[#000000]"
          subtitle="Patient-first advice, clinic-independent reviews, and clarity you can rely on."
        />
        <WhyUs />
        <div className="py-16">
          <SectionHeader
            variant="section"
            align="center"
            title="Questions? We’ve Got Answers."
            highlight="Questions?"
            subtitleColor="text-[#000000]"
            subtitle=""
          />
          <FAQ items={faqItems} />
        </div>
      </section>
    </main>
  );
}