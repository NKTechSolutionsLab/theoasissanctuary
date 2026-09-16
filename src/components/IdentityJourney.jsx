import { motion } from "framer-motion";

const phases = [
  {
    number: "I",
    title: "Identity Transition",
    statement:
      "Something shifted. You don't know what. But the woman you've been doesn't quite fit anymore.",
    description:
      "You're still showing up. Still performing at a high level. But underneath the competence there's a restlessness — a quiet knowing that the life you've built is beginning to ask for something different.",
  },
  {
    number: "II",
    title: "Identity Collapse",
    statement:
      "You hit the wall. And performing your way through it stopped working.",
    description:
      "The strategies that kept you together — the hustle, the control, the strength — have run out of road. This is not a breakdown. This is your soul refusing to continue living a life that was never fully yours.",
  },
  {
    number: "III",
    title: "Identity Grief",
    statement:
      "Nobody tells you that letting go of who you performed as means mourning her.",
    description:
      "You are grieving a version of yourself — and maybe a version of your life, your relationships, your future — that you've had to release. That grief is real, and it deserves to be witnessed.",
  },
  {
    number: "IV",
    title: "Identity Transformation",
    statement:
      "The becoming is uncomfortable. That's how you know it's real.",
    description:
      "You are no longer who you were — and not yet fully who you're becoming. You exist in the threshold. Some days it feels like freedom. Other days it feels like falling. Both are true.",
  },
  {
    number: "V",
    title: "Identity Emergence",
    statement:
      "She's not new. She's the one who was buried under everyone else's version of you.",
    description:
      "There is a settledness in you that wasn't there before. A groundedness. A clarity about who you are, what you need, and what you will no longer carry.",
  },
];

const IdentityJourney = () => {
  return (
    <section
      id="identity"
      className="relative overflow-hidden bg-[#1F332C] py-24 text-[#F5F0E7] sm:py-28 lg:py-36"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#30483E] blur-[100px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#A96F58]" />

              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.27em] text-[#A9B8AB]">
                This Is Identity Work
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="display-font max-w-[900px] text-[51px] font-medium leading-[0.92] tracking-[-0.035em] sm:text-[66px] lg:text-[80px]">
              Where are you in your{" "}
              <span className="italic text-[#D5A58F]">
                identity journey?
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] font-sans text-[14px] leading-[1.85] text-[#B7C1B8] sm:text-[15px]">
              Every woman who does this work moves through five distinct
              phases. They are not linear. They are not neat. But they are
              nameable — and naming them is the beginning of your freedom.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            JOURNEY TIMELINE
        ====================================================== */}

        <div className="relative mt-20 lg:mt-28">

          {/* Desktop vertical line */}
          <div className="absolute bottom-0 left-[29px] top-0 hidden w-px bg-[#F5F0E7]/15 lg:block" />

          <div className="space-y-0">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative grid grid-cols-1 border-t border-[#F5F0E7]/15 py-10 lg:grid-cols-[90px_0.8fr_1.2fr] lg:gap-12 lg:py-14"
              >

                {/* Phase number */}
                <div className="relative mb-5 lg:mb-0">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#F5F0E7]/20 bg-[#1F332C] transition-all duration-500 group-hover:border-[#A96F58] group-hover:bg-[#A96F58]">
                    <span className="display-font text-[25px] italic text-[#F5F0E7]">
                      {phase.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <p className="mb-3 font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-[#A9B8AB]">
                    Phase {index + 1}
                  </p>

                  <h3 className="display-font text-[36px] leading-[0.95] tracking-[-0.02em] text-[#F5F0E7] transition-colors duration-300 group-hover:text-[#D5A58F] sm:text-[43px]">
                    {phase.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mt-5 lg:mt-0">
                  <p className="display-font max-w-[550px] text-[23px] leading-[1.08] text-[#F5F0E7] sm:text-[27px]">
                    {phase.statement}
                  </p>

                  <p className="mt-5 max-w-[560px] font-sans text-[11px] leading-[1.8] text-[#A9B8AB] sm:text-[12px]">
                    {phase.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-[-4px] left-[23px] hidden h-[9px] w-[9px] rounded-full bg-[#A96F58] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            ASSESSMENT CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 items-end gap-8 border-t border-[#F5F0E7]/15 pt-10 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-[#A96F58]">
              Not sure where you are?
            </p>

            <h3 className="display-font mt-3 max-w-[620px] text-[38px] leading-[0.98] tracking-[-0.025em] text-[#F5F0E7] sm:text-[46px]">
              You don't have to know.
              <br />
              <span className="italic text-[#D5A58F]">
                The assessment will show you.
              </span>
            </h3>

            <p className="mt-5 max-w-[560px] font-sans text-[11px] leading-[1.7] text-[#A9B8AB] sm:text-[12px]">
              Ten questions. Three minutes. Language for what you've been
              feeling but couldn't name.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#F5F0E7] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1F332C] transition-all duration-300 hover:bg-[#D5A58F]"
          >
            Take the Identity Assessment

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

        {/* =====================================================
            CLOSING QUOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center lg:mt-32"
        >
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-[#829486]">
            The Oasis Sanctuary
          </span>

          <p className="display-font mx-auto mt-5 max-w-[850px] text-[36px] leading-[1] tracking-[-0.025em] text-[#F5F0E7] sm:text-[48px] lg:text-[58px]">
            “The cape is what we do. The mask is who we became.”
          </p>

          <p className="mt-5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A9B8AB]">
            — Dr. Lady J, LPC
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default IdentityJourney;