
"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Heart,
  Users,
  Leaf,
  Sparkles,
  Utensils,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Great Coffee",
    subtitle: "A moment to enjoy",
    description:
      "Enjoy a comforting coffee or discover something new from our selection of hot drinks.",
    icon: Coffee,
    label: "Coffee lovers",
  },
  {
    number: "02",
    title: "A Cozy Atmosphere",
    subtitle: "Feel at home",
    description:
      "Relax in a casual, cosy and welcoming atmosphere. A lovely place to slow down and enjoy your time.",
    icon: Heart,
    label: "Your little escape",
  },
  {
    number: "03",
    title: "A Place for Everyone",
    subtitle: "Come together",
    description:
      "Whether you're enjoying a solo coffee, meeting friends or spending time with family, you're welcome here.",
    icon: Users,
    label: "Every occasion",
  },
];

const highlights = [
  {
    title: "Great tea selection",
    icon: Leaf,
  },
  {
    title: "Delicious food",
    icon: Utensils,
  },
  {
    title: "Good moments",
    icon: Sparkles,
  },
];

const Testimonials = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#F7F3E9] px-6 py-24 text-[#183E30] md:px-10 lg:py-32"
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D5B46A]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#A57C3E]">
            The URJI experience
          </p>

          <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight sm:text-6xl md:text-7xl">
            More than a visit.
            <span className="block italic text-[#A57C3E]">
              A feeling to remember.
            </span>
          </h2>

          <div className="mx-auto my-7 h-px w-20 bg-[#B58A49]" />

          <p className="mx-auto max-w-xl text-sm leading-7 text-[#183E30]/65 md:text-base">
            Great coffee, delicious food and a welcoming
            atmosphere. Discover what makes a visit to
            Urji Coffee special.
          </p>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-[#183E30]/10 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B58A49]/50 hover:bg-white hover:shadow-2xl hover:shadow-[#183E30]/[0.07] sm:p-10"
              >

                {/* NUMBER */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.25em] text-[#A57C3E]">
                    {item.number} / 03
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B58A49]/40 text-[#A57C3E] transition-all duration-500 group-hover:border-[#183E30] group-hover:bg-[#183E30] group-hover:text-[#F7F3E9]">
                    <Icon size={21} strokeWidth={1.4} />
                  </span>

                </div>

                {/* CARD CONTENT */}
                <div className="mt-12">

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A57C3E]">
                    {item.label}
                  </p>

                  <h3 className="font-serif text-3xl font-normal leading-tight text-[#183E30] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-serif text-lg italic text-[#A57C3E]">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#183E30]/65">
                    {item.description}
                  </p>

                </div>

                {/* DECORATIVE LINE */}
                <div className="mt-8 h-px w-full bg-[#183E30]/10">
                  <div className="h-px w-0 bg-[#B58A49] transition-all duration-700 group-hover:w-full" />
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* EXPERIENCE HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-y border-[#183E30]/15 py-10"
        >

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3"
                >

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#A57C3E]"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#183E30]/75">
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center text-center"
        >

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A57C3E]">
            Your next favourite place
          </p>

          <h3 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Good coffee brings us together.
          </h3>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#183E30]/65">
            Make time for yourself, share a meal with friends
            and enjoy the URJI COFFEE experience.
          </p>

          <a
            href="tel:0915879595"
            className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#183E30] px-9 py-4 text-sm font-semibold text-[#F7F3E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#285640] hover:shadow-xl"
          >
            Visit URJI COFFEE

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
