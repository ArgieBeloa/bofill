import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import { getEmployeeById } from "@/app/helpers/employee/employee";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PractitionerProfilePage({ params }: PageProps) {
  const { id } = await params;
  const practitioner = getEmployeeById(id);

  if (!practitioner) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 via-white to-blue-50 px-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Practitioner not found
          </h1>
          <p className="mt-2 text-slate-600">
            This profile may have been moved or no longer exists.
          </p>
          <Link
            href="/practitioners"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-900"
          >
            <FaArrowLeft className="text-xs" />
            Back to Practitioners
          </Link>
        </div>
      </main>
    );
  }

  const {
    name,
    image,
    licensed,
    specialties,
    services,
    languages,
    clientfocus,
  } = practitioner;

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-4 sm:px-6 py-14 sm:py-20">
      {/* Back link */}
      <div className="mx-auto max-w-5xl">
        <Link
          href="/practitioners"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          <FaArrowLeft className="text-xs" />
          Back to Practitioners
        </Link>
      </div>

      {/* Profile */}
      <section className="mx-auto mt-6 sm:mt-8 grid max-w-5xl grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Left: photo */}
        <div className="lg:col-span-2">
          <div className="relative h-72 sm:h-96 lg:h-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right: details */}
        <div className="lg:col-span-3 flex flex-col">
          <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            <span className="h-px w-6 bg-blue-300" />
            Practitioner Profile
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {name}
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm sm:text-base font-semibold text-slate-700">
              {licensed}
            </span>
            <MdVerified className="text-blue-600" size={18} />
          </div>

          {/* Specialties */}
          <div className="mt-5 flex flex-wrap gap-2">
            {specialties?.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700"
              >
                {item.name}
              </span>
            ))}
          </div>

          {/* Info panel */}
          <div className="mt-8 rounded-2xl bg-blue-950 text-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200">
                  <FaUsers className="text-sm" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Client Focus
                  </h3>
                  <p className="mt-1 text-sm sm:text-base">{clientfocus}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200">
                  <FaGlobe className="text-sm" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Languages
                  </h3>
                  <p className="mt-1 text-sm sm:text-base">
                    {languages.map((item) => item.name).join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200">
                  <FaCalendarCheck className="text-sm" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Services
                  </h3>
                  <p className="mt-1 text-sm sm:text-base">
                    {services.map((item) => item.name).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-950 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-900 hover:scale-[1.02]"
            >
              Book a Session with {name.split(",")[0]}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-amber-200 group-hover:text-blue-950">
                <FaArrowRight className="text-sm" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}