export function PageHero({
  kicker,
  title,
  description,
  image,
  align = "left",
}: {
  kicker: string;
  title: string;
  description: string;
  image: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.82)_10%,rgba(15,23,42,0.50)_48%,rgba(15,23,42,0.18)_100%)]" />
      <div
        className={`relative z-10 flex min-h-[320px] flex-col justify-end px-8 py-10 md:px-10 md:py-12 ${
          centered ? "items-center text-center" : ""
        }`}
      >
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-orange-300">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
