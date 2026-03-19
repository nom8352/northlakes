import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPinned, Sprout, Users } from "lucide-react";
import { annualEvents, seasonStages, weekendIdeas } from "@/lib/community-data";

function getCurrentMonthLabel() {
  const month = new Date().getMonth() + 1;
  return `${month}월`;
}

export default function CalendarPage() {
  const currentMonth = getCurrentMonthLabel();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf2_0%,#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-orange-700"
          >
            <ArrowLeft size={18} /> 메인으로 돌아가기
          </Link>
          <div className="hidden text-sm font-semibold text-slate-500 md:block">
            현재 기준 월: <span className="text-orange-700">{currentMonth}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:px-8">
        <section className="rounded-[2.5rem] border border-orange-200 bg-[radial-gradient(circle_at_top_left,#fed7aa_0%,transparent_32%),linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">Annual Guide</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            노스레이크 생활 + 카불쳐 시즌 캘린더
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            이 페이지는 교민 가족의 연간 생활 리듬과 워킹홀리데이 시즌 흐름을 한 화면에서
            같이 보도록 만든 기본 골격입니다. 실제 운영 시에는 학교 행사, 지역 축제, 레슨
            접수 일정, 교민 모임 날짜를 이 구조 위에 계속 덧붙이면 됩니다.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex items-center gap-3">
              <Sprout className="text-emerald-700" size={22} />
              <h2 className="text-xl font-black text-slate-900">카불쳐 시즌 축</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              딸기농장 시즌은 3월 준비, 5월 초기 수확, 7-8월 피크, 9-10월 체험 및 마무리로 보면 전체 흐름이 잡힙니다.
            </p>
          </article>
          <article className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
            <div className="flex items-center gap-3">
              <Users className="text-sky-700" size={22} />
              <h2 className="text-xl font-black text-slate-900">가족 생활 축</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              학기 시작, 방학, 스포츠 등록, 공연 시즌, 여름 물놀이 시즌을 중심으로 일정 수요가 크게 움직입니다.
            </p>
          </article>
          <article className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-3">
              <MapPinned className="text-orange-700" size={22} />
              <h2 className="text-xl font-black text-slate-900">주말 나들이 축</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              지역 마켓, 공원, 수영장, 농장 체험, 시즌 축제는 반복 방문형 콘텐츠로 키우기 좋은 주제입니다.
            </p>
          </article>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">Farm Season Timeline</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">카불쳐 딸기 시즌 흐름</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {seasonStages.map((stage) => (
              <article
                key={stage.period}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-rose-700">{stage.period}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">{stage.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{stage.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">Month By Month</p>
            <h2 className="mt-2 flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
              <CalendarDays className="text-orange-700" size={30} />
              연간 주요 일정
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {annualEvents.map((event) => {
              const isCurrent = event.month === currentMonth;

              return (
                <article
                  key={event.month}
                  className={`rounded-[2rem] border p-6 shadow-sm transition ${
                    isCurrent
                      ? "border-orange-300 bg-orange-50 shadow-[0_18px_45px_rgba(251,146,60,0.18)]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-orange-700">{event.month}</p>
                    {isCurrent && (
                      <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                        이번 달
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{event.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{event.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Weekend Content</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">주말 콘텐츠 아이디어</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {weekendIdeas.map((idea) => (
              <article
                key={idea.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{idea.area}</p>
                <h3 className="mt-3 text-xl font-black text-slate-900">{idea.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{idea.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
