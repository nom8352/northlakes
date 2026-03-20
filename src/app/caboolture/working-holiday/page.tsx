import Link from "next/link";
import { ArrowRight, BadgeDollarSign, BriefcaseBusiness, CheckCircle2, ExternalLink, FileText, ShieldAlert, Tractor } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PublicLayout } from "@/components/public-layout";

const contactSteps = [
  "농장 공식 채용 페이지나 공식 문의 이메일이 있으면 그 채널을 우선 사용하기",
  "짧은 영어 자기소개와 함께 비자 종류, 시작 가능일, 차량 유무, 근무 가능 기간을 한 번에 보내기",
  "폼 제출 후 이메일이나 문자로 한 번 더 follow-up 하기",
  "출근 주소, 급여 방식, payslip 제공 여부를 시작 전에 꼭 확인하기",
];

const messageTemplate = `Hello, my name is ___.\nI am on a Working Holiday visa and available to start from ___.\nI can work until ___.\nI have / don't have farm experience.\nI have / don't have a car.\nI am available for planting, picking and packing work.\nCould you please let me know if you are hiring now?`;

const preparationChecklist = [
  "유효한 비자와 work rights 확인",
  "TFN 신청 완료 또는 신청 진행",
  "호주 은행계좌와 호주 번호 준비",
  "간단한 영문 이력서 1장 준비",
  "새벽 출근 가능한 숙소/교통 동선 확보",
  "긴팔, 모자, 장갑, 방수 신발, 물통 같은 야외 장비 준비",
  "하루 근무시간과 지급액을 직접 기록할 앱이나 메모 습관 만들기",
];

const payFacts = [
  {
    title: "최저 시급 기준",
    detail:
      "Fair Work 원예 기준상 성인 casual level 1의 최저시급은 2025년 7월 1일부터 A$30.35/h입니다.",
    href: "https://horticulture.fairwork.gov.au/pay-and-piece-rates",
  },
  {
    title: "피스레이트 기준",
    detail:
      "피스레이트는 숙련된 casual 기준으로 평균 생산성일 때 최소 A$34.90/h 이상 벌 수 있도록 설정되어야 합니다.",
    href: "https://horticulture.fairwork.gov.au/pay-and-piece-rates",
  },
  {
    title: "서류와 기록",
    detail:
      "피스레이트는 시작 전에 piecework record가 있어야 하고, payslip은 매번 받아야 합니다.",
    href: "https://horticulture.fairwork.gov.au/piecework-records",
  },
];

const channels = [
  {
    title: "농장 공식 채용 페이지",
    detail: "Hermes, Stothart처럼 공식 채용 폼이나 공고 블로그를 운영하는 농장은 가장 신뢰도가 높습니다.",
    href: "/caboolture",
    label: "카불쳐 농장 리스트 보기",
  },
  {
    title: "Workforce Australia",
    detail: "정부 연계 구직 포털로 농업·수확 일자리 검색 출발점으로 적합합니다.",
    href: "https://www.workforceaustralia.gov.au/individuals/jobs/search",
    label: "공식 구직 포털",
  },
  {
    title: "Backpacker Job Board",
    detail: "워홀러가 많이 쓰는 민간 잡보드로 시즌 채용 공고를 빠르게 훑기 좋습니다.",
    href: "https://www.backpackerjobboard.com.au/",
    label: "잡보드 열기",
  },
];

const redFlags = [
  "현금만 준다고 하거나 payslip을 주지 않는 경우",
  "계약 전 TFN, 여권, 은행정보만 과하게 요구하는 경우",
  "piece rate 설명이 없거나 서명 없는 기록으로 시작하려는 경우",
  "숙소비, 픽업비, 장비비 공제를 애매하게 말하는 경우",
  "실제 농장 주소와 고용주 이름을 끝까지 알려주지 않는 경우",
];

const officialLinks = [
  {
    title: "Home Affairs - Agriculture visa options",
    href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/regional-migration/working-in-agriculture/visa-options",
  },
  {
    title: "Home Affairs - 6 month work limitation",
    href: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/waivers-and-permissions/work-longer-than-6-months",
  },
  {
    title: "Home Affairs - Specified work 417",
    href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
  },
  {
    title: "Home Affairs - Specified work 462",
    href: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions/specified-work-462",
  },
  {
    title: "Fair Work - Pay and piece rates",
    href: "https://horticulture.fairwork.gov.au/pay-and-piece-rates",
  },
  {
    title: "ATO - TFN for temporary visitors",
    href: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application",
  },
  {
    title: "Fair Work - Record My Hours",
    href: "https://www.fairwork.gov.au/tools-and-resources/record-my-hours-app",
  },
];

