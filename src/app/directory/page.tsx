import { Building2, MapPinned } from "lucide-react";
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
          description="생활 동선에서 자주 찾는 식당, 마트, 교회, 교육 서비스를 한 페이지에 모았습니다. 이후에는 차량, 통신, 번역, 세무 같은 실용 업종을 더 확장하면 좋습니다."
          image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {businessDirectory.map((entry) => (
            <article key={entry.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{entry.category}</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">{entry.name}</h2>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                <MapPinned size={16} /> {entry.area}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{entry.note}</p>
            </article>
          ))}
        </section>
      </main>
    </PublicLayout>
  );
}
