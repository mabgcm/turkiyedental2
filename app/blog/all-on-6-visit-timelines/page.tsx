import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type TocItem = {
    id: string;
    title: string;
    children?: { id: string; title: string }[];
};

const sections: TocItem[] = [
    { id: "introduction", title: "Introduction" },
    { id: "overview", title: "Understanding All-on-6: A Brief Overview" },
    {
        id: "multiple-visits",
        title: "Why All-on-6 Treatment Requires Multiple Visits",
        children: [
            { id: "osseointegration", title: "Osseointegration: The Non-Negotiable Healing Period" },
            { id: "temporary-permanent", title: "Temporary vs. Permanent Prosthetics: Two Distinct Phases" },
            { id: "bite-adjustment", title: "Bite Adjustment and Aesthetic Refinement" },
            { id: "monitoring", title: "Monitoring for Complications" },
            { id: "extraction-healing", title: "Extraction Healing When Needed" },
            { id: "bone-grafting", title: "Bone Grafting Requirements" },
        ],
    },
    {
        id: "timeline",
        title: "The Typical All-on-6 Timeline: What to Expect",
        children: [
            { id: "standard-timeline", title: "Standard Timeline (No Extractions or Grafting Needed)" },
            { id: "extended-extractions", title: "Extended Timeline (With Extractions)" },
            { id: "extended-grafting", title: "Extended Timeline (With Bone Grafting)" },
            { id: "accelerated-protocols", title: "Accelerated Protocols: Understanding the Limitations" },
        ],
    },
    {
        id: "factors",
        title: "Factors That Affect All-on-6 Healing Time and Scheduling",
        children: [
            { id: "bone-density", title: "Bone Density and Quality" },
            { id: "smoking", title: "Smoking Status" },
            { id: "diabetes", title: "Diabetes and Systemic Health Conditions" },
            { id: "extractions-complexity", title: "Number and Complexity of Extractions" },
            { id: "grafting-requirements", title: "Bone Grafting Requirements" },
            { id: "loading-protocol", title: "Immediate vs. Delayed Loading Protocol" },
            { id: "aftercare-compliance", title: "Your Compliance with Aftercare Instructions" },
            { id: "bite-forces", title: "Bite Forces and Parafunctional Habits" },
            { id: "treatment-philosophy", title: "Dentist's Treatment Philosophy and Protocols" },
            { id: "laboratory-quality", title: "Laboratory Quality and Turnaround Time" },
        ],
    },
    {
        id: "planning",
        title: "Practical Planning Advice for International All-on-6 Patients",
        children: [
            { id: "visit-scheduling", title: "Strategic Visit Scheduling for All-on-6" },
            { id: "travel-planning", title: "Travel Planning Tips for All-on-6 Patients" },
            { id: "budgeting", title: "Budgeting Considerations for All-on-6" },
            { id: "expectations", title: "Setting Realistic Expectations for All-on-6" },
            { id: "pre-travel", title: "Pre-Travel Preparation for All-on-6" },
        ],
    },
    { id: "conclusion", title: "Conclusion: Key Takeaways for International All-on-6 Patients" },
];

export const metadata: Metadata = {
    title: "The 2-Visit vs 3-Visit Timelines Guide to All-on-6 Treatment Visits | TurkiyeDental",
    description:
        "Understand All-on-6 visit timelines, healing phases, and planning considerations for international patients.",
    keywords: [
        "All-on-6 timeline",
        "All-on-6 visits",
        "All-on-6 dental implants",
        "full arch implants",
        "implant treatment timeline",
    ],
};

