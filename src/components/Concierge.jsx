import { motion } from "framer-motion";

const journeySteps = [
  {
    number: "01",
    title: "Enter",
    description:
      "You're welcomed into a sacred space where you feel seen, safe, and supported.",
  },
  {
    number: "02",
    title: "Recalibrate",
    description:
      "Together, we uncover what's been carrying too much, for too long.",
  },
  {
    number: "03",
    title: "Restore",
    description:
      "You reconnect with your identity, voice, and the parts of you that have been silenced.",
  },
  {
    number: "04",
    title: "Embody",
    description:
      "You align your inner truth with your daily life and leadership.",
  },
  {
    number: "05",
    title: "Lead",
    description:
      "You lead from wholeness, impact, and authentic power.",
  },
];

const Concierge = () => {
  return (
    <section
      id="concierge"
      className="relative overflow-hidden bg-[#F5F0E7] py-24 sm:py-28 lg:py-36"
    >
      {/* Background detail */}
      <div className="pointer-events-none absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-[#DDD1BE]/25 blur-[100px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            TOP INTRO
        ====================================================== */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-[7px] h-px w-9 bg-[#A96F58]" />

            <div>
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.27em] text-[#617568]">
                The Signature Experience
              </p>

              <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.16em] text-[#829486]">
                A sanctuary · A journey · A return to you
              </p>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-font max-w-[900px] text-[52px] font-medium leading-[0.94] tracking-[-0.035em] text-[#1F332C] sm:text-[66px] lg:text-[78px]">
              The Oasis Concierge
              <br />
              <span className="italic text-[#A96F58]">
                Experience™
              </span>
            </h2>

            <p className="mt-7 max-w-[670px] font-sans text-[14px] leading-[1.85] text-[#53645A] sm:text-[15px]">
              A guided transformational journey back to your authentic voice,
              identity, and embodied leadership.
            </p>

            <a
              href="#journey"
              className="group mt-7 inline-flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#30483E]"
            >
              Discover the Experience

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
          </motion.div>
        </div>

        {/* =====================================================
            EXPERIENCE VISUAL
        ====================================================== */}

        <div
          id="journey"
          className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10"
        >

          {/* IMAGE PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[470px] overflow-hidden rounded-t-[180px] rounded-b-[14px] bg-[#30483E] sm:min-h-[560px] lg:min-h-[650px]"
          >
            <img
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85"
              alt="Peaceful sanctuary surrounded by nature"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#1F332C]/20" />

            <div className="absolute inset-5 rounded-t-[155px] rounded-b-[9px] border border-[#F5F0E7]/30 sm:inset-7 sm:rounded-t-[160px]" />

            {/* Image text */}
            <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-9 sm:right-9">
              <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-[#F5F0E7]/70">
                The Oasis Sanctuary
              </p>

              <p className="display-font mt-2 max-w-[320px] text-[32px] leading-[0.95] tracking-[-0.02em] text-[#F5F0E7] sm:text-[40px]">
                A place to
                <br />
                <span className="italic">exhale.</span>
              </p>
            </div>

            {/* Small badge */}
            <div className="absolute right-5 top-7 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#F5F0E7]/35 bg-[#1F332C]/20 backdrop-blur-sm sm:right-7 sm:top-9">
              <div className="text-center">
                <p className="font-sans text-[7px] font-semibold uppercase tracking-[0.15em] text-[#F5F0E7]/75">
                  High-Touch
                </p>

                <p className="display-font text-[18px] italic text-[#F5F0E7]">
                  Care
                </p>
              </div>
            </div>
          </motion.div>

          {/* JOURNEY PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col justify-center bg-[#EDE7DD] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          >
            {/* Intro */}
            <div className="max-w-[560px]">
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-[#A96F58]">
                Your journey
              </p>

              <h3 className="display-font mt-3 text-[38px] leading-[0.98] tracking-[-0.025em] text-[#1F332C] sm:text-[46px]">
                From carrying everything
                <br />
                to coming home to yourself.
              </h3>

              <p className="mt-5 font-sans text-[13px] leading-[1.8] text-[#617568]">
                We walk beside you with intention, expertise, and care — every
                step of the way.
              </p>
            </div>

            {/* Journey steps */}
            <div className="mt-10">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group border-t border-[#30483E]/15 py-5 sm:py-6"
                >
                  <div className="grid grid-cols-[45px_1fr] gap-3 sm:grid-cols-[55px_1fr] sm:gap-5">

                    {/* Number */}
                    <div>
                      <span className="font-sans text-[9px] font-semibold tracking-[0.15em] text-[#A96F58]">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <h4 className="display-font text-[27px] leading-none text-[#1F332C] transition-colors duration-300 group-hover:text-[#A96F58] sm:text-[31px]">
                          {step.title}
                        </h4>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#30483E]/15 transition-all duration-300 group-hover:border-[#A96F58] group-hover:bg-[#A96F58] group-hover:text-[#F5F0E7]">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-[1px]"
                          >
                            <path
                              d="M1.5 5.5H9M5.5 2L9 5.5L5.5 9"
                              stroke="currentColor"
                              strokeWidth="0.9"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <p className="mt-2 max-w-[500px] font-sans text-[11px] leading-[1.7] text-[#617568] sm:text-[12px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom statement */}
            <div className="mt-7 border-t border-[#30483E]/15 pt-6">
              <p className="display-font text-[25px] italic leading-[1.05] text-[#30483E] sm:text-[29px]">
                “Your Journey. Our Privilege.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM VALUE STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid grid-cols-1 border border-[#30483E]/15 sm:grid-cols-3"
        >
          <div className="border-b border-[#30483E]/15 px-6 py-7 sm:border-b-0 sm:border-r">
            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A96F58]">
              01
            </span>

            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#30483E]">
              Personal Guidance
            </p>

            <p className="mt-2 max-w-[280px] font-sans text-[10px] leading-[1.65] text-[#829486]">
              Guidance tailored to where you are and where you're becoming.
            </p>
          </div>

          <div className="border-b border-[#30483E]/15 px-6 py-7 sm:border-b-0 sm:border-r">
            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A96F58]">
              02
            </span>

            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#30483E]">
              Seamless Care
            </p>

            <p className="mt-2 max-w-[280px] font-sans text-[10px] leading-[1.65] text-[#829486]">
              Thoughtful coordination that keeps your experience intentional.
            </p>
          </div>

          <div className="px-6 py-7">
            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A96F58]">
              03
            </span>

            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#30483E]">
              Ongoing Support
            </p>

            <p className="mt-2 max-w-[280px] font-sans text-[10px] leading-[1.65] text-[#829486]">
              Support that extends beyond a single session or conversation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Concierge;