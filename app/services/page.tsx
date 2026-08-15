"use client";
const services = [
  {
    title: "Individual Counseling",
    description:
      "One-on-one support in a safe and confidential space to help you understand your thoughts, emotions, and challenges.",
    icon: "🧠",
  },
  {
    title: "Anxiety & Stress Support",
    description:
      "Learn practical strategies to manage stress, anxiety, and everyday emotional challenges.",
    icon: "🌿",
  },
  {
    title: "Depression Support",
    description:
      "Compassionate guidance to help you navigate difficult emotions and develop healthier coping strategies.",
    icon: "☀️",
  },
  {
    title: "Relationship Counseling",
    description:
      "Build healthier communication, understanding, and connections with the people who matter to you.",
    icon: "💙",
  },
  {
    title: "Student Mental Wellness",
    description:
      "Support designed for students dealing with academic pressure, stress, confidence, and life transitions.",
    icon: "🎓",
  },
  {
    title: "Online Counseling",
    description:
      "Access supportive mental health conversations from the comfort of your own space.",
    icon: "💬",
  },
];

// services offer 
// design typograph
//  more service


const ServicesPage = () => {
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p> */}

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Support for your mental well-being
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Compassionate and accessible support designed to help you navigate
            life&apos;s challenges and build healthier habits.
          </p>
        </div>

        {/* Services */}
        <section className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {service.icon}
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Link */}
              <button className="mt-6 font-medium text-blue-600 transition group-hover:text-blue-700">
                Learn more →
              </button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
