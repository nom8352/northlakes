import Link from "next/link";
import { Building2, Clock3, ExternalLink, MapPinned, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { businessDirectory } from "@/lib/community-data";

export default function DirectoryPage() {
  return (
    <PublicLayout eyebrow="교민 업소록">
      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Directory"
          title="교민 업소록"
          description="보이는 몇 개만 두는 대신, 실제로 자주 찾는 식당, 마트, 교회, 생활형 서비스까지 최대한 넓게 담는 방향으로 바꿨습니다. 공식 사이트, 쇼핑센터 공식 페이지, 공개 운영 페이지, 커뮤니티 공개 리스트를 구분해서 표시합니다."
          image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {businessDirectory.map((entry) => (
            <article key={entry.name} className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_16px_46px_rgba(22,32,51,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-700 ring-1 ring-sky-100">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{entry.category}</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">{entry.name}</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3 rounded-[1.5rem] bg-sky-50/70 p-4 text-sm text-slate-600 ring-1 ring-sky-100">
                <p className="flex items-start gap-2">
                  <MapPinned size={16} className="mt-0.5 text-sky-700" />
                  <span>{entry.address}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-sky-700" />
                  <span>{entry.phone}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock3 size={16} className="mt-0.5 text-sky-700" />
                  <span>{entry.hours}</span>
                </p>
                <p>
                  <span className="font-bold text-slate-900">가격대</span> {entry.pricing}
                </p>
                <p>
                  <span className="font-bold text-slate-900">검증</span> {entry.verification}
                </p>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-500">{entry.area}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{entry.note}</p>
              {entry.website ? (
                <Link
                  href={entry.website}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-sky-700"
                >
                  사이트 열기 <ExternalLink size={15} />
                </Link>
              ) : null}
            </article>
          ))}
        </section>
      </main>
    </PublicLayout>
  );
}
