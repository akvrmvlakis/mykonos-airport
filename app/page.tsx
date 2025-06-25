// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // THE FIX: The max-width and horizontal auto-margin are now applied here,
    // creating a centered container for the entire page.
    <main className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto">
      {/*
        --- HERO SECTION ---
        This section now fills the width of the main container.
      */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 xl:px-8 pt-24 pb-12 bg-[linear-gradient(207.86deg,_#2A54EF,_#234BD4,_#113286,_#0B2146)] min-h-[100dvh]">
        {/*
          This inner container no longer needs a max-width, as its parent handles it.
        */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-x-16 items-center">
          {/* --- Top Element --- */}
          <div className="max-w-[311px] xl:min-w-full justify-self-center xl:justify-self-start xl:col-start-1">
            <h1 className="font-bold text-white text-start text-[30px] xl:text-8xl">
              Mykonos travel guide and information
            </h1>
          </div>

          {/* --- Middle Element (Images) --- */}
          <div className="grid place-items-end -mb-4 justify-self-center xl:justify-self-end xl:col-start-2 xl:row-start-1 xl:row-span-3">
            <div className="relative w-[227px] h-[213px] xl:w-[440px] xl:h-[420px] -translate-y-16 z-0">
              <Image
                src="/images/travel-information-vector.svg"
                alt="Travel information map icon"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <div className="relative w-[95px] h-[94px] xl:w-[180px] xl:h-[179px] -translate-y-6 xl:translate-y-4 z-10 row-start-1 col-start-1">
              <Image
                src="/images/travel-guide-vector.svg"
                alt="Travel guide icon"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
          </div>

          {/* --- Bottom Element --- */}
          <div className="flex flex-col justify-start items-center xl:items-start xl:col-start-1">
            <h2 className="text-white text-start text-xl xl:text-3xl font-medium max-w-xl">
              The ultimate up to date Mykonos travel guide, through the
              knowledge of real experts.
            </h2>
          </div>

          {/* --- WhatsApp Button --- */}
          <div className="justify-self-center xl:justify-self-start xl:col-start-1">
            <div className="inline-flex items-center gap-3 bg-white rounded-xl p-2">
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

      {/* --- SECOND SECTION --- */}
      <section className="w-full grid xl:grid-cols-2 items-center">
        {/* Left Column (Content) */}
        <div className="flex flex-col justify-evenly items-start text-start px-4 xl:px-8 py-24 bg-[url(/images/mykonos-beach.png)] xl:bg-none bg-no-repeat bg-cover h-full min-h-[90vh]">
          <h1 className="text-[#2B2B6E] text-3xl xl:text-8xl font-bold max-w-md">
            We know Mykonos!
          </h1>
          <p className="font-bold text-base xl:text-3xl max-w-md">
            We have covered every inch of Mykonos island! Our Mykonos taxi fleet
            transports tourists in every beach, every restaurant, bar, and every
            tourist attraction in Mykonos. Our Mykonos Airport transfer and
            Mykonos Port transfer services welcome and transport thousands of
            tourists to and from the airport and ports of Mykonos.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#2B2B6E] text-white rounded-full px-6 py-3 text-lg font-medium hover:bg-[#21215a] transition-colors">
            Read more about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Right Column (Desktop Image) */}
        <div className="hidden xl:block bg-[url(/images/mykonos-beach.png)] bg-no-repeat bg-cover bg-center h-full min-h-[90vh]">
          {/* This div is empty because its background provides the visual content on desktop */}
        </div>
      </section>

      <section className="w-full grid xl:grid-cols-2 items-center">
        {/* Left Column (Content) */}
        {/* Replaced justify-evenly with justify-between */}
        <div className="flex flex-col justify-between items-start text-start px-4 xl:px-8 py-24 bg-gray-200 min-h-[90vh]">
          <h1 className="text-[#2B2B6E] text-3xl xl:text-6xl max-w-xl font-bold ">
            Our Services in Mykonos island
          </h1>
          <p className="font-medium text-base xl:text-3xl max-w-md">
            Operating since 2015, Aegean Taxi offers a comprehensive set of
            transportation services for Mykonos
          </p>
          {/* The parent container is now full-width on mobile and has a max-width on xl screens */}
          <div className="flex flex-col text-start text-xl w-full xl:max-w-sm">
            {/* Each Link is now a full-width flex container with a bottom border */}
            <Link
              href="https://aegeantaxi.com/taxi/mykonos-taxi-app/"
              className="group flex w-full items-center justify-between py-4 border-b border-[#999999]"
            >
              <p className="text-[#272729] font-semibold">Mykonos Taxi</p>
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1760A5] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="https://aegeantaxi.com/airport-transfers/mykonos/"
              className="group flex w-full items-center justify-between py-4 border-b border-[#999999]"
            >
              <p className="text-[#272729] font-semibold">
                Mykonos Airport Transfers
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1760A5] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="https://aegeantaxi.com/taxi/mykonos-taxi-app/"
              className="group flex w-full items-center justify-between py-4 border-b border-[#999999]"
            >
              <p className="text-[#272729] font-semibold">
                Mykonos Port Transfers
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1760A5] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="https://aegeantaxi.com/tours/mykonos/"
              className="group flex w-full items-center justify-between py-4 border-b border-[#999999]"
            >
              <p className="text-[#272729] font-semibold">Mykonos Tours</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1760A5] transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Right Column (Desktop Image) */}
        {/* Replaced justify-evenly with justify-between */}
        <div className="min-h-[90vh] flex flex-col justify-between items-start text-start px-4 xl:px-8 py-24">
          <h1 className="text-[#2B2B6E] text-3xl xl:text-6xl font-bold">
            Mykonos statistics (2024)
          </h1>
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center w-full max-w-4xl mx-auto py-8">
            {/* --- Column 1 --- */}
            <div className="flex flex-col items-center space-y-2 p-4">
              {/* This wrapper div ensures all icons have the same container size */}
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/passenger-vector.svg"
                  alt="Car fleet icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  545k
                </p>
                <p className="text-base text-black font-bold mt-4">Passenger</p>
                <p className="text-lg">arrivals</p>
              </div>
            </div>

            {/* --- Column 2 (Border Added) --- */}
            {/* Added border-l and border-black to create the vertical divider */}
            <div className="flex flex-col items-center space-y-2 p-4 border-l border-black">
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/passenger-group-vector.svg"
                  alt="Car categories icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  350
                </p>
                <p className="text-base text-black font-bold mt-4">Passenger</p>
                <p className="text-lg">trips</p>
              </div>
            </div>

            {/* --- Column 3 (Border Added) --- */}
            {/* Added border-l and border-black to create the vertical divider */}
            <div className="flex flex-col items-center space-y-2 p-4 border-l border-black">
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/summer-calendar-vector.svg"
                  alt="24/7 operations icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  210
                </p>
                <p className="text-base text-black font-bold mt-4">
                  Operational
                </p>
                <p className="text-lg">days</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center w-full max-w-4xl mx-auto py-8">
            {/* --- Column 1 --- */}
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/point-to-point-vector.svg"
                  alt="Car fleet icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  2.5M
                </p>
                <p className="text-base text-black font-bold mt-4">Distance</p>
                <p className="text-lg">covered</p>
              </div>
            </div>

            {/* --- Column 2 (Border Added) --- */}
            {/* Added border-l and border-black to create the vertical divider */}
            <div className="flex flex-col items-center space-y-2 p-4 border-l border-black">
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/pin-gate-vector.svg"
                  alt="Car categories icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  215
                </p>
                <p className="text-base text-black font-bold mt-4">Places</p>
                <p className="text-lg">visited</p>
              </div>
            </div>

            {/* --- Column 3 (Border Added) --- */}
            {/* Added border-l and border-black to create the vertical divider */}
            <div className="flex flex-col items-center space-y-2 p-4 border-l border-black">
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  src="/images/survey-vector.svg"
                  alt="24/7 operations icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-2xl xl:text-4xl font-bold text-[#2A56F6]">
                  220
                </p>
                <p className="text-base text-black font-bold mt-4">Drivers</p>
                <p className="text-lg">surveyed</p>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 bg-[#2B2B6E] text-white rounded-full px-6 py-3 text-lg font-medium hover:bg-[#21215a] transition-colors">
            Download Mykonos Statistics
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v11.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 15.586V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
