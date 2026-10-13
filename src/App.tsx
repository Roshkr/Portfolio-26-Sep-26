import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
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
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(DEFAULT_CASE_STUDIES);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { route, navigateTo, selectCaseStudy } = usePortfolioNavigation(caseStudies);
  const shouldReduceMotion = useReducedMotion();
  const pageKey = route.page === 'case-study' ? `case-study-${route.caseStudy.id}` : route.page;
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const metadataTitle = route.page === 'case-study'
    ? `${route.caseStudy.title} | Roushan Kumar`
    : route.page === 'about'
      ? 'About | Roushan Kumar'
      : 'Home | Roushan Kumar';
  const routeHash = route.page === 'home'
    ? ''
    : route.page === 'about'
      ? '#about'
      : `#case-study-${route.caseStudy.id}`;

  usePageMetadata(route);
  useGoogleAnalytics(measurementId, routeHash, metadataTitle);
  useContentProtection();

  return (
    <div className="portfolio-protected relative isolate min-h-screen flex flex-col bg-[#fbfbfb] text-[#111111]">
      {/* 3-Zone Top Bar with Functional Resume Button */}
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
                    nextStudy={caseStudies.find((study) => study.id === 'umbrella') ?? null}
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

        <ContactSection />

        {/* Dark Footer with Social Links & Resume */}
        <Footer />
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
