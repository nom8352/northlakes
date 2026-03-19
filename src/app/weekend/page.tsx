import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { weekendIdeas } from "@/lib/community-data";

export default function WeekendPage() {
  return (
    <PublicLayout eyebrow="주말 뭐할지">
      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Weekend Ideas"
          title="주말 뭐할지"
          description="주말마다 아이들과 어디를 갈지 고민될 때 바로 참고할 수 있도록, 반복 방문형 코스를 사진 중심으로 묶었습니다."
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 md:grid-cols-2">
          {weekendIdeas.map((idea) => (
            <article key={idea.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${idea.image})` }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">{idea.area}</p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">{idea.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{idea.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-orange-200 bg-orange-50 p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">Tip</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">이 섹션은 행사 데이터가 쌓일수록 더 강해집니다</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            지금은 기본 나들이 코스를 중심으로 구성했지만, 이후에는 마켓, 로컬 축제, 시즌 이벤트를 주간 단위로 연결하면 재방문성이 크게 올라갑니다.
          </p>
          <Link href="/calendar" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
            연간 캘린더와 연결하기 <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </PublicLayout>
  );
}
