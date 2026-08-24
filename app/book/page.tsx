"use client";

import { useState } from "react";
import {
  FaCalendarCheck,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const services = [
  "Mental Health Counseling",
  "Psychotherapy",
  "Occupational Therapy",
  "Psychiatric Consultation",
  "Group Therapy",
  "Drug Dependency Exam (DDE)",
];

const reassurances = [
  {
    icon: FaShieldAlt,
    title: "Confidential by design",
    text: "Every session is private. Your information is never shared without consent.",
  },
  {
    icon: FaClock,
    title: "Response within 24 hours",
    text: "We'll confirm your preferred time or offer the nearest available slot.",
  },
  {
    icon: FaCalendarCheck,
    title: "Flexible scheduling",
    text: "In-person or online sessions, arranged around your availability.",
  },
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

const BookSessionPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-4 sm:px-6 py-14 sm:py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          <span className="h-px w-6 bg-blue-300" />
          Book a Session
          <span className="h-px w-6 bg-blue-300" />
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Take the first step{" "}
          <span className="font-['Playfair_Display'] italic font-normal text-blue-600">
            toward care.
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
          Tell us a little about what you&apos;re looking for, and we&apos;ll
          match you with the right practitioner and time.
        </p>
      </div>

      {/* Content */}
      <section className="mx-auto mt-12 sm:mt-16 grid max-w-6xl grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Left: reassurance panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="rounded-2xl bg-blue-950 text-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              What to expect
            </h2>
            <p className="mt-2 text-sm sm:text-base text-blue-100 leading-6 sm:leading-7">
              A short intake, then a conversation — not a diagnosis.
              You&apos;re in control of the pace.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              {reassurances.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200">
                      <Icon className="text-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-blue-100/80 leading-5 sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Prefer to reach us directly?
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm sm:text-base text-slate-700">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <span>(02) 8123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <span>hello@bofillpsych.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 shrink-0" />
                <span>Quezon City, Metro Manila</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-950">
                  <FaCalendarCheck className="text-white text-xl" />
                </div>
                <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-slate-900">
                  Request received
                </h2>
                <p className="mt-2 max-w-sm text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                  We&apos;ll reach out within 24 hours to confirm your session
                  details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09XX XXX XXXX"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-slate-700"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="date"
                      className="text-sm font-medium text-slate-700"
                    >
                      Preferred date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Anything you&apos;d like us to know?{" "}
                    <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share as much or as little as you're comfortable with."
                    className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {error && (
                  <p className="-mt-2 text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex w-full sm:w-fit items-center justify-center gap-3 rounded-full bg-blue-950 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-900 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "Sending..." : "Confirm request"}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-amber-200 group-hover:text-blue-950">
                    <FaArrowRight className="text-sm" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookSessionPage;
