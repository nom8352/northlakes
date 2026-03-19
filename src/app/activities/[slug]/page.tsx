import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProviderCard } from "@/components/provider-card";
import { PublicLayout } from "@/components/public-layout";
import {
  activityCategories,
  activityPageContent,
  activityProviders,
  type ActivitySlug,
} from "@/lib/community-data";

export function generateStaticParams() {
  return activityCategories.map((category) => ({ slug: category.slug }));
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const safeSlug = slug as ActivitySlug;
  const content = activityPageContent[safeSlug];
  const providers = activityProviders[safeSlug];

  if (!content || !providers) {
    notFound();
  }

  return (
    <PublicLayout eyebrow="자녀 레슨 상세 페이지">
      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker={content.kicker}
          title={content.title}
          description={content.description}
          image={content.image}
        />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm">
            <Link href="/activities" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-orange-700">
              <ArrowLeft size={16} /> 자녀 레슨 허브로 돌아가기
            </Link>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">이 카테고리 볼 때 체크할 것</h2>
            <div className="mt-6 space-y-3">
              {content.tips.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 text-orange-600" size={18} />
                  <p className="text-sm leading-6 text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Verified</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">공식 사이트가 확인된 업체</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              현재 이 페이지의 업체 정보는 2026년 3월 기준 공개된 공식 사이트 또는 공식 운영 페이지를 우선 기준으로 넣었습니다.
              이후 더 많은 북부권 레슨 데이터를 같은 카드 구조로 계속 누적할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </section>
      </main>
    </PublicLayout>
  );
}
