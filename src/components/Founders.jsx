import {
  CloudCog,
  Code2,
  BriefcaseBusiness,
  Settings2,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.96v9.5ZM6.63 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.95v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.27V9h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v5.18Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.4 3.05 15.31 3 14.04 3c-2.66 0-4.48 1.62-4.48 4.6v2H6.75v3.2h2.81V21h3.84Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const founders = [
  {
    name: "Zoren Christian C. Magaan",
    role: "Co-Founder & Lead Full-Stack Engineer",
    description:
      "Guides the technical vision, system architecture, repository standards, and day-to-day engineering progress.",
    initials: "ZM",
    photo: "/images/founders/zoren.png",
    icon: Code2,
    linkedin: "https://www.linkedin.com/in/zoren-christian-magaan/",
    github: "https://github.com/zorenzki",
    facebook: "https://www.facebook.com/zorenzki",
    instagram: "https://www.instagram.com/zorenzki/",
    portfolio: "https://zorenchristianmagaan.site/",
  },
  {
    name: "Ber Andrei S. Carpio",
    role: "Co-Founder & Full-Stack Engineer",
    description:
      "Builds and optimizes clean, high-performance features from development through delivery.",
    initials: "BC",
    photo: "/images/founders/carpio.png",
    icon: Settings2,
    linkedin: "https://www.linkedin.com/in/berandreicarpio/",
    github: "https://github.com/andreicrp",
    facebook: "https://www.facebook.com/andreicrp/",
    instagram: "https://www.instagram.com/andrecrp_/",
    portfolio: "https://andreicarpio11.vercel.app/",
  },
  {
    name: "Aaron Paul B. Lazaro",
    role: "Co-Founder & Full-Stack Solutions Engineer",
    description:
      "Translates client needs into practical software solutions, manages full-stack integrations, and handles cloud deployments.",
    initials: "AL",
    photo: "/images/founders/aaron.png",
    icon: CloudCog,
    linkedin: "https://www.linkedin.com/in/aaron-lazaro/",
    github: "https://github.com/Aaronicss",
    facebook: "https://www.facebook.com/OfficialAaronLazaro",
    instagram: "https://www.instagram.com/aaronlazaroooo/",
    portfolio: "https://aaronlazaro.framer.website/",
  },
  {
    name: "Raymond G. Paderon",
    role: "Co-Founder & Software Development Engineer in Test",
    description:
      "Improves software reliability through automated testing, security checks, and production quality assurance.",
    initials: "RP",
    photo: "/images/founders/raymond.png",
    icon: ShieldCheck,
    linkedin: "https://www.linkedin.com/in/raymond-paderon-8a9518411/",
    github: "https://github.com/Empire01",
    facebook: "https://www.facebook.com/Empire0511",
    instagram: "https://www.instagram.com/pads0511/",
    portfolio: "https://empire01.github.io/my-portfolio/",
  },
  {
    name: "Zaira Janine A. Ibañez",
    role: "Co-Founder & Compliance Lead",
    description: "Leads our compliance approach, helping align client work with clear processes, responsible data handling, and applicable requirements.",
    initials: "CS",
    photo: "/images/founders/zaira.jpg",
    icon: ClipboardCheck,
    linkedin: "https://www.linkedin.com/in/zaira-janine-a-ibañez-72a780451/",
    facebook: "https://www.facebook.com/zairajanine.ibn",
    instagram: "https://www.instagram.com/zieeeee.08/",
    placeholder: true,
  },
];

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                THE PEOPLE BEHIND THE WORK
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px]">
              Meet the <span className="text-brand-ink">Founders</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500 lg:text-right">
            A team of builders bringing together engineering, delivery, and
            quality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {founders.map(({ name, role, description, photo, icon: Icon, linkedin, github, facebook, instagram, portfolio, placeholder }) => (
            <article
              key={name}
              className="group flex min-w-0 flex-col rounded-2xl bg-card p-6 ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white">
                  <img src={photo} alt={`Portrait of ${name}`} loading="lazy" decoding="async" className={`h-full w-full rounded-full object-center ${placeholder ? "object-cover" : "object-contain"}`} />
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-ink transition group-hover:bg-brand-ink group-hover:text-white">
                  <Icon size={17} strokeWidth={1.9} />
                </span>
              </div>
              <div className="mt-7 flex flex-1 flex-col">
                <h3 className="text-base font-extrabold leading-snug text-navy">
                  {name}
                </h3>
                <p className="mt-2 min-h-[48px] text-xs font-semibold leading-relaxed text-brand-ink">
                  {role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
                {placeholder ? (
                  <div className="mt-auto flex flex-nowrap items-center gap-1 pt-6" role="group" aria-label={`Social links for ${name}`}>
                    {linkedin ? (
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} title="LinkedIn" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#0a66c2] hover:text-white hover:ring-[#0a66c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        <LinkedinIcon />
                      </a>
                    ) : (
                      <span role="img" aria-label="LinkedIn link coming soon" title="LinkedIn link coming soon" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 opacity-60">
                        <LinkedinIcon />
                      </span>
                    )}
                    {facebook ? (
                      <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Facebook`} title="Facebook" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#1877f2] hover:text-white hover:ring-[#1877f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        <FacebookIcon />
                      </a>
                    ) : (
                      <span role="img" aria-label="Facebook link coming soon" title="Facebook link coming soon" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 opacity-60">
                        <FacebookIcon />
                      </span>
                    )}
                    {instagram ? (
                      <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Instagram`} title="Instagram" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#e1306c] hover:text-white hover:ring-[#e1306c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        <InstagramIcon />
                      </a>
                    ) : (
                      <span role="img" aria-label="Instagram link coming soon" title="Instagram link coming soon" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 opacity-60">
                        <InstagramIcon />
                      </span>
                    )}
                    <span role="img" aria-label="Digital portfolio link coming soon" title="Digital portfolio link coming soon" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 opacity-60">
                      <BriefcaseBusiness size={14} />
                    </span>
                  </div>
                ) : <div className="mt-auto flex flex-nowrap items-center gap-1 pt-6">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on GitHub`}
                    title="GitHub"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-navy hover:text-white hover:ring-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    title="LinkedIn"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#0a66c2] hover:text-white hover:ring-[#0a66c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <LinkedinIcon />
                  </a>
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on Facebook`}
                      title="Facebook"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#1877f2] hover:text-white hover:ring-[#1877f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <FacebookIcon />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on Instagram`}
                      title="Instagram"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#e1306c] hover:text-white hover:ring-[#e1306c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  <a
                    href={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name}'s digital portfolio`}
                    title="Digital portfolio"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-brand hover:text-white hover:ring-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <BriefcaseBusiness size={14} />
                  </a>
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
