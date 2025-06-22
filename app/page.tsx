// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    // This <main> tag correctly takes up the full available screen height
    // because of the `flex-1` in our layout. It is also a flex column.
    <main className="flex-1 flex flex-col">
      {/*
        This single <div> is now our entire hero section.
        The min-h-[100dvh] fixes mobile viewport height issues.
      */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 bg-[linear-gradient(207.86deg,_#2A54EF,_#234BD4,_#113286,_#0B2146)] min-h-[100dvh]">
        {/*
          This container is now a responsive grid.
          - On mobile (default): It's a single-column grid, with items centered.
          - On desktop (xl:): It becomes a 2-column grid.
        */}
        <div className="max-w-screen-2xl w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-x-16 items-center">
          {/* --- Top Element --- */}
          {/* On desktop, this is explicitly placed in the first column */}
          <div className="max-w-[311px] xl:min-w-full justify-self-center xl:justify-self-start xl:col-start-1">
            <h1 className="font-bold text-white text-start text-[30px] xl:text-8xl">
              Mykonos travel guide and information
            </h1>
          </div>

          {/* --- Middle Element (Images) --- */}
          {/* This grid container now holds responsive wrappers for each image */}
          <div className="grid place-items-end -mb-4 justify-self-center xl:justify-self-end xl:col-start-2 xl:row-start-1 xl:row-span-3">
            {/* Wrapper for the first image with responsive sizing */}
            <div className="relative w-[227px] h-[213px] xl:w-[440px] xl:h-[420px] -translate-y-16 z-0">
              <Image
                src="/images/travel-information-vector.svg"
                alt="Travel information map icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Wrapper for the second image with responsive sizing */}
            <div className="relative w-[95px] h-[94px] xl:w-[180px] xl:h-[179px] -translate-y-6 xl:translate-y-4 z-10 row-start-1 col-start-1">
              <Image
                src="/images/travel-guide-vector.svg"
                alt="Travel guide icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* --- Bottom Element --- */}
          {/* On desktop, this is explicitly placed in the first column */}
          <div className="flex flex-col justify-start items-center xl:items-start xl:col-start-1">
            <h2 className="text-white text-start text-xl xl:text-3xl font-medium max-w-xl">
              The ultimate up to date Mykonos travel guide, through the
              knowledge of real experts.
            </h2>
          </div>

          {/* --- WhatsApp Button --- */}
          {/* On desktop, this is explicitly placed in the first column */}
          <div className="justify-self-center xl:justify-self-start xl:col-start-1">
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
