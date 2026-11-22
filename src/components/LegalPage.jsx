import { Link } from "lucide-react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pages = {
  privacy: {
    eyebrow: "YOUR INFORMATION",
    title: "Privacy Policy",
    titleLead: "Privacy",
    titleAccent: "Policy",
    intro: "This notice explains what happens when you browse this website or contact StrataForge through the project inquiry form.",
    sections: [
      ["Who is responsible", "StrataForge Software Solutions is responsible for the inquiry information described here. For privacy questions or requests, email strataforge.dev@gmail.com."],
      ["Information you provide", "The inquiry form asks for your name and email address, and lets you optionally add your company and project details. Please avoid including sensitive personal information that is not needed for your inquiry."],
      ["How the inquiry form works", "When you submit the form, your browser opens a Gmail compose window and passes the entered details to prepare a draft addressed to strataforge.dev@gmail.com. Google may process those details to create the draft. This website does not send the form contents to a StrataForge server. Nothing is emailed to StrataForge until you review and send the draft. If you use the email-app fallback, your chosen email provider handles the draft and message."],
      ["Why we use inquiry information", "We use information in a message you choose to send to respond to your questions, discuss your requested project, and prepare a proposal. This is to take steps you request before a possible service agreement. If you engage StrataForge, information may also be used to manage that service relationship and related records."],
      ["Sharing and service providers", "StrataForge does not sell inquiry information. Google processes details when your browser opens the Gmail draft, and your email provider processes the message if you send it. The site also loads typography from Google Fonts, which means your browser requests font files from Google. Website hosting providers may process basic connection and security information needed to deliver the website. This source does not configure analytics or advertising trackers."],
      ["Retention and security", "Unsuccessful inquiry messages are generally kept for up to 24 months after the last substantive exchange, then deleted or anonymized. We may keep information longer when a project is active, a legal obligation applies, or it is needed to establish or defend a legal claim. Access is limited to people who need the information for those purposes. No internet transmission or storage method can be guaranteed completely secure."],
      ["Your privacy rights", "Under applicable Philippine privacy law, you may have rights to be informed, access or correct personal information, object to certain processing, request erasure or blocking, request data portability, and lodge a complaint with the National Privacy Commission, subject to applicable requirements and exceptions. Contact strataforge.dev@gmail.com to make a request. We may need to verify your identity before responding."],
      ["Changes to this notice", "We may update this notice when the website or inquiry process changes. The latest version will be posted on this page with its update date."],
    ],
  },
  terms: {
    eyebrow: "WEBSITE TERMS",
    title: "Terms & Conditions",
    titleLead: "Terms &",
    titleAccent: "Conditions",
    intro: "These terms apply to your use of the StrataForge website. Sending an inquiry does not by itself create a client relationship or service agreement.",
    sections: [
      ["Using this website", "You may browse this website for lawful purposes. Do not attempt to disrupt the site, gain unauthorized access, upload harmful code, or misuse its forms or content."],
      ["Website information", "Service descriptions, project examples, and other materials are provided for general information. We work to keep them accurate and current, but they may be incomplete or change over time. A project’s scope, schedule, fees, and deliverables are agreed separately in a written proposal or service agreement."],
      ["Intellectual property", "Unless a page identifies another owner, the website’s text, branding, graphics, and design belong to StrataForge or its licensors. You may view and share links to the site for personal or business reference. You may not reproduce or commercially use site materials without permission."],
      ["External websites", "This website may link to third-party sites. StrataForge does not control their content, availability, or privacy practices, and a link does not mean we endorse every item on that site."],
      ["Disclaimers and liability", "The website is provided on an as-available basis. To the extent permitted by law, StrataForge disclaims warranties relating to uninterrupted availability or error-free content. Nothing in these terms limits rights or liabilities that cannot legally be limited."],
      ["Changes and governing law", "We may revise these terms by publishing an updated version here. These terms are governed by the laws of the Philippines, subject to any mandatory rules that apply to you."],
      ["Contact", "Questions about these terms can be sent to strataforge.dev@gmail.com."],
    ],
  },
  cookies: {
    eyebrow: "BROWSER STORAGE",
    title: "Cookie Policy",
    titleLead: "Cookie",
    titleAccent: "Policy",
    intro: "This page describes cookies and similar browser storage used by the StrataForge website, based on the website code currently deployed.",
    sections: [
      ["Cookies and tracking", "The website source currently does not configure analytics cookies, advertising cookies, or marketing pixels. We therefore do not show an optional-cookie consent banner or preference controls."],
      ["Temporary session storage", "A small sessionStorage value may be used by static-host fallback routing to restore a requested page after a redirect. It is stored in your browser for the current tab session and is not used to identify you, measure visits, or target advertising."],
      ["Hosting and browser technologies", "Your browser and the hosting infrastructure may exchange technical information needed to load and protect the website. The site also requests font files from Google Fonts. Hosting and font providers can apply their own technologies and logs; their practices depend on each provider and service configuration."],
      ["Managing browser storage", "You can clear site data through your browser settings. Blocking all browser storage may affect direct-link restoration on some static hosts, but the main website content remains available."],
      ["Changes", "If StrataForge adds analytics, advertising, or other optional tracking technologies, this policy will be updated and appropriate controls will be provided before those technologies are used where required."],
      ["Contact", "For questions about cookies or this policy, email strataforge.dev@gmail.com."],
    ],
  },
};

export default function LegalPage({ type }) {
  const page = pages[type];

  useEffect(() => {
    const originalTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.content;
    document.title = `${page.title} | StrataForge`;
    description?.setAttribute("content", page.intro);

    return () => {
      document.title = originalTitle;
      if (description && originalDescription !== undefined) {
        description.setAttribute("content", originalDescription);
      }
    };
  }, [page]);

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
              <span className="h-[2px] w-8 bg-brand" />{page.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.titleLead} <span className="text-brand">{page.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{page.intro}</p>
            <p className="mt-5 text-xs text-white/70">Last updated October 29, 2026</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
          <div className="mb-8 flex flex-wrap gap-3 text-sm">
            {Object.entries({ privacy: "Privacy Policy", terms: "Terms & Conditions", cookies: "Cookie Policy" }).map(([key, label]) => (
              <a key={key} href={`/${key === "privacy" ? "privacy-policy" : key === "terms" ? "terms-and-conditions" : "cookie-policy"}`} className={`rounded-full px-4 py-2 transition ${key === type ? "bg-brand-ink text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="space-y-8">
            {page.sections.map(([heading, content]) => (
              <section key={heading}>
                <h2 className="text-lg font-bold text-navy">{heading}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{content}</p>
              </section>
            ))}
          </div>
          <a href="/#home" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-dark">
            <Link size={15} aria-hidden="true" /> Back to StrataForge
          </a>
        </article>
      </main>
      <Footer />
    </div>
  );
}
