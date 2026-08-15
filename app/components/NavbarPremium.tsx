"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const NavbarPremium = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    `relative px-2 py-2 font-medium transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-0.5
    after:bg-blue-600 after:transition-all after:duration-300 ${
      pathname === href
        ? "text-blue-600 after:w-full"
        : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 flex h-20 items-center transition-all duration-500 ${
        scrolled
          ? "bg-white/65 backdrop-blur-3xl border-white/30 shadow-[0_10px_40px_rgba(15,23,42,0.10)] supports-backdrop-filter:bg-white/55"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="ml-5">
        <h1 className="uppercase text-2xl font-bold tracking-widest">bofill</h1>
        <h1 className="uppercase font-semibold tracking-widest">
          PSYCHOLOGICAL SERVICES INC.
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex justify-center ">
        <ul className="flex gap-9">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>

          <li>
            <Link
              href="/practitioners"
              className={navLinkClass("/practitioners")}
            >
              Practitioners
            </Link>
          </li>

          <li>
            <Link href="/services" className={navLinkClass("/services")}>
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Book a Session */}
      <div className="mr-5">
        <button
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
          <div
            className="
              flex items-center justify-center
              w-9 h-9
              rounded-full
              bg-black
            "
          >
            <FaArrowRight className="text-white text-sm" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavbarPremium;
