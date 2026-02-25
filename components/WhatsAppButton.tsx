import Image from "next/image";

export default function WhatsAppButton() {
  const href = "https://wa.me/905518370400";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <span className="flex items-center justify-center rounded-full  shadow-lg shadow-emerald-200/60 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]">
        <Image
          src="/images/whtsp.png"
          alt="WhatsApp"
          width={50}
          height={50}
          className="h-14 w-14"
          priority
        />
      </span>
    </a>
  );
}
