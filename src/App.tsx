import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RetroWindowManager } from './components/RetroWindowManager';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { DesignSystemProjectPage } from './pages/DesignSystemProjectPage';
import { DEFAULT_CASE_STUDIES } from './data/portfolioData';
import type { CaseStudy, SelectCaseStudy } from './types';
import { usePortfolioNavigation } from './hooks/usePortfolioNavigation';
import { usePageMetadata } from './hooks/usePageMetadata';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import { useContentProtection } from './hooks/useContentProtection';

export default function App({ initialPath }: { initialPath?: string } = {}) {
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
  const { route, navigateTo, selectCaseStudy } = usePortfolioNavigation(caseStudies, initialPath);
  const handleCaseStudySelect: SelectCaseStudy = selectCaseStudy;
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
    <div className="portfolio-canvas-backdrop min-h-screen w-full text-[#111111]">
      <div className="portfolio-protected relative isolate min-h-screen w-full flex flex-col text-[#111111]">
        {/* Header */}
        <Header
          currentPage={route.page}
          onNavigate={navigateTo}
        />

        <div className="flex-1">
          {/* Main Content View */}
          <main key={pageKey}>
              {route.page === 'home' && (
                <HomePage
                  caseStudies={caseStudies}
                  onSelectCaseStudy={handleCaseStudySelect}
                />
              )}

              {route.page === 'about' && <AboutPage />}

              {route.page === 'case-study' && (
                route.caseStudy.id === 'design-system-icons' ? (
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
                )
              )}
          </main>

          {/* Dark Footer with Social Links & Resume */}
          <Footer onOpenChat={() => setIsContactOpen(true)} />
        </div>

        <RetroWindowManager />

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
