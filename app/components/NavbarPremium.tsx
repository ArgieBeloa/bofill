"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaUserMd,
  FaConciergeBell,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const NavbarPremium = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = (href: string, mobile = false) =>
    `relative font-medium transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-0.5
    after:bg-blue-600 after:transition-all after:duration-300 ${
      mobile ? "text-lg py-3 flex items-center gap-3 w-full" : "px-2 py-2"
    } ${
      pathname === href
        ? "text-blue-600 after:w-full"
        : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    }`;

  const links = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaInfoCircle },
    { href: "/practitioners", label: "Practitioners", icon: FaUserMd },
    { href: "/services", label: "Services", icon: FaConciergeBell },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex h-16 sm:h-20 items-center justify-between px-4 sm:px-5 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/65 backdrop-blur-3xl border-white/30 shadow-[0_10px_40px_rgba(15,23,42,0.10)] supports-backdrop-filter:bg-white/55"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <h1 className="uppercase text-lg sm:text-xl lg:text-2xl font-bold tracking-widest leading-tight">
          bofill
        </h1>
        <h1 className="hidden sm:block uppercase text-[10px] lg:text-xs font-semibold tracking-widest leading-tight">
          PSYCHOLOGICAL SERVICES INC.
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex gap-6 xl:gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Book a Session - Desktop */}
      <div className="hidden lg:flex">
        <Link
          href="/book"
          className="
      flex items-center gap-3
      px-6 py-2
      rounded-full
      bg-white/20
      backdrop-blur-md
      border border-white/30
      text-black font-semibold
      shadow-lg
      hover:bg-white/30
      hover:scale-105
      transition-all duration-300
    "
        >
          Book a Session
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black">
            <FaArrowRight className="text-white text-sm" />
          </div>
        </Link>
      </div>
      
      {/* Mobile/Tablet: hamburger toggle */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-black shrink-0"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Mobile/Tablet: dropdown drawer */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 sm:top-20 bg-white/95 backdrop-blur-2xl shadow-lg border-t border-white/30 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center px-6 py-4 divide-y divide-gray-200">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className={navLinkClass(link.href, true)}
                >
                  <Icon
                    className={
                      pathname === link.href ? "text-blue-600" : "text-gray-500"
                    }
                    size={18}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-6 pb-6 flex justify-center">
          <Link
            href="/book"
            className="
      flex items-center gap-3
      px-6 py-2
      rounded-full
      bg-white/20
      backdrop-blur-md
      border border-white/30
      text-black font-semibold
      shadow-lg
      hover:bg-white/30
      transition-all duration-300
    "
          >
            Book a Session
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black">
              <FaArrowRight className="text-white text-sm" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPremium;
