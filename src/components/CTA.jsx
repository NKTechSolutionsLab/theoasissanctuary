
import React from "react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1F332C] px-6 py-24 text-[#FBF9F5] md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* Main message */}
          <div>
            <p className="mb-7 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9B7A3]">
              Begin Your Journey
            </p>

            <h2 className="display-font max-w-4xl text-6xl font-medium leading-[0.88] tracking-[-0.035em] md:text-8xl">
              You have been
              <br />
              strong long enough.
            </h2>

            <p className="mt-8 max-w-2xl font-body text-base leading-7 text-[#FBF9F5]/65 md:text-lg md:leading-8">
              You do not have to navigate the next chapter alone. Begin with a
              free 20-minute consultation and explore what support may be right
              for you.
            </p>
          </div>

          {/* Actions */}
          <div className="lg:pb-2">
            <div className="border-t border-[#FBF9F5]/20">
              <a
                href="#journey"
                className="group flex items-center justify-between border-b border-[#FBF9F5]/20 py-6"
              >
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em]">
                  Start Your Journey
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF9F5]/30 text-lg transition-all group-hover:bg-[#FBF9F5] group-hover:text-[#1F332C]">
                  ↗
                </span>
              </a>

              <a
                href="#contact-form"
                className="group flex items-center justify-between border-b border-[#FBF9F5]/20 py-6"
              >
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em]">
                  Schedule Free Consultation
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF9F5]/30 text-lg transition-all group-hover:bg-[#FBF9F5] group-hover:text-[#1F332C]">
                  ↗
                </span>
              </a>

              <a
                href="#organizations"
                className="group flex items-center justify-between border-b border-[#FBF9F5]/20 py-6"
              >
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em]">
                  Corporate Discovery Call
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF9F5]/30 text-lg transition-all group-hover:bg-[#FBF9F5] group-hover:text-[#1F332C]">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-20 grid gap-8 border-t border-[#FBF9F5]/20 pt-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B7A3]">
              Therapy
            </p>
            <p className="mt-2 font-body text-sm text-[#FBF9F5]/65">
              Telehealth · GA / MD / FL
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B7A3]">
              Consultation
            </p>
            <p className="mt-2 font-body text-sm text-[#FBF9F5]/65">
              Free 20-minute conversation
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B7A3]">
              Access
            </p>
            <p className="mt-2 font-body text-sm text-[#FBF9F5]/65">
              Sliding scale · Limited spots
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B7A3]">
              Space
            </p>
            <p className="mt-2 font-body text-sm text-[#FBF9F5]/65">
              LGBTQIA+ affirming · In-person by arrangement
            </p>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-20 text-center md:mt-28">
          <p className="display-font text-3xl italic text-[#FBF9F5]/75 md:text-5xl">
            Reclaim. Remember. Rebirth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;