"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  HeartHandshake,
  UsersRound,
  Sparkles,
  MapPin,
  Navigation,
} from "lucide-react";

const COMPANY_ADDRESS =
  "2nd floor, One Mayon Place, Mayon St, Quezon City, 1114 Metro Manila";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  const [destination, setDestination] = useState("");
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [locationError, setLocationError] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoadingLocation(false);
      },
      () => {
        setLocationError(
          "Unable to get your location. Please allow location access.",
        );
        setLoadingLocation(false);
      },
    );
  };

  const handleGetDirections = () => {
    const target = destination.trim() || COMPANY_ADDRESS;
    const encodedDestination = encodeURIComponent(target);
    let url = "";

    if (userLocation) {
      url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${encodedDestination}`;
    } else {
      url = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const mapSrc = destination
    ? `https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS)}&output=embed`;

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-6 py-20">
        <section className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Our Goal
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We aim to create a safe and supportive space where people can
              learn about mental health, understand their emotions, and develop
              healthier ways to care for their well-being.
            </p>
          </div>

          {/* Goals */}
          <article className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Brain size={28} strokeWidth={1.8} />
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Mental Health Awareness
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We help people understand mental health and recognize the
                importance of emotional and psychological well-being.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                <HeartHandshake size={28} strokeWidth={1.8} />
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Healthy Coping
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We encourage healthy approaches to managing stress, emotions,
                and everyday challenges.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                <UsersRound size={28} strokeWidth={1.8} />
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Supportive Community
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We promote kindness, understanding, and connection so people
                feel supported and encouraged to seek help when needed.
              </p>
            </div>
          </article>

          {/* Location / Map */}
          <article className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Find Us
            </h2>

            <div className="mx-auto mt-2 flex max-w-md items-center justify-center gap-2 text-center text-slate-600">
              <MapPin size={16} className="shrink-0 text-blue-600" />
              <span>{COMPANY_ADDRESS}</span>
            </div>

            <p className="mt-4 text-center text-sm text-slate-500">
              Enter your own destination below, or get directions straight to
              our office.
            </p>

            {/* Controls — only interactive once mounted */}
            {mounted ? (
              <>
                <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <MapPin
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Enter destination address"
                      autoComplete="off"
                      suppressHydrationWarning
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={getUserLocation}
                    disabled={loadingLocation}
                    suppressHydrationWarning
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
                  >
                    <Navigation size={16} />
                    {loadingLocation
                      ? "Locating..."
                      : userLocation
                        ? "Location Set"
                        : "Use My Location"}
                  </button>
                </div>

                {locationError && (
                  <p className="mt-3 text-center text-sm text-red-500">
                    {locationError}
                  </p>
                )}
              </>
            ) : (
              // Static placeholder rendered on server & before hydration — matches exactly, avoids mismatch
              <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
                <div className="h-[50px] flex-1 rounded-full border border-slate-200 bg-slate-50" />
                <div className="h-[50px] w-40 rounded-full border border-slate-200 bg-white" />
              </div>
            )}

            {/* Map Embed */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Destination Map"
                src={mapSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleGetDirections}
                suppressHydrationWarning
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                <Navigation size={16} />
                Get Directions
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default AboutPage;