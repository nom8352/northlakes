import Link from "next/link";
import { Building2, Clock3, ExternalLink, MapPinned, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { businessDirectory } from "@/lib/community-data";

export default function DirectoryPage() {
  return (
    <PublicLayout eyebrow="교민 업소록">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Directory"
          title="교민 업소록도 더 믿고 찾기 쉽게"
          description="보이는 몇 곳만 두는 대신, 실제로 자주 찾는 식당, 마트, 교회, 생활형 서비스를 최대한 넓게 담고 있습니다. 공식 사이트, 쇼핑센터 페이지, 공개 운영 페이지를 구분해 정리합니다."
          image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-200">Directory Guide</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">가게 이름보다 먼저 보는 정보</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-sky-50/84">
              <p>주소와 운영시간, 전화번호가 먼저 보이게 배치했습니다.</p>
              <p>가격대와 출처 표기를 같이 두어 신뢰도를 빠르게 판단할 수 있게 했습니다.</p>
              <p>노스레이크 생활권에서 실제 이동 가능한 곳 위주로 정리하고 계속 확장할 수 있습니다.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="surface-panel rounded-[2rem] p-6 md:col-span-2">
              <Building2 className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">생활형 검색에 맞춘 구조</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                단순 업소 나열보다, 지금 연락 가능한지와 실제 갈 수 있는지를 먼저 확인하게 만드는 구조로 바꾸고 있습니다.
              </p>
            </article>
            <article className="surface-panel rounded-[2rem] p-6">
              <MapPinned className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">지역 기준</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">North Lakes, Mango Hill, Redcliffe, Caboolture 생활권 중심</p>
            </article>
            <article className="surface-panel rounded-[2rem] p-6">
              <Clock3 className="text-sky-700" size={24} />
              <h3 className="mt-4 text-2xl font-black text-slate-950">업데이트 기준</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">공개 정보가 있는 곳부터 우선 반영하고 필요시 출처를 계속 보강합니다.</p>
            </article>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {businessDirectory.map((entry, index) => (
            <article key={entry.name} className={`surface-panel rounded-[2rem] p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${index % 3 === 1 ? "xl:translate-y-8" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#f6f8f5] p-3 text-sky-700 ring-1 ring-slate-200/80">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{entry.category}</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">{entry.name}</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3 rounded-[1.5rem] bg-[#f6f8f5] p-4 text-sm text-slate-600 ring-1 ring-slate-200/80">
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
                <p><span className="font-bold text-slate-900">가격대</span> {entry.pricing}</p>
                <p><span className="font-bold text-slate-900">검증</span> {entry.verification}</p>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-500">{entry.area}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{entry.note}</p>
              {entry.website ? (
                <Link
                  href={entry.website}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:gap-3 hover:text-sky-700"
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
