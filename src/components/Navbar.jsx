import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isProjectsPage = path === "/projects";
  const isSubpage = path !== "/" && path !== "/index.html";
  const homeHref = (href) => (isSubpage ? `/${href}` : href);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isServicesPage = path === "/services";
  const [active, setActive] = useState(
    isProjectsPage ? "#portfolio" : isServicesPage ? "#services" : "#home"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || isSubpage
          ? "border-b border-white/8 bg-navy/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="fixed left-4 top-2 z-[60] -translate-y-20 rounded-lg bg-white px-4 py-3 text-sm font-bold text-navy shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo href={homeHref("#home")} />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={homeHref(link.href)}
              className={`relative text-[13.5px] font-medium transition ${
                active === link.href
                  ? "text-brand"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-brand" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={homeHref("#contact")}>
            Get a Quote
            <ArrowRight size={16} />
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={homeHref(link.href)}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active === link.href
                    ? "bg-white/8 text-brand"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href={homeHref("#contact")} className="mt-3 w-full" onClick={() => setOpen(false)}>
            Get a Quote
            <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </header>
  );
}
