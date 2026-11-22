import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects delivered" },
  { value: "Years of experience", label: "Building software" },
  { value: "100%", label: "Client-focused" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src="/images/team.jpg"
            alt="StrataForge team collaborating"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-ink">
              ABOUT US
            </p>
          </div>
          <h2 className="max-w-[17ch] text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            A software partner for
            <span className="text-brand-ink"> growing businesses</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            StrataForge is a custom software development agency. We design and
            build websites, internal systems, and integrations that match the
            way your team actually works — not generic templates that get in
            the way.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
            From the first conversation to launch and support, we keep the
            process clear, the code maintainable, and the outcome tied to real
            business results.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-x-4 border-t border-slate-200 pt-6 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p
                  className="min-h-[48px] text-xl font-extrabold leading-tight text-navy sm:min-h-[54px] sm:text-2xl"
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink transition hover:gap-3 hover:text-brand-dark"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
