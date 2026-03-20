import Link from "next/link";
import { ArrowRight, ExternalLink, MapPinned, PhoneCall, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/public-layout";
import { PageHero } from "@/components/page-hero";
import { activityCategories, activityProviders } from "@/lib/community-data";

export default function ActivitiesPage() {
  const allProviders = Object.values(activityProviders).flat();

  return (
    <PublicLayout eyebrow="자녀 레슨 허브">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Kids Activities"
          title="부모님이 실제로 고르게 되는 자녀 레슨 허브"
          description="보기 좋은 소개 페이지보다, 실제로 비교하고 문의하게 되는 레슨 허브로 정리했습니다. 카테고리를 더 분명하게 나누고, 주소와 연락처, 운영 정보 중심으로 흐름을 바꿨습니다."
          image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">How To Use</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">설명보다 비교가 먼저 보이게</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-sky-50/84">
              <p>1. 아이 성향에 맞는 카테고리를 먼저 고릅니다.</p>
              <p>2. 주소, 전화번호, 운영시간, 가격 공개 여부를 보고 실제 동선에 맞는지 비교합니다.</p>
              <p>3. 마지막으로 공식 사이트에서 등록 가능 여부와 세부 수업표를 확인합니다.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="surface-panel rounded-[2rem] p-6 md:col-span-2">
              <ShieldCheck className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">공식 출처 중심</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                수업 정보는 공식 사이트가 있는 곳부터 우선 반영하고, 마지막 확인 시점도 함께 적어 신뢰도를 높였습니다.
              </p>
            </article>
            <article className="surface-panel rounded-[2rem] p-6">
              <MapPinned className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">동선 체크</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">노스레이크 기준 이동하기 쉬운 곳을 빠르게 비교하기 좋게 정리했습니다.</p>
            </article>
            <article className="surface-panel rounded-[2rem] p-6 md:col-span-3">
              <PhoneCall className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">문의 전 확인 포인트</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                연령대, 방과후 이동, 주말반 여부, 형제자매 함께 등록 가능 여부까지 같이 보면 실패 확률이 확 줄어듭니다.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Categories</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">레슨 카테고리를 먼저 고르세요</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              모든 카테고리를 같은 크기로 나열하지 않고, 수요가 큰 카드가 먼저 보이도록 배치했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {activityCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={category.href}
                className={`group overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/84 shadow-[0_18px_50px_rgba(24,44,74,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(24,44,74,0.12)] active:scale-[0.99] ${
                  index === 0 ? "md:col-span-2 xl:col-span-4" : index === 1 ? "md:col-span-2 xl:col-span-2" : "xl:col-span-2"
                }`}
              >
                <div className={`bg-cover bg-center ${index === 0 ? "h-72" : "h-56"}`} style={{ backgroundImage: `url(${category.image})` }} />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{category.kicker}</p>
                  <h2 className={`mt-3 font-black text-slate-950 ${index === 0 ? "text-3xl" : "text-2xl"}`}>{category.title}</h2>
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
                    카테고리 열기 <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">Verified Sources</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">현재 반영된 업체와 공식 링크</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allProviders.map((provider, index) => (
              <Link
                key={`${provider.name}-${provider.category}-${provider.website}`}
                href={provider.website}
                target="_blank"
                className={`surface-panel rounded-[1.8rem] p-5 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 ${index % 3 === 1 ? "xl:translate-y-6" : ""}`}
              >
                <p className="font-black text-slate-950">{provider.name}</p>
                <p className="mt-1 text-slate-500">{provider.suburb} · {provider.category}</p>
                <p className="mt-3 text-slate-600">{provider.lastVerified} 확인</p>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-sky-700">
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
