"use client";

export default function Hero() {
    return (
        <div aria-hidden className="fixed inset-0 z-0 pointer-events-none bg-[#f9fbff]">
            {/* Katman 1 - büyük, koyu mavi, yavaş dalga */}
            <div className="absolute inset-x-0 bottom-0 h-[34vh] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[200%] will-change-transform animate-[wave1_14s_linear_infinite]">
                    <WaveSVG className="w-full h-full" color="#9ED8FF" skew="-2" />
                </div>
                <div className="absolute inset-y-0 left-[100%] w-[200%] will-change-transform animate-[wave1_14s_linear_infinite]">
                    <WaveSVG className="w-full h-full" color="#9ED8FF" skew="-2" />
                </div>
            </div>

            {/* Katman 2 - açık mavi, hızlı ve daha keskin dalga */}
            <div className="absolute inset-x-0 bottom-0 h-[26vh] overflow-hidden opacity-95">
                <div className="absolute inset-y-0 left-0 w-[200%] will-change-transform animate-[wave2_8s_linear_infinite]">
                    <WaveSVG className="w-full h-full" color="#5EC7FF" skew="-4" />
                </div>
                <div className="absolute inset-y-0 left-[100%] w-[200%] will-change-transform animate-[wave2_8s_linear_infinite]">
                    <WaveSVG className="w-full h-full" color="#5EC7FF" skew="-4" />
                </div>
            </div>

            <style jsx global>{`
        @keyframes wave1 {
          0% { transform: translate3d(0,0,0) skewX(-2deg); }
          100% { transform: translate3d(-50%,0,0) skewX(-2deg); }
        }
        @keyframes wave2 {
          0% { transform: translate3d(0,0,0) skewX(-4deg); }
          100% { transform: translate3d(-50%,0,0) skewX(-4deg); }
        }
      `}</style>
        </div>
    );
}

/** SVG — eğimi (skew) parametreyle değiştirilebilir */
function WaveSVG({
    className,
    color = "#9ED8FF",
    skew = "0",
}: {
    className?: string;
    color?: string;
    skew?: string;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `skewX(${skew}deg)` }}
        >
            <path
                fill={color}
                d="M0,192L60,208C120,224,240,256,360,250.7C480,245,600,203,720,186.7C840,171,960,181,1080,186.7C1200,192,1320,192,1380,186.7L1440,181.3V320H0Z"
            />
            <path
                opacity="0.6"
                fill={color}
                d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,149.3C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192V320H0Z"
            />
        </svg>
    );
}