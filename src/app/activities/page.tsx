import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PublicLayout } from "@/components/public-layout";
import { PageHero } from "@/components/page-hero";
import { activityCategories, activityProviders } from "@/lib/community-data";

export default function ActivitiesPage() {
  return (
    <PublicLayout eyebrow="자녀 레슨 허브">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Kids Activities"
          title="부모님이 실제로 찾는 자녀 레슨"
          description="설명보다 비교가 먼저 되도록 바꿨습니다. 물놀이, 몸으로 뛰는 레슨, 춤, 피아노와 음악, 골프처럼 필요한 기준으로 메뉴를 정리했고, 각 페이지에서 주소, 전화, 운영정보, 가격 공개 여부를 바로 볼 수 있게 했습니다."
          image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activityCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">{category.kicker}</p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">{category.title}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{category.parentLabel}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.highlights.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-orange-700">
                  카테고리 열기 <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="rounded-[2.25rem] border border-sky-200 bg-sky-50 p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">How To Use</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">이제는 소개 페이지가 아니라 비교 페이지입니다</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">1. 아이 성향부터 고르기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">물놀이, 몸으로 뛰는 활동, 표현 활동, 집중형 레슨, 가족 취미 중에서 먼저 고릅니다.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">2. 바로 비교하기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">주소, 전화번호, 운영시간, 가격 공개 여부를 보고 실제 이동 동선에 맞는지 비교합니다.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">3. 공식 사이트 확인</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">수업표나 등록 가능 여부는 마지막으로 공식 사이트에서 바로 체크할 수 있게 연결했습니다.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">Verified Sources</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">현재 반영된 업체와 출처</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.values(activityProviders)
              .flat()
              .map((provider) => (
                <Link
                  key={`${provider.name}-${provider.category}-${provider.website}`}
                  href={provider.website}
                  target="_blank"
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-0.5"
                >
                  <p className="font-black text-slate-950">{provider.name}</p>
                  <p className="mt-1 text-slate-500">{provider.suburb} · {provider.category}</p>
                  <p className="mt-3 text-slate-600">{provider.lastVerified} 확인</p>
                  <span className="mt-3 inline-flex items-center gap-2 font-bold text-orange-700">
                    공식 사이트 열기 <ExternalLink size={15} />
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
