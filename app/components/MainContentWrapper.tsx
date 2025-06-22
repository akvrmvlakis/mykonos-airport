"use client";

import { usePathname } from "next/navigation";

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the hook to get the current page path
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Conditionally set the padding class
  // On the homepage, there's no top padding. On all other pages, `pt-24` is added.
  const mainClasses = isHomePage ? "" : "pt-16 xl:pt-24";

  return <main className={mainClasses}>{children}</main>;
}
