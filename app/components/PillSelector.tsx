"use client";

import React, { useState, useRef, useEffect } from "react";

export default function PillSelector({
  activePill,
  onPillClick,
  pillItems,
}: {
  activePill: string;
  onPillClick: (pill: string) => void;
  pillItems: string[];
}) {
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      if (container) {
        setShowLeftFade(container.scrollLeft > 10);
        const isScrolledToEnd =
          container.scrollWidth - container.scrollLeft - container.clientWidth <
          10;
        setShowRightFade(!isScrolledToEnd);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, [pillItems]);

  return (
    <div className="relative inline-block w-auto max-w-full mx-auto">
      <div
        className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 pointer-events-none rounded-full ${
          showLeftFade ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={scrollContainerRef}
        className="bg-white border border-gray-300 rounded-full p-1 flex items-center space-x-1 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {pillItems.map((item) => (
          <button
            key={item}
            onClick={() => onPillClick(item)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black flex-shrink-0
              ${
                activePill === item
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 pointer-events-none rounded-full ${
          showRightFade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
