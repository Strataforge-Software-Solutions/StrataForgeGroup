import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import Button from "./Button";

const highlights = [
  {
    icon: Zap,
    filled: true,
    title: "Modern Solutions",
    text: "Built for your needs",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    text: "Your data, our priority",
  },
  {
    icon: BarChart3,
    title: "Business Focused",
    text: "Solutions that deliver results",
  },
];

function LaptopMock() {
  return (
    <div
      className="relative mx-auto w-full max-w-[660px] select-none [-webkit-user-drag:none] lg:max-w-none"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-16 bottom-8 overflow-hidden"
      >
        <div className="diagonal-band absolute right-4 top-0 h-[520px] w-[92px] rotate-[-38deg] opacity-90" />
        <div className="diagonal-band absolute right-28 top-8 h-[480px] w-[42px] rotate-[-38deg] opacity-80" />
        <div className="diagonal-band absolute -right-8 bottom-0 h-[340px] w-[160px] rotate-[-38deg] opacity-70" />
      </div>

      <div className="relative px-3 sm:px-5">
        <div className="relative rounded-t-[24px] border border-x-white/20 border-t-white/30 bg-gradient-to-br from-[#414957] via-[#1d2430] to-[#080a0f] p-[8px] pb-0 shadow-[0_42px_90px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.22)] sm:p-[10px] sm:pb-0">
          <div className="absolute left-1/2 top-[4px] z-10 flex -translate-x-1/2 items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#080b12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
          </div>
          <img
            src="/images/hero-dashboard-generated-640.webp"
            srcSet="/images/hero-dashboard-generated-640.webp 640w, /images/hero-dashboard-generated-1280.webp 1280w"
            sizes="(min-width: 768px) 620px, calc(100vw - 64px)"
            alt="StrataForge business analytics dashboard"
            draggable={false}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/10] w-full rounded-t-[14px] object-fill sm:rounded-t-[15px]"
          />
        </div>
        <div className="mx-3 h-1.5 rounded-sm border-t border-white/60 bg-gradient-to-b from-[#edf0f4] via-[#c4cad3] to-[#929ba8] shadow-[0_2px_4px_rgba(0,0,0,0.25)] sm:mx-5" />
        <div className="relative mx-[-3%] h-[34px] overflow-hidden rounded-b-[20px] border-x border-b border-white/35 bg-gradient-to-b from-[#e4e7ed] via-[#b9c0cb] to-[#737d8b] shadow-[0_24px_35px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(255,255,255,0.7)] sm:h-[42px]">
          <div className="absolute inset-x-[12%] top-[4px] grid grid-cols-14 grid-rows-2 gap-x-[2px] gap-y-[2px] opacity-40 sm:top-[5px] sm:gap-x-[3px] sm:gap-y-[3px]">
            {Array.from({ length: 28 }, (_, i) => (
              <span key={i} className="h-[3px] rounded-[1px] border-t border-white/30 bg-gradient-to-b from-[#555e6c] to-[#7c8591] sm:h-[4px]" />
            ))}
          </div>
          <div className="absolute left-1/2 top-[16px] h-[12px] w-[72px] -translate-x-1/2 rounded-[4px] border border-white/35 bg-gradient-to-b from-[#aeb6c1]/80 to-[#cbd0d8]/80 shadow-[inset_0_1px_2px_rgba(45,52,64,0.25)] sm:top-[22px] sm:h-[15px] sm:w-[112px]" />
          <div className="absolute inset-x-[4%] bottom-0 h-px bg-white/35" />
        </div>
      </div>
      <img
        src="/images/hero-phone-generated-v2-360.webp"
        srcSet="/images/hero-phone-240.webp 240w, /images/hero-phone-360.webp 360w, /images/hero-phone-480.webp 480w"
        sizes="(min-width: 1024px) 150px, (min-width: 640px) 138px, 112px"
        alt="StrataForge mobile website shown on a smartphone"
        draggable={false}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="pointer-events-none absolute -right-4 bottom-8 z-20 w-[112px] drop-shadow-[0_24px_35px_rgba(0,0,0,0.55)] sm:-right-5 sm:bottom-10 sm:w-[138px] lg:-right-4 lg:w-[150px]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -right-10 -top-24 h-[620px] w-[140px] rotate-[-38deg] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(255,92,22,0.18),transparent_40%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-white/70">
            FORGING IDEAS INTO INNOVATION
          </p>
          <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
            Custom Software
            <br />
            Development for
            <br />
            <span className="text-brand">Real Businesses</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
            We build modern, reliable, and scalable web solutions that help
            businesses work smarter and grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">
              Get a Free Quote
              <ArrowRight size={16} />
            </Button>
            <Button href="#portfolio" variant="dark">
              View Our Work
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, filled, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_6px_18px_rgba(255,92,22,0.28)]">
                  <Icon size={18} fill={filled ? "currentColor" : "none"} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-0.5 text-xs text-white/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LaptopMock />
      </div>
    </section>
  );
}
