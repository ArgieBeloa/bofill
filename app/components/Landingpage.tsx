"use client";

import Image from "next/image";

import {
  FaAward,
  FaCalendarCheck,
  FaHandHoldingHeart,
  FaHandshake,
  FaHeart,
  FaLock,
  FaUserFriends,
  FaUserMd,
  FaUserShield,
} from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";
import ROOM from "@/app/assets/room.png";
import { textSizes } from "@/app/lib/responsiveTextSizes";

export default function Landingpage() {
  return (
    <section className="relative min-h-[calc(100vh-80px)]  z-0">
      <main className="flex flex-row justify-between">
        {/* Left Side */}
        <div className="relative z-10 flex flex-col w-full lg:w-170 px-5 sm:px-8 lg:pl-15 lg:pr-0">
          <div className="flex items-center gap-2 mt-5">
            <FaHandHoldingHeart className="text-blue-600 text-2xl" />
            <h2 className="font-semibold lg:text-[16px] tracking-tight leading-tight">
              Where Compassion Meets Professional Care
            </h2>
          </div>

          <h1
            className={`mt-4 font-semibold tracking-tight leading-tight ${textSizes.h1}`}
          >
            Your Story, <span className="...">Matters.</span>
          </h1>

          <p
            className={`mt-4 max-w-xl text-lg leading-8 text-gray-600 ${textSizes.paragraph}`}
          >
            We provide compassionate, evidence-based psychological care to help
            you overcome life's challenges, strengthen emotional resilience, and
            achieve lasting mental well-being.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
            <Link
              href="/book"
              className="group flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-blue/50 text-black font-semibold text-sm sm:text-base shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              <span>Book a Session</span>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                <FaCalendarCheck className="text-white text-sm" />
              </div>
            </Link>

            <Link
              href="/practitioners"
              className="group flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-blue/50 text-black font-semibold text-sm sm:text-base shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              <span>Meet Our Practitioners</span>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black border border-black/30 group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                <HiOutlineUserGroup className="text-white text-lg" />
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-4 mx-0 lg:mr-15 grid grid-cols-3 gap-2 sm:gap-6 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="flex flex-col text-center justify-center items-center my-3 sm:my-5 px-1">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white text-sm sm:text-base">
                <FaUserFriends />
              </div>
              <h2 className="font-bold text-slate-900 text-base sm:text-2xl">
                500+
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-tight">
                Happy Clients
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center my-3 sm:my-5 px-1">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white text-sm sm:text-base">
                <FaUserMd />
              </div>
              <h2 className="font-bold text-slate-900 text-base sm:text-2xl">
                15+
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-tight">
                Expert Practitioners
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center my-3 sm:my-5 px-1">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white text-sm sm:text-base">
                <FaAward />
              </div>
              <h2 className="font-bold text-slate-900 text-base sm:text-2xl">
                10+
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-tight">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 py-3 mb-4 sm:py-2 mx-0 lg:mr-5 px-4 grid grid-cols-2 sm:flex sm:justify-around gap-4 sm:gap-2 rounded-2xl sm:rounded-4xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaUserShield className="text-blue-600 text-xl sm:text-2xl shrink-0" />
              <p className="text-sm sm:text-base leading-tight">
                Licensed
                <br />
                Professionals
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <FaHandshake className="text-blue-600 text-xl sm:text-2xl shrink-0" />
              <p className="text-sm sm:text-base leading-tight">
                Compassionate
                <br />
                Care
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <FaHeart className="text-blue-600 text-xl sm:text-2xl shrink-0" />
              <p className="text-sm sm:text-base leading-tight">
                Personalized
                <br />
                Support
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <FaLock className="text-blue-600 text-xl sm:text-2xl shrink-0" />
              <p className="text-sm sm:text-base leading-tight">
                Confidential &
                <br />
                Safe
              </p>
            </div>
          </div>

          {/* end of left div */}
        </div>

        {/* Right Side */}
        <div
          className="hidden md:hidden lg:block absolute w-180 min-h-[calc(100vh-80px)] top-0 right-0 z-[-1] overflow-hidden bg-linear-to-br from-blue-100 via-white to-blue-200 shadow-[0_30px_80px_rgba(37,99,235,0.18)]"
          style={{
            borderRadius: "100% 0% 75% 30% / 80% 100% 0% 41%",
          }}
        >
          <Image
            src={ROOM}
            alt="Bofill Room"
            fill
            priority
            className="object-cover"
          />
        </div>
      </main>
    </section>
  );
}
