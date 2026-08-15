"use client";

import {
  Brain,
  HeartHandshake,
  UsersRound,
  Sparkles,
} from "lucide-react";

// image
// goals 
// details
// core ideas





const AboutPage = () => {
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-blue-50 px-6 py-20">
        <section className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            {/* <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              <Sparkles size={16} />
              Our Mission
            </div> */}

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Our Goal
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We aim to create a safe and supportive space where people can
              learn about mental health, understand their emotions, and
              develop healthier ways to care for their well-being.
            </p>
          </div>

          {/* Goals */}
          <article className="mt-16 grid gap-8 md:grid-cols-3">

            {/* Goal 1 */}
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

            {/* Goal 2 */}
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

            {/* Goal 3 */}
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

          {/* Bottom Section */}
          {/* <div className="mt-20 overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center shadow-xl md:px-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
              <HeartHandshake size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Your Mental Well-Being Matters
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Taking care of your mental well-being is an important part of
              living a healthy and balanced life.
            </p>
          </div> */}

        </section>
      </main>
    </>
  );
};

export default AboutPage;