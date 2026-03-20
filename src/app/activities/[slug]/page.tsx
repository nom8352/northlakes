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
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker={content.kicker}
          title={content.title}
          description={content.description}
          image={content.image}
        />

        <section className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="surface-deep rounded-[2.4rem] p-7 text-white md:p-8">
            <Link href="/activities" className="inline-flex items-center gap-2 text-sm font-bold text-sky-100 transition hover:text-white">
              <ArrowLeft size={16} /> 자녀 레슨 허브로 돌아가기
            </Link>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl">이 카테고리 볼 때 체크할 것</h2>
            <div className="mt-6 space-y-3">
              {content.tips.map((tip) => (
                <div key={tip} className="rounded-[1.4rem] border border-white/12 bg-white/8 p-4 text-sm leading-7 text-sky-50/88 backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 text-sky-200" size={18} />
                    <p>{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2.4rem] p-7 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">Verified</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">공식 사이트가 확인된 업체</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              현재 이 페이지의 업체 정보는 2026년 3월 기준 공개된 공식 사이트 또는 공식 운영 페이지를 우선 기준으로 넣었습니다. 이후 더 많은 북부권 레슨 데이터를 같은 카드 구조로 계속 누적할 수 있습니다.
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
