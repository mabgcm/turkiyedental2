import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import CtaToStart from "@/components/CtaToStart";

export const metadata = {
  title: "Dental Treatment in Izmir: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Izmir.",
};

export default function IzmirPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
      <SectionHeader
        variant="page"
        align="center"
        title="Dental Treatment in IZMIR: What Patients Should Know"
        highlight="IZMIR"
        subtitle="A clear, clinic-independent guide for patients from the USA and Canada researching dental care abroad."
      />
      <div className="flex justify-center">
        <CtaToStart />
      </div>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="City Overview"
          highlight="Overview"
          subtitle=""
        />
        <p className="text-gray-700 leading-relaxed">
          Izmir is a major Aegean coastal city in western Türkiye. Known for its seaside promenades
          and nearby resort towns, it offers a calmer pace than Istanbul while still providing modern
          amenities and medical services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dental travelers choose Izmir for its balance of clinic options, coastal setting, and
          relaxed recovery environment. The vibe is more laid-back, with walkable waterfront areas and
          easy access to quieter neighborhoods.
        </p>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/izmir-coast.jpg"
            alt="Izmir seaside promenade"
            fill
            sizes="(min-width:1024px) 70vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Treatment Quality & Dentist Qualifications"
          highlight="Quality"
          subtitle=""
        />
        <p className="text-gray-700 leading-relaxed">
          Reputable Izmir clinics follow Türkiye’s sterilization and material traceability standards.
          Dentists complete a 5-year dental degree and many add postgraduate training or
          internationally recognized courses. Digital tools—CBCT imaging, intraoral scanning, CAD/CAM
          milling—are common for implants, crowns, and smile design.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Compared with the USA/Canada, lower operating costs help clinics offer value while still
          using recognized implant and ceramic brands. As always, outcomes depend on the individual
          clinic, lab partner, and clinician experience.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Popular Treatments in Izmir"
          highlight="Treatments"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Dental implants (single and multiple), including All-on-4 / All-on-6 full-arch cases.</li>
          <li>Crowns and bridges (zirconia, lithium disilicate, porcelain-fused-to-metal).</li>
          <li>Veneers and smile makeovers with digital smile design.</li>
          <li>Full-mouth rehabilitations combining implants, crowns, and bite correction.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Izmir is preferred by patients who want experienced clinicians and labs in a calmer coastal
          setting, with easier navigation than Türkiye’s largest cities.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Advantages of Choosing Izmir"
          highlight="Advantages"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Coastal, relaxed environment that many find comfortable for recovery.</li>
          <li>Range of clinics and labs experienced with international cases.</li>
          <li>Direct access to resort areas (Çeşme, Alaçatı) for light downtime after treatment.</li>
          <li>Airport (ADB) close to the city; shorter transfers compared to larger metros.</li>
          <li>Walkable waterfront districts and quieter neighborhoods to stay in.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Things to Keep in Mind"
          highlight="Honest Notes"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Clinic choice is smaller than Istanbul, so verify availability and lab partners early.</li>
          <li>Summer tourism can affect hotel prices in nearby resort areas.</li>
          <li>Some neighborhoods are very busy; choose lodging that suits your desired noise level.</li>
          <li>Quality varies—confirm implant/crown brands, maintenance plans, and follow-up protocols.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Price Expectations (General Türkiye Averages)"
          highlight="Pricing"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Single implant (with crown): ~USD 900–1,500 per tooth.</li>
          <li>Crown (zirconia/ceramic): ~USD 250–500 per tooth.</li>
          <li>All-on-4 (per arch): ~USD 7,000–12,000.</li>
        </ul>
        <p className="text-gray-600 text-sm">
          Actual prices vary by clinic, case complexity, and materials.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Travel & Logistics"
          highlight="Travel"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Airport: Izmir Adnan Menderes (ADB), ~20–30 minutes from many city districts.</li>
          <li>Flights: Typically one-stop from North America via Istanbul or European hubs; durations ~12–16 hours.</li>
          <li>Hotels: Options from budget to upscale; common patient areas include Alsancak, Konak, Karşıyaka, and Bornova.</li>
          <li>Transport: Taxis, ride-share, metro, ferries; traffic is lighter than Istanbul but plan for peak times.</li>
        </ul>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/izmir-travel.jpg"
            alt="Izmir waterfront at sunset"
            fill
            sizes="(min-width:1024px) 70vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Safety & Patient Experience"
          highlight="Safety"
          subtitle=""
        />
        <p className="text-gray-700 leading-relaxed">
          Tourist and medical areas in Izmir are generally safe with standard precautions. Reputable
          clinics follow modern sterilization and cross-infection protocols and often provide
          English-speaking coordinators. Ask for proof of material brands, sterilization routines,
          and post-care plans.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="left"
          title="Izmir FAQs"
          highlight="FAQs"
          subtitle=""
        />
        <div className="space-y-3 text-gray-700">
          <div>
            <p className="font-semibold text-[#1b2a57]">How long should I stay for implants?</p>
            <p>Often 7–10 days for surgery and immediate checks; a follow-up visit months later for final crowns if using a two-stage plan.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Is English spoken in clinics?</p>
            <p>Many coordinators and dentists in reputable clinics speak English; confirm before scheduling.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Are costs different from Istanbul?</p>
            <p>Pricing is broadly similar; some patients find accommodation and local costs slightly lower in Izmir.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Is Izmir suitable for recovery?</p>
            <p>The coastal setting and calmer pace suit many patients; choose lodging near the waterfront or quieter districts if you prefer less noise.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Do I need a companion?</p>
            <p>For sedation cases, a companion or arranged transport is recommended. Some clinics can coordinate transfers; confirm in advance.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3 text-center">
        <SectionHeader
          variant="section"
          align="center"
          title="Ready for a Second Opinion?"
          highlight="Second Opinion"
          subtitle=""
        />
        <p className="text-gray-700">
          Upload your x-rays, scans, and existing quotes. We’ll provide an unbiased review so you can
          decide confidently—clinic choice is always yours.
        </p>
        <Link
          href="/start"
          className="inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-[#1bb5a9] transition"
        >
          Start Your Free, Clinic-Independent Review
        </Link>
      </section>
    </main>
  );
}
