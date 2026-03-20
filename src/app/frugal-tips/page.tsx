import Link from "next/link";
import { BadgePercent, CakeSlice, ExternalLink, Gift, Smartphone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";
import { birthdayFreebies } from "@/lib/community-data";

const summaryCards = [
  {
    title: "미리 가입",
    text: "생일 당일 설치보다 최소 7-14일 전에 가입해야 받는 곳이 많습니다.",
    icon: Smartphone,
  },
  {
    title: "조건 꼭 확인",
    text: "구매조건, 앱 한정, 프로필 생일 등록 여부를 반드시 확인하세요.",
    icon: BadgePercent,
  },
  {
    title: "생일달 혜택",
    text: "하루짜리 쿠폰만 있는 게 아니라 생일 달 전체 혜택도 꽤 있습니다.",
    icon: CakeSlice,
  },
];

export default function FrugalTipsPage() {
  return (
    <PublicLayout eyebrow="알뜰팁">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Frugal Tips"
          title="호주에서 생일 챙겨먹기"
          description="패스트푸드, 커피, 디저트 앱에 미리 가입해두면 받을 수 있는 생일 혜택을 보기 좋게 정리했습니다. 혜택은 자주 바뀌니 마지막 사용 전에는 공식 앱에서 한 번 더 확인하세요."
          image="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="surface-deep rounded-[2.5rem] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-200">Birthday Strategy</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">혼자 지나치지 말고 미리 챙겨두기</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-sky-50/84">
              이 페이지는 글 읽는 용도보다 저장해두고 실제 생일 전에 다시 확인하는 용도로 만들었습니다. 가입 시점과 조건을 먼저 확인하는 게 핵심입니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {summaryCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className={`surface-panel rounded-[2rem] p-6 ${index === 1 ? "md:translate-y-8" : ""}`}>
                  <div className="inline-flex rounded-2xl bg-[#f6f8f5] p-3 text-sky-700 ring-1 ring-slate-200/80">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="surface-panel rounded-[2.4rem] p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Gift className="text-amber-700" size={22} />
            <h2 className="text-3xl font-black tracking-tight text-slate-950">빠르게 보는 팁</h2>
          </div>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 md:grid-cols-2">
            <p>생일 쿠폰은 보통 앱 회원, 이메일 수신 동의, 생일 정보 등록이 있어야 들어옵니다.</p>
            <p>일부 브랜드는 생일 최소 7일 전 또는 14일 전 가입이 필요합니다.</p>
            <p>무료처럼 보여도 최소 구매금액이 붙는 곳이 있으니 사용 전에 조건을 꼭 보세요.</p>
            <p>혜택 내용은 시즌마다 바뀔 수 있어 앱 알림이나 공식 페이지를 마지막으로 한 번 더 확인하는 게 안전합니다.</p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="text-sky-700" size={24} />
            <div>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">생일 혜택 표</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                데스크탑에서는 표로, 모바일에서는 카드로 보기 좋게 정리했습니다.
              </p>
            </div>
          </div>

          <div className="surface-panel hidden overflow-hidden rounded-[2.2rem] lg:block">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#f6f8f5] text-slate-700">
                  <tr>
                    <th className="px-5 py-4 font-black">브랜드</th>
                    <th className="px-5 py-4 font-black">혜택</th>
                    <th className="px-5 py-4 font-black">앱 / 멤버십</th>
                    <th className="px-5 py-4 font-black">언제 가입?</th>
                    <th className="px-5 py-4 font-black">사용기한</th>
                    <th className="px-5 py-4 font-black">조건</th>
                    <th className="px-5 py-4 font-black">확인</th>
                  </tr>
                </thead>
                <tbody>
                  {birthdayFreebies.map((item) => (
                    <tr key={item.brand} className="border-t border-slate-100 align-top">
                      <td className="px-5 py-4">
                        <p className="font-black text-slate-950">{item.brand}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{item.category}</p>
                      </td>
                      <td className="px-5 py-4 text-slate-700">{item.benefit}</td>
                      <td className="px-5 py-4 text-slate-700">{item.app}</td>
                      <td className="px-5 py-4 text-slate-700">{item.joinTiming}</td>
                      <td className="px-5 py-4 text-slate-700">{item.validity}</td>
                      <td className="px-5 py-4 text-slate-700">{item.condition}</td>
                      <td className="px-5 py-4">
                        <Link
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 font-bold text-sky-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-900"
                        >
                          공식 정보 <ExternalLink size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-5 lg:hidden">
            {birthdayFreebies.map((item, index) => (
              <article key={item.brand} className={`surface-panel rounded-[2rem] p-6 ${index % 2 === 1 ? "md:translate-y-6" : ""}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="rounded-full bg-[#f6f8f5] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 ring-1 ring-slate-200/80">{item.category}</p>
                  <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.status}</p>
                </div>
                <h3 className="mt-3 text-2xl font-black text-slate-950">{item.brand}</h3>
                <p className="mt-3 text-base font-semibold text-slate-700">{item.benefit}</p>
                <div className="mt-4 space-y-2 rounded-[1.5rem] bg-[#f6f8f5] p-4 text-sm leading-7 text-slate-700 ring-1 ring-slate-200/80">
                  <p><span className="font-bold text-slate-950">앱</span> {item.app}</p>
                  <p><span className="font-bold text-slate-950">가입 시점</span> {item.joinTiming}</p>
                  <p><span className="font-bold text-slate-950">사용 기한</span> {item.validity}</p>
                  <p><span className="font-bold text-slate-950">조건</span> {item.condition}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.note}</p>
                <Link
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                >
                  공식 정보 보기 <ExternalLink size={15} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="surface-panel rounded-[1.8rem] p-5 text-sm leading-7 text-slate-700">
            생일 2주 전쯤 필요한 앱을 먼저 설치하고, 생일 정보와 이메일 수신 설정을 끝내기
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5 text-sm leading-7 text-slate-700 md:translate-y-6">
            생일 당일 아침 앱 알림과 이메일을 같이 확인해서 놓치는 쿠폰이 없는지 보기
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5 text-sm leading-7 text-slate-700">
            혜택이 바뀌기 쉬우니 방문 직전에는 꼭 공식 앱이나 링크에서 다시 확인하기
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
