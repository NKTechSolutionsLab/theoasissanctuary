import React from "react";

const PowerMethod = () => {
  const principles = [
    {
      number: "01",
      letter: "P",
      title: "Permission",
      text: "Create space for what you actually need, want, and feel — without asking yourself to earn the right to have it.",
    },
    {
      number: "02",
      letter: "O",
      title: "Ownership",
      text: "Recognize your story, choices, voice, and agency without carrying responsibility for what was never yours to carry.",
    },
    {
      number: "03",
      letter: "W",
      title: "Worthiness",
      text: "Separate your inherent worth from achievement, approval, productivity, and the expectations placed upon you.",
    },
    {
      number: "04",
      letter: "E",
      title: "Embodiment",
      text: "Bring the work out of your head and into the way you speak, move, choose, lead, and inhabit your life.",
    },
    {
      number: "05",
      letter: "R",
      title: "Rebirth",
      text: "Make room for a way of living and leading that reflects who you are now — not who you had to become to survive.",
    },
  ];

  return (
    <section
      id="power"
      className="overflow-hidden bg-[#FBF9F5] px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A96F58]" />

              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
                The Framework
              </p>
            </div>

            <p className="mt-5 font-body text-xs uppercase leading-6 tracking-[0.12em] text-[#20231F]/40">
              The POWER Method™
              <br />
              Individual transformation
            </p>
          </div>

          <div>
            <h2 className="display-font max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.035em] text-[#1F332C] md:text-7xl lg:text-[6.5rem]">
              A different way
              <br />
              <span className="text-[#A96F58]">back to yourself.</span>
            </h2>

            <div className="mt-8 max-w-2xl border-l border-[#A96F58]/50 pl-5 md:ml-auto">
              <p className="font-body text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
                The POWER Method™ creates a pathway through the internal work
                of reclaiming your voice, reconnecting with yourself, and
                becoming more fully embodied in the way you live and lead.
              </p>
            </div>
          </div>
        </div>

        {/* Framework */}
        <div className="mt-20 md:mt-24">
          {/* Desktop framework */}
          <div className="hidden border-y border-[#30483E]/20 lg:block">
            <div className="grid grid-cols-5">
              {principles.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative min-h-[430px] p-8 xl:p-10 ${
                    index !== principles.length - 1
                      ? "border-r border-[#30483E]/20"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-[#829486]">
                      {item.number}
                    </span>

                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-[#20231F]/30">
                      POWER
                    </span>
                  </div>

                  {/* Letter */}
                  <div className="mt-16">
                    <span className="display-font text-[7rem] font-medium leading-none text-[#DDD1BE] transition-transform duration-500 group-hover:-translate-y-2">
                      {item.letter}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-10 left-8 right-8 xl:left-10 xl:right-10">
                    <h3 className="display-font text-3xl font-medium text-[#1F332C] xl:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-body text-xs leading-6 text-[#20231F]/60">
                      {item.text}
                    </p>
                  </div>

                  {/* Accent */}
                  <span className="absolute bottom-0 left-8 h-[2px] w-0 bg-[#A96F58] transition-all duration-500 group-hover:w-12 xl:left-10" />
                </article>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet framework */}
          <div className="border-y border-[#30483E]/20 lg:hidden">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-6 py-8 md:grid-cols-[90px_1fr] ${
                  index !== principles.length - 1
                    ? "border-b border-[#30483E]/15"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between md:block">
                  <span className="display-font text-5xl leading-none text-[#DDD1BE]">
                    {item.letter}
                  </span>

                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-[#A96F58] md:mt-4 md:block">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="display-font text-3xl font-medium text-[#1F332C] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl font-body text-sm leading-7 text-[#20231F]/60">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-[#829486]">
              The movement
            </p>

            <p className="display-font mt-5 max-w-4xl text-3xl font-medium leading-[1.05] text-[#1F332C] md:text-5xl lg:text-6xl">
              Permission opens the door.
              <br />
              <span className="text-[#A96F58]">
                Rebirth changes what comes through it.
              </span>
            </p>
          </div>

          <div className="border-t border-[#30483E]/20 pt-5">
            <p className="font-body text-xs leading-6 text-[#20231F]/50">
              Five movements. One ongoing process of returning to yourself and
              creating space for the person underneath the performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerMethod;