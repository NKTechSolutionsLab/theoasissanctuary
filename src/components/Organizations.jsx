import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Organizational Equity Strategy",
    description:
      "Move equity from a stated commitment into the everyday practices, decisions, and structures that shape organizational life.",
  },
  {
    number: "02",
    title: "Workplace Culture Assessments",
    description:
      "Examine the culture people actually experience and identify opportunities for healthier, more equitable organizational environments.",
  },
  {
    number: "03",
    title: "DEI Implementation",
    description:
      "Translate DEI commitments into practical organizational strategies and sustainable action.",
  },
  {
    number: "04",
    title: "Leadership Development",
    description:
      "Develop leaders who can navigate identity, culture, accountability, wellbeing, and the realities of leading people.",
  },
  {
    number: "05",
    title: "Staff Trainings & ERGs",
    description:
      "Create spaces for learning, dialogue, and collective growth through staff trainings, workshops, and ERG engagement.",
  },
];

const Arrow = () => (
  <svg
    width="18"
    height="18"
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

function Organizations() {
  return (
    <section
      id="organizations"
      className="overflow-hidden bg-[#1F332C] text-[#FBF9F5]"
    >
      {/* =================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Organizations
              </span>
            </div>

            <p className="display-font mt-8 max-w-[270px] text-[25px] italic leading-[1.1] text-[#829486]">
              Transform the way people experience work.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="display-font max-w-[950px] text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.87] tracking-[-0.04em]">
              Equity is not
              <br />
              <span className="text-[#A96F58]">a statement.</span>
              <br />
              It is a practice.
            </h2>

            <p className="body-font mt-10 max-w-[680px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[16px]">
              Through Legacy Leadership Group, Dr. Lady J works with
              organizations to create healthier cultures through leadership,
              equity, wellbeing, accountability, and organizational
              development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          LEGACY LEADERSHIP GROUP
      ================================================== */}
      <div className="border-y border-[#FBF9F5]/15 bg-[#30483E]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Legacy Leadership Group
              </span>

              <h3 className="display-font mt-8 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Organizational work
                <br />
                <span className="italic text-[#829486]">
                  with depth.
                </span>
              </h3>

              <p className="body-font mt-8 max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                Legacy Leadership Group is the B2B consulting arm of Dr. Lady
                J's work, distinct from The Oasis Sanctuary's individual
                healing practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="flex items-end"
            >
              <div className="border-t border-[#FBF9F5]/20 pt-7">
                <p className="display-font text-[25px] leading-[1.25] text-[#FBF9F5]/80 sm:text-[30px]">
                  Organizations do not transform through intention alone.
                  <span className="italic text-[#A96F58]">
                    {" "}
                    Transformation has to show up in practice.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          SERVICES
      ================================================== */}
      <div className="bg-[#F5F0E7] text-[#20231F]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                How We Engage
              </span>

              <h3 className="display-font mt-7 max-w-[420px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                From
                <br />
                commitment
                <br />
                <span className="italic text-[#829486]">
                  to action.
                </span>
              </h3>
            </motion.div>

            {/* Service list */}
            <div className="border-t border-[#1F332C]/15">
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid gap-5 border-b border-[#1F332C]/15 py-8 sm:grid-cols-[65px_1fr] sm:py-10"
                >
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-[#A96F58]">
                    {service.number}
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <h4 className="display-font max-w-[550px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] text-[#1F332C]">
                        {service.title}
                      </h4>

                      <span className="mt-1 shrink-0 text-[#1F332C]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A96F58]">
                        <Arrow />
                      </span>
                    </div>

                    <p className="body-font mt-5 max-w-[620px] text-[13px] leading-[1.85] text-[#20231F]/60 sm:text-[14px]">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          APPROACH
      ================================================== */}
      <div className="bg-[#EDE7DD] text-[#20231F]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
              A Deeper Approach
            </span>

            <h3 className="display-font mt-8 text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#1F332C]">
              Healthy organizations are built
              <br />
              <span className="italic text-[#829486]">
                through healthy systems.
              </span>
            </h3>

            <p className="body-font mx-auto mt-10 max-w-[700px] text-[14px] leading-[1.95] text-[#20231F]/60 sm:text-[15px]">
              The organizational work connects leadership, culture, identity,
              equity, and wellbeing rather than treating them as isolated
              conversations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          CORPORATE POWER — SIMPLE REFERENCE ONLY
      ================================================== */}
      <div className="bg-[#1F332C]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Organizational Methodology
              </span>

              <h3 className="display-font mt-7 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#FBF9F5]">
                The Corporate
                <br />
                <span className="text-[#829486]">
                  POWER Framework™
                </span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <p className="body-font max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                A living blueprint for organizations rooted in performance,
                accountability, wellbeing, equity, and a renewed approach to
                leadership.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 border-b border-[#FBF9F5]/25 pb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5] transition-colors duration-300 hover:border-[#A96F58] hover:text-[#A96F58]"
              >
                <span>Discuss Organizational Work</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          FINAL CTA
      ================================================== */}
      <div className="bg-[#A96F58]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FBF9F5]/60">
                Corporate & Organizational Work
              </span>

              <h3 className="display-font mt-6 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#FBF9F5]">
                Start a different
                <br />
                kind of conversation.
              </h3>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="group inline-flex w-fit items-center gap-4 border-b border-[#FBF9F5]/40 pb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5] transition-colors duration-300 hover:border-[#FBF9F5] lg:mb-2"
            >
              <span>Corporate Discovery Call</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organizations;