import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';
import fintechCryptoScreen from '../assets/images/fintech_crypto_screen_1790138033018.jpg';
import onboardingBeforeScreen from '../assets/images/fintech_onboarding_before_1790138045696.jpg';
import onboardingAfterScreen from '../assets/images/fintech_onboarding_after_1790138058707.jpg';

interface AddCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCaseStudy: (caseStudy: CaseStudy) => void;
}

export const AddCaseStudyModal: React.FC<AddCaseStudyModalProps> = ({
  isOpen,
  onClose,
  onAddCaseStudy,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('Fintech');
  const [role, setRole] = useState('Lead UX Designer');
  const [overview, setOverview] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [metricLabel, setMetricLabel] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newStudy: CaseStudy = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      subtitle: subtitle.trim() || 'A mobile product for a specific user need.',
      category: category.trim() || 'Product Design',
      heroImage: fintechCryptoScreen,
      overview:
        overview.trim() ||
        'Describe the user problem, the design work, and the result.',
      role: role.trim() || 'Lead Product Designer',
      team: '1 Lead Designer, 2 Engineers, 1 PM',
      timeline: '12 weeks',
      beforeScreen: onboardingBeforeScreen,
      afterScreen: onboardingAfterScreen,
      beforeLabel: 'Before',
      afterLabel: 'After',
      interviewsText: 'Summarize who took part in research and what you learned.',
      interviewBullets: [
        'What task did participants need to complete?',
        'Where did they have questions or get stuck?',
        'What changed after reviewing their feedback?',
      ],
      keyInsights: [
        {
          title: 'Research finding',
          desc: 'Add a finding from the research.',
        },
        {
          title: 'User need',
          desc: 'Summarize what users needed to do.',
        },
        {
          title: 'Design question',
          desc: 'Describe what users needed to understand before continuing.',
        },
      ],
      designText: 'Describe the design choices and how they address the user problem.',
      designBullets: [
        'Describe a layout or hierarchy decision.',
        'Describe an interaction or content decision.',
        'Describe an accessibility consideration.',
      ],
      designScreens: [
        {
          title: '01. Dashboard Overview',
          image: fintechCryptoScreen,
          note: 'Add a brief description of this screen.',
        },
      ],
      usabilityText: 'Describe how you evaluated the design and what you learned.',
      problem1: {
        title: 'Before',
        desc: 'Describe the issue people faced.',
        screen: onboardingBeforeScreen,
      },
      solution1: {
        title: 'After',
        desc: 'Describe how the design addresses the issue.',
        screen: onboardingAfterScreen,
      },
      impactText: 'Describe the result and include metrics only when they were measured.',
      metrics: metricValue.trim() && metricLabel.trim()
        ? [{ value: metricValue.trim(), label: metricLabel.trim() }]
        : [],
      learnings: [],
      nextSteps: [],
      finalScreens: [
        { title: 'Screen 1', image: onboardingAfterScreen },
        { title: 'Screen 2', image: fintechCryptoScreen },
      ],
    };

    onAddCaseStudy(newStudy);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2b35ee] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Case Study Builder</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Add a new case study
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Showcase 3-5 of your strongest projects with structured UX research, metrics, and before/after comparisons.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Case Study Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Vault • Automated Micro-Investing for Gen-Z"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Category / Tag
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Fintech"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Role
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Lead UX Designer"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Subtitle / Hook
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="A subtitle that captures the essence of the project"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Primary Metric Value
              </label>
              <input
                type="text"
                value={metricValue}
                onChange={(e) => setMetricValue(e.target.value)}
                placeholder="+25%"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Metric Label
              </label>
              <input
                type="text"
                value={metricLabel}
                onChange={(e) => setMetricLabel(e.target.value)}
                placeholder="important product metric"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Brief Overview
            </label>
            <textarea
              rows={2}
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              placeholder="Context of the project, client/team goals, and your core contributions..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0a0a0a] hover:bg-black text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
          >
            <Plus className="w-4 h-4" />
            <span>Create Case Study</span>
          </button>
        </form>
      </div>
    </div>
  );
};
