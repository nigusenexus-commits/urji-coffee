
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CarFront,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Truck,
  Utensils,
  Accessibility,
  ParkingCircle,
} from "lucide-react";

const branches = [
  {
    name: "Furi",
    number: "01",
    description: "Visit URJI COFFEE in Furi, Ethiopia.",
  },
  {
    name: "Sebeta",
    number: "02",
    description: "Visit URJI COFFEE in Sebeta, Ethiopia.",
  },
];

const contactNumbers = [
  {
    label: "Free delivery",
    number: "0915879595",
    display: "0915 879 595",
  },
  {
    label: "Additional contact",
    number: "0976617776",
    display: "0976 617 776",
  },
  {
    label: "Additional contact",
    number: "0929188795",
    display: "0929 188 795",
  },
];

const services = [
  { label: "Dine-in", icon: Utensils },
  { label: "Takeaway", icon: ShoppingBag },
  { label: "Drive-through", icon: CarFront },
  { label: "Delivery", icon: Truck },
];

const OpeningHours = () => {
  return (
    <section
      id="locations"
      className="relative w-full max-w-full overflow-hidden bg-[#10291F] px-5 py-20 text-[#F7F3E9] sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.35em]">
            We&apos;d love to welcome you
          </p>

          <h2 className="font-serif text-5xl font-normal leading-tight sm:text-6xl md:text-7xl">
            Find your
            <span className="block italic text-[#D5B46A]">
              URJI moment.
            </span>
          </h2>

          <div className="mx-auto my-7 h-px w-20 bg-[#D5B46A]" />

          <p className="mx-auto max-w-xl text-sm leading-7 text-[#F7F3E9]/70 sm:text-base">
            Come enjoy coffee, fresh drinks and delicious food.
            You can find URJI COFFEE in Furi and Sebeta, Ethiopia.
          </p>
        </motion.div>

        {/* MAIN TWO-COLUMN CONTENT */}
        <div className="grid w-full min-w-0 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          {/* CAFE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[420px] min-w-0 overflow-hidden sm:min-h-[560px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/95 via-[#10291F]/25 to-[#10291F]/15" />

            <div className="absolute inset-5 border border-white/30 sm:inset-8" />

            <div className="absolute bottom-10 left-8 right-8 sm:bottom-16 sm:left-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
                Furi & Sebeta · Ethiopia
              </p>

              <h3 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Your table
                <span className="block italic text-[#D5B46A]">
                  is waiting.
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">
                Whether it&apos;s a morning coffee, a relaxed meal
                or a moment with friends, come and enjoy the URJI experience.
              </p>
            </div>

            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white sm:right-12 sm:top-12 sm:h-14 sm:w-14">
              <Utensils size={21} strokeWidth={1.3} />
            </div>
          </motion.div>

          {/* LOCATIONS AND HOURS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex min-w-0 flex-col justify-center"
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5B46A] sm:text-xs sm:tracking-[0.3em]">
              Our locations
            </p>

            <h3 className="mb-9 font-serif text-3xl sm:text-4xl">
              Come visit us.
            </h3>

            {/* BRANCH CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="group min-w-0 border border-white/15 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#D5B46A]/60 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-[#D5B46A]">
                      LOCATION {branch.number}
                    </span>

                    <MapPin size={19} className="text-[#D5B46A]" />
                  </div>

                  <h4 className="font-serif text-3xl text-[#F7F3E9]">
                    {branch.name}
                  </h4>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#F7F3E9]/65">
                    {branch.description}
                  </p>

                  <div className="mt-6 border-t border-white/15 pt-5">
                    <div className="flex items-start gap-3">
                      <Clock
                        size={18}
                        className="mt-0.5 shrink-0 text-[#D5B46A]"
                      />

                      <div>
                        <p className="text-sm font-medium text-[#F7F3E9]">
                          Opening hours
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#F7F3E9]/60">
                          Please call to confirm today&apos;s hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-9 border-y border-white/15 py-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
                Contact & delivery
              </p>

              <div className="flex flex-col gap-5">
                {contactNumbers.map((contact) => (
                  <a
                    key={contact.number}
                    href={`tel:${contact.number}`}
                    className="group flex min-w-0 items-center justify-between gap-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#D5B46A] transition-colors group-hover:border-[#D5B46A] group-hover:bg-[#D5B46A] group-hover:text-[#183E30]">
                        <Phone size={16} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-[#F7F3E9]/60">
                          {contact.label}
                        </p>

                        <p className="mt-1 text-sm font-medium tracking-wide text-[#F7F3E9] sm:text-base">
                          {contact.display}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#D5B46A] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* PHONE BUTTON */}
            <a
              href="tel:0915879595"
              className="group mt-8 flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#D5B46A] px-7 text-sm font-semibold text-[#183E30] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0D79C] hover:shadow-lg hover:shadow-black/20"
            >
              <Phone size={17} />
              Call URJI COFFEE

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/15 pt-12 sm:mt-24"
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D5B46A]">
              The URJI experience
            </p>

            <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
              More ways to enjoy.
            </h3>
          </div>

          {/* SERVICE GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.label}
                  className="flex flex-col items-center gap-4 border border-white/10 bg-white/[0.035] px-4 py-8 text-center transition-colors duration-300 hover:border-[#D5B46A]/50"
                >
                  <Icon
                    size={27}
                    strokeWidth={1.3}
                    className="text-[#D5B46A]"
                  />

                  <p className="text-sm font-medium text-[#F7F3E9]">
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* EXTRA AMENITIES */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-xs text-[#F7F3E9]/70">
              <ParkingCircle size={17} className="text-[#D5B46A]" />
              Free parking
            </div>

            <div className="flex items-center gap-2 text-xs text-[#F7F3E9]/70">
              <Accessibility size={17} className="text-[#D5B46A]" />
              Wheelchair-accessible toilet
            </div>

            <div className="flex items-center gap-2 text-xs text-[#F7F3E9]/70">
              <Utensils size={17} className="text-[#D5B46A]" />
              Family-friendly
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OpeningHours;
