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
          title="자녀 레슨 허브"
          description="수영, 스포츠, 댄스, 음악, 골프처럼 부모님이 실제로 찾는 메뉴를 서브페이지로 나눴습니다. 카테고리를 눌러 들어가면 확인된 업체를 카드형으로 바로 볼 수 있습니다."
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
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">How We Filled It</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">입력 방식도 확장하기 쉽게 잡아뒀습니다</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">1차</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">구조화된 데이터 파일에 실제 업체명, 위치, 연령대, 공식 사이트를 넣어 빠르게 공개합니다.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">2차</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">추가 검증이 끝난 업체를 계속 누적해 카테고리별 카드 리스트를 확장합니다.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-slate-950">3차</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">원하시면 이후에는 관리자 페이지에서 직접 입력하는 방식으로 전환할 수 있습니다.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">Verified Sources</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">현재 반영된 공식 사이트</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.values(activityProviders)
              .flat()
              .map((provider) => (
                <Link
                  key={`${provider.name}-${provider.website}`}
                  href={provider.website}
                  target="_blank"
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-0.5"
                >
                  <p className="font-black text-slate-950">{provider.name}</p>
                  <p className="mt-1 text-slate-500">{provider.suburb}</p>
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
