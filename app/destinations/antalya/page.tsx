import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dental Treatment in Antalya: What Patients Should Know | TürkiyeDental",
  description:
    "Neutral, clinic-independent guidance for USA and Canada patients considering dental care in Antalya.",
};

export default function AntalyaPage() {
  return (
    <main className="bg-gray-50 text-brand-secondary">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Destinations</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Dental Treatment in Antalya: What Patients Should Know</h1>
            <p className="text-gray-700">
              A calm, clinic-independent guide for patients considering care in Türkiye’s Mediterranean resort city.
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
              src="/images/antalya-coast.jpg"
              alt="Antalya coastline"
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
            Antalya is a major resort city on Türkiye’s Mediterranean coast, known for beaches, historic old towns, and modern tourism infrastructure. It offers a relaxed recovery setting with easy access to hotels and seaside promenades.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dental travelers choose Antalya for its combination of clinic options, resort amenities, and calmer pace compared to larger metros. Many patients pair treatment with light coastal downtime between appointments.
          </p>
        </section>

        {/* Highlights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Why Patients Choose Antalya</h2>
          <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Why patients choose Antalya</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Resort environment with many hotel options suitable for recovery.</li>
              <li>International airport (AYT) with seasonal direct flights and frequent connections via Istanbul.</li>
              <li>Clinics and labs accustomed to serving dental tourists.</li>
              <li>Easy access to beaches and calmer districts for low-stress downtime.</li>
              <li>Tourist infrastructure (transfers, hotels, pharmacies) close to clinics.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-brand-secondary">Treatment quality &amp; standards</h3>
            <p className="text-gray-700 text-sm">
              Reputable Antalya clinics follow national sterilization and material traceability standards. Many use CBCT, intraoral scanners, and CAD/CAM milling for implants, crowns, and smile design.
            </p>
            <p className="text-gray-700 text-sm">
              Lower operating costs help keep pricing competitive while using recognized implant and ceramic brands. Verify materials, lab partners, and credentials.
            </p>
          </div>
          </div>
        </section>

        {/* Popular treatments + image */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Popular Treatments in Antalya</h2>
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
              Antalya suits patients seeking a resort setting, modern tourism services, and clinics experienced with international cases.
            </p>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/antalya-travel.jpeg"
              alt="Antalya harbor at sunset"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover object-[50%_60%]"
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
              <li>High season can raise hotel prices; book early for preferred areas.</li>
              <li>Clinic variety is smaller than Istanbul; verify availability and lab partners in advance.</li>
              <li>Resort areas can be busy in summer—choose quieter neighborhoods if you prefer less noise.</li>
              <li>Confirm materials, follow-up plans, and warranty details before committing.</li>
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

        {/* Safety */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-brand-secondary">Safety &amp; Patient Experience</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Tourist and medical areas in Antalya are generally safe with standard precautions. Reputable clinics follow modern sterilization and cross-infection protocols and often provide English-speaking coordinators. Ask for proof of material brands, sterilization routines, and post-care plans.
          </p>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Antalya FAQs</h2>
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
              <p>Pricing is broadly similar; some patients find hotel and local costs manageable, especially outside peak season.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Is Antalya suitable for recovery?</p>
              <p>The resort setting and beachside areas can be comfortable; choose lodging that matches your noise and activity preferences.</p>
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
