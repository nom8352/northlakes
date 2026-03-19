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
      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Annual Calendar"
          title="노스레이크 생활 + 카불쳐 시즌 캘린더"
          description="자녀 레슨, 학교 리듬, 방학, 농장 시즌을 한 해 흐름으로 같이 보기 쉽게 정리한 페이지입니다."
          image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 lg:grid-cols-4">
          {seasonStages.map((stage) => (
            <article key={stage.period} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-rose-700">{stage.period}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{stage.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{stage.detail}</p>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-orange-700" size={28} />
            <h2 className="text-3xl font-black tracking-tight text-slate-950">월별 주요 일정</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {annualEvents.map((event) => {
              const isCurrent = event.month === currentMonth;

              return (
                <article
                  key={event.month}
                  className={`rounded-[2rem] border p-6 shadow-sm ${
                    isCurrent ? "border-orange-300 bg-orange-50" : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-orange-700">{event.month}</p>
                    {isCurrent && (
                      <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">이번 달</span>
                    )}
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
