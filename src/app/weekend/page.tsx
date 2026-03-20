import Link from "next/link";
import { CalendarDays, ExternalLink, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { weekendIdeas } from "@/lib/community-data";

export default function WeekendPage() {
  const featuredIdea = weekendIdeas[0];
  const eventIdeas = weekendIdeas.slice(1);

  return (
    <PublicLayout eyebrow="주말 뭐할지">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Weekend Ideas"
          title="이번 주말, 너무 평범하지 않게 고르는 지역 루틴"
          description="정적인 장소 모음보다 지금 날짜와 계절감에 맞는 코스를 앞에 두었습니다. 가족 외출, 저렴한 체험, 실내 루틴까지 주말마다 다시 들어와 보기 좋은 페이지로 정리합니다."
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        />

        {featuredIdea ? (
          <section className="surface-panel overflow-hidden rounded-[2.6rem]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="min-h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${featuredIdea.image})` }} />
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Featured Routine</p>
                  <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">{featuredIdea.title}</h2>
                  {featuredIdea.schedule ? <p className="mt-3 text-base font-semibold text-slate-500">{featuredIdea.schedule}</p> : null}
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{featuredIdea.description}</p>
                  {featuredIdea.details?.length ? (
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {featuredIdea.details.map((detail, index) => (
                        <div key={detail} className="rounded-[1.5rem] bg-[#f6f8f5] p-4 text-sm leading-6 text-slate-600 ring-1 ring-slate-200/80" style={{ animationDelay: `${index * 80}ms` }}>
                          {detail}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                {featuredIdea.website ? (
                  <Link
                    href={featuredIdea.website}
                    target="_blank"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                  >
                    공식 정보 보기 <ExternalLink size={15} />
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-200">Weekend Planner</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">날짜가 있는 일정부터 먼저 고르세요</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-sky-50/84">
              지금은 추상적인 나들이 아이디어보다, 이번 달에 실제로 갈 수 있는 공식 일정과 반복 방문형 루틴을 섞어서 보여주는 단계입니다.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.7rem] border border-white/12 bg-white/8 p-5 text-sm leading-7 text-sky-50/84 backdrop-blur-md">
                무료 행사, 유료 체험, 실내 루틴이 한 페이지 안에 함께 보이도록 구성했습니다.
              </div>
              <div className="rounded-[1.7rem] border border-white/12 bg-white/8 p-5 text-sm leading-7 text-sky-50/84 backdrop-blur-md">
                가족 외출과 청소년 프로그램이 섞여 있으니 대상 연령과 시간대를 먼저 확인하는 것이 좋습니다.
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {eventIdeas.map((idea, index) => (
              <article key={idea.title} className={`surface-panel overflow-hidden rounded-[2rem] ${index % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${idea.image})` }} />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{idea.area}</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">{idea.title}</h2>
                  {idea.schedule ? <p className="mt-2 text-sm font-semibold text-slate-500">{idea.schedule}</p> : null}
                  <p className="mt-4 text-sm leading-7 text-slate-600">{idea.description}</p>
                  {idea.details?.length ? (
                    <div className="mt-4 space-y-2 rounded-[1.25rem] bg-[#f6f8f5] p-4 text-sm leading-6 text-slate-600 ring-1 ring-slate-200/80">
                      {idea.details.slice(0, 4).map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  ) : null}
                  {idea.website ? (
                    <Link
                      href={idea.website}
                      target="_blank"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:gap-3 hover:text-sky-700"
                    >
                      공식 정보 보기 <ExternalLink size={15} />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-panel rounded-[2.4rem] p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Next Step</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">주간 캘린더처럼 더 자주 찾게 만들 수 있습니다</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                지금은 공식 행사와 반복 방문형 루틴을 함께 보여주고 있지만, 다음 단계에서는 날짜순 섹션과 주차별 정리까지 넣으면 더 자주 다시 찾게 됩니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
              >
                연간 캘린더 보기 <CalendarDays size={16} />
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f6f8f5] px-4 py-2 text-sm font-bold text-slate-900 ring-1 ring-slate-200/80">
                <Sparkles size={16} className="text-sky-700" /> 공식 일정 + 반복 루틴 혼합형
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
