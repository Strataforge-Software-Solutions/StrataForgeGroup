import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import ContactCta from "./ContactCta";
import Footer from "./Footer";

export default function ProjectsPage() {
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
              SELECTED WORK
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Projects built around <span className="text-brand">real work</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Explore a selection of websites and software concepts designed to
              make everyday business tasks clearer, faster, and easier to manage.
            </p>
          </div>
        </section>
        <Portfolio fullPage />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
