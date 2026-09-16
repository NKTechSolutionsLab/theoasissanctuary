import { motion } from "framer-motion";
import hero from "../images/Hero.jpg"
const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#F5F0E7]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute right-[-12%] top-[5%] h-[620px] w-[620px] rounded-full bg-[#DDD1BE]/35 blur-[100px]" />

      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-14 px-6 pb-16 pt-[125px] sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:pb-20 lg:pt-[110px] xl:px-16">

        {/* =====================================================
            LEFT — CONTENT
        ====================================================== */}

        <div className="relative z-10 max-w-[650px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#A96F58]" />

            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-[#617568]">
              The Oasis Sanctuary · Est. 2021
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="display-font text-[68px] font-medium leading-[0.82] tracking-[-0.045em] text-[#1F332C] sm:text-[86px] lg:text-[92px] xl:text-[108px]"
          >
            Reclaim.
            <br />

            Remember.
            <br />

            <span className="italic text-[#A96F58]">
              Rebirth.
            </span>
          </motion.h1>

          {/* Positioning */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-[530px] font-sans text-[15px] leading-[1.8] text-[#53645A] sm:text-[16px]"
          >
            A sacred healing space for high-achieving Black women who are
            done performing strength — and ready to come home to themselves.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* Primary */}
            <a
              href="#concierge"
              className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#1F332C] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-[#F5F0E7] transition-all duration-300 hover:bg-[#30483E]"
            >
              Enter The Oasis

              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M2 7.5H12.5M8.5 3.5L12.5 7.5L8.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Secondary */}
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#30483E]/25 px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-[#30483E] transition-all duration-300 hover:border-[#A96F58] hover:text-[#A96F58]"
            >
              Meet Dr. Lady J
            </a>
          </motion.div>

          {/* Brand pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-12 grid max-w-[510px] grid-cols-2 border-t border-[#30483E]/15 pt-5 sm:grid-cols-4"
          >
            {[
              "Identity",
              "Voice",
              "Embodiment",
              "Leadership",
            ].map((item, index) => (
              <div
                key={item}
                className={`${
                  index > 1
                    ? "mt-4 border-l border-[#30483E]/15 pl-4 sm:mt-0"
                    : ""
                } ${
                  index === 1
                    ? "border-l border-[#30483E]/15 pl-4"
                    : ""
                }`}
              >
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#829486]">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — IMAGE COMPOSITION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[650px]"
        >
          {/* Decorative vertical text */}
          <div className="absolute -left-10 top-[25%] z-20 hidden -rotate-90 lg:block">
            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.32em] text-[#829486]">
              A Sanctuary · A Journey · A Return to You
            </span>
          </div>

          {/* Main image */}
          <div className="relative aspect-[0.82] overflow-hidden rounded-t-[190px] rounded-b-[18px] bg-[#30483E]">

            <img
              src={hero}
              alt="Woman in a calm, reflective environment"
              className="h-full w-full object-cover"
            />

            {/* Warm overlay */}
            <div className="absolute inset-0 bg-[#1F332C]/10" />

            {/* Soft gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1F332C]/55 to-transparent" />

            {/* Inner border */}
            <div className="absolute inset-5 rounded-t-[165px] rounded-b-[12px] border border-[#F5F0E7]/35 sm:inset-7 sm:rounded-t-[170px]" />

            {/* Image caption */}
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-9 sm:left-9 sm:right-9">
              <div>
                <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.24em] text-[#F5F0E7]/70">
                  The Oasis Sanctuary
                </p>

                <p className="display-font mt-1 text-[25px] italic leading-none text-[#F5F0E7] sm:text-[30px]">
                  Come home to yourself.
                </p>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#F5F0E7]/40 sm:flex">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2V12M7 12L3.5 8.5M7 12L10.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating identity card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute -bottom-8 -left-4 z-20 w-[235px] bg-[#F5F0E7] p-6 shadow-[0_20px_70px_rgba(31,51,44,0.14)] sm:-left-8 sm:w-[265px] sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A96F58]" />

              <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-[#829486]">
                The Work
              </span>
            </div>

            <p className="display-font text-[25px] leading-[1.05] tracking-[-0.02em] text-[#1F332C] sm:text-[29px]">
              You don't need to perform healing here.
            </p>

            <p className="mt-4 font-sans text-[10px] leading-[1.6] text-[#617568]">
              You just need to show up.
            </p>

            <div className="mt-5 font-sans text-[8px] font-semibold uppercase tracking-[0.17em] text-[#A96F58]">
              — Dr. Lady J
            </div>
          </motion.div>

          {/* Small corner label */}
          <div className="absolute -right-3 top-8 hidden h-[110px] w-[110px] items-center justify-center rounded-full border border-[#A96F58]/40 bg-[#F5F0E7] lg:flex">
            <div className="text-center">
              <p className="font-sans text-[7px] font-semibold uppercase tracking-[0.18em] text-[#617568]">
                Whole
              </p>

              <p className="display-font text-[19px] italic text-[#A96F58]">
                Person
              </p>

              <p className="font-sans text-[7px] font-semibold uppercase tracking-[0.18em] text-[#617568]">
                Healing
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <a
          href="#concierge"
          className="flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-[#829486]">
            Enter
          </span>

          <span className="h-8 w-px bg-[#30483E]/25" />
        </a>
      </motion.div>
    </section>
  );
};


export default Hero;