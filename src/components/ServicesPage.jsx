import { ArrowRight, Check } from "lucide-react";
import Navbar from "./Navbar";
import { services } from "../data/services";
import ContactCta from "./ContactCta";
import Footer from "./Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-[72px]">
        <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="diagonal-band absolute -right-10 -top-36 h-[450px] w-[130px] rotate-[-38deg] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(255,92,22,0.16),transparent_42%)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/70">
              <span className="h-[2px] w-8 bg-brand" />
              WHAT WE DO
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Software services built around <span className="text-brand-ink">your work</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              From your first website to a custom business system, we plan and build practical digital tools around your goals, users, and workflows.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {services.map(({ icon: Icon, title, detail, includes, fit }) => (
                <article key={title} className="rounded-2xl bg-card p-6 ring-1 ring-slate-100 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand-ink">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h2 className="text-xl font-extrabold text-navy">{title}</h2>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{detail}</p>
                  <h3 className="mt-6 text-sm font-bold text-navy">What we can help with</h3>
                  <ul className="mt-3 space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                        <Check size={17} className="mt-0.5 shrink-0 text-brand-ink" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">
                    <strong className="text-navy">A good fit for:</strong> {fit}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-ink transition hover:text-brand-dark">
                    Discuss this service <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
