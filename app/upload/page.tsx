import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StartForm from "@/components/StartForm";

export const metadata: Metadata = {
    title: "Upload Dental Photos & X-Rays | Free Treatment Plan",
    description: "Upload your dental photos and X-rays to receive a precise treatment plan, cost estimate, and timeline before you travel to Turkey for dental care.",
};

const steps = [
    {
        title: "Front smile (teeth together)",
        body: "Take a clear photo of your front teeth with your bite closed and lips gently pulled back.",
    },
    {
        title: "Right side bite",
        body: "Bite down naturally and photograph the right side so we can see how your teeth meet.",
    },
    {
        title: "Left side bite",
        body: "Repeat on the left side with a steady, well-lit photo that shows the bite relationship.",
    },
    {
        title: "Lower teeth (looking down)",
        body: "Open wide and angle the camera from above to show the chewing surfaces of your lower teeth.",
    },
    {
        title: "Upper teeth (looking up)",
        body: "Tilt your head back and aim the camera upward to capture the chewing surfaces of your upper teeth.",
    },
];

export default function UploadPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-14">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-brand-muted">Treatment review</p>
                        <h1 className="text-3xl sm:text-4xl font-bold text-brand-secondary">
                            Upload Your Dental Photos & X-Rays
                        </h1>
                        <p className="text-lg text-gray-700">
                            Share clear photos and any X-rays you have so our clinicians can review your case, outline a precise plan, and give you an informed estimate before you travel.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/start"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold shadow-sm transition"
                                style={{ backgroundColor: "#21CDC0" }}
                            >
                                Upload Photos Now
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-ring transition"
                            >
                                Prefer email? Send files
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">
                            <Image
                                src="/images/dentalselfy.jpg"
                                alt="Example collage showing the five dental selfie angles"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">
                            Why Your Photos & X-Rays Are So Important
                        </h2>
                        <p className="text-gray-700">
                            Accurate visuals help us check the condition of your teeth, gums, and bite so we can recommend the safest path forward. The clearer your photos, the more tailored and realistic your plan, costs, and timeline will be.
                        </p>
                        <p className="text-gray-700">
                            If you have a recent panoramic X-ray, include it. It helps us see bone levels, roots, and existing work so we can flag any risks or additional steps early.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">
                            How to Send Your Photos and X-Rays
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-brand-ring bg-brand-surface p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">Upload via form</h3>
                                <p className="text-gray-700 text-sm">Attach multiple photos/X-rays directly in the form below. We keep your data secure.</p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">Send by email</h3>
                                <p className="text-gray-700 text-sm">Email your files to <a className="text-brand-primary underline" href="mailto:dentalclinicturkiye@gmail.com">dentalclinicturkiye@gmail.com</a> with your name and phone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-6">
                <h2 className="text-2xl font-semibold text-brand-secondary">How to Take Good Dental Photos at Home</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
                    <p className="text-gray-700">
                        Use bright lighting, steady hands, and a clean spoon or fingers to gently retract lips and cheeks if needed. Take all five angles below.
                    </p>
                    <ol className="space-y-4">
                        {steps.map((step, idx) => (
                            <li key={step.title} className="flex gap-4">
                                <div className="flex-none h-10 w-10 rounded-full bg-brand-ring text-brand-secondary font-semibold grid place-items-center">
                                    {idx + 1}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                    <p className="text-gray-700 text-sm">{step.body}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">Watch: How to Take Dental Selfies at Home</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: "56.25%" }}>
                        <video
                            className="absolute inset-0 h-full w-full"
                            controls
                            preload="metadata"
                            poster="/images/dentalselfy.jpg"
                            controlsList="nodownload"
                        >
                            <source src="/images/howtophoto.mp4#t=5.3" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">Sending a Panoramic X-Ray (If You Have One)</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-2">
                    <p className="text-gray-700">
                        If you already have a recent panoramic X-ray (taken within the last year), upload it with your photos. A clear pano lets us spot hidden issues, check bone levels for implants, and verify any root canal or crown work before suggesting a plan.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">What Happens After You Send Your Images?</h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Clinical review</h3>
                        <p className="text-gray-700 text-sm">A clinician reviews your photos/X-rays to understand your goals and oral health.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Plan & estimate</h3>
                        <p className="text-gray-700 text-sm">We outline treatment options, timelines, and an estimated cost range before you travel.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Next steps</h3>
                        <p className="text-gray-700 text-sm">You get clear next steps and can ask questions—no obligation to book.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">Upload Form</h2>
                        <p className="text-gray-700 text-sm">
                            Share your details and attach photos/X-rays. We will respond with a tailored plan and next steps.
                        </p>
                    </div>
                    <StartForm />
                </div>
            </section>

            <section className="bg-brand-surface border-t border-brand-ring py-10">
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-brand-secondary">Ready to share your photos?</h2>
                            <p className="text-gray-700 text-sm">
                                Upload now or email us—our clinicians will review and send a clear, unbiased plan.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/start"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-brand-primary text-dark font-semibold hover:bg-brand-primary-dark transition"
                            >
                                Upload via form
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-ring transition"
                            >
                                Email files
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
