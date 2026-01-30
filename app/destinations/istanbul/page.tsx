import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dental Treatment in Istanbul: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Istanbul.",
};

export default function IstanbulPage() {
  return (
    <main className="bg-gray-50 text-brand-secondary">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Destinations</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Dental Treatment in Istanbul: What Patients Should Know</h1>
            <p className="text-gray-700">
              A clear, clinic-independent guide for international patients researching dental care in Türkiye’s largest city.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Upload Photos &amp; X-Rays
              </Link>
              <Link
                href="/guides/travel"
                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
              >
                Plan your trip
              </Link>
            </div>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/istanbul-old-town.jpg"
              alt="Istanbul cityscape at sunset"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-14">
        {/* Overview */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">City Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Istanbul sits at the crossroads of Europe and Asia, blending historic districts, modern hubs, and coastal views. Its scale and connectivity make it a major entry point for dental travelers seeking choice and convenience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dental tourism here is driven by a wide range of clinics, competitive pricing, and extensive flight options. You’ll find lively urban areas and calmer neighborhoods where patients often stay during recovery.
          </p>
        </section>

        {/* Highlights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Why Patients Choose Istanbul</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Reasons patients choose Istanbul</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Large pool of clinics and specialists with varied workflows.</li>
              <li>Two major airports (IST, SAW) and frequent one-stop flights from North America.</li>
              <li>Established dental labs experienced with international and full-arch cases.</li>
              <li>Accommodation options across budgets; quieter districts available for recovery.</li>
              <li>Access to historic sights and waterfront areas for light activities.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Treatment quality &amp; standards</h3>
            <p className="text-gray-700 text-sm">
              Reputable clinics follow national regulations on sterilization, traceable materials, and documented workflows. Many use CBCT imaging, intraoral scanners, and CAD/CAM milling for implants, crowns, and smile design.
            </p>
            <p className="text-gray-700 text-sm">
              Costs are often lower than USA/Canada while using recognized brands. Quality varies by clinic—verify materials, lab partners, and credentials.
            </p>
          </div>
          </div>
        </section>

        {/* Popular treatments + image */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Popular Treatments in Istanbul</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Popular treatments</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Dental implants (single/multiple), All-on-4 / All-on-6 full-arch cases.</li>
              <li>Crowns and bridges (zirconia, lithium disilicate, porcelain-fused-to-metal).</li>
              <li>Veneers and smile makeovers with digital smile design.</li>
              <li>Full-mouth rehabilitations combining implants, crowns, and bite correction.</li>
            </ul>
            <p className="text-gray-700 text-sm">
              Istanbul is preferred for wide clinician choice, lab capacity for complex work, and flexible scheduling for international patients.
            </p>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/istanbul-turkey.jpg"
              alt="Istanbul city skyline"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          </div>
        </section>

        {/* Things to know & Pricing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Practical Notes &amp; Pricing</h2>
          <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Things to keep in mind</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Traffic can be heavy; plan extra time for clinic visits.</li>
              <li>Quality varies—verify implant/crown brands, lab partners, and follow-up protocols.</li>
              <li>Busy seasons can affect appointment availability and hotel prices.</li>
              <li>Choose calmer neighborhoods if you prefer a quieter recovery.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Price expectations (Türkiye averages)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Single implant (with crown): ~USD 900–1,500 per tooth.</li>
              <li>Crown (zirconia/ceramic): ~USD 250–500 per tooth.</li>
              <li>All-on-4 (per arch): ~USD 7,000–12,000.</li>
            </ul>
            <p className="text-gray-600 text-xs">Actual prices vary by clinic, case complexity, and materials.</p>
          </div>
          </div>
        </section>

        {/* Travel & logistics */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Travel &amp; Logistics</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Travel &amp; logistics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Airports: IST (European side) and SAW (Asian side).</li>
              <li>Flights: One-stop routes from major North American cities; ~10–15 hours total.</li>
              <li>Hotels: Popular areas include Beşiktaş, Şişli, Nişantaşı, Karaköy, and Kadıköy.</li>
              <li>Transport: Taxis, ride-share, metro, ferries—allow extra time for traffic.</li>
            </ul>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/istanbul-travel.jpeg"
              alt="Istanbul waterfront"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          </div>
        </section>

        {/* Safety */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-brand-secondary">Safety &amp; Patient Experience</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Tourist and medical areas are generally safe with standard precautions. Reputable clinics follow modern sterilization and cross-infection protocols and often provide English-speaking coordinators. Always ask for proof of material brands, sterilization routines, and post-care plans.
          </p>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Istanbul FAQs</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <div>
              <p className="font-semibold text-brand-secondary">How long should I stay for implants?</p>
              <p>Often 7–10 days for surgery and checks; a follow-up visit months later for final crowns if two-stage.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Is English commonly spoken in clinics?</p>
              <p>Many coordinators and dentists in reputable clinics speak English; confirm this before scheduling.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Are prices fixed?</p>
              <p>Quotes are usually fixed once the plan is agreed. Clarify inclusions—temporaries, scans, follow-ups, night guard.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Is Istanbul safe for recovery?</p>
              <p>Most patients choose central but quieter districts; clinics can advise on pharmacies and after-hours support.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Do I need a companion?</p>
              <p>For sedation cases, a companion or arranged transport is recommended. Some clinics can coordinate transfers.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-600 text-white rounded-2xl shadow-sm p-6 md:p-8 space-y-3 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Ready for a clinic-independent review?</h3>
          <p className="text-sm text-teal-50">
            Upload your x-rays, scans, and quotes. We’ll provide an unbiased review so you can decide confidently—clinic choice is always yours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-teal-700 shadow-sm hover:bg-teal-50 transition"
            >
              Start Your Review
            </Link>
            <Link
              href="/guides/travel"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Plan your trip
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
