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
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbfdff_0%,#f2f7ff_28%,#f8fbff_100%)] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-sky-100/80 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="text-xl font-black tracking-tight text-slate-950">
                노스레이크 브리즈 (North Lakes Breeze)
              </Link>
              <p className="text-sm text-slate-500">
                {eyebrow ?? "노스레이크와 브리즈번 북부 한인들을 위한 실용적인 생활 정보 모음"}
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
                        ? "bg-[linear-gradient(135deg,#2f5fb7_0%,#1a3563_100%)] text-white shadow-lg"
                        : "bg-white text-slate-700 shadow-sm ring-1 ring-sky-100 hover:-translate-y-0.5 hover:ring-sky-200"
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

      <footer className="mt-20 border-t border-sky-100 bg-white/86">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-700">
              North Lakes Breeze
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              노스레이크 브리즈
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              노스레이크와 브리즈번 북부 한인들을 위한 실용적인 생활 정보 모음입니다.
              자녀 레슨, 교민 업소록, 카불쳐 시즌, 주말 나들이 정보를 한곳에서 보기 쉽게
              정리하고 있습니다.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600 md:content-center md:justify-end">
            <p>North Lakes, Mango Hill, Moreton Bay 중심</p>
            <p>운영 구조: 서브페이지 + 카드형 데이터 허브</p>
            <p>© 2026 North Lakes Breeze</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
