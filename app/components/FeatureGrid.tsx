import Image from "next/image";
import { Button } from "@/components/ui/button";

// A reusable component for the text blocks in the grid.
const TextBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center p-4 xl:p-16 bg-white h-full xl:min-h-[50vh]">
      <p className="text-black text-base xl:text-6xl">{children}</p>
    </div>
  );
};

// A reusable component for the image blocks in the grid.
const ImageBlock = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

// The main component for your new section.
export default function FeatureGrid() {
  return (
    <section className="py-16 xl:py-0">
      <div className="max-w-[1920px] mx-auto">
        {/*
          This is the main grid container.
          - `grid`: Establishes the grid layout.
          - `grid-cols-2`: Creates two columns of equal width.
          - `gap-4`: Adds a small gap between all grid items.
        */}
        <div className="grid grid-cols-2">
          {/* --- Row 1 --- */}
          {/* Text on the left */}
          <TextBlock>
            Our in depth and up to date{" "}
            <span className="font-bold">knowledge of Mykonos,</span> puts us in
            a unique position of <span className="font-bold">authority,</span>{" "}
            when it comes to travel itineraries and{" "}
            <span className="font-bold">travel advice.</span>
          </TextBlock>
          {/* Image on the right */}
          <ImageBlock
            src="/images/mykonos-up-to-date-knowledge.png"
            alt="Feature one image"
          />

          {/* --- Row 2 --- */}
          {/* Image on the left */}
          <ImageBlock
            src="/images/mykonos-popular-places.png"
            alt="Feature two image"
          />
          {/* Text on the right */}
          <TextBlock>
            <span className="font-bold">Every year,</span> we compile a{" "}
            <span className="font-bold">list</span> of all the{" "}
            <span className="font-bold">popular places</span> per category in{" "}
            <span className="font-bold">Mykonos,</span> and we are happy to{" "}
            <span className="font-bold">share</span> these in the sections
            below.
          </TextBlock>

          {/* --- Row 3 --- */}
          {/* Text on the left */}
          <TextBlock>
            Our <span className="font-bold">Mykonos travel blog</span> is the
            product of <span className="font-bold">data</span> gathering and{" "}
            <span className="font-bold">analysis</span> of thousands of{" "}
            <span className="font-bold">rides</span> from our{" "}
            <span className="font-bold">Mykonos Taxi fleet.</span> we hope you
            find these useful
          </TextBlock>
          {/* Image on the right */}
          <ImageBlock
            src="/images/mykonos-travel-blog.png"
            alt="Feature three image"
          />
          <div className="relative">
            <Button className="absolute -mb-24 xl:mb-0 bottom-0 left-4 xl:bottom-16 xl:left-16 rounded-full px-6 py-3 text-lg font-medium bg-[#2B2B6E] hover:bg-[#21215a]">
              Download our Mykonos Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
