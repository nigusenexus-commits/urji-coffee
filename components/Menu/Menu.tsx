
"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import MenuItem from "./MenuItem";

type MenuCategory =
  | "Juice"
  | "Breakfast"
  | "Food"
  | "Fish Dishes"
  | "Hot Drinks";

type MenuProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
};

const categories = [
  "All",
  "Juice",
  "Breakfast",
  "Food",
  "Fish Dishes",
  "Hot Drinks",
] as const;

// Official URJI COFFEE menu prices in Ethiopian Birr.
const menuItems: MenuProduct[] = [
  // JUICE
  {
    id: 1,
    name: "Special Juice",
    description: "Our special fresh juice.",
    price: 90,
    category: "Juice",
  },
  {
    id: 2,
    name: "Mixed Juice",
    description: "A refreshing mixed fruit juice.",
    price: 70,
    category: "Juice",
  },
  {
    id: 3,
    name: "Avocado Juice",
    description: "Fresh avocado juice.",
    price: 60,
    category: "Juice",
  },
  {
    id: 4,
    name: "Mango Juice",
    description: "Fresh mango juice.",
    price: 60,
    category: "Juice",
  },
  {
    id: 5,
    name: "Banana with Milk",
    description: "Banana blended with milk.",
    price: 70,
    category: "Juice",
  },
  {
    id: 6,
    name: "Fruit Punch",
    description: "Refreshing fruit punch.",
    price: 75,
    category: "Juice",
  },
  {
    id: 7,
    name: "Watermelon (Habab) Juice",
    description: "Fresh watermelon juice.",
    price: 50,
    category: "Juice",
  },

  // BREAKFAST
  {
    id: 8,
    name: "Urji Special Full",
    description: "Our special full breakfast.",
    price: 130,
    category: "Breakfast",
  },
  {
    id: 9,
    name: "Normal Full",
    description: "Traditional full breakfast.",
    price: 90,
    category: "Breakfast",
  },
  {
    id: 10,
    name: "Fetira with Egg",
    description: "Fetira served with egg.",
    price: 120,
    category: "Breakfast",
  },
  {
    id: 11,
    name: "Enjera Ferfer",
    description: "Traditional injera ferfer.",
    price: 80,
    category: "Breakfast",
  },
  {
    id: 12,
    name: "Enjera Ferfer with Egg",
    description: "Injera ferfer served with egg.",
    price: 100,
    category: "Breakfast",
  },
  {
    id: 13,
    name: "Chechebsa",
    description: "Traditional Ethiopian chechebsa.",
    price: 100,
    category: "Breakfast",
  },
  {
    id: 14,
    name: "Egg Selse",
    description: "Traditional egg selse.",
    price: 90,
    category: "Breakfast",
  },

  // FOOD
  {
    id: 15,
    name: "Spaghetti with Vegetable",
    description: "Spaghetti with vegetables.",
    price: 85,
    category: "Food",
  },
  {
    id: 16,
    name: "Spaghetti",
    description: "Classic spaghetti.",
    price: 80,
    category: "Food",
  },
  {
    id: 17,
    name: "Macaroni",
    description: "A satisfying macaroni dish.",
    price: 80,
    category: "Food",
  },
  {
    id: 18,
    name: "Chips",
    description: "Freshly prepared chips.",
    price: 75,
    category: "Food",
  },

  // FISH DISHES
  {
    id: 19,
    name: "Urji Special Fish",
    description: "Our signature special fish dish.",
    price: 450,
    category: "Fish Dishes",
  },
  {
    id: 20,
    name: "Asa Tibs",
    description: "A delicious Urji fish dish.",
    price: 350,
    category: "Fish Dishes",
  },
  {
    id: 21,
    name: "Asa Cotelet",
    description: "A delicious fish cutlet.",
    price: 250,
    category: "Fish Dishes",
  },
  {
    id: 22,
    name: "Asa Lebleb",
    description: "A traditional fish dish.",
    price: 200,
    category: "Fish Dishes",
  },
  {
    id: 23,
    name: "Asa Gulash",
    description: "A delicious fish goulash.",
    price: 250,
    category: "Fish Dishes",
  },
  {
    id: 24,
    name: "Fish with Salad",
    description: "Fish served with salad.",
    price: 180,
    category: "Fish Dishes",
  },
  {
    id: 25,
    name: "Fish with Rice",
    description: "Fish served with rice.",
    price: 190,
    category: "Fish Dishes",
  },
  {
    id: 26,
    name: "Fish with Spaghetti",
    description: "Fish served with spaghetti.",
    price: 190,
    category: "Fish Dishes",
  },

  // HOT DRINKS
  {
    id: 27,
    name: "Coffee",
    description: "Enjoy a warm cup of coffee.",
    price: 20,
    category: "Hot Drinks",
  },
  {
    id: 28,
    name: "Tea",
    description: "A comforting cup of tea.",
    price: 15,
    category: "Hot Drinks",
  },
  {
    id: 29,
    name: "Macchiato",
    description: "Espresso with a touch of milk.",
    price: 30,
    category: "Hot Drinks",
  },
  {
    id: 30,
    name: "Espresso",
    description: "A rich, concentrated coffee.",
    price: 25,
    category: "Hot Drinks",
  },
  {
    id: 31,
    name: "Orange",
    description: "A refreshing orange drink.",
    price: 30,
    category: "Hot Drinks",
  },
  {
    id: 32,
    name: "Milk",
    description: "A warm glass of milk.",
    price: 30,
    category: "Hot Drinks",
  },
  {
    id: 33,
    name: "Cappuccino",
    description: "Coffee with steamed milk and foam.",
    price: 40,
    category: "Hot Drinks",
  },
  {
    id: 34,
    name: "Almond with Milk",
    description: "Almond drink blended with milk.",
    price: 40,
    category: "Hot Drinks",
  },
  {
    id: 35,
    name: "Normal Almond",
    description: "Traditional almond drink.",
    price: 35,
    category: "Hot Drinks",
  },
  {
    id: 36,
    name: "Qeshir",
    description: "Traditional Ethiopian coffee husk tea.",
    price: 20,
    category: "Hot Drinks",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by category and search.
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-[#F7F3E9] px-6 py-24 text-[#183E30] md:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#A57C3E]">
            Taste the difference
          </p>

          <h2 className="font-serif text-5xl font-normal tracking-tight sm:text-6xl md:text-7xl">
            Our <span className="italic text-[#A57C3E]">Menu</span>
          </h2>

          <div className="mx-auto my-7 h-px w-20 bg-[#B58A49]" />

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#183E30]/70 md:text-base">
            From freshly prepared coffee and refreshing juices to
            delicious Ethiopian breakfasts and fish dishes,
            discover something special at Urji Coffee.
          </p>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#A57C3E]">
            Furi & Sebeta · Ethiopia
          </p>

        </div>

        {/* SEARCH */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">

            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#183E30]/50"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search coffee, juice, food..."
              aria-label="Search menu"
              className="h-14 w-full rounded-full border border-[#183E30]/15 bg-white/70 pl-14 pr-14 text-sm text-[#183E30] outline-none transition placeholder:text-[#183E30]/40 focus:border-[#B58A49] focus:ring-2 focus:ring-[#B58A49]/20"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#183E30]/60 transition hover:text-[#A57C3E]"
              >
                <X size={18} />
              </button>
            )}

          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-6 py-3 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "border-[#183E30] bg-[#183E30] text-[#F7F3E9] shadow-lg shadow-[#183E30]/10"
                    : "border-[#183E30]/20 bg-transparent text-[#183E30]/75 hover:border-[#B58A49] hover:text-[#A57C3E]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* MENU COUNT */}
        <div className="mb-6 flex items-center justify-between border-b border-[#183E30]/15 pb-4">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#183E30]/60">
            {activeCategory === "All" ? "Complete menu" : activeCategory}
          </p>

          <p className="text-xs text-[#183E30]/60">
            {filteredItems.length} items
          </p>

        </div>

        {/* MENU PRODUCTS */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
              />
            ))}
          </div>
        ) : (
          <div
            className="rounded-3xl border border-[#183E30]/10 bg-white/50 px-6 py-20 text-center"
            aria-live="polite"
          >
            <Search
              size={32}
              className="mx-auto mb-4 text-[#A57C3E]"
            />

            <h3 className="font-serif text-2xl">
              No menu items found
            </h3>

            <p className="mt-3 text-sm text-[#183E30]/60">
              Try a different search or choose another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 font-semibold text-[#A57C3E] underline underline-offset-4"
            >
              Show complete menu
            </button>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="mt-16 flex flex-col items-center gap-5 text-center">

          <h3 className="font-serif text-3xl sm:text-4xl">
            Something caught your eye?
          </h3>

          <p className="max-w-md text-sm leading-7 text-[#183E30]/65">
            Add your favourites to the cart or give us a call
            to enjoy your favourite dishes.
          </p>

          <a
            href="tel:0915879595"
            className="group inline-flex items-center gap-3 rounded-full bg-[#183E30] px-9 py-4 text-sm font-semibold text-[#F7F3E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#285640]"
          >
            Call to order

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Menu;
