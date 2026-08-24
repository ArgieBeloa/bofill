import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/app/helpers/serviceData/service";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-4 sm:px-6 py-14 sm:py-20">
      {/* ...header stays the same... */}

      <section className="mx-auto mt-12 sm:mt-16 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
            >
              <div className="mb-5 sm:mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 text-xl transition-colors duration-300 group-hover:bg-blue-950 group-hover:text-white">
                <Icon />
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 flex-1 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 line-clamp-4">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="group/btn mt-6 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-900"
              >
                Learn more
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 transition-colors duration-300 group-hover/btn:bg-blue-600">
                  <FaArrowRight className="text-white text-xs" />
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ServicesPage;