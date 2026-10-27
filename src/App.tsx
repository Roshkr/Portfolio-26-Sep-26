import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { DesignSystemProjectPage } from './pages/DesignSystemProjectPage';
import { ProjectDetailTextMotion } from './components/ProjectDetailTextMotion';
import { DEFAULT_CASE_STUDIES } from './data/portfolioData';
import type { CaseStudy, CaseStudyTransition, SelectCaseStudy } from './types';
import { usePortfolioNavigation } from './hooks/usePortfolioNavigation';
import { usePageMetadata } from './hooks/usePageMetadata';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import { useContentProtection } from './hooks/useContentProtection';

export default function App() {
  useEffect(() => {
    document.getElementById('home-seo-fallback')?.remove();
    document.getElementById('seo-fallback')?.remove();
  }, []);

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() =>
    ['roushani', 'umbrella', 'design-system-icons', 'bridge2business', 'maxlence', 'naie']
      .map((id) => DEFAULT_CASE_STUDIES.find((study) => study.id === id))
      .filter((study): study is CaseStudy => Boolean(study)),
  );
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { route, navigateTo, selectCaseStudy } = usePortfolioNavigation(caseStudies);
  const [curtainPhase, setCurtainPhase] = useState<'closing' | 'covered' | 'opening' | null>(null);
  const [pendingNextStudy, setPendingNextStudy] = useState<CaseStudy | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const handleCaseStudySelect: SelectCaseStudy = useCallback((study: CaseStudy, transition?: CaseStudyTransition) => {
    if (transition === 'curtain') {
      if (curtainPhase) return;
      setPendingNextStudy(study);
      setCurtainPhase('closing');
      return;
    }

    selectCaseStudy(study);
  }, [curtainPhase, selectCaseStudy]);
  const handleCurtainAnimationComplete = () => {
    if (curtainPhase === 'closing') {
      setCurtainPhase('covered');
      if (pendingNextStudy) selectCaseStudy(pendingNextStudy);
    } else if (curtainPhase === 'opening') {
      setCurtainPhase(null);
      setPendingNextStudy(null);
    }
  };
  const currentStudyIndex = route.page === 'case-study'
    ? caseStudies.findIndex((study) => study.id === route.caseStudy.id)
    : -1;
  const nextStudy = currentStudyIndex >= 0 && caseStudies.length > 1
    ? caseStudies[(currentStudyIndex + 1) % caseStudies.length]
    : null;
  const pageKey = route.page === 'case-study' ? `case-study-${route.caseStudy.id}` : route.page;
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-MSFP7ZP4H7';
  const metadataTitle = route.page === 'case-study'
    ? `${route.caseStudy.title} | Roushan Kumar`
    : route.page === 'about'
      ? 'About | Roushan Kumar'
      : 'Roushan Kumar | UX/UI & Product Designer in Ahmedabad';
  const routePath = route.page === 'home'
    ? '/'
    : route.page === 'about'
      ? '/about'
      : `/case-studies/${route.caseStudy.id}`;

  usePageMetadata(route);
  useGoogleAnalytics(measurementId, routePath, metadataTitle);
  useContentProtection();

  return (
    <div className="portfolio-canvas-backdrop min-h-screen w-full bg-[#fbfbfb] text-[#111111]">
      <div className="portfolio-protected relative isolate min-h-screen w-full flex flex-col bg-[#fbfbfb] text-[#111111]">
        {/* Header */}
        <Header
          currentPage={route.page}
          onNavigate={navigateTo}
        />

        <div className="flex-1">
          {/* Main Content View */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={pageKey}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: 'easeOut' }}
              onAnimationComplete={() => {
                if (curtainPhase === 'covered') setCurtainPhase('opening');
              }}
            >
              {route.page === 'home' && (
                <HomePage
                  caseStudies={caseStudies}
                  onSelectCaseStudy={handleCaseStudySelect}
                />
              )}

              {route.page === 'about' && <AboutPage />}

              {route.page === 'case-study' && (
                <ProjectDetailTextMotion>
                  {route.caseStudy.id === 'design-system-icons' ? (
                    <DesignSystemProjectPage
                      onBack={() => navigateTo('home')}
                      nextStudy={nextStudy}
                      onSelectCaseStudy={handleCaseStudySelect}
                    />
                  ) : (
                    <CaseStudyPage
                      caseStudy={route.caseStudy}
                      allCaseStudies={caseStudies}
                      onSelectCaseStudy={handleCaseStudySelect}
                      onBack={() => navigateTo('home')}
                    />
                  )}
                </ProjectDetailTextMotion>
              )}
            </motion.main>
          </AnimatePresence>

          <ContactSection onOpenChat={() => setIsContactOpen(true)} />

          {/* Dark Footer with Social Links & Resume */}
          <Footer />
        </div>

        {/* Modals */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        {curtainPhase && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 px-6 text-center text-white"
            style={{ transformOrigin: curtainPhase === 'opening' ? 'bottom center' : 'top center' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: curtainPhase === 'opening' ? 0 : 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={handleCurtainAnimationComplete}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Next project</p>
              <p className="text-3xl font-medium tracking-tight sm:text-5xl">{pendingNextStudy?.title}</p>
            </div>
          </motion.div>
        )}

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  );
}
