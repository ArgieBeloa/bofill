import Image from "next/image";
import type EmployeeModel from "@/app/helpers/employee/employeeModel";
import { MdVerified } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import Link from "next/link";
const Card = ({
  id,
  name,
  image,
  licensed,
  specialties,
  services,
  languages,
  clientfocus,
}: EmployeeModel) => {
  return (
    <div className="group relative h-107.5 overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl">
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      {/* Bottom Glass Card */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="rounded-2xl border border-white/20 bg-white/10 px-5 p-2 backdrop-blur-md">
          <h2 className="text-xl font-bold text-white">{name}</h2>

          <div className="flex items-center gap-1 rounded-full">
            <span className="text-xs font-semibold text-white">{licensed}</span>
            <MdVerified className="text-green-500" size={16} />
          </div>

          {/* Specialties */}
          <div className="mt-2 flex flex-wrap gap-2">
            {specialties?.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white"
              >
                {item.name}
              </span>
            ))}
          </div>

          {/* Information */}
          <div className="mt-2 space-y-2 text-sm text-gray-100">
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {languages.map((item) => item.name).join(", ")}
            </p>

            <p>
              <span className="font-semibold">Services:</span>{" "}
              {services.map((item) => item.name).join(", ")}
            </p>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded">
            <HiUsers className="text-white" size={16} />
            <span className="text-xs font-medium text-white">
              {clientfocus}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex gap-3 mb-2">
            <Link
              href={`/practitioners/${id}`}
              className="flex-1 rounded border border-white/30 bg-white/10 py-1 text-center text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
            >
              View Profile
            </Link>

            <Link
              href="/book"
              className="flex-1 rounded bg-white py-1 text-center text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
