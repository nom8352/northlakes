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
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
        <div className="surface-panel motion-rise mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.7rem] px-4 py-3.5 md:rounded-[2rem] md:px-8 md:py-4 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <Link href="/" className="text-lg font-black tracking-tight text-slate-950 md:text-2xl">
                노스레이크 브리즈 (North Lakes Breeze)
              </Link>
              <p className="mt-1 text-sm leading-6 text-slate-500">
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
                    className={`rounded-full px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out active:scale-[0.98] md:px-4 ${
                      active
                        ? "bg-[linear-gradient(135deg,#355d93_0%,#173053_100%)] text-white shadow-[0_16px_40px_rgba(24,44,74,0.18)]"
                        : "bg-white/85 text-slate-700 ring-1 ring-white/70 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
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

      <footer className="mt-20 px-3 pb-4 md:mt-24 md:px-6 md:pb-6">
        <div className="surface-deep motion-rise motion-delay-1 mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] px-5 py-10 text-white md:grid-cols-2 md:rounded-[2.4rem] md:px-8 md:py-12 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-200">North Lakes Breeze</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">노스레이크 브리즈</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-sky-50/84">
              노스레이크와 브리즈번 북부 한인들을 위한 실용적인 생활 정보 모음입니다. 자녀 레슨,
              교민 업소록, 카불쳐 시즌, 주말 나들이 정보를 한곳에서 보기 쉽게 정리하고 있습니다.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-sky-50/78 md:content-center md:justify-end">
            <p>North Lakes, Mango Hill, Moreton Bay 중심</p>
            <p>운영 구조: 서브페이지 + 카드형 데이터 허브</p>
            <p>© 2026 North Lakes Breeze</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
