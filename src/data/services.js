import { Globe, Code2, Database, Wrench } from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Website Development",
    text: "Modern, responsive, and professional websites for businesses, portfolios, and online stores.",
    detail: "We design and build responsive websites that clearly explain your offer and work smoothly across phones, tablets, and desktop screens.",
    includes: ["Responsive page design and implementation", "Contact forms and clear calls to action", "Performance, accessibility, and search-friendly foundations"],
    fit: "Business websites, portfolios, landing pages, and online stores.",
  },
  {
    icon: Code2,
    title: "Custom Systems",
    text: "Tailored web applications such as inventory, student management, POS, and more.",
    detail: "We turn manual or disconnected workflows into custom applications shaped around how your team actually works.",
    includes: ["Requirements and workflow discovery", "Role-aware dashboards and data management", "Custom features such as inventory, student records, and POS workflows"],
    fit: "Teams that have outgrown spreadsheets or off-the-shelf software.",
  },
  {
    icon: Database,
    title: "Database & Integration",
    text: "MySQL databases, API integrations, QR systems, and automation solutions.",
    detail: "We connect your application to reliable data and the services your business already uses, with clear handling for errors and access.",
    includes: ["Database design and application integration", "API connections and data exchange", "QR-enabled flows and practical task automation"],
    fit: "Projects that need systems to share data or reduce repetitive work.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    text: "Ongoing support, updates, bug fixes, and system enhancements to keep your business running smoothly.",
    detail: "We help keep an existing website or application dependable as your needs, dependencies, and operating environment change.",
    includes: ["Bug investigation and fixes", "Dependency, security, and compatibility updates", "Performance improvements and planned enhancements"],
    fit: "Businesses that need continued care for a live digital product.",
  },
];
