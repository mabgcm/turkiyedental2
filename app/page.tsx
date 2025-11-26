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
    image: { src: "/images/full-mouth.jpg", alt: "Dental implants" },
    excerpt:
      "Clear answers on cost, safety, pain, and timelines so you can choose implants with confidence.",
  },
  {
    title: "Dental Crowns",
    href: "/treatments/dental-crowns",
    image: { src: "/images/preventive.jpg", alt: "Dental crowns" },
    excerpt:
      "When to crown, when not to, material choices (zirconia, porcelain, metal), and how to avoid overtreatment.",
  },
  {
    title: "Veneers",
    href: "/treatments/veneers",
    image: { src: "/images/veneers.png", alt: "Veneers" },
    excerpt:
      "Pros, downsides, costs, longevity, and whether veneers or more conservative options fit your smile goals.",
  },
  {
    title: "All-on-4",
    href: "/treatments/allon4",
    image: { src: "/images/allon4.jpeg", alt: "All-on-4 implants" },
    excerpt:
      "Full-arch fixed solutions: indications, travel timelines, provisional teeth, and long-term maintenance.",
  },
  {
    title: "All-on-6",
    href: "/treatments/allon6",
    image: { src: "/images/allon6.jpeg", alt: "All-on-6 implants" },
    excerpt:
      "Compare All-on-6 to other full-arch options, understand costs, healing, and how to read a treatment quote.",
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
    <main className="relative min-h-screen overflow-hidden bg-brand-surface">
      <HeroSection />
      <div className="flex justify-center items-center w-full mt-2">
        <CtaToStart />
      </div>
      <section className="max-w-6xl mx-auto px-4 py-14 space-y-6">
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
      <section className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        <SectionHeader
          variant="section"
          align="center"
          title="Trusted Guidance, Proven Expertise"
          highlight="Proven Expertise"
          subtitleColor="text-[#000000]"
          subtitle="Patient-first advice, clinic-independent reviews, and clarity you can rely on."
        />
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
          <WhyUs />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 space-y-6">
          <div className="text-center">
            <SectionHeader
              variant="section"
              align="center"
              title="Questions? We’ve Got Answers."
              highlight="Questions?"
              subtitleColor="text-[#000000]"
              subtitle=""
            />
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>
    </main>
  );
}
