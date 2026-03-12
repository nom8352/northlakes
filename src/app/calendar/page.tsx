"use client";

import { Calendar, ChevronRight, Sprout, ShoppingCart, UserCheck, ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";

export default function CalendarPage() {
  const months = [
    { month: "3월", activity: "Planting (모종 심기)", status: "시즌 준비", color: "bg-emerald-100 text-emerald-700" },
    { month: "4월", activity: "Planting (모종 심기)", status: "시즌 준비", color: "bg-emerald-100 text-emerald-700" },
    { month: "5월", activity: "First Harvest (첫 수확 시작)", status: "시즌 시작", color: "bg-red-50 text-red-600" },
    { month: "6월", activity: "Harvesting (수확)", status: "성수기 진입", color: "bg-red-100 text-red-700" },
    { month: "7월", activity: "Peak Season (최성수기)", status: "최성수기", color: "bg-red-600 text-white font-bold" },
    { month: "8월", activity: "Peak Season & PYO Start", status: "최성수기/체험시작", color: "bg-red-600 text-white font-bold" },
    { month: "9월", activity: "Harvesting & PYO (체험)", status: "체험 시즌", color: "bg-red-400 text-white" },
    { month: "10월", activity: "Season End / PYO", status: "시즌 종료", color: "bg-orange-100 text-orange-700" },
  ];

  const currentMonth = new Date().getMonth() + 1; // 1-12

  return (
    <div className="min-h-screen bg-emerald-50/30 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100 py-8 px-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-emerald-700 font-bold hover:text-red-500 transition-colors">
            <ArrowLeft size={20} /> 메인으로
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
            <span className="text-red-600">🍓</span> 호주 농장 <span className="text-emerald-600">시즌 캘린더</span>
          </h1>
          <div className="w-24 hidden md:block"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Intro */}
        <section className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
              <Sprout className="text-emerald-600" /> 카불쳐 딸기 농장 사이클
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              브리즈번 북부 <span className="text-red-600 font-bold underline decoration-red-200">카불쳐(Caboolture)</span> 지역은 세계적인 딸기 생산지 중 하나입니다. 
              3월 모종 심기를 시작으로 10월까지 이어지는 긴 시즌 동안 수많은 일자리와 체험 기회가 제공됩니다.
            </p>
          </div>
        </section>

        {/* Timeline Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {months.map((item, idx) => {
            const isCurrent = currentMonth === (idx + 3); // 3월부터 시작하므로
            return (
              <div key={item.month} className={`p-6 rounded-3xl border transition-all duration-300 ${isCurrent ? 'bg-white border-red-500 shadow-2xl scale-105 z-10' : 'bg-white/70 border-emerald-100'}`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-2xl font-black ${isCurrent ? 'text-red-600' : 'text-slate-400'}`}>{item.month}</span>
                  <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.activity}</h3>
                {isCurrent && (
                  <div className="mt-4 p-3 bg-red-50 rounded-2xl flex items-center gap-2 text-red-700 text-sm font-bold animate-pulse">
                    <UserCheck size={16} /> 지금 현재 시즌입니다!
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-red-600 text-white p-8 rounded-3xl shadow-xl lg:col-span-2">
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
              <ShoppingCart size={24} /> 7-8월: 피크 시즌 (최성수기)
            </h3>
            <p className="opacity-90 leading-relaxed font-medium">
              카불쳐 딸기가 가장 많이 쏟아지는 시기입니다. 하이 시즌인 만큼 농장에는 가장 많은 인력이 필요하며, 
              교민 여러분들이 일자리를 구하거나 농장 체험(PYO)을 즐기기에 가장 좋은 골든 타임입니다.
            </p>
          </div>
          <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
              <Calendar size={20} /> 8-10월: PYO 시즌
            </h3>
            <p className="opacity-90 leading-relaxed text-sm font-medium">
              Pick Your Own (PYO) 시즌! 가족, 연인과 함께 직접 딸기를 수확해 볼 수 있는 체험형 관광의 최성수기입니다.
            </p>
          </div>
        </section>

        {/* Bottom Link */}
        <section className="text-center pt-8">
          <Link href="/#farm-list" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black hover:bg-emerald-700 transition-all shadow-2xl">
            <Sprout size={24} /> 카불쳐 딸기 농장 전체 리스트 보기 <ChevronRight size={20} />
          </Link>
        </section>
      </main>

      <footer className="bg-slate-900 text-white/50 py-12 px-6 text-center text-sm">
        <p>© 2026 Queensland North Korean Community - Farm Season Info</p>
      </footer>
    </div>
  );
}
