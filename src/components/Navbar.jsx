import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Organizations", href: "#organizations" },
  { label: "Speaking", href: "#speaking" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5F0E7]/95 shadow-[0_8px_30px_rgba(31,51,44,0.06)] backdrop-blur-md"
          : "bg-[#F5F0E7]"
      }`}
    >
      <nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:h-[88px] lg:px-12 xl:px-16">

        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={handleNavClick}
          aria-label="The Oasis Sanctuary home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#30483E]/30 transition-colors duration-300 group-hover:border-[#A96F58]">
            <span className="display-font text-[19px] leading-none text-[#30483E]">
              O
            </span>
          </div>

          <div className="leading-none">
            <div className="display-font text-[22px] font-semibold tracking-[-0.02em] text-[#1F332C] sm:text-[24px]">
              The Oasis
            </div>

            <div className="mt-[5px] font-sans text-[8px] font-semibold uppercase tracking-[0.28em] text-[#829486]">
              Sanctuary
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#30483E] transition-colors duration-300 hover:text-[#A96F58]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#A96F58] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#1F332C] px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F5F0E7] transition-all duration-300 hover:bg-[#30483E]"
          >
            <span className="relative z-10">Begin Your Journey</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#30483E]/20 text-[#1F332C] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-4"
            }`}
          />

          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#30483E]/10 bg-[#F5F0E7] transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-7 pt-5 sm:px-8">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`flex items-center justify-between border-b border-[#30483E]/10 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-[#30483E] ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span>{item.label}</span>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#1F332C] px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F5F0E7] transition-colors duration-300 hover:bg-[#30483E]"
            >
              Begin Your Journey

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;