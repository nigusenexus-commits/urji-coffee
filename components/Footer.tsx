
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CarFront,
  Coffee,
  MapPin,
  Phone,
  ShoppingBag,
  Truck,
  Utensils,
} from "lucide-react";

const LOGO_URL =
  "https://img.sanishtech.com/u/f3ddf342e2b7cf0466f311b49ba99122.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Explore", href: "#explore" },
  { name: "Our Story", href: "#about" },
  { name: "Our Menu", href: "#menu" },
  { name: "Our Locations", href: "#locations" },
  { name: "Experience", href: "#experience" },
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
  { name: "Dine-in", icon: Utensils },
  { name: "Takeaway", icon: ShoppingBag },
  { name: "Drive-through", icon: CarFront },
  { name: "Delivery", icon: Truck },
];

const Footer = () => {
  return (
    <footer className="relative w-full max-w-full overflow-hidden bg-[#10291F] text-[#F7F3E9]">

      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D5B46A]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* TOP FOOTER */}
        <div className="grid gap-14 border-b border-white/15 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">

          {/* BRAND INFORMATION */}
          <div className="min-w-0 lg:col-span-5">

            <Link
              href="/#home"
              aria-label="URJI Coffee homepage"
              className="group inline-flex max-w-full items-center gap-4"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 sm:h-16 sm:w-16">

                <Image
                  src={LOGO_URL}
                  alt="URJI COFFEE logo"
                  width={64}
                  height={64}
                  unoptimized
                  loading="lazy"
                  sizes="64px"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

              </span>

              <span className="flex min-w-0 flex-col">

                <span className="break-words font-serif text-xl font-semibold tracking-[0.08em] text-[#F7F3E9] transition-colors group-hover:text-[#D5B46A] sm:text-2xl">
                  URJI COFFEE
                </span>

                <span className="mt-1 text-[9px] tracking-[0.18em] text-[#D5B46A] sm:text-[10px] sm:tracking-[0.25em]">
                  ዑርጂ · FURI & SEBETA
                </span>

              </span>
            </Link>

            <p className="mt-8 max-w-sm text-sm leading-8 text-[#F7F3E9]/65">
              Enjoy great coffee, refreshing drinks and delicious
              food in a warm and welcoming atmosphere. Visit URJI
              COFFEE in Furi and Sebeta, Ethiopia.
            </p>

            <p className="mt-7 font-serif text-2xl italic text-[#D5B46A]">
              Good coffee. Warm moments.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3">

            <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-5"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-[#F7F3E9]/70 transition-colors duration-300 hover:text-[#D5B46A]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />

                </Link>
              ))}
            </nav>

          </div>

          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-4">

            <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
              Get in touch
            </h3>

            <div className="flex flex-col gap-6">

              {contactNumbers.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  className="group flex items-center gap-4"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#D5B46A] transition-all duration-300 group-hover:border-[#D5B46A] group-hover:bg-[#D5B46A] group-hover:text-[#183E30]">
                    <Phone size={17} />
                  </span>

                  <span className="flex min-w-0 flex-col gap-1">

                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#F7F3E9]/50">
                      {contact.label}
                    </span>

                    <span className="text-sm font-medium tracking-wide text-[#F7F3E9] transition-colors group-hover:text-[#D5B46A]">
                      {contact.display}
                    </span>

                  </span>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-[#D5B46A] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </a>
              ))}

            </div>

          </div>

        </div>

        {/* BRANCHES AND SERVICES */}
        <div className="grid gap-12 border-b border-white/15 py-12 md:grid-cols-2">

          {/* LOCATIONS */}
          <div>

            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
              Find URJI COFFEE
            </h3>

            <div className="flex flex-wrap gap-x-10 gap-y-6">

              <div className="flex items-center gap-3">

                <MapPin size={20} className="text-[#D5B46A]" />

                <div>
                  <p className="font-serif text-xl">Furi</p>
                  <p className="mt-1 text-xs text-[#F7F3E9]/50">
                    Ethiopia
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={20} className="text-[#D5B46A]" />

                <div>
                  <p className="font-serif text-xl">Sebeta</p>
                  <p className="mt-1 text-xs text-[#F7F3E9]/50">
                    Ethiopia
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B46A]">
              Our services
            </h3>

            <div className="flex flex-wrap gap-4">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.name}
                    className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-xs text-[#F7F3E9]/75 transition-colors duration-300 hover:border-[#D5B46A]/60 hover:text-[#D5B46A]"
                  >
                    <Icon size={15} className="text-[#D5B46A]" />
                    {service.name}
                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* FINAL FOOTER CTA */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/15 py-10 text-center sm:flex-row sm:text-left">

          <div>
            <p className="font-serif text-2xl">
              We&apos;d love to welcome you.
            </p>

            <p className="mt-2 text-sm text-[#F7F3E9]/55">
              Your next coffee moment starts here.
            </p>
          </div>

          <a
            href="tel:0915879595"
            className="group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#D5B46A] px-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#183E30] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0D79C] hover:shadow-xl hover:shadow-black/20"
          >
            <Phone size={16} />
            Call to order

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-[#F7F3E9]/50">
            © {new Date().getFullYear()} URJI COFFEE. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-[#F7F3E9]/50">
            <Coffee size={15} className="text-[#D5B46A]" />
            Made for coffee lovers.
          </p>

          <Link
            href="#home"
            className="text-xs font-medium text-[#D5B46A] transition-colors hover:text-[#F0D79C]"
          >
            Back to top ↑
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
