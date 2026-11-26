import { Check, ArrowRight } from "lucide-react";
import Button from "./Button";

const plans = [
  {
    name: "Custom System",
    price: "Let's talk",
    blurb: "Inventory, POS, student systems, and other internal software.",
    features: [
      "Discovery workshop",
      "Tailored architecture",
      "Training for your team",
      "Ongoing maintenance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-card py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
              PRICING
            </p>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[36px] xl:whitespace-nowrap">
            Clear starting points,{" "}
            <span className="text-brand-ink">no surprise scope</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Every project is quoted after a short discussion. These ranges help
            you plan — final pricing depends on features, timeline, and
            complexity.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`w-full max-w-md rounded-2xl p-7 transition duration-200 ${
                plan.featured
                  ? "bg-navy text-white shadow-[0_20px_50px_rgba(7,11,20,0.25)]"
                  : "bg-white text-navy ring-1 ring-slate-100"
              }`}
            >
              <p
                className={`text-xs font-semibold tracking-[0.18em] ${
                  plan.featured ? "text-brand" : "text-slate-400"
                }`}
              >
                {plan.name.toUpperCase()}
              </p>
              <p className="mt-3 text-3xl font-extrabold">{plan.price}</p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.featured ? "text-white/60" : "text-slate-500"
                }`}
              >
                {plan.blurb}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={plan.featured ? "text-brand" : "text-brand"}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "dark"}
                className={`mt-8 ${!plan.featured ? "bg-navy" : ""}`}
              >
                Get a Quote
                <ArrowRight size={16} />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
