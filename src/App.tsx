import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { AddCaseStudyModal } from './components/AddCaseStudyModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { DEFAULT_CASE_STUDIES } from './data/portfolioData';
import type { CaseStudy } from './types';
import { usePortfolioNavigation } from './hooks/usePortfolioNavigation';
import { usePageMetadata } from './hooks/usePageMetadata';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import { useContentProtection } from './hooks/useContentProtection';

export default function App() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(DEFAULT_CASE_STUDIES);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddStudyOpen, setIsAddStudyOpen] = useState(false);
  const { route, navigateTo, selectCaseStudy } = usePortfolioNavigation(caseStudies);
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

  const handleAddCaseStudy = (newStudy: CaseStudy) => {
    setCaseStudies((previous) => [newStudy, ...previous.filter((study) => study.id !== newStudy.id)]);
    selectCaseStudy(newStudy);
  };

  return (
    <div className="portfolio-protected min-h-screen flex flex-col bg-[#fbfbfb] text-[#111111]">
      {/* 3-Zone Top Bar with Functional Resume Button */}
      <Header
        currentPage={route.page}
        onNavigate={navigateTo}
      />

      <div className="flex-1">
        {/* Main Content View */}
        <main>
          {route.page === 'home' && (
            <HomePage
              caseStudies={caseStudies}
              onSelectCaseStudy={selectCaseStudy}
              onOpenAddModal={() => setIsAddStudyOpen(true)}
            />
          )}

          {route.page === 'about' && <AboutPage />}

          {route.page === 'case-study' && (
            <CaseStudyPage
              caseStudy={route.caseStudy}
              allCaseStudies={caseStudies}
              onSelectCaseStudy={selectCaseStudy}
              onBack={() => navigateTo('home')}
            />
          )}
        </main>

        <ContactSection />

        {/* Dark Footer with Social Links & Resume */}
        <Footer />
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <AddCaseStudyModal
        isOpen={isAddStudyOpen}
        onClose={() => setIsAddStudyOpen(false)}
        onAddCaseStudy={handleAddCaseStudy}
      />
    </div>
  );
}
