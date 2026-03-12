"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { newsService, listingService } from "@/lib/services";
import { Newspaper, PlusCircle, ListTodo, CheckCircle2, AlertCircle, Users } from "lucide-react";

export default function AdminPage() {
  // 뉴스 상태
  const [newsTitle, setNewsTitle] = useState("");
  const [newsUrl, setNewsUrl] = useState("");
  const [newsSummary, setNewsSummary] = useState("");
  
  // 게시물 상태
  const [listCategory, setListCategory] = useState("jobs");
  const [listTitle, setListTitle] = useState("");
  const [listContent, setListContent] = useState("");
  const [listPrice, setListPrice] = useState("");
  
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      await newsService.addNews({ title: newsTitle, url: newsUrl, summary: newsSummary, published_at: new Date().toISOString() });
      setStatus({ type: 'success', message: "뉴스가 성공적으로 등록되었습니다." });
      setNewsTitle(""); setNewsUrl(""); setNewsSummary("");
    } catch (error: any) {
      setStatus({ type: 'error', message: `오류 발생: ${error.message}` });
    } finally { setIsSubmitting(false); }
  };

  const handleAddListing = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      await listingService.createListing({ category: listCategory, title: listTitle, content: listContent, price: listPrice });
      setStatus({ type: 'success', message: "게시물이 성공적으로 등록되었습니다." });
      setListTitle(""); setListContent(""); setListPrice("");
    } catch (error: any) {
      setStatus({ type: 'error', message: `오류 발생: ${error.message}` });
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex items-center justify-between border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Admin Dashboard</h1>
            <p className="text-slate-500 font-medium">Queensland North Community Content Management</p>
          </div>
          <div className="hidden md:block bg-brand-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-brand-primary/20">
            System Administrator
          </div>
        </header>

        {status.type && (
          <div className={`mb-8 p-5 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-300 ${status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
            {status.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            <span className="font-bold">{status.message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* News Section */}
          <section className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 text-brand-primary">
              <div className="bg-brand-primary/10 p-3 rounded-2xl">
                <Newspaper size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-800">News Add</h2>
            </div>
            <form onSubmit={handleAddNews} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">제목</label>
                <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">원문 URL</label>
                <input type="url" value={newsUrl} onChange={(e) => setNewsUrl(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">요약</label>
                <textarea rows={4} value={newsSummary} onChange={(e) => setNewsSummary(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-primary text-white rounded-2xl font-black hover:bg-brand-900 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-primary/30">
                뉴스로 발행 전송
              </button>
            </form>
          </section>

          {/* Listings Section */}
          <section className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 text-emerald-600">
              <div className="bg-emerald-100 p-3 rounded-2xl">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-800">Community List Add</h2>
            </div>
            <form onSubmit={handleAddListing} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">카테고리</label>
                <select value={listCategory} onChange={(e) => setListCategory(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none">
                  <option value="jobs">구인구직 (Jobs)</option>
                  <option value="accommodation">방 쉐어 (Accomm)</option>
                  <option value="business_sell">비즈니스 매매</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">가격/조건</label>
                <input type="text" value={listPrice} onChange={(e) => setListPrice(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none" placeholder="예: $150/주, 협의 등" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-600 px-1">게시글 제목</label>
                <input type="text" value={listTitle} onChange={(e) => setListTitle(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-600 px-1">내용 설명</label>
                <textarea rows={6} value={listContent} onChange={(e) => setListContent(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none resize-none" required />
              </div>
              <div className="md:col-span-2 pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-700 hover:scale-[1.01] transition-all shadow-lg shadow-emerald-600/30">
                  게시판에 즉시 등록
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
