import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!activeService) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveService(null);
      if (event.key === "Tab") {
        const dialog = document.getElementById("service-dialog");
        const focusable = dialog?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeService]);

  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                OUR SERVICES
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px] lg:leading-tight">
              Complete Software Solutions
              <br />
              <span className="text-brand-ink">for Your Business</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-slate-500">
              From websites to custom systems, we provide reliable and scalable
              solutions tailored to your goals.
            </p>
            <a
              href="/services"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-dark"
            >
              View All Services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const { icon: Icon, title, text } = service;
            return (
            <article
              key={title}
              className="flex h-full flex-col rounded-2xl bg-card p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <span className="text-brand-ink">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{text}</p>
              <button
                type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveService(service);
              }}
                aria-label={`Learn more about ${title}`}
                className="mt-5 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-ink hover:text-brand-dark"
              >
                Learn More
                <ArrowRight size={14} />
              </button>
            </article>
            );
          })}
        </div>
      </div>

      {activeService && createPortal(
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-[#05080f]/75 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveService(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            id="service-dialog"
            className="relative my-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-9"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Close service details"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={18} />
            </button>
            <div className="pr-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-ink">OUR SERVICES</p>
              <h2 id="service-dialog-title" className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {activeService.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{activeService.detail}</p>
            </div>
            <div className="mt-7 rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-navy">What we can help with</h3>
              <ul className="mt-4 space-y-3">
                {activeService.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                    <Check size={17} className="mt-0.5 shrink-0 text-brand-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              <strong className="text-navy">A good fit for:</strong> {activeService.fit}
            </p>
            <a
              href="#quote-form"
              onClick={() => setActiveService(null)}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Discuss your project
              <ArrowRight size={16} />
            </a>
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
}
