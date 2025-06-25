"use client";

import Image from "next/image";
import Link from "next/link";
import PillSelector from "@/components/PillSelector"; // Import the new component

export default function Beaches() {
  return (
    <main className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto">
      <section className="relative flex-1 flex flex-col justify-center items-center text-center xl:px-8 pt-24 pb-12 min-h-[70dvh] xl:min-h-[100dvh] bg-[url(/images/mykonos-beach.png)] bg-no-repeat bg-cover h-full xl:bg-none">
        <div className="absolute inset-0 bg-black/15 xl:hidden"></div>
        <div className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-x-16 items-center">
          <div className="order-1 flex flex-col justify-start gap-8 px-4 xl:px-0">
            <div className="flex flex-col items-start gap-2 xl:gap-y-10">
              <h1 className="text-white xl:text-black text-start text-4xl xl:text-8xl font-bold max-w-xl xl:min-w-full">
                Mykonos Beach Guide
              </h1>
              <h2 className="text-white xl:text-black text-start text-xl xl:text-3xl font-semibold max-w-xl">
                Explore Mykonos best beaches with Aegean Taxi
              </h2>

              <Link href="https://web.whatsapp.com/">
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
          <div className="order-2">
            <div className="hidden xl:block relative w-full h-[60vh]">
              <Image
                src="/images/mykonos-beach.png"
                alt="Mykonos View"
                className="object-cover"
                fill={true}
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex-1 flex flex-col justify-start xl:justify-center items-center text-center xl:px-8 pt-8 xl:pt-24 rounded-t-[38px] -mt-16 bg-white min-h-[100dvh] xl:min-h-[80dvh]">
        <div className="absolute inset-0 xl:hidden"></div>
        <div className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-y-10 xl:gap-x-16 items-center">
          <div className="order-1 flex flex-col justify-start gap-8 px-4 xl:px-0">
            <div className="flex flex-col items-center xl:items-start gap-2 xl:gap-y-10">
              <p className="text-black xl:text-black text-start text-base xl:text-3xl font-medium max-w-[250px] xl:max-w-3xl">
                Mykonos features an extraordinary coastal landscape, offering a
                mesmerising array of shorelines that host some of the world’s
                best beaches.
              </p>
              <p className="text-black xl:text-black text-start text-base xl:text-3xl font-medium max-w-[250px] xl:max-w-3xl">
                From pulsing party beaches that never sleep to tranquil hidden
                gems, Mykonos presents a beach experience as diverse as its
                visitors. The Aegean Taxi fleet has explored every single one of
                them, having transported thousands of tourists and received
                their feedback as well, so we offer you our own inside view of
                our top beaches in Mykonos.
              </p>
              <p className="text-black xl:text-black text-start text-base xl:text-3xl font-medium max-w-[250px] xl:max-w-3xl">
                Your ultimate beach adventure in Mykonos starts here!
              </p>
            </div>
          </div>
          <div className="order-2">
            <div className="relative w-full h-[40vh] xl:h-[70vh]">
              <Image
                src="/images/mykonos-beaches-vector.svg"
                alt="Mykonos View"
                className="object-contain"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex-1 flex flex-col justify-start xl:justify-center items-center text-center px-4 xl:px-8 pt-8 xl:pt-24 pb-12 rounded-t-[38px] -mt-16 bg-white min-h-[100dvh] xl:min-h-[80dvh]">
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="w-full">
            <PillSelector />
          </div>
        </div>
      </section>
    </main>
  );
}
