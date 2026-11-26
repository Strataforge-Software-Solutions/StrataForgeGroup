const steps = [
  {
    num: "01",
    title: "Discover & Threat Model",
    text: "Map users, data, assets, and likely abuse cases before implementation begins.",
  },
  {
    num: "02",
    title: "Design & Build",
    text: "Choose an architecture that limits access and handles data deliberately, then build in small, reviewable steps.",
  },
  {
    num: "03",
    title: "Test & Review",
    text: "Check key flows, permissions, input handling, dependencies, and common web risks before release.",
  },
  {
    num: "04",
    title: "Deploy & Maintain",
    text: "Prepare a controlled launch, document operational needs, and plan updates as the product evolves.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white lg:py-24"
      aria-labelledby="process-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -left-24 top-0 h-[380px] w-[120px] rotate-[-38deg] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(255,92,22,0.12),transparent_36%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                SECURITY BY DESIGN
              </p>
            </div>
            <h2 id="process-title" className="text-3xl font-extrabold tracking-tight lg:text-[40px] lg:leading-tight">
              Security at Every Stage
              <br />
              of Development
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-sm leading-relaxed text-white/70 lg:text-right">
              Our proposed workflow brings security questions into planning,
              design, implementation, review, and ongoing maintenance.
            </p>
          </div>
        </div>

        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute top-[18px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-brand to-transparent lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.num} className="relative pt-1">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-navy text-xs font-bold text-white">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/70">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
