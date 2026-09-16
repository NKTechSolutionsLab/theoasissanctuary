import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Individual Therapy",
    description:
      "Trauma-informed, culturally grounded, and clinically rigorous therapy for the parts of your story that need space to be understood, processed, and healed.",
    details: [
      "Racial trauma",
      "Identity wounds",
      "Grief & life transitions",
      "Burnout & high-functioning anxiety",
    ],
  },
  {
    number: "02",
    title: "Identity Work",
    description:
      "A deeper exploration of who you have been, who you are becoming, and what happens when the identity that carried you no longer fits.",
    details: [
      "Identity transitions",
      "Identity grief",
      "Identity transformation",
      "Identity emergence",
    ],
  },
  {
    number: "03",
    title: "Somatic & Holistic Healing",
    description:
      "Healing that moves beyond conversation and into the body through carefully integrated sacred and somatic practices.",
    details: [
      "Shamanic Reiki",
      "Chakra coaching",
      "Oracle guidance",
      "Ancestral healing",
    ],
  },
  {
    number: "04",
    title: "Voice, Visibility & Embodied Power",
    description:
      "An eight-week 1:1 coaching intensive for high-achieving Black women ready to reclaim their voice, visibility, boundaries, and embodied power.",
    details: [
      "Voice reclamation",
      "Embodied leadership",
      "Boundaries",
      "Authentic expression",
    ],
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

const IndividualWellness = () => {
  return (
    <section
      id="individual"
      className="overflow-hidden bg-[#FBF9F5] text-[#20231F]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#A96F58]" />

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                Individual Work
              </span>
            </div>

            <p className="display-font mt-8 max-w-[250px] text-[26px] italic leading-[1.08] text-[#829486]">
              Healing that holds all of you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="display-font max-w-[950px] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.045em] text-[#1F332C]">
              You are more than
              <br />
              <span className="text-[#A96F58]">the strength</span>
              <br />
              you perform.
            </h2>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12">
              <span className="mt-2 hidden h-px w-14 shrink-0 bg-[#30483E]/25 sm:block" />

              <p className="max-w-[650px] font-body text-[14px] leading-[1.95] text-[#20231F]/65 sm:text-[15px]">
                This work is for the woman who has learned how to carry
                everything — and is ready to discover what it feels like to
                stop carrying it alone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <div className="mt-24 border-t border-[#1F332C]/15 md:mt-32">
          {/* Section label */}
          <div className="flex items-center justify-between border-b border-[#1F332C]/15 py-5">
            <span className="font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#829486]">
              Ways to work together
            </span>

            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-[#20231F]/35">
              04 pathways
            </span>
          </div>

          {/* Service rows */}
          <div>
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-[#1F332C]/15 py-8 md:py-10"
              >
                <div className="grid gap-7 lg:grid-cols-[70px_0.9fr_1fr_45px] lg:items-start lg:gap-8">
                  {/* Number */}
                  <div>
                    <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-[#A96F58]">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="display-font max-w-[450px] text-[clamp(2.2rem,3.7vw,4rem)] font-medium leading-[0.9] tracking-[-0.025em] text-[#1F332C] transition-transform duration-500 group-hover:translate-x-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-[560px] font-body text-[13px] leading-[1.85] text-[#20231F]/60 sm:text-[14px]">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {service.details.map((detail) => (
                        <span
                          key={detail}
                          className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-[#20231F]/45"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden justify-end pt-2 lg:flex">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F332C]/15 text-[#1F332C]/60 transition-all duration-300 group-hover:border-[#A96F58] group-hover:bg-[#A96F58] group-hover:text-[#FBF9F5]">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          WHOLE PERSON
      ===================================================== */}
      <div className="bg-[#EDE7DD]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            {/* Visual statement */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#A96F58]" />

                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                  Whole-Person Healing
                </span>
              </div>

              <h3 className="display-font mt-10 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.78] tracking-[-0.045em] text-[#1F332C]">
                Mind.
                <br />
                <span className="text-[#829486]">Body.</span>
                <br />
                Voice.
                <br />
                <span className="text-[#A96F58]">Story.</span>
              </h3>
            </motion.div>

            {/* Copy */}
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
              <p className="max-w-[570px] font-body text-[14px] leading-[2] text-[#20231F]/70 sm:text-[15px]">
                Some healing needs conversation. Some needs to be felt,
                released, and integrated. The Oasis brings clinical expertise
                and sacred healing practice together in a way that honors the
                whole person.
              </p>

              <p className="mt-6 max-w-[570px] font-body text-[14px] leading-[2] text-[#20231F]/70 sm:text-[15px]">
                Holistic services can stand alone or be thoughtfully woven
                into the work when clinically aligned. They complement
                therapy — they do not replace it.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-[#1F332C]/25 pb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F332C] transition-colors duration-300 hover:border-[#A96F58] hover:text-[#A96F58]"
              >
                <span>Begin Your Journey</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CLOSING QUOTE
      ===================================================== */}
      <div className="bg-[#1F332C] px-6 py-20 text-center sm:px-10 md:py-28 lg:px-16 lg:py-36">
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

          <blockquote className="display-font mt-8 text-[clamp(2.5rem,5.5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#FBF9F5]">
            “You don't need to perform healing here.
            <span className="text-[#829486]">
              {" "}
              You just need to show up.
            </span>
            ”
          </blockquote>

          <p className="mt-8 font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FBF9F5]/40">
            — Dr. Lady J
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndividualWellness;