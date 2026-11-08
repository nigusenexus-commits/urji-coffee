
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Fish,
  GlassWater,
  Utensils,
} from "lucide-react";

  const featuredImage =
  "https://img.sanishtech.com/u/6aa30431ab21b0dc3e9fefd2be195821.jpg";

const categories = [
  {
    number: "01",
    title: "Coffee &",
    highlight: "Hot Drinks",
    description:
      "Enjoy a comforting cup of coffee, traditional tea and your favourite hot drinks.",
    label: "Made for coffee lovers",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
    icon: Coffee,
    layout: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Fresh",
    highlight: "Juices",
    description:
      "Refresh your day with delicious fruit juices and refreshing blends.",
    label: "Fresh and refreshing",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=85",
    icon: GlassWater,
    layout: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Ethiopian",
    highlight: "Breakfast",
    description:
      "Start your morning with traditional breakfast favourites.",
    label: "A taste of tradition",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
    icon: Utensils,
    layout: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Delicious",
    highlight: "Fish Dishes",
    description:
      "Discover our selection of fish dishes, including the Urji Special Fish.",
    label: "From the Urji menu",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
    icon: Fish,
    layout: "lg:col-span-7",
  },
];

const Explore = () => {
  return (
    <section
      id="explore"
      className="relative w-full max-w-full overflow-hidden bg-[#F7F3E9] px-5 py-20 text-[#183E30] sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* SECTION INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex w-full min-w-0 flex-col items-center text-center sm:mb-16"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A57C3E] sm:text-xs sm:tracking-[0.35em]">
            Discover something special
          </p>

          <h2 className="max-w-full break-words font-serif text-[clamp(2.5rem,8vw,5rem)] font-normal leading-tight tracking-tight">
            A menu for
            <span className="block italic text-[#A57C3E]">
              every moment.
            </span>
          </h2>

          <div className="my-7 h-px w-20 bg-[#B58A49]" />

          <p className="w-full max-w-xl text-sm leading-7 text-[#183E30]/70 sm:text-base">
            From your morning coffee to a delicious meal,
            discover the flavours waiting for you at Urji Coffee.
          </p>
        </motion.div>

        {/* FEATURED FOOD PHOTOGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid w-full min-w-0 max-w-full overflow-hidden bg-[#183E30] lg:mb-20 lg:grid-cols-2"
        >
          <div className="relative min-h-[300px] min-w-0 overflow-hidden sm:min-h-[450px] lg:min-h-[520px]">
            <Image
              src={featuredImage}
              alt="A table filled with food, fresh drinks and dishes"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071810]/55 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-full border border-white/50 bg-[#10291F]/70 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7 sm:px-5 sm:text-[10px]">
              Food & good moments
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-10 text-[#F7F3E9] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.3em]">
              A place around the table
            </p>

            <h3 className="break-words font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Good food.
              <span className="mt-2 block italic text-[#D5B46A]">
                Better moments.
              </span>
            </h3>

            <div className="my-7 h-px w-16 bg-[#D5B46A]" />

            <p className="max-w-full text-sm leading-7 text-[#F7F3E9]/80 sm:text-base sm:leading-8">
              Enjoy a welcoming café experience with coffee,
              refreshing drinks and delicious food. Whether
              you&apos;re meeting friends or enjoying a meal,
              there&apos;s always something to discover at Urji Coffee.
            </p>

            <a
              href="#menu"
              className="group mt-8 inline-flex w-fit max-w-full items-center gap-3 border-b border-[#D5B46A] pb-3 text-xs font-semibold text-[#D5B46A] transition-colors duration-300 hover:text-[#F0D79C] sm:mt-9 sm:text-sm"
            >
              Explore our menu

              <ArrowUpRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* CATEGORY INTRODUCTION */}
        <div className="mb-9 flex min-w-0 flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A57C3E] sm:text-xs sm:tracking-[0.25em]">
              Explore our favourites
            </p>

            <h3 className="break-words font-serif text-3xl sm:text-4xl">
              Something for everyone.
            </h3>
          </div>

          <p className="max-w-full text-sm leading-6 text-[#183E30]/65 sm:max-w-sm">
            Take a closer look at the different flavours
            and experiences on our menu.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.number}
                href="#menu"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`group relative isolate block min-h-[370px] w-full min-w-0 max-w-full overflow-hidden bg-[#10291F] sm:min-h-[430px] lg:min-h-[450px] ${item.layout}`}
              >
                {/* CATEGORY IMAGE */}
                <Image
                  src={item.image}
                  alt={`${item.title} ${item.highlight}`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="z-0 object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071810]/95 via-[#071810]/70 to-[#071810]/30 transition-all duration-500 group-hover:from-[#071810]/95 group-hover:via-[#071810]/65" />

                {/* TOP INFORMATION */}
                <div className="absolute left-5 right-5 top-6 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.25em]">
                    {item.number} / 04
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#10291F]/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#D5B46A] group-hover:bg-[#D5B46A] group-hover:text-[#183E30] sm:h-11 sm:w-11">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex min-w-0 flex-col p-5 sm:p-8">
                  <p
                    className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F0D79C] sm:mb-4 sm:text-[10px] sm:tracking-[0.25em]"
                    style={{
                      textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    }}
                  >
                    {item.label}
                  </p>

                  <h4
                    className="break-words font-serif text-4xl font-normal leading-[1.12] text-white sm:text-5xl lg:text-4xl xl:text-5xl"
                    style={{
                      textShadow: "0 3px 16px rgba(0,0,0,0.85)",
                    }}
                  >
                    {item.title}

                    <span className="block italic text-[#F0D79C]">
                      {item.highlight}
                    </span>
                  </h4>

                  <div className="mt-4 flex min-w-0 items-end justify-between gap-3 sm:mt-5 sm:gap-5">
                    <p
                      className="min-w-0 max-w-sm text-xs leading-6 text-white sm:text-sm"
                      style={{
                        textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                      }}
                    >
                      {item.description}
                    </p>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[#10291F]/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#D5B46A] group-hover:bg-[#D5B46A] group-hover:text-[#183E30] sm:h-12 sm:w-12">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-white/35">
                    <div className="h-px w-0 bg-[#D5B46A] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex min-w-0 flex-col items-center justify-between gap-6 border-t border-[#183E30]/15 pt-8 text-center sm:mt-16 sm:flex-row sm:text-left sm:pt-9"
        >
          <div className="min-w-0">
            <p className="font-serif text-2xl text-[#183E30]">
              Something delicious awaits.
            </p>

            <p className="mt-2 text-sm text-[#183E30]/65">
              Explore the complete URJI COFFEE menu.
            </p>
          </div>

          <a
            href="#menu"
            className="group inline-flex min-h-[52px] max-w-full items-center justify-center gap-3 rounded-full bg-[#183E30] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F7F3E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#285640] sm:px-8 sm:text-xs sm:tracking-[0.15em]"
          >
            View our menu

            <ArrowUpRight
              size={17}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Explore;
