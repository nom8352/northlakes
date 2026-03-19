import Link from "next/link";
import { ArrowRight, CalendarDays, MapPinned, Sparkles } from "lucide-react";
import { PublicLayout } from "@/components/public-layout";
import { PageHero } from "@/components/page-hero";
import {
  activityCategories,
  featuredProviders,
  quickGuides,
  seasonStages,
  weekendIdeas,
} from "@/lib/community-data";

export default function Home() {
  return (
    <PublicLayout>
      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="North Lakes Breeze"
          title="노스레이크 브리즈"
          description="노스레이크와 브리즈번 북부 한인들을 위한 실용적인 생활 정보 모음"
          image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
        />

        {weekendIdeas[0] ? (
          <section className="overflow-hidden rounded-[2.25rem] border border-sky-100 bg-white shadow-[0_18px_50px_rgba(22,32,51,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div
                className="min-h-[260px] bg-cover bg-center"
                style={{ backgroundImage: `url(${weekendIdeas[0].image})` }}
              />
              <div className="p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Weekend Highlight</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  {weekendIdeas[0].title}
                </h2>
                {weekendIdeas[0].schedule ? (
                  <p className="mt-3 text-base font-semibold text-slate-500">{weekendIdeas[0].schedule}</p>
                ) : null}
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  {weekendIdeas[0].description}
                </p>
                {weekendIdeas[0].details?.length ? (
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {weekendIdeas[0].details.map((detail) => (
                      <div key={detail} className="rounded-[1.25rem] bg-sky-50/80 p-4 text-sm leading-6 text-slate-600 ring-1 ring-sky-100">
                        {detail}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/weekend"
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#2f5fb7_0%,#1a3563_100%)] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    주말 페이지 보기 <ArrowRight size={16} />
                  </Link>
                  {weekendIdeas[0].website ? (
                    <Link
                      href={weekendIdeas[0].website}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-700"
                    >
                      공식 정보 보기 <MapPinned size={16} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[2.25rem] bg-[linear-gradient(145deg,#f3f8ff_0%,#eaf3ff_58%,#ffffff_100%)] p-8 shadow-[0_18px_50px_rgba(47,95,183,0.08)] ring-1 ring-sky-100">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Start Here</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              우리 가족에게 필요한 지역 정보를 먼저 찾기 쉽게
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              자녀 레슨, 교민 업소, 주말 나들이, 카불쳐 시즌 정보를 너무 복잡하지 않게,
              필요한 페이지로 바로 들어가 확인할 수 있도록 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#2f5fb7_0%,#1a3563_100%)] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
              >
                자녀 레슨 보러가기 <ArrowRight size={16} />
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-700"
              >
                연간 캘린더 <CalendarDays size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {quickGuides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_16px_46px_rgba(22,32,51,0.06)]"
              >
                <h3 className="text-lg font-black text-slate-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Kids Activities</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                자녀 레슨 메뉴
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              한 페이지에 다 몰아넣지 않고, 필요한 메뉴를 눌러 바로 들어가게 구성했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activityCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="group overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_16px_46px_rgba(22,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(47,95,183,0.10)]"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                    {category.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{category.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{category.parentLabel}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-sky-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-sky-700">
                    페이지 들어가기 <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Featured</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              지금 들어간 실제 자녀 레슨 업체
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProviders.map((provider) => (
              <article key={provider.name} className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_16px_46px_rgba(22,32,51,0.06)]">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${provider.image})` }} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{provider.suburb}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{provider.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{provider.ageRange}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{provider.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.25rem] bg-[linear-gradient(145deg,#1d3f78_0%,#152848_100%)] p-8 text-white shadow-[0_30px_80px_rgba(22,32,51,0.16)]">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Caboolture</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              카불쳐 시즌 정보도 서브페이지로 분리했습니다
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-sky-50/90">
              {seasonStages.map((stage) => (
                <p key={stage.period}>
                  <span className="font-bold text-white">{stage.period}</span> {stage.title} - {stage.detail}
                </p>
              ))}
            </div>
            <Link
              href="/caboolture"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-50"
            >
              시즌 페이지 보기 <MapPinned size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {weekendIdeas.slice(0, 4).map((idea) => (
              <article key={idea.title} className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_16px_46px_rgba(22,32,51,0.06)]">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${idea.image})` }} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{idea.area}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{idea.title}</h3>
                  {idea.schedule ? (
                    <p className="mt-2 text-sm font-semibold text-slate-500">{idea.schedule}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-slate-600">{idea.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-sky-100 bg-[linear-gradient(145deg,#f3f8ff_0%,#ffffff_100%)] p-8 shadow-[0_16px_46px_rgba(22,32,51,0.06)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">What Changed</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">밝고 차분한 파란 계열로 전체 톤을 정리했습니다</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-sky-100">
              <Sparkles size={16} className="text-sky-700" /> 사진, 카드, 메뉴형 구조
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
