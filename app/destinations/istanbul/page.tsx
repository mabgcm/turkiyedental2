import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dental Treatment in Istanbul: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Istanbul.",
};

export default function IstanbulPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
      <SectionHeader
        variant="page"
        align="center"
        title="Dental Treatment in ISTANBUL: What Patients Should Know"
        highlight="ISTANBUL"
        subtitle="A clear, clinic-independent guide for patients from the USA and Canada researching dental care abroad."
      />


      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="City Overview"
          highlight="City"
          subtitle=""
        />
        <p className="text-gray-700 leading-relaxed">
          Istanbul sits at the crossroads of Europe and Asia, straddling the Bosphorus Strait. As
          Türkiye’s largest city, it blends historic districts, modern business hubs, and coastal
          views. Its scale and connectivity make it a major entry point for dental travelers seeking
          choice and convenience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dental tourism here is driven by a wide range of clinics, competitive pricing, and extensive
          flight options. The vibe is dynamic and busy, with both lively urban areas and calmer
          neighborhoods where patients often stay during recovery.
        </p>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/istanbul-old-town.jpg"
            alt="Istanbul cityscape at sunset"
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
          In reputable Istanbul clinics, standards align with national regulations, focusing on
          sterilization, traceable materials, and documented workflows. Dentists typically complete a
          5-year dental degree, with many pursuing postgraduate training or international
          certifications. Digital tools—CBCT imaging, intraoral scanners, and CAD/CAM milling—are
          commonly used for implants, crowns, and smile design.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Compared to the USA/Canada, many Istanbul clinics deliver value through lower operating
          costs while using recognized implant and ceramic brands. Quality varies by clinic, so
          verifying materials, lab partners, and clinician credentials remains essential.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Popular Treatments in Istanbul"
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
          Istanbul is preferred for these treatments due to wide clinician choice, lab capacity for
          complex work, and flexible scheduling for international patients.
        </p>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/istanbul-turkey.jpg"
            alt="Istanbul cityscape at sunset"
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
          title="Advantages of Choosing Istanbul"
          highlight="Advantages"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Large pool of clinics and specialists, offering varied materials and workflows.</li>
          <li>Two major airports (IST and SAW) with frequent one-stop flights from North America.</li>
          <li>Established dental labs experienced with international and full-arch cases.</li>
          <li>Accommodation options across budgets; quieter districts available for recovery.</li>
          <li>Access to historic sights and waterfront areas for light activities between appointments.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Things to Keep in Mind"
          highlight="Keep in Mind"
          subtitle=""
        />
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Traffic can be heavy; plan extra time for clinic visits.</li>
          <li>Quality varies—verify implant/crown brands, lab partners, and follow-up protocols.</li>
          <li>Busy seasons can affect appointment availability and hotel prices.</li>
          <li>Some areas are crowded; pick calmer neighborhoods if you prefer a quieter recovery.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Price Expectations (General Türkiye Averages)"
          highlight="(General Türkiye Averages)"
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
          <li>Airports: Istanbul Airport (IST) on the European side; Sabiha Gökçen (SAW) on the Asian side.</li>
          <li>Flights: One-stop routes from NYC, Toronto, Chicago, LA, Vancouver; durations ~10–15 hours.</li>
          <li>Hotels: Wide range; common patient areas include Beşiktaş, Şişli, Nişantaşı, Karaköy, and Kadıköy.</li>
          <li>Transport: Taxis, ride-share, metro, ferries; allow extra time for traffic to appointments.</li>
        </ul>
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/istanbul-travel.jpeg"
            alt="Istanbul cityscape at sunset"
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
          Tourist and medical areas are generally safe with standard precautions. Reputable clinics follow modern
          sterilization and cross-infection protocols and often provide English-speaking coordinators. Always ask for
          proof of material brands, sterilization routines, and post-care plans.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeader
          variant="section"
          align="center"
          title="Istanbul FAQs"
          highlight="FAQs"
          subtitle=""
        />
        <div className="space-y-3 text-gray-700">
          <div>
            <p className="font-semibold text-[#1b2a57]">How long should I stay for implants?</p>
            <p>Often 7–10 days for surgery and immediate checks; a follow-up visit months later for final crowns if using a two-stage plan.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Is English commonly spoken in clinics?</p>
            <p>Many coordinators and dentists in reputable clinics speak English; confirm this before scheduling.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Are prices fixed?</p>
            <p>Quotes are usually fixed once the plan is agreed. Clarify what is included—temporaries, scans, follow-ups, night guard.</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b2a57]">Is Istanbul safe for recovery?</p>
            <p>Most patients choose central but quieter districts; standard travel precautions apply, and clinics can advise on pharmacies and after-hours support.</p>
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
          Upload your x-rays, scans, and existing quotes. We’ll provide an unbiased review so you can decide confidently—clinic choice is always yours.
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
