"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">


            {/* Sol taraf: görsel */}
            <div className="flex-1 mt-1 md:mt-0 relative z-10">
                <Image
                    src="/img/slider.png"  // 👈 leading slash
                    alt="Happy patients smiling after treatment"
                    width={550}
                    height={520}
                />
            </div>

            {/* Sağ taraf: yazı */}
            <div className="flex-1 text-center md:text-left space-y-6 z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2B3A55] leading-tight">
                    Achieve a <br /> <span className="text-[#3FB8FF]">Perfect Smile</span>
                    <br /> with First-Class Treatment
                </h1>
                <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                    Our mission is to help patients make informed decisions about their care by providing honest advice, educational resources, and second opinions from trusted dental professionals in Türkiye and abroad. <br />
                    Feel confident knowing you’re supported every step of the way — without clinic bias.

                </p>

            </div>
        </section>
    );
}