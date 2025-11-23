import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import CtaToStart from "@/components/CtaToStart";

export const metadata = {
  title: "Dental Treatment in Antalya: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Antalya.",
};

export default function AntalyaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
      <SectionHeader
        variant="page"
        align="center"
        title="Dental Treatment in ANTALYA: What Patients Should Know"
        highlight="ANTALYA"
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
          Antalya is a major resort city on Türkiye’s Mediterranean coast, known for beaches, historic
          old town areas, and modern tourism infrastructure. It offers a relaxed recovery setting with
          easy access to hotels and seaside promenades.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dental travelers choose Antalya for its combination of clinic options, resort amenities, and
          calmer pace compared to larger metros. Many patients pair treatment with light coastal
          downtime between appointments.
        </p>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/antalya-coast.jpg"
            alt="Antalya coastline"
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
          Reputable Antalya clinics follow national sterilization and material traceability standards.
          Dentists complete a 5-year dental degree, with many pursuing postgraduate courses or
          international certifications. Digital tools—CBCT imaging, intraoral scanners, and CAD/CAM
          milling—are commonly used for implants, crowns, and smile design.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Compared with the USA/Canada, lower operating costs allow competitive pricing while still
          using recognized implant and ceramic brands. Outcomes depend on the individual clinic, lab,
          and clinician experience, so verification remains important.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Popular Treatments in Antalya"
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
          Antalya is preferred by patients who want a resort setting, modern tourism services, and
          clinics experienced with international cases.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Advantages of Choosing Antalya"
          highlight="Advantages"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Resort environment with many hotel options suitable for recovery.</li>
          <li>International airport (AYT) with seasonal direct flights and frequent connections via Istanbul.</li>
          <li>Clinics and labs accustomed to serving dental tourists.</li>
          <li>Easy access to beaches and calmer districts for low-stress downtime.</li>
          <li>Tourist infrastructure (transfers, hotels, pharmacies) in close reach of clinics.</li>
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
          <li>High season can raise hotel prices; book early for preferred areas.</li>
          <li>Clinic variety is smaller than Istanbul; verify availability and lab partners in advance.</li>
          <li>Resort areas can be busy in summer—choose quieter neighborhoods if you prefer less noise.</li>
          <li>Confirm materials, follow-up plans, and warranty details before committing.</li>
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
          <li>Airport: Antalya Airport (AYT), ~20–40 minutes from many hotel districts.</li>
          <li>Flights: Seasonal directs from some hubs; common one-stop routes via Istanbul or European hubs (~12–16 hours total from North America).</li>
          <li>Hotels: Wide range from resort to budget; patients often stay in Lara, Konyaaltı, or Kaleiçi for access and amenities.</li>
          <li>Transport: Taxis, ride-share, trams/buses; resort shuttles common in high season.</li>
        </ul>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/antalya-travel.jpg"
            alt="Antalya harbor at sunset"
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
          Tourist and medical areas in Antalya are generally safe with standard precautions. Reputable
          clinics follow modern sterilization and cross-infection protocols and often provide
          English-speaking coordinators. Ask for proof of material brands, sterilization routines,
          and post-care plans.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Antalya FAQs"
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
            <p>Pricing is broadly similar; some patients find hotel and local costs manageable, especially outside peak season.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Is Antalya suitable for recovery?</p>
            <p>The resort setting and beachside areas can be comfortable for recovery; choose lodging that matches your noise and activity preferences.</p>
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
