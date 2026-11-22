import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "VioTrack: A Student Violation Tracking and Monitoring System Using QR Code and Dashboard",
    type: "Student Discipline System",
    classification: "Personal project · Full-stack developer",
    image: "/images/Projects/Project3/862759647_29190451233917732_2698232689448480865_n.png",
    alt: "VioTrack student discipline dashboard with violation analytics",
    gallery: [
      "/images/Projects/Project3/862759647_29190451233917732_2698232689448480865_n.png",
      "/images/Projects/Project3/ProjectCover.png",
      "/images/Projects/Project3/858427395_943921188513261_8216259075947768121_n.png",
      "/images/Projects/Project3/860058892_1502309408456690_1123298593948926784_n.png",
      "/images/Projects/Project3/860402820_1849551289555915_2208688962598916051_n.png",
      "/images/Projects/Project3/861681083_4642733529379081_4614302481936312381_n.png",
      "/images/Projects/Project3/865981602_1506180888229759_644943503975115658_n.png",
      "/images/Projects/Project3/866941062_1832347901252703_5706034088596423859_n.png",
    ],
    shortDescription: "QR-enabled student discipline and incident management system.",
    caseStudyContext:
      "The project brings incident reports, investigations, conferences, resolutions, and student clearance into one workflow for school administrators, teachers, advisers, and students.",
    caseStudyWork:
      "Built a responsive student discipline system with role-specific tools, status-tracked cases, parent summons and conference documents, QR-based student lookup, dashboard analytics, searchable audit logs, two-factor authentication, and session management.",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Prisma", "MySQL/MariaDB"],
  },
  {
    title: "PanelCrusher.AI",
    type: "AI Web Application",
    classification: "Personal project · Solo developer",
    image: "/images/Projects/Project1/ProjectCover.png",
    alt: "PanelCrusher.AI thesis defense practice application preview",
    gallery: [
      "/images/Projects/Project1/ProjectCover.png",
      "/images/Projects/Project1/858378698_1437195047745346_3926851943311135082_n.png",
      "/images/Projects/Project1/861094277_1125189483780472_6972899317806996070_n.png",
      "/images/Projects/Project1/861972351_1418167196610634_4106385652027774149_n.png",
      "/images/Projects/Project1/863607151_2214032979457495_6025927476997492990_n.png",
      "/images/Projects/Project1/863897817_1159604249749241_5220737200806896690_n.png",
      "/images/Projects/Project1/863897829_1132145459386912_3511420706612106902_n.png",
      "/images/Projects/Project1/863924028_1589714548981405_1864214016880892108_n.png",
      "/images/Projects/Project1/864135051_1456870532991259_2741881975745851050_n.png",
      "/images/Projects/Project1/864465212_1799136691027746_6346681185248354417_n.png",
      "/images/Projects/Project1/864653217_29445784275007089_4336250782086566799_n.png",
      "/images/Projects/Project1/864928562_2558899504617356_2600468587812658483_n.png",
      "/images/Projects/Project1/865098614_941197455484316_2146976188296842841_n.png",
      "/images/Projects/Project1/865409362_1113915717662298_7628473202816405671_n.png",
      "/images/Projects/Project1/865604695_1643339660727975_6146496635242400613_n.png",
      "/images/Projects/Project1/865809379_1792112455408586_7272448000726509725_n.png",
      "/images/Projects/Project1/865898323_1454228423318669_450389851860953359_n.png",
    ],
    shortDescription: "AI-powered thesis defense simulations from research documents.",
    caseStudyContext:
      "The application helps users practice thesis-defense questions generated from their uploaded research, either individually or in collaborative group sessions.",
    caseStudyWork:
      "Built a full-stack practice platform with shared sessions, real-time communication, voice synthesis, adaptive follow-up questions, automated evaluation, answer scoring, and personalized feedback using multiple LLM APIs.",
    link: "https://panelcrusherai.online/",
    technologies: ["Next.js", "TypeScript", "Supabase", "Groq API", "Hugging Face API"],
  },
  {
    title: "In-Vento: An AI-Powered Automated Inventory Management System for Small and Medium-Sized Enterprises (SMEs)",
    type: "Thesis Project",
    classification: "Thesis project · AI/full-stack developer",
    image: "/images/Projects/Project2/ProjectCover.png",
    alt: "In-Vento inventory management application preview",
    shop: true,
    video: "/images/Projects/Project2/In-Vento.mp4",
    gallery: [
      "/images/Projects/Project2/In-Vento.mp4",
      "/images/Projects/Project2/ProjectCover.png",
      "/images/Projects/Project2/120a863a-bd9f-47ba-8430-3bc789b16ef0.jpeg",
      "/images/Projects/Project2/4c34a289-4b08-4045-b54f-a4559bb7040d.jpeg",
      "/images/Projects/Project2/6d2092e8-6c56-499b-a6c9-9bed3598884a.jpeg",
      "/images/Projects/Project2/81245af6-0afb-4fed-8480-f9f122b55027.jpeg",
      "/images/Projects/Project2/92ff49f1-ae96-424d-8505-785764737aa3.jpeg",
      "/images/Projects/Project2/b222696d-cb99-44e7-a154-d3903c253635.jpeg",
      "/images/Projects/Project2/b9ba2c20-a620-4efa-a2b2-99516ca21a52.jpeg",
      "/images/Projects/Project2/eec59df9-7a55-4bcd-8ac3-1d7247921cea.jpeg",
    ],
    shortDescription: "AI-powered inventory management for small and medium-sized businesses.",
    caseStudyContext:
      "The thesis project focuses on helping small and medium-sized businesses monitor ingredient stock and estimate shelf life for inventory decisions.",
    caseStudyWork:
      "Integrated YOLOv11 ingredient detection with a Random Forest shelf-life model, then connected mobile authentication, inventory management, dashboard reporting, backend, and database features into one application.",
    technologies: ["React Native", "Python", "YOLOv11", "Random Forest", "Computer Vision"],
  },
  {
    title: "TALA HOTEL - Website Booking System",
    type: "Hotel Booking System",
    classification: "Website booking and operations system",
    image: "/images/Projects/Project4/ProjectCover.png",
    alt: "Tala Hotel online booking and reservation system preview",
    gallery: [
      "/images/Projects/Project4/ProjectCover.png",
      "/images/Projects/Project4/853748309_1613644372959333_446718600908643001_n.jpg",
      "/images/Projects/Project4/854772971_2457933554731611_9137480829681488072_n.jpg",
      "/images/Projects/Project4/856690775_28567671826237248_3169082521655449893_n.jpg",
      "/images/Projects/Project4/857638514_1269051142080740_1741911387963374653_n.jpg",
      "/images/Projects/Project4/857743108_4620284171626269_6413041660880748025_n.jpg",
      "/images/Projects/Project4/858065906_4583837528593984_5675102636427549057_n.jpg",
      "/images/Projects/Project4/858150402_2236200047322233_5679652605912957721_n.jpg",
      "/images/Projects/Project4/858261854_1499711742038322_4248328233784012225_n.jpg",
      "/images/Projects/Project4/859494211_962320236497332_360579369052798051_n.jpg",
      "/images/Projects/Project4/859846464_1663372788790709_59925056616214451_n.jpg",
      "/images/Projects/Project4/861355452_1826102531716583_6010392504225640187_n.jpg",
      "/images/Projects/Project4/861399523_982399548247987_1779758941196153628_n.jpg",
      "/images/Projects/Project4/861590497_1110851618583248_6619123741493536694_n.jpg",
      "/images/Projects/Project4/861700671_1681605476922563_6970888698475107408_n.jpg",
      "/images/Projects/Project4/863097580_1823418505623701_4112887850063703995_n.jpg",
      "/images/Projects/Project4/863132864_1828380618578537_3796387382664724482_n.jpg",
      "/images/Projects/Project4/865898312_1812405489975050_5274676164679152279_n.jpg",
      "/images/Projects/Project4/866179687_1098117959516470_8474444020236996223_n.jpg",
      "/images/Projects/Project4/866472799_1785406909219134_1780032383438708542_n.jpg",
      "/images/Projects/Project4/867873561_1626177725673960_1807477650899301888_n.jpg",
    ],
    shortDescription: "Hotel booking and reservation management with an operations dashboard.",
    caseStudyContext:
      "Guests need to check room availability and submit reservations, while hotel staff need tools to manage rooms, packages, bookings, and property operations.",
    caseStudyWork:
      "Built a responsive booking website and PHP/MySQL reservation workflow, with an admin dashboard for revenue, user, and booking analytics plus room and package management, user accounts, and an interactive calendar.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
  },
];

