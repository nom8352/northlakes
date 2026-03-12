"use client";

export const dynamic = 'force-dynamic';

import { Newspaper, Building2, Users, Briefcase, Home as HomeIcon, ShoppingBag, Loader2, ArrowRight, Sprout } from "lucide-react";
import { newsService, listingService, businessService } from "@/lib/services";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [news, setNews] = useState<any[]>([]);
  const [accommodation, setAccommodation] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [businessSell, setBusinessSell] = useState<any[]>([]);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [newsData, accData, jobsData, sellData, bizData] = await Promise.all([
          newsService.getTop10(),
          listingService.getByCategory('accommodation'),
          listingService.getByCategory('jobs'),
          listingService.getByCategory('business_sell'),
          businessService.getAll()
        ]);
        
        // 뉴스 데이터 설정 (없으면 모크 사용)
        setNews(newsData.length > 0 ? newsData : [
          { id: 'm1', title: "호주 금리 동결 유지, 부동산 시장 영향은?", summary: "보수적인 금융 정책 기조가 이어지며 향후 부동산 전망에 대한 전문가 분석..." },
          { id: 'm2', title: "퀸즐랜드 북부 지역 새로운 개발 계획 발표", summary: "선샤인 코스트와 노스레이크를 잇는 교통 인프라 확충 및 상업 지구 조성..." },
          { id: 'm3', title: "2024년 변경되는 호주 비자 규정 정리", summary: "학생 비자 및 취업 비자 신청 조건 강화에 따른 교민 및 유학생 주의사항..." },
        ]);

        // 게시판 데이터 설정
        setAccommodation(accData.length > 0 ? accData : [{ id: 'a1', title: '노스레이크 깨끗한 독방 쉐어', price: '$250/주', contact: '0412 xxx xxx' }]);
        setJobs(jobsData.length > 0 ? jobsData : [{ id: 'j1', title: '선샤인 코스트 카페 올라운더 구합니다', price: '법정시급', contact: 'test@example.com' }]);
        setBusinessSell(sellData.length > 0 ? sellData : [{ id: 's1', title: '브리즈번 북부 스시 테이크아웃 매매', price: '협의', contact: '0433 xxx xxx' }]);
        
        // 업소록 데이터 (기존 수집 데이터 + 신규 농장 20곳 추가)
        const combinedBusinesses = [
          { id: 'b1', name: 'bapboi Korean BBQ', category: '식당', location: 'North Lakes', phone: '0468 926 807' },
          { id: 'b2', name: 'BULGOGI', category: '식당', location: 'North Lakes', phone: '0493 987 110' },
          { id: 'b3', name: 'CUPBOP', category: '식당', location: 'Kallangur', phone: '0432 021 688' },
          { id: 'b4', name: 'Hanaromart North Lakes', category: '비즈니스', location: 'North Lakes', phone: '07 3491 8064' },
          { id: 'b5', name: 'Chicken in Seoul', category: '식당', location: 'North Lakes', phone: '0413 543 516' },
          { id: 'b6', name: 'South Seoul', category: '식당', location: 'Murrumba Downs', phone: '0411 114 964' },
          { id: 'b7', name: '노스레이크 순복음 교회', category: '교회', location: 'North Lakes', phone: '0433 246 191' },
          { id: 'b8', name: 'Haru Korean Kitchen', category: '식당', location: 'Noosa Heads', phone: '(07) 5447 2249' },
          { id: 'b9', name: 'JANGO Korean BBQ', category: '식당', location: 'Buddina', phone: '0481 862 780' },
          { id: 'b10', name: 'Momo Chicken', category: '식당', location: 'Maroochydore', phone: '(07) 5443 4133' },
          { id: 'b11', name: 'Meekak Bar & BBQ', category: '식당', location: 'Maroochydore', phone: '0491 714 170' },
          { id: 'b12', name: '선샤인코스트 성결교회', category: '교회', location: 'Bokarina', phone: '0410 228 572' },
          // 신규 농장 리스트 추가
          { id: 'f1', name: 'Oasis Berries', category: 'Farm', location: 'Caboolture', phone: '0421 166 324' },
          { id: 'f2', name: 'Queensland Berries', category: 'Farm', location: 'Caboolture', phone: '0488 217 804' },
          { id: 'f3', name: 'Rolin Farms', category: 'Farm', location: 'Elimbah', phone: '0422 536 292' },
          { id: 'f4', name: 'Stothart Family Farms', category: 'Farm', location: 'Bellmere', phone: '0438 593 607' },
          { id: 'f5', name: 'Schiffke Pty Ltd', category: 'Farm', location: 'Bellmere', phone: '(07) 5495 8274' },
          { id: 'f6', name: 'Pinata Farms', category: 'Farm', location: 'Wamuran', phone: '(07) 5497 4295' },
          { id: 'f7', name: 'Sunray Strawberries', category: 'Farm', location: 'Wamuran', phone: '(07) 5496 7364' },
          { id: 'f8', name: 'LuvaBerry Farm', category: 'Farm', location: 'Wamuran', phone: '0417 741 692' },
          { id: 'f9', name: 'Hermes Strawberries', category: 'Farm', location: 'Wamuran', phone: '0422 333 071' },
          { id: 'f10', name: 'Diamond Berries', category: 'Farm', location: 'Caboolture', phone: '0434 499 805' },
          { id: 'f11', name: 'Perfection Berries', category: 'Farm', location: 'Caboolture', phone: '(07) 5495 1888' },
          { id: 'f12', name: 'TSL Family Farms', category: 'Farm', location: 'Beerwah', phone: '0407 151 768' },
          { id: 'f13', name: 'Hammond Farm', category: 'Farm', location: 'Elimbah', phone: '(07) 5496 7183' },
          { id: 'f14', name: 'Inchcolm Farms', category: 'Farm', location: 'Wamuran', phone: '(07) 5496 6444' },
          { id: 'f15', name: 'Berrylicious Strawberries', category: 'Farm', location: 'Nambour', phone: '0412 155 058' },
          { id: 'f16', name: 'McMartin\'s Farm', category: 'Farm', location: 'Bli Bli', phone: '(07) 5448 4912' },
          { id: 'f17', name: 'Cooloola Berries', category: 'Farm', location: 'Wolvi', phone: '(07) 5486 7512' },
          { id: 'f18', name: 'Strawberry Fields', category: 'Farm', location: 'Glass House Mountains', phone: '(07) 5496 9255' },
          { id: 'f19', name: 'Gowinta Farms', category: 'Farm', location: 'Beerburrum', phone: '(07) 5496 0055' },
          { id: 'f20', name: 'Best Berries', category: 'Farm', location: 'Bellmere', phone: '0401 222 333' }
        ];

        setBusinesses(bizData.length > 0 ? bizData : combinedBusinesses);

      } catch (error) {
        console.error("Data fetching error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="premium-gradient py-16 px-6 text-white text-center shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            QLD <span className="text-accent-gold">NORTH</span> KOREAN
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
            노스레이크 & 선샤인 코스트 교민을 위한 스마트 정보 플랫폼
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Farm Season Widget */}
        <section className="bg-gradient-to-r from-red-500 to-emerald-600 p-1 rounded-[2.5rem] shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
          <div className="bg-white rounded-[2.4rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-red-100 p-5 rounded-3xl text-red-600 animate-bounce-subtle">
                <span className="text-4xl">🍓</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
                  지금은 <span className="text-red-600">3월</span>, <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">모종 심기</span> 시즌!
                </h3>
                <p className="text-slate-500 font-bold flex items-center gap-2">
                  <Sprout size={18} className="text-emerald-500" /> 카불쳐 딸기 농장이 바빠지는 준비 기간입니다.
                </p>
              </div>
            </div>
            <Link href="/calendar" className="w-full md:w-auto px-8 py-4 bg-red-600 text-white rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-2 group">
              전체 시즌 캘린더 보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
        
        {/* News TOP 10 Section */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary p-2 rounded-lg text-white">
                <Newspaper size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                Today's <span className="text-brand-primary underline decoration-accent-gold underline-offset-4 font-black">NEWS TOP 10</span>
              </h2>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand-primary w-12 h-12" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {news.map((item, idx) => (
                <div key={item.id} className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="flex gap-5 items-start">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-brand-primary/10 transition-colors leading-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {item.summary || item.content}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-brand-primary" size={20} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Community Grid Section */}
        <section className="space-y-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Users size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 italic">Community Boards</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Accommodation (방 쉐어) */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-blue-600 px-6 py-4 text-white flex justify-between items-center">
                <h3 className="font-black flex items-center gap-2">
                  <HomeIcon size={18} /> 방 쉐어
                </h3>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Accommodation</span>
              </div>
              <div className="divide-y divide-slate-50">
                {accommodation.slice(0, 5).map(post => (
                  <div key={post.id} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <h4 className="font-bold text-slate-800 line-clamp-1 mb-1 group-hover:text-blue-600">{post.title}</h4>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-blue-600 font-bold">{post.price}</span>
                      <span className="text-slate-400">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-50/50">
                방 쉐어 전체보기
              </button>
            </div>

            {/* Jobs (구인구직) */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-emerald-600 px-6 py-4 text-white flex justify-between items-center">
                <h3 className="font-black flex items-center gap-2">
                  <Briefcase size={18} /> 구인구직
                </h3>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Jobs</span>
              </div>
              <div className="divide-y divide-slate-50">
                {jobs.slice(0, 5).map(post => (
                  <div key={post.id} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <h4 className="font-bold text-slate-800 line-clamp-1 mb-1 group-hover:text-emerald-600">{post.title}</h4>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-emerald-600 font-bold">{post.price}</span>
                      <span className="text-slate-400">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors bg-slate-50/50">
                구인구직 전체보기
              </button>
            </div>

            {/* Business Sell (비즈니스 매매) */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-purple-600 px-6 py-4 text-white flex justify-between items-center">
                <h3 className="font-black flex items-center gap-2">
                  <ShoppingBag size={18} /> 비즈니스 매매
                </h3>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Business</span>
              </div>
              <div className="divide-y divide-slate-50">
                {businessSell.slice(0, 5).map(post => (
                  <div key={post.id} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <h4 className="font-bold text-slate-800 line-clamp-1 mb-1 group-hover:text-purple-600">{post.title}</h4>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-purple-600 font-bold">{post.price}</span>
                      <span className="text-slate-400">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors bg-slate-50/50">
                비즈니스 매매 전체보기
              </button>
            </div>
          </div>
        </section>

        {/* Business Directory Section */}
        <section id="business-directory" className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-900 p-2 rounded-lg text-white">
                <Building2 size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800">
                Business <span className="text-brand-900 border-b-4 border-accent-gold pb-1">DIRECTORY</span>
              </h2>
            </div>
            <button className="text-sm font-bold text-slate-500 flex items-center gap-1 hover:text-brand-900 transition-colors">
              업소록 전체보기 <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.slice(0, 8).map(biz => (
              <div key={biz.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs font-black text-brand-primary mb-2 uppercase tracking-tight">{biz.category}</div>
                <h4 className="text-lg font-black text-slate-900 mb-3">{biz.name}</h4>
                <div className="space-y-2 text-sm text-slate-500 font-medium">
                  <p className="flex items-center gap-2">📍 {biz.location}</p>
                  <p className="flex items-center gap-2">📞 {biz.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black mb-6">QLD NORTH KOREAN</h2>
            <p className="opacity-50 text-sm max-w-sm leading-relaxed">
              퀸즐랜드 북부 지역 교민들의 소통과 정보 공유를 위한 플랫폼입니다. 
              오늘의 실시간 뉴스와 다양한 커뮤니티 소식을 만나보세요.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center text-sm opacity-50 space-y-2">
            <p>© 2026 Queensland North Korean Community.</p>
            <p>Designed for Sunshine Coast & Northlakes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
