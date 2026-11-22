import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Founders from "./components/Founders";
import About from "./components/About";
import Pricing from "./components/Pricing";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import ServicesPage from "./components/ServicesPage";
import LegalPage from "./components/LegalPage";

const legalPages = {
  "/privacy-policy": "privacy",
  "/terms-and-conditions": "terms",
  "/cookie-policy": "cookies",
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/" || path === "/index.html";
  const siteUrl = new URL("/", window.location.href).href;
  const organizationId = `${siteUrl}#organization`;
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "StrataForge Software Solutions",
        url: siteUrl,
        description:
          "A cybersecurity-focused full-stack software collective building custom websites, web applications, and business systems.",
        email: "strataforge.dev@gmail.com",
        logo: new URL("favicon.png", siteUrl).href,
        sameAs: [
          "https://www.linkedin.com/company/strataforge-software-solutions/",
          "https://www.facebook.com/profile.php?id=61595916267653",
          "https://www.instagram.com/strataforge.dev/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "StrataForge Software Solutions",
        url: siteUrl,
        publisher: { "@id": organizationId },
      },
    ],
  };

  if (path === "/projects") {
    return (
      <ProjectsPage />
    );
  }

  if (path === "/services") {
    return <ServicesPage />;
  }

  if (legalPages[path]) {
    return <LegalPage type={legalPages[path]} />;
  }

  return (
    <div className="min-h-svh bg-white">
      {isHome && (
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      )}
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Founders />
        <About />
        <Pricing />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
