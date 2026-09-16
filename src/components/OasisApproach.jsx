import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Clinical Depth",
    description:
      "Trauma-informed and clinically grounded work that takes your emotional experience, history, and healing seriously.",
  },
  {
    number: "02",
    title: "Cultural Understanding",
    description:
      "A space that recognizes the impact of race, identity, workplace experiences, and the pressure to perform strength.",
  },
  {
    number: "03",
    title: "Whole-Person Healing",
    description:
      "Mind, body, voice, spirit, and story are not treated as separate pieces of who you are.",
  },
  {
    number: "04",
    title: "Lived Experience",
    description:
      "Professional expertise is paired with lived understanding, creating space for conversations that do not require you to explain every part of yourself.",
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

function OasisApproach() {
  return (
    <section
      id="approach"
      className="overflow-hidden bg-[#F5F0E7] text-[#20231F]"
    >
      {/* =================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                The Oasis Approach
              </span>
            </div>

            <p className="display-font mt-8 max-w-[280px] text-[25px] italic leading-[1.1] text-[#829486]">
              You do not have to leave parts of yourself at the door.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="display-font max-w-[950px] text-[clamp(3rem,6.4vw,7rem)] font-medium leading-[0.87] tracking-[-0.04em] text-[#1F332C]">
              Healing that
              <br />
              <span className="text-[#A96F58]">sees</span>
              <br />
              the whole you.
            </h2>

            <p className="body-font mt-10 max-w-[680px] text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[16px]">
              The Oasis brings clinical expertise, culturally grounded care,
              lived experience, and sacred healing practices into one
              integrated space.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          PRINCIPLES
      ================================================== */}
      <div className="border-y border-[#1F332C]/15 bg-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "py-14 sm:py-16 lg:py-20",
                  index === 0
                    ? "lg:border-r lg:border-b lg:border-[#1F332C]/15 lg:pr-16"
                    : "",
                  index === 1
                    ? "border-t border-[#1F332C]/15 lg:border-b lg:border-t-0 lg:pl-16"
                    : "",
                  index === 2
                    ? "border-t border-[#1F332C]/15 lg:border-r lg:border-t-0 lg:pr-16"
                    : "",
                  index === 3
                    ? "border-t border-[#1F332C]/15 lg:border-t-0 lg:pl-16"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-[#A96F58]">
                    {principle.number}
                  </span>

                  <span className="h-px w-10 bg-[#1F332C]/15" />
                </div>

                <h3 className="display-font mt-12 text-[clamp(2.3rem,4vw,4rem)] font-medium leading-[0.92] tracking-[-0.03em] text-[#1F332C]">
                  {principle.title}
                </h3>

                <p className="body-font mt-6 max-w-[500px] text-[13px] leading-[1.9] text-[#20231F]/60 sm:text-[14px]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================
          CENTRAL PHILOSOPHY
      ================================================== */}
      <div className="bg-[#30483E] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"
          >
            <div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                The Philosophy
              </span>

              <div className="mt-7 h-px w-14 bg-[#A96F58]" />
            </div>

            <div>
              <p className="display-font max-w-[900px] text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                You are not broken.
                <br />
                You are not behind.
                <br />
                <span className="italic text-[#829486]">
                  You are becoming.
                </span>
              </p>

              <p className="body-font mt-10 max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                Sometimes the identity that helped you survive, succeed, or
                carry others can no longer hold who you are becoming. The
                Oasis creates space to recognize that transition rather than
                rush past it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          INTEGRATION
      ================================================== */}
      <div className="bg-[#DDD1BE]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
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
                Integration
              </span>

              <h3 className="display-font mt-7 max-w-[600px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                Nothing about you
                <br />
                needs to be
                <br />
                <span className="italic text-[#829486]">
                  compartmentalized.
                </span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="lg:flex lg:items-end"
            >
              <div>
                <p className="body-font text-[14px] leading-[2] text-[#20231F]/65 sm:text-[15px]">
                  The Oasis recognizes that healing can touch your mind, body,
                  voice, story, identity, and spirit. Different modalities can
                  be thoughtfully integrated when clinically aligned with the
                  work.
                </p>

                <p className="body-font mt-6 text-[14px] leading-[2] text-[#20231F]/65 sm:text-[15px]">
                  The result is not another version of yourself to perform.
                  It is a deeper relationship with the person you already are
                  — and the person you are becoming.
                </p>

                <a
                  href="#contact"
                  className="group mt-10 inline-flex items-center gap-3 border-b border-[#1F332C]/30 pb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F332C] transition-colors duration-300 hover:border-[#A96F58] hover:text-[#A96F58]"
                >
                  <span>Begin Your Journey</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          CLOSING
      ================================================== */}
      <div className="bg-[#1F332C] px-6 py-20 text-center sm:px-10 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1000px]"
        >
          <span className="font-body text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A96F58]">
            The Oasis Sanctuary
          </span>

          <p className="display-font mt-8 text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.035em] text-[#FBF9F5]">
            Reclaim.
            <span className="text-[#829486]"> Remember.</span>
            <br />
            <span className="italic text-[#A96F58]">Rebirth.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default OasisApproach;