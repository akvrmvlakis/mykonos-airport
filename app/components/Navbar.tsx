// src/app/components/Navbar.tsx

"use client"; // This directive makes this a Client Component

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook

export default function Navbar() {
  // Get the current URL pathname (e.g., '/', '/about', etc.)
  const pathname = usePathname();

  // Check if the current page is the homepage
  const isHomePage = pathname === "/";

  // -- CONDITIONAL STYLING --
  // Determine the correct styles and image sources based on the page
  const navTheme = isHomePage ? "light" : "dark";

  // Define classes for the <nav> element
  const navClasses = isHomePage
    ? "absolute top-2 z-10" // On homepage: absolute positioning to overlay the hero
    : "relative shadow-md bg-white"; // On other pages: normal flow with a background and shadow

  // Define image sources based on the theme
  const menuIconSrc =
    navTheme === "light"
      ? "/images/menu-icon-light.svg"
      : "/images/menu-icon-dark.svg";
  const logoPolygonSrc =
    navTheme === "light"
      ? "/images/aegean-taxi-logo-polygon-light.svg"
      : "/images/aegean-taxi-logo-polygon-dark.svg";
  const logoSrc =
    navTheme === "light"
      ? "/images/aegean-taxi-logo-light.svg"
      : "/images/aegean-taxi-logo-dark.svg";
  const appstoreIconSrc =
    navTheme === "light"
      ? "/images/appstore-icon-light.svg"
      : "/images/appstore-icon-dark.svg";

  return (
    // The nav classes and text color change dynamically
    <nav
      className={`w-full ${navClasses} ${
        isHomePage ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left column */}
        <div>
          <Image src={menuIconSrc} width={20} height={20} alt="Menu Icon" />
        </div>

        {/* Center column */}
        <div className="flex items-center">
          <Image
            src={logoPolygonSrc}
            width={20}
            height={20}
            alt="Aegean Taxi Logo Polygon"
          />
          <Image src={logoSrc} width={156} height={24} alt="Aegean Taxi Logo" />
        </div>

        {/* Right column */}
        <div>
          <Link href="https://apps.apple.com/gr/app/aegean-taxi-ride-app/id6447252101">
            <Image
              src={appstoreIconSrc}
              width={105}
              height={35}
              alt="Apple App Store Icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
