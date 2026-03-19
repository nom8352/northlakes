"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNav } from "@/lib/community-data";

export function PublicLayout({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ed_24%,#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-orange-100/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="text-xl font-black tracking-tight text-slate-950">
                North Lakes Korean Guide
              </Link>
              <p className="text-sm text-slate-500">
                {eyebrow ?? "노스레이크 한인 가족과 워홀러를 위한 지역 생활 허브"}
              </p>
            </div>
            <nav className="flex flex-wrap gap-2">
              {publicNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-slate-950 text-white shadow-lg"
                        : "bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:-translate-y-0.5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-20 border-t border-orange-100 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-700">
              Community Guide
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              노스레이크 한인 생활 가이드
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              자녀 레슨, 교민 업소록, 카불쳐 시즌, 주말 나들이 정보를 축적해 가는 지역형
              사이트입니다. 자녀 레슨 섹션은 2026년 3월 기준 공식 사이트를 우선 확인해
              반영했습니다.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600 md:content-center md:justify-end">
            <p>North Lakes, Mango Hill, Moreton Bay 중심</p>
            <p>운영 구조: 서브페이지 + 카드형 데이터 허브</p>
            <p>© 2026 North Lakes Korean Guide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
