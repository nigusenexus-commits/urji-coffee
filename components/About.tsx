
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Coffee,
  MapPin,
  Utensils,
} from "lucide-react";

const photos = {
  main: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
  coffee: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
  interior: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
};

const locations = [
  {
    name: "Furi",
    description: "Visit us in Furi.",
  },
  {
    name: "Sebeta",
    description: "Visit us in Sebeta.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full max-w-full overflow-hidden bg-[#10291F] px-5 py-20 text-[#F7F3E9] sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#D5B46A]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">

        {/* SECTION INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex min-w-0 flex-col items-center text-center sm:mb-16"
        >
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.35em]">
            A little about us
          </p>

          <h2 className="max-w-full break-words font-serif text-[clamp(2.5rem,8vw,5rem)] font-normal leading-[1.12] tracking-tight">
            More than coffee.
            <span className="block italic text-[#D5B46A]">
              A place to belong.
            </span>
          </h2>

          <div className="mt-8 h-px w-20 bg-[#D5B46A]" />
        </motion.div>

        {/* MAIN ABOUT CONTENT */}
        <div className="grid w-full min-w-0 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full min-w-0 max-w-[580px]"
          >

            <div className="relative h-[360px] w-full overflow-hidden rounded-[6px] sm:h-[500px] lg:h-[560px]">

              <Image
                src={photos.main}
                alt="Coffee shop interior inspiration"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-8 sm:left-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#F7F3E9]/85">
                  Welcome to
                </p>

                <p className="mt-2 font-serif text-4xl text-white sm:text-5xl">
                  Urji Coffee.
                </p>
              </div>

            </div>

            {/* FLOATING COFFEE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 right-3 hidden h-40 w-40 overflow-hidden border-[7px] border-[#10291F] shadow-2xl sm:block sm:-right-5 sm:h-48 sm:w-48 lg:-right-8"
            >
              <Image
                src={photos.coffee}
                alt="Freshly prepared coffee"
                fill
                unoptimized
                sizes="192px"
                className="object-cover"
              />
            </motion.div>

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -left-3 -top-3 -z-0 h-20 w-20 rounded-full border border-[#D5B46A]/40 sm:-left-6 sm:-top-6 sm:h-28 sm:w-28" />

          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="flex min-w-0 flex-col"
          >

            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.3em]">
              Our place · Our experience
            </p>

            <h3 className="break-words font-serif text-4xl leading-tight text-[#F7F3E9] sm:text-5xl">
              Good moments begin
              <span className="block italic text-[#D5B46A]">
                around the table.
              </span>
            </h3>

            <p className="mt-7 text-sm font-light leading-7 text-[#F7F3E9]/75 sm:mt-8 sm:text-base sm:leading-8">
              Welcome to Urji Coffee, a place to enjoy good coffee,
              refreshing drinks and delicious food. Whether you are
              starting your morning, meeting friends or taking a
              quiet break, we welcome you to make yourself comfortable.
            </p>

            <p className="mt-5 text-sm font-light leading-7 text-[#F7F3E9]/75 sm:text-base sm:leading-8">
              From traditional Ethiopian breakfast and fresh juices
              to our coffee, tea and fish dishes, there is something
              to enjoy throughout the day.
            </p>

            {/* EXPERIENCE FEATURES — IMPROVED MOBILE SPACING */}
            <div className="mt-9 grid grid-cols-1 gap-7 border-y border-white/10 py-8 min-[480px]:grid-cols-2 min-[480px]:gap-8 sm:mt-10">

              <div className="flex min-w-0 items-start gap-4">

                <Coffee
                  size={26}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-[#D5B46A]"
                />

                <div className="min-w-0">
                  <h4 className="font-serif text-2xl text-[#F7F3E9]">
                    Great Coffee
                  </h4>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#F7F3E9]/60">
                    Coffee, tea and refreshing drinks.
                  </p>
                </div>

              </div>

              <div className="flex min-w-0 items-start gap-4">

                <Utensils
                  size={26}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-[#D5B46A]"
                />

                <div className="min-w-0">
                  <h4 className="font-serif text-2xl text-[#F7F3E9]">
                    Good Food
                  </h4>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#F7F3E9]/60">
                    Breakfast, meals and more.
                  </p>
                </div>

              </div>

            </div>

            {/* BRANCH LOCATIONS */}
            <div className="mt-8">

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-[11px]">
                Find us
              </p>

              <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2">

                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="flex min-w-0 items-center gap-3"
                  >

                    <MapPin
                      size={20}
                      className="shrink-0 text-[#D5B46A]"
                    />

                    <div className="min-w-0">
                      <p className="font-serif text-xl text-[#F7F3E9]">
                        {location.name}
                      </p>

                      <p className="text-xs text-[#F7F3E9]/55">
                        {location.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* ABOUT BUTTON */}
            <div className="mt-9 sm:mt-10">
              <Link
                href="/#menu"
                className="group inline-flex max-w-full items-center gap-3 border-b border-[#D5B46A] pb-3 text-sm font-semibold text-[#D5B46A] transition-colors duration-300 hover:text-[#F0D79C]"
              >
                Explore our menu

                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM VISUAL BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 w-full min-w-0 overflow-hidden rounded-sm sm:mt-32"
        >

          <div className="relative h-[280px] w-full sm:h-[350px]">

            <Image
              src={photos.interior}
              alt="Coffee and cafe atmosphere"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#10291F]/70" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8">

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.35em]">
                Your moment starts here
              </p>

              <h3 className="max-w-full break-words font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                Come as you are.

                <span className="block italic text-[#D5B46A]">
                  Leave with a smile.
                </span>
              </h3>

              <Link
                href="/#menu"
                className="mt-7 inline-flex min-h-[48px] max-w-full items-center gap-3 rounded-full border border-white/60 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#D5B46A] hover:bg-[#D5B46A] hover:text-[#183E30] sm:mt-8 sm:px-7 sm:text-xs sm:tracking-[0.16em]"
              >
                Discover our menu

                <ArrowDownRight size={16} className="shrink-0" />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
