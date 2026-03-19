import Link from "next/link";
import { Clock3, ExternalLink, MapPinned, Phone } from "lucide-react";
import type { ActivityProvider } from "@/lib/community-data";

export function ProviderCard({ provider }: { provider: ActivityProvider }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
      <div
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${provider.image})` }}
      />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-700">
          <span>{provider.category}</span>
          <span className="h-1 w-1 rounded-full bg-orange-400" />
          <span>{provider.suburb}</span>
        </div>
        <h3 className="mt-3 text-2xl font-black text-slate-950">{provider.name}</h3>
        <p className="mt-2 text-sm font-semibold text-slate-500">{provider.ageRange}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{provider.summary}</p>
        <div className="mt-5 space-y-3 rounded-[1.5rem] bg-slate-50 p-4 text-sm text-slate-600">
          <p className="flex items-start gap-2">
            <MapPinned size={16} className="mt-0.5 text-orange-600" />
            <span>{provider.address}</span>
          </p>
          <p className="flex items-start gap-2">
            <Phone size={16} className="mt-0.5 text-orange-600" />
            <span>{provider.phone}</span>
          </p>
          <p className="flex items-start gap-2">
            <Clock3 size={16} className="mt-0.5 text-orange-600" />
            <span>{provider.hours}</span>
          </p>
          <p>
            <span className="font-bold text-slate-900">가격대</span> {provider.pricing}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {[...provider.badges, ...provider.highlights].map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">프로그램</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{provider.programs.join(", ")}</p>
          <p className="mt-3 text-xs text-slate-400">마지막 확인 {provider.lastVerified}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={provider.website}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            공식 사이트 <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
