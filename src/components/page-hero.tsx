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
    <section className="motion-rise relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#f7f8f5] shadow-[0_28px_90px_rgba(21,39,65,0.10)] md:rounded-[2.75rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(118,167,220,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(53,93,147,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,247,244,0.92)_100%)]" />
      <div className={`relative z-10 grid gap-0 lg:grid-cols-[1.05fr_0.95fr] ${centered ? "text-center" : ""}`}>
        <div className={`flex min-h-[320px] flex-col justify-between px-5 py-7 md:min-h-[360px] md:px-8 md:py-10 lg:min-h-[480px] lg:px-10 lg:py-12 ${centered ? "items-center" : ""}`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700 md:text-sm md:tracking-[0.34em]">{kicker}</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.06em] text-slate-950 md:text-5xl md:leading-[1.04] lg:text-6xl lg:leading-[1.02]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:mt-5 md:text-lg md:leading-8">
              {description}
            </p>
          </div>

          <div className={`mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 ${centered ? "w-full max-w-2xl" : "max-w-2xl"}`}>
            <div className="surface-panel motion-rise motion-delay-1 rounded-[1.4rem] px-4 py-3.5 md:rounded-[1.75rem] md:px-5 md:py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">지역 밀착</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">노스레이크에서 실제 자주 찾는 생활 정보만 묶어 빠르게 볼 수 있게 정리합니다.</p>
            </div>
            <div className="surface-panel motion-rise motion-delay-2 rounded-[1.4rem] px-4 py-3.5 md:rounded-[1.75rem] md:px-5 md:py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">공식 정보 우선</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">연락처, 운영시간, 이벤트 일정은 가능한 공식 출처 기준으로 계속 업데이트합니다.</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[240px] lg:min-h-full">
          <div className="absolute inset-3 rounded-[1.8rem] bg-[linear-gradient(160deg,rgba(18,37,63,0.18),rgba(18,37,63,0.05))] blur-3xl md:inset-5 md:rounded-[2.2rem]" />
          <div className="absolute inset-3 overflow-hidden rounded-[1.9rem] border border-white/70 shadow-[0_24px_80px_rgba(21,39,65,0.16)] md:inset-5 md:rounded-[2.3rem] lg:inset-y-6 lg:right-6 lg:left-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,27,45,0.02)_0%,rgba(15,27,45,0.18)_100%)]" />
          </div>
          <div className="motion-rise motion-delay-3 absolute bottom-5 left-5 max-w-[220px] rounded-[1.35rem] border border-white/70 bg-white/82 px-4 py-3.5 shadow-[0_18px_45px_rgba(21,39,65,0.14)] backdrop-blur-xl md:bottom-10 md:left-10 md:max-w-[260px] md:rounded-[1.6rem] md:px-5 md:py-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">이번 페이지 포인트</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">보기 예쁜 소개보다 실제로 찾고, 비교하고, 다시 들어오게 만드는 정보 밀도를 우선합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
