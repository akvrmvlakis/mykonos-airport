"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-800 text-2xl font-normal p-4 border-b border-gray-200 transition-colors duration-200 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
};

const DesktopNavLink = ({
  href,
  children,
  isHomePage,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isHomePage: boolean;
  isScrolled: boolean;
}) => {
  const showDarkText = !isHomePage || isScrolled;
  const linkColor = showDarkText ? "text-gray-700" : "text-white";
  const hoverBg = showDarkText ? "hover:bg-gray-100" : "hover:bg-white/10";
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${linkColor} ${hoverBg}`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const showSolidNav = hasMounted && (!isHomePage || isScrolled);
  const navTheme = showSolidNav ? "dark" : "light";

  const baseNavClasses =
    "w-full fixed top-0 py-1 z-30 transition-all duration-300 ease-in-out";
  const backgroundClasses = showSolidNav ? "bg-white" : "bg-transparent";

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

  const menuItems = [
    { href: "/", label: "Mykonos" },
    { href: "/airport", label: "Mykonos Airport" },
    { href: "/port", label: "Mykonos Port" },
    { href: "/getting-around", label: "Getting Around" },
    { href: "/beaches", label: "Beaches" },
  ];

  return (
    <>
      <nav
        className={`${baseNavClasses} ${backgroundClasses} ${
          showSolidNav ? "text-black" : "text-white"
        }`}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 py-2 xl:py-4 xl:px-8">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src={logoPolygonSrc}
                  alt="Aegean Taxi Logo Polygon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[150px] h-[22px] md:w-[156px] md:h-[24px] -ms-2 xl:-ms-1.5">
                <Image
                  src={logoSrc}
                  alt="Aegean Taxi Logo"
                  fill
                  sizes="(max-width: 768px) 150px, 156px"
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <DesktopNavLink
                key={item.href}
                href={item.href}
                isHomePage={isHomePage}
                isScrolled={isScrolled}
              >
                {item.label}
              </DesktopNavLink>
            ))}
          </nav>
          <div className="flex-1 flex justify-end items-center">
            <Link
              href="https://apps.apple.com/gr/app/aegean-taxi-ride-app/id6447252101"
              className="relative block w-[115px] h-[45px] md:w-[125px] md:h-[55px]"
            >
              <Image
                src={appstoreIconSrc}
                alt="Apple App Store Icon"
                fill
                sizes="(max-width: 768px) 115px, 125px"
              />
            </Link>
            <button onClick={() => setIsOpen(true)} className="p-2 md:hidden">
              <span className="sr-only">Open menu</span>
              <div className="relative w-5 h-5">
                <Image
                  src={menuIconSrc}
                  alt="Menu Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed top-0 left-0 h-full w-[90%] max-w-sm bg-white z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col">
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
