
"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[680px] h-[92svh] w-full items-center overflow-hidden bg-[#183E30] text-[#F7F3E9]"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/assets/hero/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-[#10291F]/65" />

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/95 via-[#183E30]/80 to-[#183E30]/30" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/75 via-transparent to-[#10291F]/20" />

      {/* Main content */}
      <div className="container relative z-10 mx-auto flex h-full w-full items-center px-6 pt-24 md:px-12 lg:px-16">

        <div className="max-w-4xl py-16">

          {/* Location label */}
          <div className="mb-8 flex items-center gap-4">

            <span className="h-px w-10 bg-[#D5B46A]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D5B46A] md:text-sm">
              Furi & Sebeta · Ethiopia
            </p>

          </div>

          {/* Main heading */}
          <h1 className="!text-[#F7F3E9] font-serif text-6xl font-normal leading-[1.08] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[104px]">

            Good coffee.

            <span className="mt-2 block !text-[#D5B46A] italic">
              Warm moments.
            </span>

          </h1>

          {/* Decorative line */}
          <div className="my-8 h-px w-20 bg-[#D5B46A]/70" />

          {/* Description */}
          <p className="max-w-xl text-base font-light leading-8 !text-[#F7F3E9]/85 md:text-lg">

            Discover exceptional coffee, refreshing drinks and
            delicious food in a warm and welcoming atmosphere.
            At Urji Coffee, every visit is a moment to enjoy.

          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            {/* Menu button */}
            <a
              href="#menu"
              className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#D5B46A] px-9 py-4 text-sm font-semibold !text-[#183E30] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0D79C] hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#D5B46A] focus:ring-offset-2 focus:ring-offset-[#183E30]"
            >
              Explore our menu

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* About button */}
            <a
              href="#about"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#F7F3E9]/60 px-9 py-4 text-sm font-semibold !text-[#F7F3E9] transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B46A] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Discover Urji
            </a>

          </div>

          {/* Branch information */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] !text-[#F7F3E9]/65">

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5B46A]" />
              Furi
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5B46A]" />
              Sebeta
            </span>

            <span className="hidden h-4 w-px bg-white/30 sm:block" />

            <span>
              Coffee · Food · Moments
            </span>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 text-[#F7F3E9]/70 md:flex">

        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <div className="h-12 w-px bg-gradient-to-b from-[#D5B46A] to-transparent" />

      </div>

    </section>
  );
};

export default Hero;
