// src/app/airport/page.tsx

import Image from "next/image";
// --- 1. Import Card, Input, Label, and Button components from shadcn/ui ---
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link for the WhatsApp button

export default function Airport() {
  return (
    // The main container is a flex column.
    <main className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto">
      {/*
        --- HERO SECTION ---
        This section now fills the width of the main container.
      */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 xl:px-8 pt-24 pb-12 min-h-[100dvh]">
        {/*
          This inner container no longer needs a max-width, as its parent handles it.
          The order classes will rearrange content for mobile.
        */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-y-10 xl:gap-x-16 items-center">
          {/* --- Top Element --- */}
          {/* Order 1 on all screens */}
          <div className="order-3 max-w-sm xl:min-w-full justify-self-center xl:justify-self-start xl:col-start-1">
            <h1 className="font-bold text-black text-start text-[30px] xl:text-8xl hidden xl:block">
              Mykonos airport information
            </h1>
            <h2 className="font-semibold text-black text-center text-xl xl:hidden">
              Useful Mykonos airport information. Book a ride to and from
              Mykonos airport, for now or later.
            </h2>
          </div>

          {/* --- NEW Image for Mobile --- */}
          {/* THE FIX: Added -mx-4 to counteract the parent's px-4 and make the image full-width */}
          <div className="order-2 xl:hidden relative w-full h-[30vh] -mx-5">
            <Image
              src="/images/mykonos-airport-vector.svg"
              alt="Mykonos Airport"
              className="object-contain"
              width={402}
              height={271}
            />
          </div>

          {/* --- Form Container (Right Column on Desktop) --- */}
          {/* Order 4 on mobile, but resets on desktop to be placed by grid rules */}
          <div className="xl:min-w-0 order-4 xl:order-none grid place-items-center justify-self-center xl:justify-self-center xl:col-start-2 xl:row-start-1 xl:row-span-3">
            <Link href="https://aegeantaxi.com/">
              <Card className="min-w-[350px] xl:min-w-xl text-start">
                <CardHeader className="hidden xl:block">
                  <CardTitle>Book a Transfer</CardTitle>
                  <CardDescription>
                    Instantly book your ride for now or later.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-[19px] top-5 h-[calc(100%-2.5rem)] w-px border-l border-dashed border-gray-400"></div>
                    <div className="absolute left-[0.85rem] top-[1.1rem] h-3 w-3 rounded-full bg-blue-600 border-2 border-white ring-2 ring-gray-300"></div>
                    <div className="absolute left-[0.85rem] bottom-[1.1rem] h-3 w-3 rounded-full bg-gray-500 border-2 border-white ring-2 ring-gray-300"></div>
                    <div className="flex flex-col space-y-3">
                      <Input
                        id="from"
                        placeholder="From: Airport, Port, Hotel..."
                        className="pl-10"
                      />
                      <Input
                        id="to"
                        placeholder="To: Airport, Port, Hotel..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg">See Prices & Book</Button>
                </CardFooter>
              </Card>
            </Link>
          </div>

          {/* --- Bottom Element --- */}
          {/* Order 3 on mobile, but resets on desktop */}
          <div className="order-1 xl:order-3 flex flex-col justify-start items-center xl:items-start xl:col-start-1">
            <h2 className="hidden xl:block text-black text-start text-xl xl:text-3xl font-medium max-w-xl">
              Book a ride to and from Mykonos airport, for now or later.
            </h2>
            <h2 className="xl:hidden text-black text-center text-4xl font-bold max-w-xl">
              Mykonos Airport (JMK)
            </h2>
          </div>

          {/* --- WhatsApp Button --- */}
          {/* Order 5 on mobile, but resets on desktop */}
          <div className="order-5 xl:order-4 hidden xl:block justify-self-center xl:justify-self-start xl:col-start-1">
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
