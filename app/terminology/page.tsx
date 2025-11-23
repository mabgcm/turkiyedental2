import Link from "next/link";

export const metadata = {
  title: "Dental Terminology | TürkiyeDental",
  description: "Simple explanations of common terms used across TürkiyeDental treatment guides.",
};

const terms: Record<string, { term: string; meaning: string }[]> = {
  A: [
    { term: "Abutment", meaning: "Connector piece that joins an implant to the crown or bridge on top." },
    { term: "All-on-4", meaning: "Full-arch fixed bridge supported by four implants." },
    { term: "All-on-6", meaning: "Full-arch fixed bridge supported by six implants." },
  ],
  B: [
    { term: "Bone graft", meaning: "Material added to build or thicken jawbone before or during implants." },
    { term: "Bridge", meaning: "Linked crowns that replace missing teeth by attaching to neighboring teeth or implants." },
    { term: "Bruxism", meaning: "Habitual grinding or clenching of teeth, often during sleep." },
  ],
  C: [
    { term: "CBCT", meaning: "3D dental scan (cone beam CT) that shows bone, teeth, and sinuses." },
    { term: "Crown", meaning: "Cap that covers and protects a tooth or attaches to an implant." },
    { term: "Framework", meaning: "Support structure under a full-arch bridge, often titanium or zirconia." },
    { term: "Composite", meaning: "Tooth-colored resin used for fillings or some veneers." },
  ],
  F: [
    { term: "Full-arch bridge", meaning: "A fixed set of teeth that replaces an entire jaw using implants for support." },
  ],
  E: [
    { term: "Enamel", meaning: "The hard outer layer of a tooth that protects the inner dentin and pulp." },
  ],
  I: [
    { term: "IV sedation", meaning: "Medicine given through a vein to help you relax or sleep lightly during treatment." },
  ],
  L: [
    { term: "Lithium disilicate", meaning: "Tooth-colored ceramic often branded as e.max; strong and aesthetic." },
  ],
  N: [
    { term: "Night guard", meaning: "Custom mouthguard worn during sleep to protect teeth or implants from grinding." },
  ],
  O: [
    { term: "OPG", meaning: "Panoramic 2D x-ray that shows all teeth and jaws in one image." },
    { term: "Osseointegration", meaning: "Process where bone bonds to an implant surface during healing." },
    { term: "Overdenture", meaning: "Removable denture that snaps onto implants for extra stability." },
  ],
  P: [
    { term: "Porcelain", meaning: "Tooth-colored ceramic used for veneers and crowns." },
    { term: "Provisional", meaning: "Temporary tooth or bridge worn while finals are being made." },
    { term: "Porcelain-fused-to-metal (PFM)", meaning: "Crown or bridge with a metal base covered by porcelain for tooth color." },
    { term: "Peri-implantitis", meaning: "Inflammation and bone loss around an implant caused by bacteria." },
  ],
  S: [
    { term: "Sedation", meaning: "Medication used to help patients relax during dental procedures." },
    { term: "Sinus lift", meaning: "Procedure to add bone below the sinus for upper back implants." },
  ],
  T: [
    { term: "Titanium", meaning: "Strong, biocompatible metal used for implants and some bridge frameworks." },
  ],
  V: [
    { term: "Veneer", meaning: "Thin shell on the front of a tooth to change shape or color." },
  ],
  Z: [
    { term: "Zirconia", meaning: "Very strong ceramic used for crowns and bridges." },
  ],
};

export default function TerminologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-10">
      <header className="space-y-3">
        <p className="uppercase tracking-[0.18em] text-xs md:text-sm text-[#1b76d1] font-semibold">
          Terminology
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#14233d]">Quick Dental Glossary</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Tap a term below to jump to the letter section and get a simple explanation.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {Object.keys(terms).sort().map((letter) => (
          <Link
            key={letter}
            href={`#${letter}`}
            className="inline-flex items-center justify-center rounded-full border border-[#1b76d1]/30 px-3 py-1 text-sm font-semibold text-[#1b76d1] hover:bg-[#e9f4ff] transition"
          >
            {letter}
          </Link>
        ))}
      </div>

      <div className="space-y-8">
        {Object.keys(terms).sort().map((letter) => (
          <section key={letter} id={letter} className="space-y-3">
            <h2 className="text-2xl font-bold text-[#14233d]">{letter}</h2>
            <ul className="space-y-2 text-gray-700">
              {terms[letter].map((item) => (
                <li key={item.term}>
                  <span className="font-semibold text-[#1b2a57]">{item.term}:</span>{" "}
                  <span>{item.meaning}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
