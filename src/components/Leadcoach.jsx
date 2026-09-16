import React from "react";
import { motion } from "framer-motion";

const coachingPillars = [
  {
    number: "01",
    title: "Lead From Wholeness",
    description:
      "Move beyond leading from survival, performance, or the need to prove yourself. Develop a leadership practice grounded in clarity, authenticity, and self-trust.",
  },
  {
    number: "02",
    title: "Reclaim Your Voice",
    description:
      "Reconnect with the voice that may have been muted by expectations, workplace dynamics, or years of performing a version of yourself that no longer fits.",
  },
  {
    number: "03",
    title: "Embody Your Power",
    description:
      "Leadership is not only what you know. It is how you show up. Explore boundaries, presence, visibility, and the relationship between your inner world and your leadership.",
  },
];

const Arrow = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Leadcoach() {
  return (
    <section
      id="leadership"
      className="overflow-hidden bg-[#F5F0E7] text-[#20231F]"
    >
      {/* =====================================================
          INTRO
      ===================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          {/* Editorial label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Leadership Coaching
              </span>
            </div>

            <p className="display-font mt-8 max-w-[260px] text-[25px] italic leading-[1.08] text-[#829486]">
              Your leadership does not have to cost you yourself.
            </p>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="display-font max-w-[1000px] text-[clamp(3.3rem,6.8vw,7.2rem)] font-medium leading-[0.84] tracking-[-0.045em] text-[#1F332C]">
              Lead from
              <br />
              <span className="text-[#A96F58]">wholeness,</span>
              <br />
              not the wound.
            </h2>

            <div className="mt-10 flex max-w-[760px] items-start gap-5">
              <span className="mt-3 h-px w-10 shrink-0 bg-[#30483E]/25" />

              <p className="font-body text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[15px]">
                For high-achievers who have mastered performance but are ready
                for a different way of leading — one rooted in identity,
                embodiment, authentic voice, and professional vision.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            THREE PILLARS
        ================================================= */}
        <div className="mt-24 border-y border-[#1F332C]/15 md:mt-28">
          <div className="grid lg:grid-cols-3">
            {coachingPillars.map((pillar, index) => (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative px-0 py-10 lg:px-9 lg:py-12 ${
                  index !== 0
                    ? "border-t border-[#1F332C]/15 lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-[#A96F58]">
                    {pillar.number}
                  </span>

                  <span className="h-px w-8 bg-[#1F332C]/15 transition-all duration-500 group-hover:w-14 group-hover:bg-[#A96F58]" />
                </div>

                <h3 className="display-font mt-12 max-w-[380px] text-[clamp(2.3rem,3.3vw,3.6rem)] font-medium leading-[0.9] tracking-[-0.025em] text-[#1F332C]">
                  {pillar.title}
                </h3>

                <p className="mt-5 max-w-[410px] font-body text-[13px] leading-[1.9] text-[#20231F]/60">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          SIGNATURE INTENSIVE
      ===================================================== */}
      <div className="bg-[#1F332C] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
            {/* Main offer */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#A96F58]" />

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9B7A3]">
                  Signature Coaching Intensive
                </span>
              </div>

              <h3 className="display-font mt-9 max-w-[900px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.85] tracking-[-0.045em]">
                Voice, Visibility
                <br />
                <span className="text-[#829486]">
                  &amp; Embodied Power.
                </span>
              </h3>

              <p className="mt-9 max-w-[650px] font-body text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                An eight-week 1:1 coaching intensive for high-achieving Black
                women ready to reclaim their voice, visibility, boundaries,
                and embodied power.
              </p>
            </motion.div>

            {/* Offer details */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-end"
            >
              <div className="border-t border-[#FBF9F5]/15">
                <div className="flex items-center justify-between border-b border-[#FBF9F5]/15 py-5">
                  <span className="font-body text-[9px] uppercase tracking-[0.22em] text-[#FBF9F5]/40">
                    Format
                  </span>

                  <span className="font-body text-[11px] font-medium text-[#FBF9F5]/75">
                    1:1 Coaching
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#FBF9F5]/15 py-5">
                  <span className="font-body text-[9px] uppercase tracking-[0.22em] text-[#FBF9F5]/40">
                    Duration
                  </span>

                  <span className="font-body text-[11px] font-medium text-[#FBF9F5]/75">
                    8 Weeks
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#FBF9F5]/15 py-5">
                  <span className="font-body text-[9px] uppercase tracking-[0.22em] text-[#FBF9F5]/40">
                    Focus
                  </span>

                  <span className="font-body text-[11px] font-medium text-[#FBF9F5]/75">
                    Voice · Visibility · Power
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="group mt-8 inline-flex w-fit items-center gap-4 border-b border-[#FBF9F5]/25 pb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5] transition-colors duration-300 hover:border-[#D9B7A3] hover:text-[#D9B7A3]"
              >
                <span>Explore The Intensive</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadcoach;