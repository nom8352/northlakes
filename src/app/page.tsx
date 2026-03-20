import Link from "next/link";
import { ArrowRight, Compass, MapPinned, Sparkles } from "lucide-react";
import { PublicLayout } from "@/components/public-layout";
import { PageHero } from "@/components/page-hero";
import {
  activityCategories,
  birthdayFreebies,
  featuredProviders,
  quickGuides,
  seasonStages,
  weekendIdeas,
} from "@/lib/community-data";

export default function Home() {
  const spotlightWeekend = weekendIdeas[0];
  const supportingWeekends = weekendIdeas.slice(1, 5);

  return (
    <PublicLayout>
      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="North Lakes Breeze"
          title="노스레이크 생활 정보, 더 보기 쉽고 더 자주 다시 찾게"
          description="아이들 레슨, 주말 일정, 카불쳐 시즌, 교민 생활 정보를 너무 딱딱하지 않게 묶었습니다. 필요한 순간에 바로 눌러 들어가고, 실제로 쓰게 되는 지역 허브를 만드는 방향으로 다듬고 있습니다."
          image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="surface-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Start Here</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl md:leading-[1.04]">
              우리 가족에게 지금 필요한 정보를 먼저 찾게 만드는 홈 화면
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              설명이 길게 이어지는 첫 화면보다, 바로 들어갈 메뉴와 이번 주말처럼 당장 쓰는 정보를 앞에 배치했습니다.
              새로 온 분도, 이미 오래 사는 분도 필요한 페이지로 자연스럽게 연결되도록 구성했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
              >
                자녀 레슨 바로 보기 <ArrowRight size={16} />
              </Link>
              <Link
                href="/weekend"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
              >
                이번 주말 보기 <Compass size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {quickGuides.slice(0, 3).map((guide, index) => (
              <article
                key={guide.title}
                className={`surface-panel rounded-[2rem] p-6 ${index === 1 ? "lg:ml-10" : ""}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">Quick Note</p>
                <h3 className="mt-3 text-xl font-black text-slate-950">{guide.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{guide.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          {spotlightWeekend ? (
            <article className="surface-panel overflow-hidden rounded-[2.6rem]">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="min-h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${spotlightWeekend.image})` }} />
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Weekend Highlight</p>
                    <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">{spotlightWeekend.title}</h2>
                    {spotlightWeekend.schedule ? (
                      <p className="mt-3 text-base font-semibold text-slate-500">{spotlightWeekend.schedule}</p>
                    ) : null}
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{spotlightWeekend.description}</p>
                    {spotlightWeekend.details?.length ? (
                      <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {spotlightWeekend.details.slice(0, 4).map((detail, index) => (
                          <div key={detail} className="rounded-[1.5rem] bg-[#f6f8f5] p-4 text-sm leading-6 text-slate-600 ring-1 ring-slate-200/70" style={{ animationDelay: `${index * 80}ms` }}>
                            {detail}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/weekend"
                      className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                    >
                      주말 페이지 보기 <ArrowRight size={16} />
                    </Link>
                    {spotlightWeekend.website ? (
                      <Link
                        href={spotlightWeekend.website}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/82 px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
                      >
                        공식 정보 보기 <MapPinned size={16} />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-4">
            {supportingWeekends.map((idea, index) => (
              <article
                key={idea.title}
                className={`surface-panel rounded-[2rem] p-6 ${index === 1 ? "lg:mr-8" : ""}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{idea.area}</p>
                <h3 className="mt-3 text-2xl font-black text-slate-950">{idea.title}</h3>
                {idea.schedule ? <p className="mt-2 text-sm font-semibold text-slate-500">{idea.schedule}</p> : null}
                <p className="mt-3 text-sm leading-7 text-slate-600">{idea.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Kids Activities</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">자녀 레슨은 더 고르기 쉽게</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              같은 비율 카드가 반복되던 구조에서 벗어나, 먼저 눈에 띄는 카테고리와 빠른 비교 요소가 보이도록 레이아웃을 바꿨습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {activityCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={category.href}
                className={`group overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/84 shadow-[0_18px_50px_rgba(24,44,74,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(24,44,74,0.12)] active:scale-[0.99] ${
                  index === 0 ? "md:col-span-2 xl:col-span-3 xl:row-span-2" : index === 1 ? "md:col-span-2 xl:col-span-3" : "xl:col-span-2"
                }`}
              >
                <div className={`bg-cover bg-center ${index === 0 ? "h-72" : "h-52"}`} style={{ backgroundImage: `url(${category.image})` }} />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{category.kicker}</p>
                  <h3 className={`mt-3 font-black text-slate-950 ${index === 0 ? "text-3xl" : "text-2xl"}`}>{category.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{category.parentLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.highlights.map((item) => (
                      <span key={item} className="rounded-full bg-[#f6f8f5] px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 ease-out group-hover:gap-3 group-hover:text-sky-700">
                    페이지 들어가기 <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Caboolture</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">카불쳐 시즌도 생활 루틴 안에서 보이게</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-sky-50/84">
              {seasonStages.map((stage) => (
                <p key={stage.period}>
                  <span className="font-bold text-white">{stage.period}</span> {stage.title} - {stage.detail}
                </p>
              ))}
            </div>
            <Link
              href="/caboolture"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sky-50 active:scale-[0.98]"
            >
              시즌 페이지 보기 <MapPinned size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredProviders.slice(0, 4).map((provider, index) => (
              <article key={provider.name} className={`surface-panel overflow-hidden rounded-[2rem] ${index === 1 ? "md:translate-y-8" : ""}`}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${provider.image})` }} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{provider.suburb}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{provider.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{provider.ageRange}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{provider.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="surface-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Frugal Tips</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">호주에서 생일 챙겨먹기</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              타지 생활에서 은근히 자주 다시 찾게 되는 정보는 따로 모으는 게 맞다고 판단했습니다. 앱 쿠폰과 생일 혜택처럼
              실사용성이 높은 생활팁을 별도 코너로 분리해두었습니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/frugal-tips"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
              >
                알뜰팁 페이지 보기 <ArrowRight size={16} />
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f6f8f5] px-4 py-2 text-sm font-bold text-slate-900 ring-1 ring-slate-200/80">
                <Sparkles size={16} className="text-sky-700" /> 현재 {birthdayFreebies.length}개 브랜드 정리
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {birthdayFreebies.slice(0, 3).map((item, index) => (
              <div key={item.brand} className={`surface-panel rounded-[1.9rem] p-5 ${index === 1 ? "lg:ml-10" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xl font-black text-slate-950">{item.brand}</p>
                  <span className="rounded-full bg-[#f6f8f5] px-3 py-1 text-xs font-bold text-sky-700 ring-1 ring-slate-200/80">{item.category}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-700">{item.benefit}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.joinTiming}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
