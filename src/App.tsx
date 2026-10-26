import { useEffect, useState } from 'react';
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
import type { CaseStudy } from './types';
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
  const shouldReduceMotion = useReducedMotion();
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
    <div className="portfolio-canvas-backdrop min-h-screen w-full bg-[#eaedf2] text-[#111111]">
      <div className="portfolio-protected relative isolate min-h-screen flex flex-col bg-[#fbfbfb] text-[#111111] max-w-6xl mx-auto min-[1152px]:border-x border-slate-200/90 shadow-[0_0_60px_-15px_rgba(15,23,42,0.07)]">
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
            >
              {route.page === 'home' && (
                <HomePage
                  caseStudies={caseStudies}
                  onSelectCaseStudy={selectCaseStudy}
                />
              )}

              {route.page === 'about' && <AboutPage />}

              {route.page === 'case-study' && (
                <ProjectDetailTextMotion>
                  {route.caseStudy.id === 'design-system-icons' ? (
                    <DesignSystemProjectPage
                      onBack={() => navigateTo('home')}
                      nextStudy={nextStudy}
                      onSelectCaseStudy={selectCaseStudy}
                    />
                  ) : (
                    <CaseStudyPage
                      caseStudy={route.caseStudy}
                      allCaseStudies={caseStudies}
                      onSelectCaseStudy={selectCaseStudy}
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

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  );
}
