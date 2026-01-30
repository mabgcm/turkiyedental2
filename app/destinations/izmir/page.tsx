import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dental Treatment in Izmir: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Izmir.",
};

export default function IzmirPage() {
  return (
    <main className="bg-gray-50 text-brand-secondary">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Destinations</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Dental Treatment in Izmir: What Patients Should Know</h1>
            <p className="text-gray-700">
              A calm, clinic-independent guide for patients researching care in Türkiye’s Aegean coastal city.
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
              src="/images/izmir-coast.jpg"
              alt="Izmir seaside promenade"
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
            Izmir is a major Aegean coastal city with seaside promenades and nearby resort towns. It offers a calmer pace than Istanbul while still providing modern amenities and medical services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dental travelers choose Izmir for its balance of clinic options, coastal setting, and relaxed recovery environment. The vibe is laid-back, with walkable waterfront areas and quieter neighborhoods.
          </p>
        </section>

        {/* Highlights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Why Patients Choose Izmir</h2>
          <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Why patients choose Izmir</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Coastal, relaxed environment many find comfortable for recovery.</li>
              <li>Range of clinics and labs experienced with international cases.</li>
              <li>Access to nearby resorts (Çeşme, Alaçatı) for light downtime.</li>
              <li>Airport (ADB) close to the city; shorter transfers than larger metros.</li>
              <li>Walkable waterfront districts and quieter neighborhoods.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Treatment quality &amp; standards</h3>
            <p className="text-gray-700 text-sm">
              Reputable Izmir clinics follow Türkiye’s sterilization and material traceability standards. Many use CBCT, intraoral scanning, and CAD/CAM milling for implants, crowns, and smile design.
            </p>
            <p className="text-gray-700 text-sm">
              Lower operating costs help clinics offer value while using recognized brands. Outcomes depend on the clinic, lab partner, and clinician experience.
            </p>
          </div>
          </div>
        </section>

        {/* Popular treatments + image */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Popular Treatments in Izmir</h2>
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
              Izmir suits patients wanting experienced clinicians and labs in a calmer coastal setting, with easier navigation than Türkiye’s largest cities.
            </p>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/izmir-travel.jpg"
              alt="Izmir waterfront"
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
              <li>Clinic choice is smaller than Istanbul; verify availability and lab partners early.</li>
              <li>Summer tourism can affect hotel prices in nearby resort areas.</li>
              <li>Some neighborhoods are busy; choose lodging that suits your noise preference.</li>
              <li>Confirm implant/crown brands, maintenance plans, and follow-up protocols.</li>
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

        {/* Travel & safety */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Travel, Logistics &amp; Safety</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Travel &amp; logistics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Airport: Izmir Adnan Menderes (ADB), ~20–30 minutes from many districts.</li>
              <li>Flights: Typically one-stop from North America via Istanbul/Europe; ~12–16 hours total.</li>
              <li>Hotels: Areas include Alsancak, Konak, Karşıyaka, and Bornova.</li>
              <li>Transport: Taxis, ride-share, metro, ferries; traffic lighter than Istanbul, plan for peak times.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Safety &amp; patient experience</h3>
            <p className="text-gray-700 text-sm">
              Tourist and medical areas are generally safe with standard precautions. Reputable clinics follow modern sterilization protocols and often provide English-speaking coordinators. Ask for proof of material brands, sterilization routines, and post-care plans.
            </p>
          </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Izmir FAQs</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <div>
              <p className="font-semibold text-brand-secondary">How long should I stay for implants?</p>
              <p>Often 7–10 days for surgery and immediate checks; a follow-up visit months later for final crowns if two-stage.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Is English spoken in clinics?</p>
              <p>Many coordinators and dentists in reputable clinics speak English; confirm before scheduling.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Are costs different from Istanbul?</p>
              <p>Pricing is broadly similar; some patients find accommodation and local costs slightly lower in Izmir.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Is Izmir suitable for recovery?</p>
              <p>The coastal setting and calmer pace suit many patients; choose lodging near the waterfront or quieter districts if you prefer less noise.</p>
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
