import { motion } from "framer-motion";

const audiences = [
  {
    number: "01",
    eyebrow: "For Individuals",
    title: "Come home to yourself.",
    description:
      "For high-achieving Black women navigating identity shifts, burnout, racial trauma, grief, life transitions, or the quiet unraveling that can happen behind a life that looks successful from the outside.",
    offerings: [
      "Individual Therapy",
      "Identity Work",
      "Holistic & Sacred Healing",
    ],
    cta: "Explore Individual Work",
    href: "#individual",
  },
  {
    number: "02",
    eyebrow: "For Leaders",
    title: "Lead without performing.",
    description:
      "For executives, founders, and high-achieving professionals ready to lead from wholeness instead of wound — with greater clarity, embodied power, authentic voice, and professional vision.",
    offerings: [
      "Executive & Leadership Coaching",
      "Voice, Visibility & Embodied Power",
      "The POWER Method™",
    ],
    cta: "Explore Leadership Work",
    href: "#leadership",
  },
];

const organizations = [
  "Organizational Equity Strategy",
  "Workplace Culture Assessments",
  "DEI Implementation",
  "Leadership Development",
  "ERGs & Staff Trainings",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

const WhoWeServe = () => {
  return (
    <section
      id="who-we-serve"
      className="bg-[#F5F0E7] text-[#20231F]"
    >
      {/* -------------------------------------------------
          INTRO
      -------------------------------------------------- */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24"
        >
          <motion.div variants={item}>
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
              Who We Serve
            </span>

            <div className="mt-5 h-px w-16 bg-[#A96F58]" />
          </motion.div>

          <motion.div variants={item} className="max-w-[900px]">
            <h2 className="display-font text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C]">
              Different paths.
              <br />
              <span className="text-[#829486]">
                A shared commitment
              </span>
              <br />
              to the whole person.
            </h2>

            <p className="body-font mt-10 max-w-[650px] text-[15px] leading-[1.9] text-[#20231F]/70 sm:text-[16px]">
              The work meets you where you are — whether you are navigating
              an identity transition, leading at the highest level, or
              creating healthier systems for the people you lead.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* -------------------------------------------------
          INDIVIDUAL + LEADER PATHS
      -------------------------------------------------- */}
      <div className="border-y border-[#1F332C]/15">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2">
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative py-16 sm:py-20 lg:py-24",
                  index === 0
                    ? "lg:border-r lg:border-[#1F332C]/15 lg:pr-16"
                    : "lg:pl-16",
                ].join(" ")}
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="display-font text-[24px] italic text-[#A96F58]">
                    {audience.number}
                  </span>

                  <span className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#20231F]/40">
                    {audience.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="display-font mt-14 max-w-[560px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-[#1F332C]">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="body-font mt-8 max-w-[560px] text-[14px] leading-[1.9] text-[#20231F]/70 sm:text-[15px]">
                  {audience.description}
                </p>

                {/* Offerings */}
                <div className="mt-10 border-t border-[#1F332C]/15">
                  {audience.offerings.map((offering) => (
                    <div
                      key={offering}
                      className="flex items-center gap-4 border-b border-[#1F332C]/15 py-4"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A96F58]" />

                      <span className="body-font text-[12px] font-medium tracking-wide text-[#20231F]/80">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={audience.href}
                  className="body-font mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1F332C] transition-colors duration-300 group-hover:text-[#A96F58]"
                >
                  <span>{audience.cta}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------
          ORGANIZATIONS
      -------------------------------------------------- */}
      <div
        id="organizations"
        className="bg-[#1F332C] text-[#FBF9F5]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-5">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                  03
                </span>

                <span className="h-px w-12 bg-[#A96F58]" />

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FBF9F5]/50">
                  For Organizations
                </span>
              </div>

              <h3 className="display-font mt-12 max-w-[760px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.035em]">
                Transform the system,
                <br />
                <span className="text-[#829486]">
                  not just the individual.
                </span>
              </h3>

              <p className="body-font mt-10 max-w-[650px] text-[14px] leading-[1.95] text-[#FBF9F5]/65 sm:text-[15px]">
                Through Legacy Leadership Group, organizations can move beyond
                surface-level commitments and build cultures rooted in
                equity, psychological safety, wellbeing, accountability, and
                leadership development.
              </p>

              <a
                href="#organizations"
                className="group mt-10 inline-flex items-center gap-3 border-b border-[#FBF9F5]/30 pb-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5] transition-colors duration-300 hover:border-[#A96F58] hover:text-[#A96F58]"
              >
                <span>Explore Organizational Work</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>

            {/* Right */}
            <div className="lg:pt-10">
              <div className="border-t border-[#FBF9F5]/20">
                {organizations.map((organization, index) => (
                  <motion.div
                    key={organization}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="flex items-center justify-between gap-6 border-b border-[#FBF9F5]/20 py-6"
                  >
                    <span className="font-body text-[12px] font-medium tracking-wide text-[#FBF9F5]/80 sm:text-[13px]">
                      {organization}
                    </span>

                    <span className="font-body text-[10px] text-[#A96F58]">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Framework callout */}
              <div className="mt-12 border border-[#FBF9F5]/15 p-7 sm:p-9">
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A96F58]">
                  Signature Organizational Framework
                </span>

                <h4 className="display-font mt-4 text-[clamp(2rem,3vw,3rem)] font-medium leading-none">
                  The Corporate POWER Framework™
                </h4>

                <p className="body-font mt-5 text-[12px] leading-[1.8] text-[#FBF9F5]/55">
                  A living blueprint for organizations ready to reimagine
                  performance, accountability, wellbeing, equity, and
                  leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------------------------------------------------
          CLOSING STATEMENT
      -------------------------------------------------- */}
      <div className="bg-[#DDD1BE]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center sm:px-10 md:py-28 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display-font mx-auto max-w-[850px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[#1F332C]"
          >
            Wherever you are in the journey,
            <span className="italic text-[#A96F58]">
              {" "}
              there is a path forward.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;