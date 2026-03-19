import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { cabooltureFarms, seasonStages } from "@/lib/community-data";

export default function CaboolturePage() {
  return (
    <PublicLayout eyebrow="카불쳐 시즌 가이드">
      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Caboolture Season"
          title="카불쳐 딸기 시즌 가이드"
          description="워킹홀리데이 분들과 가족 방문자 모두가 볼 수 있도록 시즌 흐름과 주요 농장 지역을 따로 정리했습니다."
          image="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {seasonStages.map((stage) => (
              <article key={stage.period} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-rose-700">{stage.period}</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">{stage.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{stage.detail}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">Working Holiday Tips</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">처음 오면 같이 보는 체크포인트</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <p>숙소 위치와 농장 이동 시간을 같이 보기</p>
              <p>차량이 있으면 지원 가능한 지역 범위가 넓어지는지 체크하기</p>
              <p>피크 시즌 직전인 5월 이전부터 정보 채널에 미리 들어가기</p>
              <p>체험 방문 정보와 실제 워크 정보는 분리해서 보기</p>
            </div>
            <Link href="/calendar" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
              연간 캘린더에서 같이 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Sprout className="text-emerald-600" size={24} />
            <h2 className="text-3xl font-black tracking-tight text-slate-950">주요 농장</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cabooltureFarms.map((farm) => (
              <article key={farm.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">{farm.area}</p>
                <h3 className="mt-3 text-2xl font-black text-slate-950">{farm.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{farm.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
