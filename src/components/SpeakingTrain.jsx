import React from "react";
import { motion } from "framer-motion";

const speakingTopics = [
  {
    number: "01",
    title: "The Care Less Advantage™",
    description:
      "A conversation about success, healthy ambition, intentional living, boundaries, and creating room for your life alongside your accomplishments.",
  },
  {
    number: "02",
    title: "Approachable Conversations™",
    description:
      "Creating space for meaningful conversations that move beyond surface-level dialogue and into connection, understanding, and growth.",
  },
  {
    number: "03",
    title: "Beyond Burnout",
    description:
      "Exploring what sits beneath exhaustion and how leaders can rethink the patterns that keep them performing at the expense of themselves.",
  },
  {
    number: "04",
    title: "Leadership Without the Performance",
    description:
      "A deeper look at authentic leadership, identity, visibility, and what becomes possible when leaders no longer feel the need to perform strength.",
  },
  {
    number: "05",
    title: "The Psychology of Reinvention",
    description:
      "Understanding the psychological experience of transition, identity shifts, and becoming something new without abandoning who you are.",
  },
];

const formats = [
  "Keynotes",
  "Leadership Trainings",
  "Workshops",
  "Panels",
  "Retreats",
  "Conferences",
  "Organizational Events",
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

function SpeakingTrain() {
  return (
    <section
      id="speaking"
      className="overflow-hidden bg-[#FBF9F5] text-[#20231F]"
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
                Speaking & Training
              </span>
            </div>

            <p className="display-font mt-8 max-w-[270px] text-[25px] italic leading-[1.1] text-[#829486]">
              Research, lived experience, and conversations that move people.
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
            <h2 className="display-font max-w-[950px] text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.87] tracking-[-0.04em] text-[#1F332C]">
              Say something
              <br />
              that
              <span className="text-[#A96F58]"> stays.</span>
            </h2>

            <p className="body-font mt-10 max-w-[680px] text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[16px]">
              Dr. Lady J brings clinical expertise, research, lived
              experience, and sacred truth-telling to stages, organizations,
              retreats, panels, conferences, and leadership events.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          FEATURE STATEMENT
      ================================================== */}
      <div className="bg-[#1F332C] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-[1100px] text-center"
          >
            <span className="font-body text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A96F58]">
              The Stage
            </span>

            <p className="display-font mt-8 text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.92] tracking-[-0.035em]">
              “Your success should make room for
              <span className="italic text-[#829486]"> your life, too.</span>
              ”
            </p>

            <p className="body-font mx-auto mt-9 max-w-[650px] text-[13px] leading-[1.9] text-[#FBF9F5]/55 sm:text-[14px]">
              Conversations designed to challenge familiar patterns, create
              reflection, and leave audiences with ideas they can actually
              carry into their work and lives.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          SPEAKING TOPICS
      ================================================== */}
      <div className="bg-[#EDE7DD]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Speaking Topics
              </span>

              <h3 className="display-font mt-7 max-w-[430px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                Conversations
                <br />
                worth
                <br />
                <span className="italic text-[#829486]">
                  having.
                </span>
              </h3>
            </motion.div>

            <div className="border-t border-[#1F332C]/15">
              {speakingTopics.map((topic) => (
                <motion.article
                  key={topic.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid gap-5 border-b border-[#1F332C]/15 py-9 sm:grid-cols-[60px_1fr] sm:py-11"
                >
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-[#A96F58]">
                    {topic.number}
                  </span>

                  <div>
                    <h4 className="display-font text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] text-[#1F332C]">
                      {topic.title}
                    </h4>

                    <p className="body-font mt-5 max-w-[620px] text-[13px] leading-[1.9] text-[#20231F]/60 sm:text-[14px]">
                      {topic.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          FORMATS
      ================================================== */}
      <div className="bg-[#F5F0E7]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Formats
              </span>

              <h3 className="display-font mt-7 max-w-[450px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
                Meet the
                <br />
                moment
                <br />
                <span className="italic text-[#829486]">
                  where it is.
                </span>
              </h3>

              <p className="body-font mt-8 max-w-[430px] text-[13px] leading-[1.9] text-[#20231F]/60">
                From a keynote stage to an intimate retreat or leadership
                training, the work can be shaped around the audience,
                environment, and purpose of the event.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 border-t border-[#1F332C]/15 sm:grid-cols-2">
              {formats.map((format, index) => (
                <motion.div
                  key={format}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className={`flex items-center justify-between border-b border-[#1F332C]/15 py-6 ${
                    index % 2 === 1
                      ? "sm:border-l sm:pl-7"
                      : "sm:pr-7"
                  }`}
                >
                  <span className="body-font text-[11px] font-medium uppercase tracking-[0.08em] text-[#20231F]/70">
                    {format}
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
          RECOGNITION
      ================================================== */}
      <div className="bg-[#30483E] text-[#FBF9F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                On The Stage
              </span>

              <h3 className="display-font mt-7 max-w-[420px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Research meets
                <br />
                <span className="italic text-[#829486]">
                  real life.
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
            >
              <div className="border-t border-[#FBF9F5]/15 pt-8">
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A96F58]">
                  Recognition
                </span>

                <h4 className="display-font mt-5 text-[clamp(2rem,3vw,3rem)] font-medium leading-none">
                  Top 100 Most Powerful Black Women Summit
                </h4>

                <p className="body-font mt-4 text-[12px] uppercase tracking-[0.08em] text-[#FBF9F5]/45">
                  Keynote Speaker
                </p>
              </div>

              <div className="mt-10 border-t border-[#FBF9F5]/15 pt-8">
                <p className="display-font max-w-[650px] text-[25px] leading-[1.2] text-[#FBF9F5]/80 sm:text-[30px]">
                  “She brought the room to life — and left every leader with
                  something they could actually use.”
                </p>

                <p className="body-font mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5]/40">
                  Emily JT Perez Foundation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          CTA
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
                Speaking · Workshops · Trainings
              </span>

              <h3 className="display-font mt-6 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Bring a different
                <br />
                conversation to your room.
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
              <span>Book A Speaking Engagement</span>

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

export default SpeakingTrain;