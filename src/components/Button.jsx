const variants = {
  primary:
    "bg-brand-ink text-white shadow-[0_8px_24px_rgba(255,92,22,0.28)] hover:bg-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2",
  dark: "bg-[#151a27] text-white ring-1 ring-white/10 hover:bg-[#1c2333]",
  ghost:
    "bg-transparent text-white ring-1 ring-white/18 hover:bg-white/8 hover:ring-white/30",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