export default function CabooltureWorkingHolidayPage() {
  return (
    <PublicLayout eyebrow="카불쳐 워킹홀리데이 가이드">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-8 lg:px-10">
        <PageHero
          kicker="Caboolture Working Holiday"
          title="카불쳐 워홀 농장 준비 가이드"
          description="딸기농장 컨택 방법, 준비사항, 급여 구조, 공식 확인 링크까지 한 번에 보는 워킹홀리데이용 실전 페이지입니다."
          image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="surface-panel rounded-[2.4rem] p-7 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">How to Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">농장에 어떻게 연락하나요</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {contactSteps.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-sky-600" size={18} />
                  <p>{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] bg-[#102138] p-5 text-sm text-slate-100 shadow-[0_18px_50px_rgba(24,44,74,0.18)]">
              <p className="font-bold text-white">영문 문의 템플릿</p>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-[13px] leading-6 text-slate-200">
                {messageTemplate}
              </pre>
            </div>
          </article>

          <article className="surface-deep rounded-[2.4rem] p-7 text-white md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">Before You Start</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-5xl">출발 전 준비사항</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-sky-50/84">
              {preparationChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FileText className="mt-1 text-emerald-300" size={18} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sky-50 active:scale-[0.98]"
              >
                TFN 신청 안내 <ExternalLink size={15} />
              </Link>
              <Link
                href="https://www.fairwork.gov.au/tools-and-resources/record-my-hours-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/14 active:scale-[0.98]"
              >
                근무시간 기록 앱 <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <BadgeDollarSign className="text-sky-700" size={24} />
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">얼마 받을 수 있나요</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {payFacts.map((fact, index) => (
              <article key={fact.title} className={`surface-panel rounded-[2rem] p-6 ${index === 1 ? "md:translate-y-8" : ""}`}>
                <h3 className="text-xl font-black text-slate-950">{fact.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{fact.detail}</p>
                <Link
                  href={fact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition-all duration-300 ease-out hover:gap-3 hover:text-sky-900"
                >
                  공식 기준 보기 <ExternalLink size={15} />
                </Link>
              </article>
            ))}
          </div>
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950 shadow-[0_18px_50px_rgba(24,44,74,0.08)]">
            광고에서 보이는 높은 주급은 성수기 물량, 숙련도, 날씨, 피스레이트 구조에 따라 크게 달라집니다. 기본 판단은 항상 Fair Work 최저 기준과 payslip 지급 여부로 하시는 게 안전합니다.
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="surface-panel rounded-[2.4rem] p-7 md:p-8">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-sky-700" size={22} />
              <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">어디서 구하나요</h2>
            </div>
            <div className="mt-6 space-y-4">
              {channels.map((channel) => (
                <div key={channel.title} className="rounded-[1.5rem] bg-[#f6f8f5] p-5 ring-1 ring-slate-200/80">
                  <h3 className="text-lg font-black text-slate-950">{channel.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{channel.detail}</p>
                  <Link
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition-all duration-300 ease-out hover:gap-3 hover:text-sky-900"
                  >
                    {channel.label} <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.4rem] border border-rose-200 bg-rose-50 p-7 shadow-[0_18px_50px_rgba(24,44,74,0.08)] md:p-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-rose-700" size={22} />
              <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">이건 꼭 조심하세요</h2>
            </div>
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {redFlags.map((flag) => (
                <div key={flag} className="flex items-start gap-3">
                  <ShieldAlert className="mt-1 text-rose-600" size={16} />
                  <p>{flag}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-700">
              Home Affairs는 워홀 비자마다 지정근무와 고용 조건이 다를 수 있다고 안내하고 있고, Fair Work는 모든 근무시간에 대해 최소 급여와 payslip이 보장되어야 한다고 명시합니다. 비자 연장 목적이면 실제 job type과 location eligibility를 반드시 공식 페이지에서 다시 확인하세요.
            </p>
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Tractor className="text-emerald-700" size={24} />
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">공식 확인 링크</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {officialLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`surface-panel rounded-[1.8rem] p-5 text-sm font-semibold text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-sky-900 ${index % 3 === 1 ? "xl:translate-y-6" : ""}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{item.title}</span>
                  <ExternalLink size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
