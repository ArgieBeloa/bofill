"use client";

import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const details = formData.get("details");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          details,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-linear-to-br from-slate-50 via-white to-blue-50 px-6 py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left - Contact Information */}
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Get in touch
          </p>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            We&apos;re here to support you.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Have a question or need more information about our services? Reach
            out to us and our team will be happy to help.
          </p>

          <div className="mt-10 space-y-6">
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <MapPin size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Address</h2>

                <p className="mt-1 text-sm text-slate-500">Germany</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Email</h2>

                <p className="mt-1 text-sm text-slate-500">info@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Phone size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Phone</h2>

                <p className="mt-1 text-sm text-slate-500">+63 912 345 6789</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right - Contact Form */}
        <article className="rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-white to-blue-50/80 p-8 shadow-xl shadow-slate-200/50 md:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Send a message
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>

          <p className="mt-3 mb-8 text-sm leading-6 text-slate-500">
            Have a question or need support? Send us a message and we&apos;ll
            get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Details */}
            <div>
              <label
                htmlFor="details"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Details
              </label>

              <textarea
                id="details"
                name="details"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Success */}
            {success && (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                <CheckCircle size={20} />

                <span>Your message has been sent successfully.</span>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : success ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </article>
      </div>
    </main>
  );
};

export default ContactPage;
