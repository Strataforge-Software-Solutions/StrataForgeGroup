import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const initial = { name: "", email: "", company: "", message: "" };

export default function ContactCta() {
  const [form, setForm] = useState(initial);
  const [emailDraft, setEmailDraft] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `StrataForge project inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      "Project details:",
      form.message || "(No project details provided)",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const recipient = "strataforge.dev@gmail.com";
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = new URL("https://mail.google.com/mail/");
    gmail.searchParams.set("view", "cm");
    gmail.searchParams.set("fs", "1");
    gmail.searchParams.set("to", recipient);
    gmail.searchParams.set("su", subject);
    gmail.searchParams.set("body", body);

    window.open(gmail.toString(), "_blank", "noopener,noreferrer");
    setEmailDraft({ gmail: gmail.toString(), mailto });
  };

  return (
    <section id="contact" className="relative scroll-mt-[72px] overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -left-16 -top-24 h-[480px] w-[170px] rotate-[-38deg] opacity-80" />
        <div className="diagonal-band absolute left-[18%] -bottom-32 h-[420px] w-[90px] rotate-[-38deg] opacity-70" />
        <div className="diagonal-band absolute -right-10 top-[-40px] h-[360px] w-[140px] rotate-[-38deg] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                LET&apos;S WORK TOGETHER
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-[36px] xl:whitespace-nowrap">
              Ready to Build{" "}
              <span className="text-brand">Your Next Project?</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Let&apos;s turn your ideas into a powerful digital solution. Get
              in touch with us today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#quote-form">
              Get a Free Quote
              <ArrowRight size={16} />
            </Button>
            <Button href="#quote-form" variant="dark">
              Contact Us
            </Button>
          </div>
        </div>

        <form
          id="quote-form"
          onSubmit={onSubmit}
          className="mt-14 grid gap-4 rounded-2xl bg-white/4 p-6 ring-1 ring-white/10 md:grid-cols-2"
        >
          <label htmlFor="quote-name" className="sr-only">Your name</label>
          <input
            required
            name="name"
            id="quote-name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/65 focus:ring-brand"
          />
          <label htmlFor="quote-email" className="sr-only">Email address</label>
          <input
            required
            type="email"
            name="email"
            id="quote-email"
            value={form.email}
            onChange={onChange}
            placeholder="Email address"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/65 focus:ring-brand"
          />
          <label htmlFor="quote-company" className="sr-only">Company (optional)</label>
          <input
            name="company"
            id="quote-company"
            value={form.company}
            onChange={onChange}
            placeholder="Company (optional)"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/65 focus:ring-brand"
          />
          <label htmlFor="quote-message" className="sr-only">What do you want to build?</label>
          <input
            name="message"
            id="quote-message"
            value={form.message}
            onChange={onChange}
            placeholder="What do you want to build?"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/65 focus:ring-brand"
          />
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <p className="basis-full text-xs leading-relaxed text-white/70">
              Submitting opens Gmail and passes your details to prepare an email draft for strataforge.dev@gmail.com. StrataForge receives it only if you send it. We use sent inquiries to respond and discuss your project. Read our{" "}
              <a href="/privacy-policy" className="font-semibold text-white underline underline-offset-2 hover:text-brand">Privacy Policy</a>.
            </p>
            <Button type="submit" className="mt-1">
              Send message
              <ArrowRight size={16} />
            </Button>
            {emailDraft && (
              <p role="status" aria-live="polite" className="text-sm leading-relaxed text-brand">
                Draft prepared for strataforge.dev@gmail.com. If nothing opened, {" "}
                <a href={emailDraft.gmail} target="_blank" rel="noopener noreferrer" className="inline-block py-2 font-semibold underline underline-offset-2">
                  open the Gmail draft
                </a>{" "}or{" "}
                <a href={emailDraft.mailto} className="inline-block py-2 font-semibold underline underline-offset-2">
                  use your email app
                </a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
