import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Compass,
  Music4,
  ShipWheel,
  Sprout,
  Trophy,
  Waves,
} from "lucide-react";
import {
  activityCategories,
  annualEvents,
  businessDirectory,
  cabooltureFarms,
  quickGuides,
  seasonStages,
  weekendIdeas,
} from "@/lib/community-data";

const navLinks = [
  { href: "#activities", label: "자녀 레슨" },
  { href: "#weekend", label: "주말 뭐할지" },
  { href: "#directory", label: "업소록" },
  { href: "#season", label: "카불쳐 시즌" },
  { href: "#calendar", label: "연간 캘린더" },
];

const iconMap = [Trophy, Waves, ShipWheel, Music4, Compass, CalendarDays];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ed_26%,#f8fafc_100%)] text-slate-900">
      <header className="relative overflow-hidden border-b border-orange-100/70 bg-[radial-gradient(circle_at_top_left,#fed7aa_0%,transparent_35%),radial-gradient(circle_at_top_right,#bfdbfe_0%,transparent_30%),linear-gradient(135deg,#fff7ed_0%,#fffbeb_42%,#eff6ff_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 md:px-8 lg:px-10">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-700">
                North Lakes Korean Guide
              </p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                노스레이크 한인 생활 가이드
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-800">
                <span className="text-base">•</span> 가족 정착, 자녀 활동, 워홀 시즌 정보를 한곳에
              </div>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                아이들 레슨부터
                <br />
                카불쳐 시즌까지
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                노스레이크와 브리즈번 북부에 막 정착한 한인 가족, 초중고 자녀를 둔 부모님,
                그리고 카불쳐 시즌 정보를 찾는 워킹홀리데이 분들을 위해 생활형 정보를
                보기 쉽게 모아두는 사이트입니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#activities"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  자녀 활동 먼저 보기 <ArrowRight size={16} />
                </a>
                <Link
                  href="/calendar"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
                >
                  연간 캘린더 보기 <CalendarDays size={16} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {quickGuides.map((guide) => (
                <article
                  key={guide.title}
                  className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <h3 className="text-lg font-black text-slate-900">{guide.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{guide.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-16 md:px-8 lg:px-10">
        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-700">For Families</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">초중고 자녀 중심 정보</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              레슨, 클럽, 수영장, 음악, 주말 활동을 부모 입장에서 빠르게 찾기 쉽게 구성합니다.
            </p>
          </article>
          <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">For Workers</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">카불쳐 시즌 가이드</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              시즌 흐름, 준비 시기, 주요 농장 지역을 월별 시각으로 정리해 첫 방문자도 이해하기 쉽게 만듭니다.
            </p>
          </article>
          <article className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700">For Community</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">교민 업소록 허브</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              마트, 식당, 교회, 생활서비스, 교육업종을 카테고리별로 확장 가능한 구조로 모아갑니다.
            </p>
          </article>
        </section>

        <section id="activities" className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">Kids Activities</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                자녀 레슨과 클럽을 이렇게 나누면 좋아요
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              사이트 초반에는 실제 업체를 모두 다 채우기보다, 부모님이 가장 먼저 찾는 범주를
              명확하게 나누는 것이 훨씬 유용합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activityCategories.map((category, index) => {
              const Icon = iconMap[index];

              return (
                <article
                  key={category.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                        {category.audience}
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-slate-900">{category.title}</h3>
                    </div>
                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-700">
                      <Icon size={22} />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="weekend" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Weekend Ideas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              주말에 뭐할지
              <br />
              고민될 때 보는 섹션
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
              실제 운영에서는 매주 새 이벤트를 넣어도 좋지만, 먼저는 가족이 반복해서 찾을 수
              있는 기본 코스를 정리하는 것이 트래픽과 체류시간에 더 도움이 됩니다.
            </p>
            <Link
              href="/calendar"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-100"
            >
              연간 일정과 연결해 보기 <ArrowRight size={16} />
            </Link>
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

        <section id="directory" className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Business Directory</p>
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                <Building2 className="text-sky-700" size={32} />
                교민 업소록
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              식당만 모아두기보다 생활형 카테고리를 함께 두면 신규 정착자에게 훨씬 더 도움이 됩니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {businessDirectory.map((entry) => (
              <article
                key={entry.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{entry.category}</p>
                <h3 className="mt-3 text-xl font-black text-slate-900">{entry.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{entry.area}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{entry.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="season" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.5rem] border border-rose-200 bg-[linear-gradient(135deg,#fff1f2_0%,#fff7ed_100%)] p-8 shadow-sm md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-600 px-3 py-2 text-xl text-white">🍓</div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-700">Caboolture Season</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  워홀러를 위한 카불쳐 딸기 시즌
                </h2>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {seasonStages.map((stage) => (
                <article
                  key={stage.period}
                  className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-black text-slate-900">
                      {stage.period} <span className="text-rose-600">{stage.title}</span>
                    </h3>
                    <span className="inline-flex w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-rose-700">
                      {stage.tone}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{stage.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">Working Holiday Tips</p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">처음 오면 같이 정리하면 좋은 것</h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <p>숙소 위치와 농장 이동 시간을 함께 보기</p>
                <p>차량 유무에 따라 지원 가능한 지역 범위를 나누기</p>
                <p>피크 시즌 전인 5월 이전부터 정보 채널에 미리 들어가기</p>
                <p>가족 방문용 체험 정보와 워크 정보는 분리해 보여주기</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-700">Farm List</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">주요 딸기농장</h3>
                </div>
                <Sprout className="text-emerald-600" size={28} />
              </div>
              <div className="mt-6 space-y-4">
                {cabooltureFarms.map((farm) => (
                  <article key={farm.name} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h4 className="font-black text-slate-900">{farm.name}</h4>
                      <span className="text-sm font-semibold text-slate-500">{farm.area}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{farm.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="calendar" className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">Annual Calendar</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                한 해 주요 이벤트 캘린더
              </h2>
            </div>
            <Link
              href="/calendar"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-orange-700"
            >
              월별 캘린더 상세 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {annualEvents.map((event) => (
              <article
                key={event.month}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-orange-700">{event.month}</p>
                <h3 className="mt-3 text-xl font-black text-slate-900">{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{event.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
