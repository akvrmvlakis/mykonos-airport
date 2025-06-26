"use client"; // Accordion components from shadcn/ui are client components

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// This is a reusable FAQ Accordion component.
export default function FaqAccordion() {
  return (
    // The `type="single"` prop means only one item can be open at a time.
    // `collapsible` allows all items to be closed.
    <div className="w-full max-w-4xl mx-auto p-8 bg-[#CCD3E1] rounded-xl">
      <h2 className="text-3xl font-bold text-start mb-8">
        Frequently asked questions about Mykonos
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Is Online booking available 24/7 for Mykonons
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the payment options when booking a taxi for Mykonos with
            Aegean Taxi
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Will i get instant confirmation of my car and driver details
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How can i track my Mykonos Taxi after booking online
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can i find a taxi or transfer in Mykonos?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="py-12">
        <Button className="w-full text-lg font-bold">Read More</Button>
      </div>
    </div>
  );
}
