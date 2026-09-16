import React from "react";

const Signature = () => {
  return (
    <section
      id="signature"
      className="bg-[#F5F0E7] px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 border-b border-[#30483E]/20 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A96F58]">
              The Signature Offering
            </p>

            <h2 className="display-font max-w-xl text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#1F332C] md:text-7xl">
              A deeper return
              <br />
              to yourself.
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-body text-base leading-7 text-[#20231F]/70 md:text-lg md:leading-8">
              Voice, Visibility &amp; Embodied Power is an 8-week 1:1 coaching
              intensive for high-achieving Black women ready to stop performing
              strength and begin leading from a more authentic sense of self.
            </p>
          </div>
        </div>

        {/* Main offering */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:py-24">
          <div>
            <p className="mb-6 font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#829486]">
              Voice · Visibility · Embodiment
            </p>

            <h3 className="display-font max-w-2xl text-4xl font-medium leading-[1] text-[#1F332C] md:text-6xl">
              You do not need to become someone else.
              <br />
              <span className="text-[#A96F58]">
                You need room to become more fully you.
              </span>
            </h3>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-body text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
              This intensive creates space for identity work, voice reclamation,
              embodied leadership, and a clearer relationship with your
              professional vision.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#1F332C] pb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#1F332C] transition-opacity hover:opacity-60"
            >
              Explore the Intensive
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>

        {/* Three pillars */}
        <div className="border-t border-[#30483E]/20">
          <div className="grid md:grid-cols-3">
            <article className="border-b border-[#30483E]/20 py-10 md:border-b-0 md:border-r md:pr-10 lg:py-14">
              <span className="display-font text-3xl text-[#A96F58]">01</span>

              <h4 className="display-font mt-7 text-3xl font-medium text-[#1F332C]">
                Reclaim Your Voice
              </h4>

              <p className="mt-4 font-body text-sm leading-7 text-[#20231F]/65">
                Move beyond the version of yourself shaped by expectations,
                performance, and the need to remain acceptable.
              </p>
            </article>

            <article className="border-b border-[#30483E]/20 py-10 md:border-b-0 md:border-r md:px-10 lg:py-14">
              <span className="display-font text-3xl text-[#A96F58]">02</span>

              <h4 className="display-font mt-7 text-3xl font-medium text-[#1F332C]">
                Embody Your Power
              </h4>

              <p className="mt-4 font-body text-sm leading-7 text-[#20231F]/65">
                Bring your values, voice, body, and leadership into greater
                alignment with the person you are becoming.
              </p>
            </article>

            <article className="py-10 md:pl-10 lg:py-14">
              <span className="display-font text-3xl text-[#A96F58]">03</span>

              <h4 className="display-font mt-7 text-3xl font-medium text-[#1F332C]">
                Lead From Wholeness
              </h4>

              <p className="mt-4 font-body text-sm leading-7 text-[#20231F]/65">
                Reconnect your personal transformation with the way you lead,
                communicate, make decisions, and show up in the world.
              </p>
            </article>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 flex flex-col gap-8 border-t border-[#30483E]/20 pt-10 md:flex-row md:items-end md:justify-between">
          <p className="display-font max-w-2xl text-3xl leading-tight text-[#1F332C] md:text-4xl">
            The work is not about performing a better version of yourself.
            <span className="text-[#A96F58]">
              {" "}
              It is about returning to the one that is already there.
            </span>
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#1F332C]"
          >
            Begin Your Journey
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F332C]/30 text-base transition-all hover:bg-[#1F332C] hover:text-[#FBF9F5]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signature;