// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    // This <main> tag correctly takes up the full available screen height
    // because of the `flex-1` in our layout. It is also a flex column.
    <main className="flex-1 flex flex-col">
      {/*
        This single <div> is now our entire hero section.
      */}

      {/* THE FIX: Added min-h-[100dvh] to fix mobile viewport height */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 bg-[linear-gradient(207.86deg,_#2A54EF,_#234BD4,_#113286,_#0B2146)] min-h-[100dvh]">
        {/*
          This inner container is ONLY for setting a max-width on your content
          and adding the vertical space between the items.
        */}
        <div className="max-w-screen-2xl w-full space-y-10">
          {/* --- Top Element --- */}
          <div className="max-w-[311px]">
            <h1 className="font-bold text-white text-start text-[30px]">
              Mykonos travel guide and information
            </h1>
          </div>

          {/* --- Middle Element --- */}
          <div className="grid place-items-end -mb-4">
            {/* This image is moved UP by 4rem (64px) */}
            <Image
              className="-translate-y-16 z-0"
              src="/images/travel-information-vector.svg"
              width={227}
              height={213}
              alt="Travel information map icon"
            />

            {/* This image is also moved UP, contributing to the empty space */}
            <Image
              className="-translate-y-6 z-10 row-start-1 col-start-1"
              src="/images/travel-guide-vector.svg"
              width={95}
              height={94}
              alt="Travel guide icon"
            />
          </div>

          {/* --- Bottom Element --- */}
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-white text-start text-xl font-medium max-w-xl mx-auto">
              The ultimate up to date Mykonos travel guide, through the
              knowledge of real experts.
            </h2>
          </div>

          {/* --- WhatsApp Button --- */}
          <div className="flex self-start">
            <div className="inline-flex items-center gap-3 bg-white rounded-xl p-1">
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
      </div>
    </main>
  );
}
