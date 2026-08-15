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

import ROOM from "@/app/assets/room.png";

import NavbarPremium from "./NavbarPremium";
import Practitioners from "@/app/practitioners/page";

export default function Landingpage() {
  return (
    <section className="relative min-h-[calc(100vh-80px)]  z-0">
  
      <main className="flex flex-row justify-between">
        {/* Left Side */}
        <div className="relative z-10 flex flex-col w-170 pl-15">
          <div className="flex items-center gap-2 mt-5">
            <FaHandHoldingHeart className="text-blue-600 text-xl" />
            <h2 className="font-semibold text-[16px] tracking-tight leading-tight">
              Where Compassion Meets Professional Care
            </h2>
          </div>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-tight">
            Your Story,{" "}
            <span className="font-['Playfair_Display'] italic font-normal text-blue-600">
              Matters.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            We provide compassionate, evidence-based psychological care to help
            you overcome life's challenges, strengthen emotional resilience, and
            achieve lasting mental well-being.
          </p>

          <div className="flex flex-row mt-5 gap-5">
            <button className="group flex items-center gap-3 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-blue/50 text-black font-semibold shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300">
              <span>Book a Session</span>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black group-hover:bg-blue-600 transition-colors duration-300">
                <FaCalendarCheck className="text-white text-sm" />
              </div>
            </button>

            <button className="group flex items-center gap-3 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-blue/50 text-black font-semibold shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300">
              <span>Meet Our Practitioners</span>

              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black border border-black/30 group-hover:bg-blue-600 transition-colors duration-300">
                <HiOutlineUserGroup className="text-white text-lg" />
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-4 mr-15 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="flex flex-col text-center justify-center items-center my-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <FaUserFriends />
              </div>
              <h2 className="font-bold text-slate-900">500+</h2>
              <p className="text-slate-600">Happy Clients</p>
            </div>

            <div className="flex flex-col text-center justify-center items-center my-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <FaUserMd />
              </div>
              <h2 className="font-bold text-slate-900">15+</h2>
              <p className="text-slate-600">Expert Practitioners</p>
            </div>

            <div className="flex flex-col text-center justify-center items-center my-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <FaAward />
              </div>
              <h2 className="font-bold text-slate-900">10+</h2>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 py-2 mr-5 px-4 flex justify-around rounded-4xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center gap-3">
              <FaUserShield className="text-blue-600 text-2xl" />
              <p>
                Licensed
                <br />
                Professionals
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaHandshake className="text-blue-600 text-2xl" />
              <p>
                Compassionate
                <br />
                Care
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaHeart className="text-blue-600 text-2xl" />
              <p>
                Personalized
                <br />
                Support
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaLock className="text-blue-600 text-2xl" />
              <p>
                Confidential &
                <br />
                Safe
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="absolute w-180 min-h-[calc(100vh-80px)] top-0 right-0 z-[-1] overflow-hidden bg-linear-to-br from-blue-100 via-white to-blue-200 shadow-[0_30px_80px_rgba(37,99,235,0.18)]"
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
