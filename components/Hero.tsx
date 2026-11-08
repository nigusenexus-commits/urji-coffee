
"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex h-[92svh] min-h-[620px] w-full max-w-full items-center overflow-hidden bg-[#183E30] text-[#F7F3E9]"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full max-w-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
      </video>

      {/* STRONG DARK OVERLAYS */}
      <div className="absolute inset-0 bg-[#10291F]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/95 via-[#183E30]/80 to-[#183E30]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/75 via-transparent to-[#10291F]/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 pt-24 sm:px-8 lg:px-12">

        <div className="w-full min-w-0 max-w-4xl py-12">

          {/* LOCATION */}
          <div className="mb-7 flex flex-wrap items-center gap-4">

            <span className="h-px w-10 shrink-0 bg-[#D5B46A]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5B46A] sm:text-xs sm:tracking-[0.3em]">
              Furi & Sebeta · Ethiopia
            </p>

          </div>

          {/* RESPONSIVE MAIN HEADING */}
          <h1
            className="max-w-full break-words font-serif text-[clamp(2.75rem,10vw,6.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#F7F3E9]"
            style={{
              textShadow: "0 3px 24px rgba(0,0,0,0.25)",
            }}
          >
            Good coffee.

            <span className="mt-2 block italic text-[#D5B46A]">
              Warm moments.
            </span>
          </h1>

          {/* GOLD DECORATION */}
          <div className="my-7 h-px w-20 bg-[#D5B46A]/80" />

          {/* DESCRIPTION */}
          <p className="max-w-full text-sm font-light leading-7 text-[#F7F3E9]/90 sm:max-w-xl sm:text-base sm:leading-8">
            Discover exceptional coffee, refreshing drinks and
            delicious food in a warm and welcoming atmosphere.
            At Urji Coffee, every visit is a moment to enjoy.
          </p>

          {/* RESPONSIVE BUTTONS */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

            <a
              href="#menu"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#D5B46A] px-7 py-4 text-xs font-semibold text-[#183E30] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0D79C] focus:outline-none focus:ring-2 focus:ring-[#D5B46A] focus:ring-offset-2 focus:ring-offset-[#183E30] sm:w-auto sm:px-9"
            >
              Explore our menu

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/60 px-7 py-4 text-xs font-semibold text-[#F7F3E9] transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B46A] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto sm:px-9"
            >
              Discover Urji
            </a>

          </div>

          {/* BRANCH INFORMATION */}
          <div className="mt-10 flex max-w-full flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#F7F3E9]/75 sm:gap-x-8 sm:text-xs">

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5B46A]" />
              Furi
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5B46A]" />
              Sebeta
            </span>

            <span className="hidden h-4 w-px bg-white/30 sm:block" />

            <span>Coffee · Food · Moments</span>

          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-7 right-5 z-10 hidden flex-col items-center gap-3 text-[#F7F3E9]/70 md:flex md:right-8">

        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <div className="h-12 w-px bg-gradient-to-b from-[#D5B46A] to-transparent" />

      </div>

    </section>
  );
};

export default Hero;
