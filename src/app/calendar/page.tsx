import { CalendarDays } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { annualEvents, seasonStages } from "@/lib/community-data";

function getCurrentMonthLabel() {
  const month = new Date().getMonth() + 1;
  return `${month}월`;
}

export default function CalendarPage() {
  const currentMonth = getCurrentMonthLabel();

  return (
    <PublicLayout eyebrow="연간 캘린더">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Annual Calendar"
          title="노스레이크 생활과 카불쳐 시즌을 한 해 흐름으로"
          description="자녀 레슨, 학교 리듬, 방학, 농장 시즌을 따로 보지 않고 한 해의 흐름으로 같이 보기 쉽게 정리한 페이지입니다."
          image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-200">Season Rhythm</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">시즌 흐름부터 먼저 읽기</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-sky-50/84">
              학기와 방학, 농장 시즌, 가족 외출 수요가 어떻게 움직이는지 먼저 읽으면 한 해 계획을 훨씬 편하게 세울 수 있습니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {seasonStages.map((stage, index) => (
              <article key={stage.period} className={`surface-panel rounded-[2rem] p-6 ${index % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <p className="text-sm font-black text-rose-700">{stage.period}</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">{stage.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{stage.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-sky-700" size={28} />
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">월별 주요 일정</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {annualEvents.map((event, index) => {
              const isCurrent = event.month === currentMonth;

              return (
                <article
                  key={event.month}
                  className={`rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(24,44,74,0.08)] transition-all duration-300 ease-out ${
                    isCurrent
                      ? "border border-amber-200 bg-amber-50"
                      : "surface-panel"
                  } ${index % 3 === 1 ? "xl:translate-y-8" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-sky-700">{event.month}</p>
                    {isCurrent ? (
                      <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">이번 달</span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{event.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{event.detail}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
