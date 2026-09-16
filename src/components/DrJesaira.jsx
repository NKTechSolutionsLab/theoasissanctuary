import React from "react";
import { motion } from "framer-motion";
import glover from "../images/glover.jpg"

const credentials = [
  "Licensed Professional Counselor (LPC)",
  "National Certified Counselor (NCC)",
  "WCI Certified Leadership & Executive Coach",
  "Shamanic Reiki Master",
  "Doctoral Candidate · Business Psychology",
  "Oracle & Performing Artist",
];

const recognition = [
  "Top 100 Most Powerful Black Women Summit · Keynote Speaker",
  "VITAS Healthcare · Corporate Wellness",
  "National Board Certified Counselor",
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

function DrJesaira() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FBF9F5] text-[#20231F]"
    >
      {/* =================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-t-[260px] bg-[#DDD1BE]">
              <div className="aspect-[4/5]">
                <img
                  src={glover}
                  alt="Dr. Lady J"
                  className="h-full w-full object-cover object-center grayscale-[15%]"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 border border-[#1F332C]/15 bg-[#F5F0E7] px-5 py-4 sm:-right-5">
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A96F58]">
                10+ Years
              </span>

              <p className="display-font mt-1 text-[20px] italic text-[#1F332C]">
                Healing Leaders
              </p>
            </div>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-8"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Meet Dr. Lady J
              </span>
            </div>

            <h2 className="display-font mt-10 max-w-[800px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-[#1F332C]">
              I left the
              <br />
              corporate table.
              <br />
              <span className="italic text-[#A96F58]">
                Then I built my own.
              </span>
            </h2>

            <p className="body-font mt-10 max-w-[650px] text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[15px]">
              Dr. Jesaira “Dr. Lady J” Glover is a licensed therapist,
              leadership coach, organizational consultant, and sacred healing
              practitioner whose work sits at the intersection of healing,
              identity, leadership, and transformation.
            </p>

            <p className="body-font mt-6 max-w-[650px] text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[15px]">
              Her work was shaped by the experience of being highly qualified
              while still feeling invisible, minimized, and pressured to
              perform a smaller version of herself.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          STORY
      ================================================== */}
      <div className="bg-[#1F332C] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                The Story
              </span>

              <div className="mt-7 h-px w-14 bg-[#A96F58]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="display-font max-w-[900px] text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                “The cape is what we do.
                <br />
                The mask is who we became.”
              </p>

              <p className="body-font mt-10 max-w-[680px] text-[14px] leading-[2] text-[#FBF9F5]/60 sm:text-[15px]">
                The Oasis was created as a space where high-achieving Black
                women do not have to perform strength in order to be worthy of
                care, support, or transformation.
              </p>

              <p className="body-font mt-6 max-w-[680px] text-[14px] leading-[2] text-[#FBF9F5]/60 sm:text-[15px]">
                The work is about putting down what no longer belongs to you
                and making room to meet yourself on the other side.
              </p>

              <p className="body-font mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A96F58]">
                — Dr. Lady J, LPC
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          CREDENTIALS
      ================================================== */}
      <div className="bg-[#EDE7DD]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Expertise
              </span>

              <h3 className="display-font mt-7 max-w-[430px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                Many lenses.
                <br />
                <span className="italic text-[#829486]">
                  One whole person.
                </span>
              </h3>
            </motion.div>

            <div>
              <div className="border-t border-[#1F332C]/15">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-6 border-b border-[#1F332C]/15 py-6"
                  >
                    <span className="font-body text-[9px] font-semibold tracking-[0.15em] text-[#A96F58]">
                      0{index + 1}
                    </span>

                    <span className="body-font text-[12px] font-medium uppercase tracking-[0.06em] text-[#20231F]/70 sm:text-[13px]">
                      {credential}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 border-t border-[#1F332C]/15 pt-8">
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A96F58]">
                  Licensure & Practice
                </span>

                <p className="display-font mt-5 max-w-[650px] text-[25px] leading-[1.2] text-[#1F332C] sm:text-[30px]">
                  Therapy licensed in Georgia, Maryland, and Florida.
                  Coaching available nationwide and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          RECOGNITION
      ================================================== */}
      <div className="bg-[#30483E] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Recognition
              </span>

              <h3 className="display-font mt-7 max-w-[430px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Work that
                <br />
                reaches
                <br />
                <span className="italic text-[#829486]">
                  beyond the room.
                </span>
              </h3>
            </motion.div>

            <div className="border-t border-[#FBF9F5]/15">
              {recognition.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="flex items-start justify-between gap-8 border-b border-[#FBF9F5]/15 py-8"
                >
                  <span className="body-font max-w-[650px] text-[12px] font-medium uppercase tracking-[0.06em] leading-[1.6] text-[#FBF9F5]/70 sm:text-[13px]">
                    {item}
                  </span>

                  <span className="font-body text-[9px] text-[#A96F58]">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          CLOSING
      ================================================== */}
      <div className="bg-[#A96F58] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FBF9F5]/60">
                The Oasis Sanctuary
              </span>

              <h3 className="display-font mt-6 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                You don't need to
                <br />
                perform healing here.
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
              <span>Meet The Oasis</span>

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

export default DrJesaira;