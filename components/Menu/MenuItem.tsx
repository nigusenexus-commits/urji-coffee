
type PropsType = {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
};

const MenuItem = ({
  name,
  description,
  price,
  category,
}: PropsType) => {
  return (
    <article className="group flex min-h-[135px] flex-col justify-between gap-5 rounded-2xl border border-[#183E30]/10 bg-white/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B58A49]/50 hover:bg-white hover:shadow-xl hover:shadow-[#183E30]/[0.06] sm:p-7">

      {/* PRODUCT INFORMATION */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0 flex-1">

          {/* CATEGORY */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A57C3E]">
            {category}
          </p>

          {/* PRODUCT NAME */}
          <h3 className="font-serif text-xl font-semibold leading-snug text-[#183E30] transition-colors duration-300 group-hover:text-[#A57C3E] sm:text-2xl">
            {name}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-2 text-sm leading-6 text-[#183E30]/60">
            {description}
          </p>

        </div>

        {/* PRICE */}
        <div className="shrink-0 rounded-xl bg-[#F2EBDD] px-3 py-2.5 text-right transition-colors duration-300 group-hover:bg-[#EAD9B8]">

          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#183E30]/55">
            Price
          </p>

          <p className="mt-1 whitespace-nowrap text-lg font-semibold tabular-nums text-[#183E30]">
            {price} <span className="text-xs">ETB</span>
          </p>

        </div>

      </div>

      {/* DECORATIVE LINE */}
      <div className="h-px w-full bg-[#183E30]/10 transition-colors duration-300 group-hover:bg-[#B58A49]/50" />

    </article>
  );
};

export default MenuItem;
