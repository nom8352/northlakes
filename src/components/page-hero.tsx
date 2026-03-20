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
    <section className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-[#f7f8f5] shadow-[0_28px_90px_rgba(21,39,65,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(118,167,220,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(53,93,147,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,247,244,0.92)_100%)]" />
      <div className={`relative z-10 grid gap-0 lg:grid-cols-[1.05fr_0.95fr] ${centered ? "text-center" : ""}`}>
        <div className={`flex min-h-[360px] flex-col justify-between px-8 py-10 md:px-10 md:py-12 lg:min-h-[480px] ${centered ? "items-center" : ""}`}>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-sky-700">{kicker}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl md:leading-[1.02]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>
          </div>

          <div className={`mt-8 grid gap-3 sm:grid-cols-2 ${centered ? "w-full max-w-2xl" : "max-w-2xl"}`}>
            <div className="surface-panel rounded-[1.75rem] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">지역 밀착</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">노스레이크에서 실제 자주 찾는 생활 정보만 묶어 빠르게 볼 수 있게 정리합니다.</p>
            </div>
            <div className="surface-panel rounded-[1.75rem] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">공식 정보 우선</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">연락처, 운영시간, 이벤트 일정은 가능한 공식 출처 기준으로 계속 업데이트합니다.</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] lg:min-h-full">
          <div className="absolute inset-5 rounded-[2.2rem] bg-[linear-gradient(160deg,rgba(18,37,63,0.18),rgba(18,37,63,0.05))] blur-3xl" />
          <div className="absolute inset-5 overflow-hidden rounded-[2.3rem] border border-white/70 shadow-[0_24px_80px_rgba(21,39,65,0.16)] lg:inset-y-6 lg:right-6 lg:left-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,27,45,0.02)_0%,rgba(15,27,45,0.18)_100%)]" />
          </div>
          <div className="absolute bottom-10 left-10 max-w-[260px] rounded-[1.6rem] border border-white/70 bg-white/82 px-5 py-4 shadow-[0_18px_45px_rgba(21,39,65,0.14)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">이번 페이지 포인트</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">보기 예쁜 소개보다 실제로 찾고, 비교하고, 다시 들어오게 만드는 정보 밀도를 우선합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
