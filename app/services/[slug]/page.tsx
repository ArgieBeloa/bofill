import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCalendarCheck } from "react-icons/fa";

import { getServiceBySlug, services } from "@/app/helpers/serviceData/service";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 via-white to-blue-50 px-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Service not found
          </h1>
          <p className="mt-2 text-slate-600">
            This service may have been moved or no longer exists.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-900"
          >
            <FaArrowLeft className="text-xs" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const { title, description, icon: Icon } = service;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-4 sm:px-6 py-14 sm:py-20">
      {/* Back link */}
      <div className="mx-auto max-w-4xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          <FaArrowLeft className="text-xs" />
          Back to Services
        </Link>
      </div>

      {/* Header */}
      <section className="mx-auto mt-8 max-w-4xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 text-3xl">
          <Icon />
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/book"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-950 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-900 hover:scale-[1.02]"
          >
            Book a Session
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-amber-200 group-hover:text-blue-950">
              <FaCalendarCheck className="text-sm" />
            </div>
          </Link>
        </div>
      </section>

      {/* Other services */}
      {otherServices.length > 0 && (
        <section className="mx-auto mt-16 sm:mt-20 max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Other services
          </h2>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {otherServices.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 text-lg transition-colors duration-300 group-hover:bg-blue-950 group-hover:text-white">
                    <OtherIcon />
                  </div>
                  <h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-900">
                    {other.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
