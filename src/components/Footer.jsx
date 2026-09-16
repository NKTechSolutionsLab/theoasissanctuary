import React from "react";

const Footer = () => {
  const exploreLinks = [
    { label: "The Journey", href: "#journey" },
    { label: "Identity Work", href: "#identity" },
    { label: "Individual Wellness", href: "#individual" },
    { label: "Leadership Coaching", href: "#leadership" },
  ];

  const workLinks = [
    { label: "Organizations", href: "#organizations" },
    { label: "Speaking & Training", href: "#speaking" },
    { label: "The Care Less Advantage", href: "#tcla" },
    { label: "The Oasis Approach", href: "#approach" },
  ];

  const beginLinks = [
    { label: "Start Your Journey", href: "#contact" },
    { label: "Schedule a Consultation", href: "#contact" },
    { label: "Corporate Discovery Call", href: "#organizations" },
  ];

  return (
    <footer className="bg-[#F5F0E7] px-6 pt-20 md:px-10 md:pt-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Brand */}
        <div className="grid gap-12 border-b border-[#30483E]/20 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
              The Oasis Sanctuary
            </p>

            <h2 className="display-font mt-5 text-6xl font-medium leading-[0.85] tracking-[-0.035em] text-[#1F332C] md:text-8xl">
              Reclaim.
              <br />
              Remember.
              <br />
              Rebirth.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:pb-2">
            <p className="max-w-md font-body text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
              A sacred healing space for high-achieving professionals —
              especially Black women — ready to heal deeply and lead without
              performing.
            </p>

            <p className="mt-6 max-w-md font-body text-xs leading-6 text-[#20231F]/45">
              An ecosystem of The Oasis Sanctuary and Legacy Leadership Group.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid gap-12 border-b border-[#30483E]/20 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#829486]">
              Explore
            </p>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#829486]">
              Work With Us
            </p>

            <ul className="mt-6 space-y-4">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#829486]">
              Begin
            </p>

            <ul className="mt-6 space-y-4">
              {beginLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#829486]">
              Connect
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a
                href="#"
                className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
              >
                YouTube
              </a>

              <a
                href="#"
                className="font-body text-sm text-[#20231F]/65 transition-colors hover:text-[#1F332C]"
              >
                Substack
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-[#20231F]/45">
            Licensed in Georgia · Maryland · Florida
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="#"
              className="font-body text-[10px] uppercase tracking-[0.14em] text-[#20231F]/45 transition-colors hover:text-[#1F332C]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-body text-[10px] uppercase tracking-[0.14em] text-[#20231F]/45 transition-colors hover:text-[#1F332C]"
            >
              Terms
            </a>

            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-[#20231F]/45">
              © {new Date().getFullYear()} The Oasis Sanctuary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;