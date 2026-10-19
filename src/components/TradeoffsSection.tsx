import React from 'react';

export interface TradeoffItem {
  title: string;
  decision: string;
  constraint: string;
}

interface TradeoffsSectionProps {
  title: string;
  intro: string;
  items: TradeoffItem[];
}

export const TradeoffsSection: React.FC<TradeoffsSectionProps> = ({ title, intro, items }) => (
  <section className="border-y border-slate-200 bg-white py-16 md:py-24">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
      <div className="roushani-summary-sticky">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Trade-offs &amp; pushback</p>
        <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">{title}</h2>
      </div>
      <div>
        <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">{intro}</p>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item, index) => (
            <article key={item.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
              <span className="text-xs font-medium text-slate-400">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-slate-900 md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{item.decision}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 md:text-sm"><span className="font-semibold text-slate-600">Constraint:</span> {item.constraint}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
