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
          kicker="North Lakes Korean Guide"
          title="메뉴를 눌러 들어가는 생활형 서브페이지 사이트로 바꿨습니다"
          description="홈은 짧고 친근하게, 실제 정보는 수영·스포츠·댄스·음악·골프 같은 서브페이지로 들어가서 보는 구조입니다. 지역 생활 가이드가 더 따뜻하게 느껴지도록 사진과 카드 중심으로 재구성했습니다."
          image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,#fff7ed_0%,#fffbeb_55%,#eff6ff_100%)] p-8 shadow-sm ring-1 ring-orange-100">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-700">Start Here</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              먼저 자녀 레슨 코너부터 실제 업체를 넣었습니다
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              자녀 활동은 실제로 가장 자주 찾는 정보라서, 공식 사이트가 확인되는 곳을 우선 반영했습니다.
              이제부터는 페이지를 눌러 카테고리별로 들어가서 업체를 비교할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                자녀 레슨 보러가기 <ArrowRight size={16} />
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
              >
                연간 캘린더 <CalendarDays size={16} />
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
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-700">Kids Activities</p>
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
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
                    {category.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
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
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-orange-700">
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
              <article key={provider.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
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
          <div className="rounded-[2.25rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">Caboolture</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              카불쳐 시즌 정보도 서브페이지로 분리했습니다
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {seasonStages.map((stage) => (
                <p key={stage.period}>
                  <span className="font-bold text-white">{stage.period}</span> {stage.title} - {stage.detail}
                </p>
              ))}
            </div>
            <Link
              href="/caboolture"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-100"
            >
              시즌 페이지 보기 <MapPinned size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {weekendIdeas.slice(0, 4).map((idea) => (
              <article key={idea.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${idea.image})` }} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">{idea.area}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{idea.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{idea.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-orange-200 bg-orange-50 p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-700">What Changed</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">텍스트만 있는 페이지에서 벗어나도록 바꿨습니다</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm">
              <Sparkles size={16} /> 사진, 카드, 메뉴형 구조
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
