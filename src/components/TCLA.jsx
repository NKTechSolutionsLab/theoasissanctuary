
import React from "react";
import { motion } from "framer-motion";

const topics = [
  "Intentional Living",
  "Healthy Ambition",
  "Self-Leadership",
  "Boundaries",
  "Mindful Leadership",
  "Work-Life Balance",
  "Personal Growth",
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

function TCLA() {
  return (
    <section
      id="tcla"
      className="overflow-hidden bg-[#F5F0E7] text-[#20231F]"
    >
      {/* =================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Editorial label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                The Care Less Advantage™
              </span>
            </div>

            <p className="display-font mt-8 max-w-[280px] text-[25px] italic leading-[1.1] text-[#829486]">
              Your success should make room for your life, too.
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="display-font max-w-[950px] text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.87] tracking-[-0.04em] text-[#1F332C]">
              Care less about
              <br />
              <span className="text-[#A96F58]">performing success.</span>
              <br />
              Care more about living it.
            </h2>

            <p className="body-font mt-10 max-w-[680px] text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[16px]">
              The Care Less Advantage™ invites high-achievers to reconsider
              what success costs — and create a more intentional relationship
              with ambition, leadership, boundaries, and life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          FEATURE STATEMENT
      ================================================== */}
      <div className="bg-[#1F332C] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"
          >
            <div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                A Different Conversation
              </span>

              <div className="mt-7 h-px w-14 bg-[#A96F58]" />
            </div>

            <div>
              <p className="display-font max-w-[900px] text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                What if ambition didn't require you to abandon yourself?
              </p>

              <p className="body-font mt-9 max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                This work explores how high-achievers can pursue meaningful
                success while creating space for boundaries, wellbeing,
                relationships, rest, and a life beyond performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          TOPICS
      ================================================== */}
      <div className="bg-[#EDE7DD]">
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
                The Conversation
              </span>

              <h3 className="display-font mt-7 max-w-[420px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                Success
                <br />
                without
                <br />
                <span className="italic text-[#829486]">
                  self-abandonment.
                </span>
              </h3>
            </motion.div>

            {/* Topic list */}
            <div className="border-t border-[#1F332C]/15">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-[#1F332C]/15 py-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-body text-[9px] font-semibold tracking-[0.15em] text-[#A96F58]">
                      0{index + 1}
                    </span>

                    <span className="display-font text-[25px] font-medium text-[#1F332C] sm:text-[30px]">
                      {topic}
                    </span>
                  </div>

                  <span className="text-[#1F332C]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A96F58]">
                    <Arrow />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          KEYNOTE / SPEAKING
      ================================================== */}
      <div className="bg-[#30483E] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            {/* Main */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Speaking & Workshops
              </span>

              <h3 className="display-font mt-9 max-w-[850px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.04em]">
                Conversations that
                <br />
                <span className="text-[#829486]">
                  move people.
                </span>
              </h3>

              <p className="body-font mt-9 max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/60 sm:text-[15px]">
                Dr. Lady J brings research, lived expertise, leadership
                experience, and sacred truth-telling to stages, organizations,
                retreats, panels, and leadership events.
              </p>
            </motion.div>

            {/* Speaking topics */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="lg:pt-10"
            >
              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FBF9F5]/40">
                Speaking Topics
              </span>

              <div className="mt-7 border-t border-[#FBF9F5]/15">
                {[
                  "The Care Less Advantage™",
                  "Approachable Conversations™",
                  "Beyond Burnout",
                  "Leadership Without the Performance",
                  "The Psychology of Reinvention",
                  "The POWER Method™",
                ].map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between border-b border-[#FBF9F5]/15 py-5"
                  >
                    <span className="body-font max-w-[270px] text-[11px] font-medium leading-[1.5] text-[#FBF9F5]/75">
                      {topic}
                    </span>

                    <span className="font-body text-[9px] text-[#A96F58]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          FINAL CTA
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
                Speaking · Workshops · Leadership Events
              </span>

              <h3 className="display-font mt-6 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Your audience deserves
                <br />
                a conversation that stays.
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
              <span>Book Dr. Lady J</span>

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

export default TCLA;