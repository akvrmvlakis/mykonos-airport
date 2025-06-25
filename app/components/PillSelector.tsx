import React, { useState, useRef, useEffect } from "react";

// You can define the items for the pills here or pass them as props.
const pillItems = [
  "Psarou",
  "Ornos",
  "Kalo Livadi",
  "Mykonos Town",
  "Mykonos Port",
];

// This is the main component for the pill selector.
export default function PillSelector() {
  const [activePill, setActivePill] = useState(pillItems[0]);

  // --- STATE FOR FADE EFFECT ---
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // A ref to get direct access to the scrolling container element.
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // --- EFFECT TO HANDLE SCROLLING & FADES ---
  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        // Show left fade if scrolled more than a few pixels from the start.
        setShowLeftFade(container.scrollLeft > 10);

        // Show right fade if there is more content to scroll to on the right.
        const isScrolledToEnd =
          container.scrollWidth - container.scrollLeft - container.clientWidth <
          10;
        setShowRightFade(!isScrolledToEnd);
      }
    };

    // Check scroll position on mount and on resize.
    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      // Initial check
      handleScroll();
    }

    // Cleanup function to remove event listeners.
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount.

  return (
    // THE FIX:
    // 1. `w-auto` and `inline-block` are used to make the container's width
    //    dependent on its content.
    // 2. `max-w-full` ensures it doesn't overflow its parent on small screens.
    <div className="relative inline-block w-auto max-w-full mx-auto">
      {/* --- Left Fade/Blur Effect --- */}
      {/* THE FIX: Changed from-gray-100 to from-white to match the background */}
      <div
        className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 pointer-events-none rounded-full ${
          showLeftFade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* We add a style tag here to hide the scrollbar across all browsers. */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      {/* Main scrolling container */}
      <div
        ref={scrollContainerRef}
        className="bg-white border border-gray-300 rounded-full p-1 flex items-center space-x-1 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {pillItems.map((item) => (
          <button
            key={item}
            onClick={() => setActivePill(item)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black flex-shrink-0
              ${
                activePill === item
                  ? "bg-black text-white shadow"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- Right Fade/Blur Effect --- */}
      {/* THE FIX: Changed from-gray-100 to from-white to match the background */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 pointer-events-none rounded-full ${
          showRightFade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