function ProjectVisual({ project }) {
  if (project.shop) {
    return (
      <div className="relative h-44 overflow-hidden bg-white">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) calc((100vw - 3rem) / 2), calc(100vw - 2.5rem)"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden">
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 280px, (min-width: 640px) calc((100vw - 3rem) / 2), calc(100vw - 2.5rem)"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      {project.overlay && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/55 to-navy/10 p-4">
          <p className="text-[9px] font-semibold tracking-[0.18em] text-white/70">
            {project.overlay.kicker}
          </p>
          <p className="mt-1 text-sm font-extrabold leading-snug text-white">
            {project.overlay.heading}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Portfolio({ fullPage = false }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % activeProject.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length);
      }
      if (event.key === "Tab") {
        const modal = document.getElementById("project-dialog");
        const focusable = modal?.querySelectorAll('button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeProject]);

  const openProject = (project, event) => {
    triggerRef.current = event.currentTarget;
    setActiveImage(0);
    setActiveProject(project);
  };

  return (
    <section id={fullPage ? "all-projects" : "portfolio"} className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                {fullPage ? "PROJECT CASE STUDIES" : "FEATURED CASE STUDIES"}
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px]">
              {fullPage ? (
                <>All <span className="text-brand-ink">Projects</span></>
              ) : (
                <>Selected Work <span className="text-brand-ink">& Case Studies</span></>
              )}
            </h2>
          </div>
          {!fullPage && (
            <div className="max-w-sm lg:text-right">
              <p className="text-sm leading-relaxed text-slate-500">
                Project work by StrataForge members, including personal and thesis projects. Open a card for context, what was built, and technologies used.
              </p>
              <a
                href="/projects"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-dark"
              >
                View All Projects
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            >
              <button
                type="button"
                onClick={(event) => openProject(project, event)}
                aria-label={`Read the ${project.title} case study`}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
              >
                <ProjectVisual project={project} />
                <div className="px-4 py-4">
                  <h3 className="text-sm font-bold text-navy">{project.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{project.type}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{project.shortDescription}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeProject && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#05080f]/80 p-4 backdrop-blur-[2px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            id="project-dialog"
            className="relative my-auto max-h-[calc(100svh-2rem)] w-[min(96vw,1680px)] max-w-none overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-navy/85 text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={18} />
            </button>

            <div className="grid min-w-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="min-w-0 bg-slate-100 p-4 sm:p-6">
                <div className="relative flex h-[min(60vh,32rem)] min-h-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
                  {activeProject.gallery[activeImage].endsWith(".mp4") ? (
                    <video
                      controls
                      preload="metadata"
                      className="max-h-full max-w-full object-contain"
                    >
                      <source src={activeProject.gallery[activeImage]} type="video/mp4" />
                      Your browser does not support the project video.
                    </video>
                  ) : (
                    <img
                      src={activeProject.gallery[activeImage]}
                      alt={`${activeProject.title} preview ${activeImage + 1}`}
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                  {activeProject.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous project image"
                        onClick={() => setActiveImage((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length)}
                        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/80 text-white hover:bg-brand-ink"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        aria-label="Next project image"
                        onClick={() => setActiveImage((index) => (index + 1) % activeProject.gallery.length)}
                        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/80 text-white hover:bg-brand-ink"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>
                {activeProject.gallery.length > 1 && (
                  <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                    {activeProject.gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`Show project image ${index + 1}`}
                        aria-pressed={activeImage === index}
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${activeImage === index ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"}`}
                      >
                        {image.endsWith(".mp4") ? (
                          <video src={image} muted preload="none" className="h-full w-full object-cover" />
                        ) : (
                          <img src={image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="min-w-0 p-6 sm:p-9 md:p-10">
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-ink">{activeProject.type.toUpperCase()}</p>
                <h2 id="project-dialog-title" className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {activeProject.title}
                </h2>
                <p className="mt-2 text-xs font-medium text-slate-500">{activeProject.classification}</p>
                <section className="mt-6">
                  <h3 className="text-sm font-bold text-navy">Project context</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{activeProject.caseStudyContext}</p>
                </section>
                <section className="mt-5">
                  <h3 className="text-sm font-bold text-navy">What was built</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{activeProject.caseStudyWork}</p>
                </section>
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-navy">Tech stack</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  {activeProject.link && (
                    <a href={activeProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-5 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white">
                      Visit project <ArrowRight size={16} />
                    </a>
                  )}
                  <a href="#contact" onClick={() => setActiveProject(null)} className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2">
                    Discuss a similar project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
}
