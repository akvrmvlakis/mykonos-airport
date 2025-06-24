// src/app/getting-around/page.tsx

import Image from "next/image";
// --- 1. Import Card, Input, Label, and Button components from shadcn/ui ---

import Link from "next/link"; // Import Link for the WhatsApp button

export default function GettingAroundPage() {
  return (
    <main className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto">
      <section className="flex-1 flex flex-col justify-center items-center text-center xl:px-8 pt-24 pb-12 min-h-[100dvh]">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-x-16 items-center">
          {/* --- Left Column Wrapper --- 
            This container holds all the content for the left column.
          */}
          <div className="order-1 flex flex-col justify-start gap-8 px-4 xl:px-0">
            {/* Text Content and Desktop WhatsApp Button are now grouped together */}
            <div className="flex flex-col items-start gap-2 xl:gap-y-10">
              <h1 className="text-black text-start text-4xl xl:text-8xl font-bold max-w-xl xl:min-w-full">
                Getting around Mykonos
              </h1>
              <h2 className="text-black text-start text-xl xl:text-3xl font-semibold max-w-xl">
                Discover the best ways to explore Mykonos
              </h2>

              {/* WhatsApp Button (Desktop Only) - MOVED HERE */}
              <Link href="https://web.whatsapp.com/">
                {/* This wrapper is hidden on mobile and now appears below the text */}
                <div className="hidden xl:block">
                  <div className="inline-flex items-center gap-3 bg-gray-200 rounded-xl p-2">
                    <Image
                      src="/images/whatsapp.svg"
                      alt="Contact us on WhatsApp"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-xs opacity-90 leading-tight text-black me-4">
                        Click here to contact us directly on
                      </span>
                      <span className="text-xl font-bold leading-tight text-black">
                        WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* --- Right Column & Mobile Image Container --- */}
          <div className="order-2">
            {/* Image for Mobile Only */}
            <div className="relative w-full h-[30vh] xl:hidden -mt-12">
              <Image
                src="/images/mykonos-view-vector.svg"
                alt="Mykonos View"
                fill
                className="object-contain"
              />
              <Image
                src="/images/baggage-vector.svg"
                alt="Baggage"
                width={109}
                height={166}
                className="absolute top-26 left-8"
              />
            </div>

            {/* Image for Desktop Only */}
            <div className="hidden xl:block relative w-full h-[60vh]">
              <Image
                src="/images/mykonos-view-vector.svg"
                alt="Mykonos View"
                fill
                className="object-contain"
              />
              <Image
                src="/images/baggage-vector.svg"
                alt="Baggage"
                width={109}
                height={166}
                className="hidden xl:block absolute top-120 left-16"
              />
            </div>
          </div>

          {/* --- WhatsApp Button (Mobile Only) --- */}
          {/* This is the new element, ordered to be last on mobile */}
          <div className="order-3 justify-self-center xl:hidden pt-12">
            <div className="inline-flex items-center gap-3 bg-gray-200 rounded-xl p-2">
              <Image
                src="/images/whatsapp.svg"
                alt="Contact us on WhatsApp"
                width={50}
                height={50}
              />
              <div className="flex flex-col text-left">
                <span className="text-xs opacity-90 leading-tight text-black me-4">
                  Click here to contact us directly on
                </span>
                <span className="text-xl font-bold leading-tight text-black">
                  WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