export default function AllOn6VisitTimelinesPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">All-on-6 Planning</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        The 2-Visit vs 3-Visit Timelines Guide to All-on-6 Treatment Visits
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/start"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Get Independent Guidance
                        </Link>
                        <Link
                            href="/treatments/allon6"
                            className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                        >
                            Explore All-on-6
                        </Link>
                    </div>
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                        <Image
                            src="/images/allon6timeline.jpg"
                            alt="All-on-6 treatment visit timeline overview"
                            fill
                            className="object-cover"
                            sizes="(min-width:1024px) 900px, 100vw"
                            priority
                        />
                    </div>
                </header>

                <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 space-y-10">
                    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6">
                        <h2 className="text-sm font-semibold text-brand-secondary mb-3">On this page</h2>
                        <ul className="text-base text-gray-700 space-y-4 columns-1 md:columns-2 md:gap-6">
                            {sections.map((section) => (
                                <li key={section.id} className="space-y-2 break-inside-avoid">
                                    <a
                                        href={`#${section.id}`}
                                        className="inline-flex items-start gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-teal-700 transition"
                                    >
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                                        <span>{section.title}</span>
                                    </a>
                                    {section.children ? (
                                        <ul className="space-y-1 pl-6 text-sm text-gray-600">
                                            {section.children.map((child) => (
                                                <li key={child.id} className="break-inside-avoid">
                                                    <a
                                                        href={`#${child.id}`}
                                                        className="inline-flex items-start gap-2 rounded-lg px-2 py-1 hover:bg-white hover:text-teal-700 transition"
                                                    >
                                                        <span className="mt-1 h-1 w-1 rounded-full bg-teal-400" />
                                                        <span>{child.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            src="https://www.youtube.com/embed/bN1vy59V6UU"
                            title="The 2-Visit vs 3-Visit Timelines Guide to All-on-6 Treatment Visits"
                            className="absolute inset-0 h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>

                    <section className="space-y-4">
                        <div id="introduction" />
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>If you're considering traveling abroad for All-on-6 dental implant treatment, you've probably asked yourself: "How many visits will I actually need?" It's one of the most common questions international patients have, and for good reason. Understanding the timeline for your All-on-6 procedure is crucial for planning your travel, budgeting your expenses, and setting realistic expectations for your full-mouth restoration journey.</p>
                            <p>The truth is, All-on-6 treatment isn't a one-and-done affair. While modern dentistry has made tremendous advances in efficiency and technology, this comprehensive full-arch restoration still requires multiple visits to ensure optimal results, proper healing, and long-lasting outcomes. This isn't about dentists trying to extend your treatment—it's about biology, precision, and giving your body the time it needs to integrate six dental implants that will support your entire new set of teeth for decades to come.</p>
                            <p>In this comprehensive guide, we'll walk you through everything you need to know about All-on-6 treatment visits: why multiple appointments are necessary, what the typical timeline looks like, what factors affect your healing time, and most importantly, how to plan your international dental journey strategically. Whether you're replacing all your upper teeth, lower teeth, or both arches, this article will help you understand what to expect and how to prepare for this life-changing procedure.</p>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-teal-100 bg-teal-50 p-5 md:p-6">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-brand-secondary">Compare All-on-4 and All-on-6 options</h3>
                            <p className="text-sm text-gray-700">
                                Get a second opinion and see which full-arch option fits your anatomy, timeline, and budget.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/treatments/allon4"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-100 transition"
                                >
                                    All-on-4 Treatment
                                </Link>
                                <Link
                                    href="/treatments/allon6"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-100 transition"
                                >
                                    All-on-6 Treatment
                                </Link>
                                <Link
                                    href="/start"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                                >
                                    Get Independent Guidance
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="overview" className="text-2xl font-semibold">
                            Understanding All-on-6: A Brief Overview
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Before we discuss the visit schedule, let's clarify what All-on-6 treatment involves. This is a full-arch dental restoration technique where six strategically placed dental implants support a complete set of prosthetic teeth (10-14 teeth per arch). The implants are surgically placed into your jawbone, where they fuse with the bone over several months through a process called osseointegration. Once fully integrated, these implants serve as permanent anchors for your new teeth.</p>
                            <p>All-on-6 offers several advantages over traditional dentures: superior stability, no slipping or clicking, preservation of jawbone, improved chewing function, and a more natural appearance. However, achieving these benefits requires a carefully staged treatment process that respects your body's biological healing timeline.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="multiple-visits" className="text-2xl font-semibold">
                            Why All-on-6 Treatment Requires Multiple Visits
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Understanding why you can't complete All-on-6 in a single trip is essential for planning your international dental journey. These aren't arbitrary requirements—they're based on sound medical and biological principles that directly impact your treatment success.</p>

                            <h3 id="osseointegration" className="text-xl font-semibold">Osseointegration: The Non-Negotiable Healing Period</h3>
                            <p>The most critical factor determining your All-on-6 timeline is osseointegration—the process by which your jawbone grows around and fuses with the titanium implants. This biological process typically takes 3-6 months, though it can extend to 12 months in some cases. There is simply no way to speed up this process without compromising the long-term success of your implants.</p>
                            <p>During osseointegration, your bone cells gradually attach to the implant surface, creating a bond stronger than the original tooth root. This fusion is what gives All-on-6 its remarkable stability and longevity. Attempting to place permanent prosthetics before osseointegration is complete risks implant failure, as the implants haven't yet achieved the stability needed to withstand normal chewing forces.</p>
                            <p>While some clinics offer "same-day teeth" or immediate loading protocols where temporary prosthetics are placed on the day of surgery, these are still temporary solutions. The permanent, final prosthetic—the one designed to last 10-15+ years—can only be placed after complete osseointegration.</p>

                            <h3 id="temporary-permanent" className="text-xl font-semibold">Temporary vs. Permanent Prosthetics: Two Distinct Phases</h3>
                            <p>All-on-6 treatment involves two different prosthetic phases, each serving specific purposes:</p>
                            <p><strong>Temporary Prosthetics</strong>: These are lighter, less expensive prosthetics placed either immediately after surgery or within a few weeks. They're designed to be functional and aesthetic during the healing period, allowing you to eat soft foods and smile confidently while your implants integrate. However, they're not built to withstand the full force of normal chewing and aren't as precisely fitted or aesthetically refined as the final prosthetic.</p>
                            <p><strong>Permanent Prosthetics</strong>: These are the final, definitive restorations—typically made from high-quality materials like zirconia or porcelain fused to metal frameworks. They're custom-crafted to exact specifications after your implants have fully integrated, ensuring perfect fit, optimal bite alignment, and superior aesthetics. The fabrication of permanent prosthetics alone takes 2-4 weeks in a quality laboratory.</p>
                            <p>This two-phase approach means you'll need at least two separate visits: one for implant placement (and possibly temporary prosthetic placement), and another for final prosthetic delivery after healing is complete.</p>

                            <h3 id="bite-adjustment" className="text-xl font-semibold">Bite Adjustment and Aesthetic Refinement</h3>
                            <p>Getting your bite exactly right is crucial for All-on-6 success. An improper bite can cause implant failure, jaw pain, excessive wear, and other complications. During the temporary prosthetic phase, your dentist monitors how your bite settles, how your jaw muscles adapt, and how the prosthetic functions during daily use.</p>
                            <p>This trial period provides invaluable information that guides the design of your permanent prosthetic. Your dentist can identify pressure points, adjust the vertical dimension (how "tall" your bite is), refine tooth positioning, and make aesthetic modifications based on your feedback. This iterative process requires multiple appointments and simply cannot be rushed.</p>

                            <h3 id="monitoring" className="text-xl font-semibold">Monitoring for Complications</h3>
                            <p>All-on-6 is a major surgical procedure, and like all surgeries, it carries risks of complications. Regular monitoring during the healing period allows your dentist to identify and address issues early:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Implant stability</strong>: Checking that implants are integrating properly and not showing signs of mobility</li>
                                <li><strong>Infection</strong>: Detecting and treating any post-surgical infections before they compromise implants</li>
                                <li><strong>Bone loss</strong>: Monitoring for any unexpected bone resorption around implants</li>
                                <li><strong>Soft tissue healing</strong>: Ensuring gums are healing properly around implant sites</li>
                                <li><strong>Prosthetic fit</strong>: Verifying that temporary prosthetics aren't causing pressure points or tissue irritation</li>
                            </ul>
                            <p>International patients face unique challenges with complication monitoring, which is why strategic visit scheduling and clear communication protocols with your dental team are essential.</p>

                            <h3 id="extraction-healing" className="text-xl font-semibold">Extraction Healing When Needed</h3>
                            <p>Many All-on-6 patients require extraction of remaining teeth before implant placement. If you have teeth that need removal, your treatment timeline extends further. Extraction sites need 3-4 months to heal before implants can be placed, though some protocols allow for immediate implant placement into fresh extraction sockets if bone quality permits.</p>
                            <p>The decision between immediate implant placement and delayed placement depends on factors like infection presence, bone quality, and the number of extractions needed. Your dentist will determine the best approach for your specific situation, but extraction healing adds another phase to your treatment timeline.</p>

                            <h3 id="bone-grafting" className="text-xl font-semibold">Bone Grafting Requirements</h3>
                            <p>Patients with significant bone loss—common among those who've had missing teeth for years or worn dentures long-term—often require bone grafting before or during implant placement. Bone grafts need 4-6 months to mature before implants can be placed or before the implants can be loaded with prosthetics.</p>
                            <p>Some All-on-6 cases can proceed with simultaneous bone grafting and implant placement, while others require staged procedures: bone grafting first, healing period, then implant placement, another healing period, then prosthetic placement. Your specific bone condition significantly impacts your treatment timeline.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="timeline" className="text-2xl font-semibold">
                            The Typical All-on-6 Timeline: What to Expect
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>While every patient's journey is unique, most All-on-6 cases follow a general timeline. Understanding this helps you plan your international travel and set realistic expectations.</p>

                            <h3 id="standard-timeline" className="text-xl font-semibold">Standard Timeline (No Extractions or Grafting Needed)</h3>
                            <p><strong>Visit 1: Consultation, Planning, and Implant Placement (5-7 days)</strong></p>
                            <p>Your first trip typically lasts about a week and includes:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Day 1-2</strong>: Comprehensive examination, 3D CT scans, treatment planning, medical clearance</li>
                                <li><strong>Day 3</strong>: Implant placement surgery (2-4 hours per arch)</li>
                                <li><strong>Day 4-5</strong>: Post-operative check-up, suture check, temporary prosthetic placement (if immediate loading protocol is used)</li>
                                <li><strong>Day 6-7</strong>: Final check before departure, instructions for healing period</li>
                            </ul>
                            <p>Some clinics place temporary prosthetics on the same day as surgery (immediate loading), while others wait 2-4 weeks for initial healing before placing temporaries. If delayed loading is used, you may need to return for a second short visit to receive your temporary prosthetic, or arrangements may be made with a local dentist in your home country.</p>
                            <p><strong>Healing Period: 3-6 Months at Home</strong></p>
                            <p>During this period, osseointegration occurs. You'll wear your temporary prosthetic (if placed), follow a modified diet, maintain meticulous oral hygiene, and have regular check-ins with your dental team (often via video calls or with a local monitoring dentist).</p>
                            <p><strong>Visit 2: Final Prosthetic Delivery (7-10 days)</strong></p>
                            <p>Your second trip, occurring 3-6 months after implant placement, includes:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Day 1</strong>: Examination, X-rays to confirm osseointegration, removal of temporary prosthetic</li>
                                <li><strong>Day 2-3</strong>: Final impressions, bite registration, shade selection, try-in of prosthetic framework</li>
                                <li><strong>Day 4-7</strong>: Laboratory fabrication of permanent prosthetic</li>
                                <li><strong>Day 8</strong>: Delivery and fitting of permanent prosthetic, bite adjustments</li>
                                <li><strong>Day 9-10</strong>: Follow-up appointment for final adjustments, instructions for long-term care</li>
                            </ul>
                            <p><strong>Total Timeline</strong>: 4-7 months from start to finish, requiring two international trips totaling 12-17 days abroad.</p>

                            <h3 id="extended-extractions" className="text-xl font-semibold">Extended Timeline (With Extractions)</h3>
                            <p><strong>Visit 1: Extractions and Healing (3-5 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Comprehensive examination and planning</li>
                                <li>Extraction of remaining teeth</li>
                                <li>Possible socket preservation grafting</li>
                                <li>Temporary denture placement for aesthetics during healing</li>
                            </ul>
                            <p><strong>Healing Period: 3-4 Months</strong></p>
                            <p>Extraction sites heal and bone remodels.</p>
                            <p><strong>Visit 2: Implant Placement (5-7 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Re-evaluation with new CT scans</li>
                                <li>Implant placement surgery</li>
                                <li>Temporary prosthetic placement (immediate or delayed)</li>
                            </ul>
                            <p><strong>Healing Period: 3-6 Months</strong></p>
                            <p>Osseointegration occurs.</p>
                            <p><strong>Visit 3: Final Prosthetic Delivery (7-10 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Final impressions and prosthetic fabrication</li>
                                <li>Permanent prosthetic delivery and adjustments</li>
                            </ul>
                            <p><strong>Total Timeline</strong>: 7-11 months, requiring three international trips totaling 15-22 days abroad.</p>

                            <h3 id="extended-grafting" className="text-xl font-semibold">Extended Timeline (With Bone Grafting)</h3>
                            <p><strong>Visit 1: Bone Grafting (3-5 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Comprehensive examination and planning</li>
                                <li>Bone grafting surgery (with or without extractions)</li>
                                <li>Post-operative monitoring</li>
                            </ul>
                            <p><strong>Healing Period: 4-6 Months</strong></p>
                            <p>Bone graft matures and integrates.</p>
                            <p><strong>Visit 2: Implant Placement (5-7 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Re-evaluation with CT scans to assess bone quality</li>
                                <li>Implant placement surgery</li>
                                <li>Temporary prosthetic placement (if immediate loading is possible)</li>
                            </ul>
                            <p><strong>Healing Period: 3-6 Months</strong></p>
                            <p>Osseointegration occurs.</p>
                            <p><strong>Visit 3: Final Prosthetic Delivery (7-10 days)</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Final impressions and prosthetic fabrication</li>
                                <li>Permanent prosthetic delivery and adjustments</li>
                            </ul>
                            <p><strong>Total Timeline</strong>: 10-17 months, requiring three international trips totaling 15-22 days abroad.</p>

                            <h3 id="accelerated-protocols" className="text-xl font-semibold">Accelerated Protocols: Understanding the Limitations</h3>
                            <p>Some dental clinics advertise "All-on-6 in one week" or similar accelerated timelines. While it's technically possible to place implants and temporary prosthetics in a single visit, it's crucial to understand what this actually means:</p>
                            <p><strong>What You CAN Get in One Visit:</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Implant placement surgery</li>
                                <li>Immediate temporary prosthetic (if bone quality and implant stability permit)</li>
                                <li>Initial healing and adjustment period</li>
                            </ul>
                            <p><strong>What You CANNOT Get in One Visit:</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Permanent, final prosthetic (requires osseointegration first)</li>
                                <li>Guaranteed long-term success without proper healing time</li>
                                <li>Optimal bite refinement and aesthetic adjustments</li>
                            </ul>
                            <p>Beware of clinics promising complete All-on-6 treatment in unrealistically short timeframes. While immediate loading with temporary prosthetics is a legitimate protocol, the permanent prosthetic still requires months of healing. Clinics that place "permanent" prosthetics before adequate osseointegration are taking significant risks with your treatment outcome.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="factors" className="text-2xl font-semibold">
                            Factors That Affect All-on-6 Healing Time and Scheduling
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Understanding what influences your specific All-on-6 timeline helps you plan more effectively and set realistic expectations. Here are the key factors that determine how long your treatment will take:</p>

                            <h3 id="bone-density" className="text-xl font-semibold">Bone Density and Quality</h3>
                            <p>Your jawbone quality is the single most important factor affecting your All-on-6 timeline. Patients with dense, healthy bone (Type 1 or Type 2 bone) typically experience faster osseointegration—sometimes as quickly as 3 months. Those with softer, less dense bone (Type 3 or Type 4) may require 6 months or longer for adequate integration.</p>
                            <p>Bone quality also determines whether immediate loading (placing temporary prosthetics on the day of surgery) is possible. Immediate loading requires excellent bone density and high initial implant stability. If your bone quality is compromised, your dentist may recommend delayed loading, where implants are left to heal for several weeks before any prosthetic is attached.</p>
                            <p>Your pre-treatment CT scan reveals your bone density, allowing your dentist to predict your likely healing timeline. This is why sending imaging in advance is so important for international patients—it allows accurate treatment planning before you travel.</p>

                            <h3 id="smoking" className="text-xl font-semibold">Smoking Status</h3>
                            <p>Smoking is one of the most significant risk factors for All-on-6 failure. Nicotine constricts blood vessels, reducing blood flow to healing tissues and dramatically slowing osseointegration. Smokers experience implant failure rates 2-3 times higher than non-smokers.</p>
                            <p>If you smoke, your dentist will likely recommend:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Quitting entirely before treatment (ideally 2-4 weeks before surgery)</li>
                                <li>Remaining smoke-free throughout the healing period (minimum 3-6 months)</li>
                                <li>Extended healing periods before loading implants with prosthetics</li>
                                <li>More frequent monitoring appointments</li>
                            </ul>
                            <p>Some dentists refuse to perform All-on-6 on active smokers due to the high failure risk. If you cannot quit smoking, be honest with your dentist so they can adjust your treatment plan accordingly—or consider whether All-on-6 is the right choice for you.</p>

                            <h3 id="diabetes" className="text-xl font-semibold">Diabetes and Systemic Health Conditions</h3>
                            <p>Diabetes, particularly poorly controlled diabetes, significantly impacts healing and osseointegration. High blood sugar levels impair immune function, slow wound healing, and increase infection risk. Diabetic patients often require:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Extended healing periods (6-12 months for osseointegration)</li>
                                <li>More frequent monitoring for complications</li>
                                <li>Strict blood sugar control before and after surgery</li>
                                <li>Possible antibiotic prophylaxis</li>
                            </ul>
                            <p>Other systemic conditions affecting healing include:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Autoimmune disorders</strong>: May slow healing and increase complication risk</li>
                                <li><strong>Osteoporosis</strong>: Can compromise bone quality and implant stability</li>
                                <li><strong>Heart disease</strong>: May require special precautions during surgery</li>
                                <li><strong>Immunosuppression</strong>: Increases infection risk and slows healing</li>
                            </ul>
                            <p>Be completely transparent about your medical history with your dental team. International patients with complex medical conditions should consider whether the challenges of coordinating care across borders outweigh the cost savings of treatment abroad.</p>

                            <h3 id="extractions-complexity" className="text-xl font-semibold">Number and Complexity of Extractions</h3>
                            <p>The more teeth requiring extraction, the more complex your healing process. Extracting a full arch of teeth creates significant trauma that requires adequate healing time. Factors affecting extraction healing include:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Infection presence</strong>: Infected teeth require longer healing before implant placement</li>
                                <li><strong>Bone loss around teeth</strong>: May necessitate socket preservation grafting</li>
                                <li><strong>Tooth position</strong>: Molars with multiple roots are more traumatic to extract than front teeth</li>
                                <li><strong>Surgical complexity</strong>: Impacted or broken teeth requiring surgical extraction need longer healing</li>
                            </ul>
                            <p>Simple extractions in healthy bone may heal adequately in 3 months, while complex extractions with infection may require 4-6 months before implant placement is advisable.</p>

                            <h3 id="grafting-requirements" className="text-xl font-semibold">Bone Grafting Requirements</h3>
                            <p>If bone grafting is necessary, your timeline extends significantly. Types of grafting that may be needed include:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Socket preservation grafting</strong>: Placed at time of extraction to maintain bone volume (adds 3-4 months)</li>
                                <li><strong>Sinus lift</strong>: Required for upper jaw implants when sinus cavity is too close (adds 4-6 months)</li>
                                <li><strong>Ridge augmentation</strong>: Builds up deficient bone width or height (adds 4-6 months)</li>
                                <li><strong>Block grafts</strong>: For severe bone loss, using bone from another site (adds 6-9 months)</li>
                            </ul>
                            <p>Some grafting can be done simultaneously with implant placement, while severe bone loss requires staged procedures. Your pre-treatment CT scan reveals whether grafting will be necessary, allowing accurate timeline planning.</p>

                            <h3 id="loading-protocol" className="text-xl font-semibold">Immediate vs. Delayed Loading Protocol</h3>
                            <p>Your dentist will choose between immediate loading (placing temporary prosthetic on day of surgery) or delayed loading (waiting weeks to months before placing prosthetic) based on:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Initial implant stability</strong>: Measured during surgery; high stability (&gt;35 Ncm torque) permits immediate loading</li>
                                <li><strong>Bone quality</strong>: Dense bone supports immediate loading; soft bone requires delayed loading</li>
                                <li><strong>Number of implants</strong>: Six implants provide more stability than four, making immediate loading more feasible</li>
                                <li><strong>Patient factors</strong>: Bite force, grinding habits, and compliance affect loading protocol choice</li>
                            </ul>
                            <p>Immediate loading offers the advantage of leaving the clinic with teeth, but it doesn't accelerate the overall timeline—you still need months of healing before the permanent prosthetic. Delayed loading may actually result in higher long-term success rates in certain cases.</p>

                            <h3 id="aftercare-compliance" className="text-xl font-semibold">Your Compliance with Aftercare Instructions</h3>
                            <p>How well you follow post-operative instructions dramatically impacts your healing timeline and treatment success. Critical compliance factors include:</p>
                            <p><strong>Dietary Restrictions</strong>: During the healing period, you must follow a modified diet:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>First 2-4 weeks: Soft foods only (soups, smoothies, mashed foods)</li>
                                <li>Months 2-3: Gradually introduce semi-solid foods</li>
                                <li>Avoid hard, crunchy, or chewy foods until permanent prosthetic is placed</li>
                                <li>No chewing on temporary prosthetic beyond its designed capacity</li>
                            </ul>
                            <p><strong>Oral Hygiene</strong>: Meticulous cleaning is essential:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Gentle brushing around implant sites</li>
                                <li>Prescribed mouth rinses to prevent infection</li>
                                <li>Regular cleaning of temporary prosthetic</li>
                                <li>Professional cleanings as recommended</li>
                            </ul>
                            <p><strong>Activity Restrictions</strong>: Physical activity affects healing:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>No strenuous exercise for 2-4 weeks post-surgery</li>
                                <li>Avoid activities that could result in facial trauma</li>
                                <li>No smoking or alcohol during healing period</li>
                                <li>Adequate sleep and stress management</li>
                            </ul>
                            <p><strong>Medication Compliance</strong>: Taking prescribed medications as directed:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Antibiotics to prevent infection</li>
                                <li>Pain medications as needed</li>
                                <li>Anti-inflammatory medications to reduce swelling</li>
                            </ul>
                            <p>Patients who don't follow aftercare instructions experience higher complication rates, delayed healing, and sometimes implant failure—requiring additional visits and extended timelines to address problems.</p>

                            <h3 id="bite-forces" className="text-xl font-semibold">Bite Forces and Parafunctional Habits</h3>
                            <p>If you're a heavy grinder (bruxism) or clencher, your All-on-6 timeline may be affected. Excessive bite forces during the healing period can prevent proper osseointegration or cause implant failure. Your dentist may recommend:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Delayed loading protocol (no prosthetic for first 2-3 months)</li>
                                <li>Night guard to protect implants during sleep</li>
                                <li>Extended healing period before placing permanent prosthetic</li>
                                <li>Reinforced prosthetic design to withstand higher forces</li>
                            </ul>
                            <p>Be honest about grinding or clenching habits so your treatment plan can be adjusted accordingly.</p>

                            <h3 id="treatment-philosophy" className="text-xl font-semibold">Dentist's Treatment Philosophy and Protocols</h3>
                            <p>Different dentists and clinics have different approaches to All-on-6 timing. Some prefer conservative timelines with ample healing time between procedures, while others use accelerated protocols when patient conditions permit. Neither approach is inherently wrong—it depends on your specific case and risk factors.</p>
                            <p>When evaluating international dental clinics, ask about:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Their typical All-on-6 timeline and what factors might extend it</li>
                                <li>Their success rates with immediate vs. delayed loading</li>
                                <li>How they handle complications that arise during healing</li>
                                <li>Their protocol for monitoring international patients remotely</li>
                            </ul>
                            <p>Clinics with very aggressive timelines may be prioritizing convenience over optimal outcomes. Those with very conservative timelines may be overly cautious. Look for dentists who customize the timeline to your specific situation rather than using a one-size-fits-all approach.</p>

                            <h3 id="laboratory-quality" className="text-xl font-semibold">Laboratory Quality and Turnaround Time</h3>
                            <p>The quality of your permanent prosthetic depends heavily on the dental laboratory fabricating it. High-quality laboratories take time to create precise, aesthetic, durable prosthetics—typically 2-4 weeks. Factors affecting laboratory work include:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Material choice</strong>: Zirconia prosthetics require more fabrication time than acrylic</li>
                                <li><strong>Customization level</strong>: Highly customized aesthetics take longer than standard designs</li>
                                <li><strong>Laboratory workload</strong>: Busy labs may have longer turnaround times</li>
                                <li><strong>Quality control</strong>: Reputable labs perform multiple quality checks, adding time</li>
                            </ul>
                            <p>International patients should factor in realistic laboratory timelines when planning their final visit. Rushing laboratory work to accommodate tight travel schedules can compromise the quality of your permanent prosthetic—the part you'll live with for the next 10-15 years.</p>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-brand-secondary">Want a clear plan before you book flights?</h3>
                            <p className="text-sm text-gray-700">
                                Share your case and get an independent review of timelines, costs, and whether All-on-4 or All-on-6 fits you best.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/start"
                                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                                >
                                    Start a Second Opinion
                                </Link>
                                <Link
                                    href="/guides/timeline"
                                    className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                                >
                                    View timeline guide
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="planning" className="text-2xl font-semibold">
                            Practical Planning Advice for International All-on-6 Patients
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Now that you understand the "why" and "when" of All-on-6 visits, let's discuss the "how"—specifically, how to plan your international dental journey strategically to minimize hassle while maximizing results.</p>

                            <h3 id="visit-scheduling" className="text-xl font-semibold">Strategic Visit Scheduling for All-on-6</h3>
                            <p><strong>Plan for 2-3 Separate International Trips</strong>: Accept from the outset that All-on-6 requires multiple trips spaced months apart. Trying to compress the timeline compromises your treatment outcome. Budget and plan for:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Trip 1: 5-10 days for initial procedures</li>
                                <li>Healing period: 3-6 months at home</li>
                                <li>Trip 2: 7-10 days for final prosthetic delivery</li>
                                <li>Possible Trip 3: If extractions or grafting are needed, add another trip</li>
                            </ul>
                            <p><strong>Build Significant Buffer Time</strong>: All-on-6 is complex, and unexpected issues arise. If your dentist says you need to stay 7 days, plan for 10-12 days. Having flexible return flights saves stress and money if:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Surgery takes longer than expected</li>
                                <li>Healing is slower than anticipated</li>
                                <li>Temporary prosthetic requires multiple adjustments</li>
                                <li>Complications need addressing before you can safely travel home</li>
                            </ul>
                            <p><strong>Coordinate with Your Work and Life Schedule</strong>: All-on-6 requires significant time commitment. Before booking treatment, ensure you can:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Take 1-2 weeks off work for each trip</li>
                                <li>Return 3-6 months later for the second trip</li>
                                <li>Manage work responsibilities during healing periods when you may have discomfort or dietary limitations</li>
                                <li>Handle the physical and emotional demands of major dental surgery</li>
                            </ul>
                            <p><strong>Schedule During Optimal Healing Seasons</strong>: Consider timing your treatment during periods when you can prioritize recovery:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Avoid scheduling major procedures right before important life events (weddings, job changes, etc.)</li>
                                <li>Consider your destination's climate (extreme heat or cold can affect comfort during recovery)</li>
                                <li>Plan around your work's busy seasons so you can take adequate time off</li>
                                <li>Some patients find winter healing challenging due to reduced vitamin D and immune function</li>
                            </ul>
                            <p><strong>Request Detailed, Written Treatment Plans</strong>: Before traveling, insist on a comprehensive treatment plan including:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Exact number of visits required and duration of each</li>
                                <li>Minimum healing time between visits</li>
                                <li>What will be accomplished during each visit</li>
                                <li>Contingency plans if complications arise</li>
                                <li>Total timeline from start to finish</li>
                                <li>What happens if you cannot return for scheduled follow-up visits</li>
                            </ul>

                            <h3 id="travel-planning" className="text-xl font-semibold">Travel Planning Tips for All-on-6 Patients</h3>
                            <p><strong>Choose Accommodations with Recovery in Mind</strong>: Your lodging needs differ from typical tourists:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Stay within 10-15 minutes of your dental clinic for easy access to appointments</li>
                                <li>Choose accommodations with kitchen facilities so you can prepare soft foods</li>
                                <li>Ensure comfortable sleeping arrangements (you'll need extra rest during recovery)</li>
                                <li>Look for quiet locations (noise and stress impede healing)</li>
                                <li>Consider extended-stay hotels or serviced apartments for longer visits</li>
                                <li>Some dental clinics partner with nearby hotels offering special rates and amenities for dental patients</li>
                            </ul>
                            <p><strong>Plan for Significant Recovery Time</strong>: All-on-6 is major surgery. Your post-operative experience will include:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Days 1-3</strong>: Significant swelling, discomfort, fatigue; you'll need complete rest</li>
                                <li><strong>Days 4-7</strong>: Gradual improvement but still limited energy and dietary restrictions</li>
                                <li><strong>Week 2</strong>: Most patients feel significantly better but still need to avoid strenuous activity</li>
                                <li>Don't schedule sightseeing, business meetings, or intensive activities during your first week post-surgery</li>
                                <li>Plan quiet, relaxing activities for your recovery period</li>
                            </ul>
                            <p><strong>Stock Up on Appropriate Foods</strong>: Before surgery, purchase:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Protein shakes and nutritional supplements</li>
                                <li>Soups, broths, and soft foods</li>
                                <li>Yogurt, pudding, and smoothie ingredients</li>
                                <li>Ice cream and popsicles (help with swelling and provide calories)</li>
                                <li>Avoid foods requiring chewing for the first 2-4 weeks</li>
                                <li>Research local grocery stores and food delivery options near your accommodation</li>
                            </ul>
                            <p><strong>Arrange Reliable Transportation</strong>: After All-on-6 surgery, you won't be able to drive or navigate public transportation easily:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Many clinics offer pickup/drop-off services—inquire about this when booking</li>
                                <li>Arrange transportation for all appointments during your stay</li>
                                <li>Have a plan for getting to pharmacies or grocery stores</li>
                                <li>Consider hiring a local assistant or companion if traveling alone</li>
                                <li>Ensure your accommodation is accessible without extensive walking or stair climbing</li>
                            </ul>
                            <p><strong>Bring a Companion if Possible</strong>: All-on-6 surgery is significant, and having support is invaluable:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Someone to accompany you to appointments and translate if needed</li>
                                <li>Help with daily tasks during the first few days of recovery</li>
                                <li>Emotional support during a challenging process</li>
                                <li>Assistance with medication management and following post-op instructions</li>
                                <li>Someone to monitor for complications and communicate with your dental team</li>
                            </ul>
                            <p><strong>Pack Strategically for All-on-6 Recovery</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Medications</strong>: Pain relievers, anti-inflammatories (check customs regulations)</li>
                                <li><strong>Comfort items</strong>: Ice packs, heating pads, extra pillows for elevated sleeping</li>
                                <li><strong>Hygiene supplies</strong>: Soft toothbrush, prescribed mouth rinses, gentle dental care products</li>
                                <li><strong>Clothing</strong>: Loose, comfortable clothes; avoid anything pulled over your head (button-up shirts are easier)</li>
                                <li><strong>Entertainment</strong>: Books, tablets, or other quiet activities for recovery time</li>
                                <li><strong>Medical records</strong>: All dental X-rays, medical history, current medications list</li>
                                <li><strong>Contact information</strong>: Your home dentist's details, emergency contacts, travel insurance information</li>
                            </ul>
                            <p><strong>Account for Time Zone Adjustment</strong>: International travel affects your body:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Arrive 2-3 days before surgery to adjust to the time zone and recover from travel fatigue</li>
                                <li>Jet lag can affect pain perception, healing, and your ability to follow post-op instructions</li>
                                <li>Don't schedule surgery immediately upon arrival</li>
                                <li>Plan for potential jet lag on your return home as well</li>
                            </ul>
                            <p><strong>Understand Communication Protocols</strong>: Establish clear communication with your dental team:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Get multiple contact methods (phone, email, WhatsApp, Telegram)</li>
                                <li>Clarify their availability for questions during your healing period at home</li>
                                <li>Understand time zone differences for scheduling video check-ins</li>
                                <li>Ask about emergency protocols if complications arise after you return home</li>
                                <li>Some clinics partner with local dentists in major cities worldwide for monitoring—inquire about this option</li>
                            </ul>

                            <h3 id="budgeting" className="text-xl font-semibold">Budgeting Considerations for All-on-6</h3>
                            <p>All-on-6 is a significant investment, and international patients must budget for total costs, not just the procedure price. Here's what to consider:</p>
                            <p><strong>Calculate Total Treatment Costs</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Procedure fees</strong>: All-on-6 typically costs $15,000-$30,000+ per arch depending on location and materials</li>
                                <li><strong>Additional procedures</strong>: Extractions, bone grafting, sinus lifts add $2,000-$10,000+</li>
                                <li><strong>Temporary prosthetics</strong>: Usually included but verify this</li>
                                <li><strong>Permanent prosthetic materials</strong>: Zirconia costs more than acrylic but lasts longer</li>
                                <li><strong>Follow-up visits</strong>: Some clinics include these, others charge separately</li>
                            </ul>
                            <p><strong>Factor in Multiple Trips</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Flights</strong>: 2-3 round-trip international flights ($1,000-$3,000+ each depending on origin)</li>
                                <li><strong>Accommodations</strong>: 12-25+ nights total across all visits ($50-$200+ per night)</li>
                                <li><strong>Meals</strong>: Budget for 2-4 weeks of dining out or grocery shopping abroad</li>
                                <li><strong>Local transportation</strong>: Taxis, rideshares, or car rentals for each visit</li>
                                <li><strong>Visa fees</strong>: If required for your destination country</li>
                            </ul>
                            <p><strong>Build in a Substantial Contingency Fund</strong>: Set aside 25-35% extra for:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Complications</strong>: Infection treatment, additional procedures, extended stays</li>
                                <li><strong>Bone grafting</strong>: If discovered during surgery that it's needed</li>
                                <li><strong>Additional adjustments</strong>: Extra visits for prosthetic refinements</li>
                                <li><strong>Emergency dental care</strong>: If issues arise after returning home</li>
                                <li><strong>Travel changes</strong>: Flight modifications, extended accommodation bookings</li>
                            </ul>
                            <p><strong>Understand All-on-6 Payment Structures</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Many clinics require 30-50% deposit when booking</li>
                                <li>Balance often due before surgery or in installments at each visit</li>
                                <li>Clarify what's included in quoted price (temporary prosthetic? extractions? follow-up visits?)</li>
                                <li>Ask about payment methods accepted and any transaction fees</li>
                                <li>Some clinics offer payment plans—inquire about terms and interest rates</li>
                            </ul>
                            <p><strong>Compare Package Deals Carefully</strong>: Some clinics offer all-inclusive packages including:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>All dental procedures (extractions, implants, prosthetics)</li>
                                <li>Accommodation for specified number of nights</li>
                                <li>Airport transfers and local transportation</li>
                                <li>Post-operative medications</li>
                                <li>Follow-up visits</li>
                            </ul>
                            <p>Compare package prices against booking everything separately. Sometimes packages offer genuine value; other times, you're paying for convenience rather than savings. Read the fine print about what's included and what costs extra.</p>
                            <p><strong>Consider Financing Options</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Some international clinics work with medical financing companies</li>
                                <li>Credit cards with 0% introductory APR periods can spread costs</li>
                                <li>Medical tourism financing companies specialize in international treatment loans</li>
                                <li>Compare interest rates and terms carefully</li>
                                <li>Factor financing costs into your total budget</li>
                            </ul>
                            <p><strong>Don't Forget Hidden Costs</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Currency exchange fees</strong>: Can add 3-5% to costs</li>
                                <li><strong>International transaction fees</strong>: Credit cards often charge 2-3% for foreign transactions</li>
                                <li><strong>Travel insurance</strong>: Essential for international medical travel ($100-$300+)</li>
                                <li><strong>Communication costs</strong>: International phone plans or local SIM cards</li>
                                <li><strong>Tipping</strong>: Research tipping customs in your destination country</li>
                                <li><strong>Incidentals</strong>: Pharmacy items, comfort supplies, entertainment during recovery</li>
                            </ul>
                            <p><strong>Evaluate True Cost-Benefit Ratio</strong>: Calculate whether international All-on-6 truly saves money:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Add up ALL costs (procedure + travel + accommodation + contingencies)</li>
                                <li>Compare against local All-on-6 costs in your home country</li>
                                <li>Factor in the value of your time (multiple trips, time off work)</li>
                                <li>Consider the challenges of managing complications from abroad</li>
                                <li>Sometimes local treatment, despite higher procedure costs, is more economical overall</li>
                            </ul>
                            <p><strong>Understand Long-Term Maintenance Costs</strong>: All-on-6 isn't a one-time expense:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Professional cleanings every 3-6 months ($100-$300 each)</li>
                                <li>Possible prosthetic adjustments or repairs over time</li>
                                <li>Eventual prosthetic replacement (typically after 10-15 years)</li>
                                <li>If complications arise years later, will you return to your international clinic or seek local care?</li>
                            </ul>

                            <h3 id="expectations" className="text-xl font-semibold">Setting Realistic Expectations for All-on-6</h3>
                            <p>Managing your expectations is crucial for satisfaction with your All-on-6 outcome. Here's what to realistically expect:</p>
                            <p><strong>Understand the Adaptation Period</strong>: Getting All-on-6 is a major change, and adaptation takes time:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Speaking</strong>: Expect 2-4 weeks to adjust to speaking with your new teeth; you may have a slight lisp initially</li>
                                <li><strong>Eating</strong>: Start with soft foods and gradually progress; full chewing function develops over 2-3 months</li>
                                <li><strong>Sensation</strong>: Your new teeth will feel different from natural teeth; most patients adapt within 1-3 months</li>
                                <li><strong>Salivation</strong>: Increased saliva production is common initially and normalizes within weeks</li>
                                <li><strong>Awareness</strong>: You'll be very conscious of your new teeth at first; this awareness fades as they become "normal"</li>
                            </ul>
                            <p><strong>Results Aren't Immediate</strong>: Your final outcome takes months to achieve:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Swelling</strong>: Facial swelling is significant for 1-2 weeks post-surgery</li>
                                <li><strong>Bruising</strong>: Some patients experience facial bruising that takes 2-3 weeks to resolve</li>
                                <li><strong>Temporary prosthetic</strong>: Looks good but isn't your final aesthetic result</li>
                                <li><strong>Gum healing</strong>: Gum tissue around implants takes 3-6 months to fully mature and shape</li>
                                <li><strong>Final appearance</strong>: You won't see your true final result until the permanent prosthetic is placed</li>
                            </ul>
                            <p><strong>Discomfort is Normal</strong>: All-on-6 is surgery, and post-operative discomfort is expected:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Pain</strong>: Most patients rate pain as 4-6/10 for the first 3-5 days, manageable with medication</li>
                                <li><strong>Swelling</strong>: Peaks at days 2-3, then gradually improves over 1-2 weeks</li>
                                <li><strong>Difficulty eating</strong>: Expect to be on a liquid/soft diet for 2-4 weeks minimum</li>
                                <li><strong>Fatigue</strong>: Surgical trauma causes significant fatigue for 1-2 weeks</li>
                                <li><strong>Emotional ups and downs</strong>: The physical and emotional toll of major surgery can cause mood fluctuations</li>
                            </ul>
                            <p><strong>Aesthetic Refinement Takes Time</strong>: Achieving your ideal smile is a process:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Temporary prosthetics are functional but not perfectly aesthetic</li>
                                <li>Your input during the temporary phase guides final prosthetic design</li>
                                <li>Tooth color, shape, and positioning can be refined for the permanent prosthetic</li>
                                <li>Some patients need minor adjustments even after permanent prosthetic delivery</li>
                                <li>Be patient and communicate clearly with your dentist about your aesthetic goals</li>
                            </ul>
                            <p><strong>Complications Can Happen</strong>: Even with excellent dentists and careful planning:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Implant failure</strong>: 5-10% of implants fail to integrate; may require replacement</li>
                                <li><strong>Infection</strong>: Post-surgical infections occur in 2-5% of cases; usually treatable with antibiotics</li>
                                <li><strong>Nerve damage</strong>: Rare but possible, causing numbness or tingling</li>
                                <li><strong>Sinus complications</strong>: For upper jaw implants, sinus issues occasionally arise</li>
                                <li><strong>Prosthetic issues</strong>: Temporary or permanent prosthetics may crack, break, or need adjustment</li>
                            </ul>
                            <p>Mental preparation for potential complications reduces stress if they occur. Understand that complications don't necessarily mean poor treatment—they're inherent risks of any surgery.</p>
                            <p><strong>Long-Term Maintenance is Required</strong>: All-on-6 isn't "set it and forget it":</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Professional cleanings every 3-6 months are essential</li>
                                <li>Daily home care (brushing, flossing, water flossing) is critical</li>
                                <li>Annual check-ups with X-rays to monitor implant health</li>
                                <li>Possible prosthetic adjustments or repairs over time</li>
                                <li>Eventual prosthetic replacement after 10-15+ years</li>
                            </ul>
                            <p><strong>Cultural and Practice Differences</strong>: Dental care varies across countries:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Treatment approaches may differ from what you're accustomed to</li>
                                <li>Clinic environments and patient care styles vary</li>
                                <li>Pain management protocols differ (some countries are more conservative with pain medication)</li>
                                <li>Communication styles and patient-dentist relationships vary culturally</li>
                                <li>What seems unusual to you may be standard practice in your destination country</li>
                            </ul>
                            <p>Research dental standards and cultural norms in your chosen location. Read reviews from patients from your home country to understand what to expect.</p>
                            <p><strong>Warranty and Guarantee Policies</strong>: Understand what protections you have:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>What guarantee does the clinic offer on implants and prosthetics?</li>
                                <li>What's covered if an implant fails or prosthetic breaks?</li>
                                <li>Does the guarantee cover only replacement parts, or also labor and travel costs?</li>
                                <li>How long is the warranty period?</li>
                                <li>What voids the warranty (smoking, poor hygiene, not returning for check-ups)?</li>
                                <li>If something goes wrong after you return home, what are your options?</li>
                            </ul>
                            <p>Get all warranty information in writing before proceeding with treatment. Some clinics offer generous guarantees but don't cover travel costs for return visits—meaning you'd pay thousands in flights and accommodation for warranty work.</p>

                            <h3 id="pre-travel" className="text-xl font-semibold">Pre-Travel Preparation for All-on-6</h3>
                            <p>Thorough preparation before your first trip sets you up for success:</p>
                            <p><strong>Get Comprehensive Evaluation at Home First</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>See a local dentist for thorough examination and X-rays</li>
                                <li>Get a written diagnosis and treatment recommendations</li>
                                <li>This provides a baseline for comparison and helps you evaluate international treatment proposals</li>
                                <li>Your home dentist may be willing to provide follow-up monitoring after your international treatment</li>
                            </ul>
                            <p><strong>Send Complete Records to Your International Clinic</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>3D CT scan</strong>: Essential for All-on-6 planning; many clinics require this before you travel</li>
                                <li><strong>Panoramic X-rays</strong>: Shows overall dental and bone condition</li>
                                <li><strong>Intraoral photos</strong>: Helps with aesthetic planning</li>
                                <li><strong>Medical history</strong>: Complete list of conditions, medications, allergies</li>
                                <li><strong>Dental history</strong>: Previous treatments, problems, concerns</li>
                            </ul>
                            <p>Sending records in advance allows your international dentist to:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Confirm you're a good All-on-6 candidate</li>
                                <li>Identify if bone grafting or other procedures will be needed</li>
                                <li>Provide accurate timeline and cost estimates</li>
                                <li>Plan your treatment before you arrive, maximizing efficiency</li>
                            </ul>
                            <p><strong>Discuss Material Options in Advance</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Temporary prosthetic</strong>: Usually acrylic; discuss aesthetic expectations</li>
                                <li><strong>Permanent prosthetic materials</strong>:
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Acrylic on metal framework</strong>: Less expensive ($8,000-$12,000), easier to repair, less aesthetic</li>
                                        <li><strong>Porcelain fused to metal</strong>: Mid-range cost ($12,000-$18,000), good aesthetics and durability</li>
                                        <li><strong>Zirconia</strong>: Most expensive ($15,000-$25,000+), superior aesthetics and strength, most natural-looking</li>
                                    </ul>
                                </li>
                                <li>Understand pros/cons of each material and how it affects your budget and timeline</li>
                            </ul>
                            <p><strong>Clarify Bone Grafting Needs Upfront</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Your CT scan should reveal whether grafting is necessary</li>
                                <li>Understand what type of grafting might be needed and how it affects your timeline</li>
                                <li>Discuss whether grafting can be done simultaneously with implant placement or requires staging</li>
                                <li>Get cost estimates for grafting procedures</li>
                                <li>Understand how grafting affects your healing timeline and number of required visits</li>
                            </ul>
                            <p><strong>Research Your Destination Clinic Thoroughly</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Read reviews from multiple sources (Google, Facebook, dental tourism forums)</li>
                                <li>Verify dentist credentials and specializations (oral surgeon? prosthodontist?)</li>
                                <li>Check for international accreditations (JCI, ISO, national dental associations)</li>
                                <li>Look for before/after photos of actual All-on-6 cases</li>
                                <li>Communicate extensively via email or video consultation before booking</li>
                                <li>Ask about their All-on-6 experience (how many cases per year? success rates?)</li>
                                <li>Request references from previous international patients if possible</li>
                            </ul>
                            <p><strong>Verify Visa Requirements</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Research visa requirements for your destination country</li>
                                <li>Some countries offer medical tourism visas with extended stays</li>
                                <li>Visa processing can take weeks—apply well in advance</li>
                                <li>Ensure your passport is valid for at least 6 months beyond your travel dates</li>
                                <li>Understand visa requirements for multiple entries if you'll be making 2-3 trips</li>
                            </ul>
                            <p><strong>Arrange Local Monitoring if Possible</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Some international clinics partner with dentists in major cities worldwide</li>
                                <li>Ask if your clinic has a monitoring dentist in your area</li>
                                <li>Alternatively, ask your home dentist if they'll provide monitoring during healing</li>
                                <li>Having local support for check-ups and addressing minor issues provides peace of mind</li>
                                <li>Clarify costs for local monitoring services</li>
                            </ul>
                            <p><strong>Prepare Your Home Dentist</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Inform your regular dentist about your international All-on-6 plans</li>
                                <li>While some may disapprove, others will agree to provide follow-up care if needed</li>
                                <li>Ask if they'll be available for emergency care if complications arise</li>
                                <li>Discuss their willingness to perform routine cleanings and maintenance on your All-on-6</li>
                                <li>Having this arranged in advance provides security</li>
                            </ul>
                            <p><strong>Create a Comprehensive Communication Plan</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Get multiple contact methods for your international clinic (phone, email, WhatsApp, Telegram, Skype)</li>
                                <li>Clarify their availability for questions during your healing period</li>
                                <li>Understand time zone differences for scheduling video check-ins</li>
                                <li>Ask about their emergency protocols if serious complications arise</li>
                                <li>Get contact information for English-speaking staff (or translators for your language)</li>
                                <li>Establish a schedule for check-in appointments during your healing period</li>
                            </ul>
                            <p><strong>Understand Legal Recourse and Protections</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Research malpractice laws in your destination country</li>
                                <li>Understand what legal protections exist if something goes wrong</li>
                                <li>Pursuing legal action internationally is extremely difficult and expensive</li>
                                <li>Consider whether your travel insurance or credit card offers any medical travel protections</li>
                                <li>Some countries have medical tourism regulatory bodies that handle complaints</li>
                            </ul>
                            <p><strong>Optimize Your Health Before Surgery</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>If you smoke</strong>: Quit at least 2-4 weeks before surgery and commit to staying smoke-free during healing</li>
                                <li><strong>If diabetic</strong>: Work with your doctor to optimize blood sugar control before surgery</li>
                                <li><strong>Dental health</strong>: Address any gum disease or infections before traveling</li>
                                <li><strong>Nutrition</strong>: Ensure good nutritional status; consider vitamin D and calcium supplementation</li>
                                <li><strong>Medications</strong>: Discuss all medications with your dentist; some may need to be adjusted before surgery</li>
                                <li><strong>Overall health</strong>: Be in the best possible health before undergoing major surgery</li>
                            </ul>
                            <p><strong>Plan for Extended Absence</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Arrange work coverage for your time away</li>
                                <li>Set up bill payments and other responsibilities</li>
                                <li>Arrange pet care or plant watering if needed</li>
                                <li>Notify your bank and credit card companies of international travel to avoid card blocks</li>
                                <li>Set up international phone service or plan to purchase local SIM card</li>
                                <li>Download offline maps and translation apps for your destination</li>
                            </ul>
                            <p><strong>Pack Your \"All-on-6 Recovery Kit\"</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>All medications and supplements you regularly take (bring extra in case of delays)</li>
                                <li>Copies of all medical and dental records</li>
                                <li>Contact information for your home dentist and doctors</li>
                                <li>Travel insurance information and emergency contacts</li>
                                <li>Comfortable recovery clothing</li>
                                <li>Entertainment for downtime (books, tablet, etc.)</li>
                                <li>Soft food supplies for the flight home (protein shakes, etc.)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 id="conclusion" className="text-2xl font-semibold">
                            Conclusion: Key Takeaways for International All-on-6 Patients
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Planning international All-on-6 treatment requires careful consideration of multiple factors, but with proper preparation, it can be a life-changing experience that restores your smile, confidence, and quality of life while potentially saving significant money. Let's recap the essential points:</p>
                            <p><strong>All-on-6 requires multiple visits for biological, technical, and quality reasons</strong>—not because dentists are trying to extend your treatment. Osseointegration takes 3-6 months minimum, and there's no way to safely accelerate this process. Attempting to rush All-on-6 compromises your long-term success.</p>
                            <p><strong>Plan for 2-3 international trips</strong> spaced months apart:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Trip 1: Initial procedures (extractions, grafting, and/or implant placement)</li>
                                <li>Healing period: 3-6 months at home with temporary prosthetic</li>
                                <li>Trip 2: Final prosthetic delivery and adjustments</li>
                                <li>Possible Trip 3: If extractions or bone grafting require staging</li>
                            </ul>
                            <p><strong>Total timeline is typically 4-17 months</strong> depending on your specific needs:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Standard cases (no extractions/grafting): 4-7 months</li>
                                <li>With extractions: 7-11 months</li>
                                <li>With bone grafting: 10-17 months</li>
                            </ul>
                            <p><strong>Budget for total costs, not just procedure prices</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>All-on-6 procedure: $15,000-$30,000+ per arch</li>
                                <li>Travel costs: $5,000-$15,000+ for multiple trips</li>
                                <li>Contingency fund: 25-35% extra for unexpected expenses</li>
                                <li>Calculate whether international treatment truly saves money when all costs are included</li>
                            </ul>
                            <p><strong>Healing factors are individual and variable</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Bone density, smoking status, diabetes, and overall health significantly impact your timeline</li>
                                <li>Compliance with aftercare instructions is critical for success</li>
                                <li>Complications can occur even with excellent care—be prepared mentally and financially</li>
                            </ul>
                            <p><strong>Strategic planning is essential</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Send complete records in advance for accurate treatment planning</li>
                                <li>Choose your clinic carefully based on credentials, experience, and reviews</li>
                                <li>Establish clear communication protocols for your healing period</li>
                                <li>Arrange local monitoring if possible</li>
                                <li>Build flexibility into your schedule for unexpected delays</li>
                            </ul>
                            <p><strong>Set realistic expectations</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>All-on-6 is major surgery with significant recovery period</li>
                                <li>Adaptation to your new teeth takes 1-3 months</li>
                                <li>Final results aren't apparent until permanent prosthetic is placed</li>
                                <li>Long-term maintenance is required for lasting success</li>
                                <li>Complications are possible and don't necessarily indicate poor treatment</li>
                            </ul>
                            <p><strong>The cheapest option isn't always the best value</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Consider total costs including travel, not just procedure prices</li>
                                <li>Evaluate the clinic's reputation, dentist's experience, and quality of materials</li>
                                <li>Factor in the challenges of managing complications from abroad</li>
                                <li>Sometimes local treatment is more economical when all factors are considered</li>
                            </ul>
                            <p><strong>All-on-6 can be life-changing when done right</strong>:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Restores full chewing function and confidence</li>
                                <li>Eliminates the hassle of removable dentures</li>
                                <li>Preserves jawbone and facial structure</li>
                                <li>Can last 15-20+ years with proper care</li>
                                <li>Dramatically improves quality of life for patients with failing teeth or dentures</li>
                            </ul>
                            <p>Remember, All-on-6 is one of the most significant dental investments you'll ever make. It's not just about replacing teeth—it's about restoring your ability to eat, speak, smile, and live confidently. This outcome is worth the time, planning, and investment required to do it right.</p>
                            <p>While international dental treatment offers potential savings and access to skilled practitioners, it's not the right choice for every patient. Carefully weigh the benefits against the challenges of coordinating complex care across borders. Consider your ability to make multiple international trips, manage healing at home without easy access to your dentist, and handle potential complications from a distance.</p>
                            <p>If you do decide to pursue All-on-6 abroad, choose your destination and clinic carefully, plan meticulously, communicate clearly, and maintain realistic expectations. Work with dentists who prioritize your long-term success over convenience or speed. Be wary of clinics promising unrealistic timelines or prices that seem too good to be true.</p>
                            <p>Your smile is worth the time and effort to get it right. All-on-6 done properly can provide decades of function, aesthetics, and confidence. All-on-6 done hastily or cheaply can result in failure, complications, and the need for costly revision treatment.</p>
                            <p>Take your time, do your research, ask questions, and make informed decisions. With proper planning and the right dental team, international All-on-6 treatment can be a successful, rewarding experience that transforms your life.</p>
                            <p>Safe travels, and here's to your new smile—one that will serve you well for decades to come!</p>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
