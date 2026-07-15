"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS, SCHOOL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);
  const openMenu = useCallback((label: string) => setOpenDropdown(label), []);
  const closeMenu = useCallback(() => setOpenDropdown(null), []);
  const toggleMenu = useCallback(
    (label: string) => setOpenDropdown((prev) => (prev === label ? null : label)),
    [],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-green-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            closeMobile();
          }
        }}
      >
        <Link
          href="/"
          prefetch
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={closeMobile}
        >
          <Logo
            variant="crest"
            className="h-12 w-auto shrink-0 transition-transform group-hover:scale-105"
            priority
            sizes="52px"
          />
          <div className="min-w-0 text-center">
            <p className="font-serif text-[13px] font-bold uppercase leading-none tracking-wide text-green-800 sm:text-[15px]">
              Pine Crest
            </p>
            <p className="mt-0.5 font-serif text-[10px] font-semibold uppercase leading-none tracking-[0.38em] text-green-800 sm:text-[12px] sm:tracking-[0.48em]">
              School
            </p>
            <p className="mt-0.5 whitespace-nowrap text-[7px] font-medium leading-none text-black sm:text-[8px]">
              {SCHOOL.slogan}
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            "children" in item && item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={closeMenu}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
                }}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${
                    pathname.startsWith(item.href) ? "text-green-800" : "text-slate-700"
                  }`}
                  onClick={() => toggleMenu(item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  aria-controls={`desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
                {openDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-green-100 bg-white p-2 shadow-xl"
                    id={`desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        prefetch
                        className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-green-50 hover:text-green-800"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  prefetch
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-green-50 ${
                    pathname === item.href ? "text-green-800" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/admissions/apply" size="sm">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg p-2 text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 lg:hidden"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? "mobile-nav" : undefined}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-green-100 bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  prefetch
                  className="block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-green-50"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <ul className="ml-4 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          prefetch
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-green-50"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button href="/admissions/apply" className="w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
