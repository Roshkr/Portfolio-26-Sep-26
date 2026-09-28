import { useState, useEffect, useRef } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { AddCaseStudyModal } from './components/AddCaseStudyModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { DEFAULT_CASE_STUDIES } from './data/portfolioData';
import { CaseStudy } from './types';

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    gaInitialized?: boolean;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'case-study'>('home');
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(DEFAULT_CASE_STUDIES);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(DEFAULT_CASE_STUDIES[0]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddStudyOpen, setIsAddStudyOpen] = useState(false);
  const lastTrackedPage = useRef('');

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    const pageTitle = currentPage === 'case-study'
      ? `${selectedCaseStudy.title} Case Study | Roushan Kumar`
      : currentPage === 'about'
        ? 'About Roushan Kumar | UX/UI Designer'
        : 'Roushan Kumar | UX/UI & Product Designer';
    const description = currentPage === 'case-study'
      ? selectedCaseStudy.subtitle
      : currentPage === 'about'
        ? 'Learn about Roushan Kumar, a UX/UI and product designer based in Ahmedabad, India.'
        : 'UX/UI and product design portfolio of Roushan Kumar, focused on SaaS, B2B, fintech, enterprise workflows, and mobile experiences.';

    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [currentPage, selectedCaseStudy.id, selectedCaseStudy.subtitle, selectedCaseStudy.title]);

  useEffect(() => {
    if (!measurementId || window.gaInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    window.gaInitialized = true;
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    const pagePath = `${window.location.pathname}${window.location.hash}`;
    if (lastTrackedPage.current === pagePath) return;
    lastTrackedPage.current = pagePath;

    const pageTitle = currentPage === 'case-study'
      ? `${selectedCaseStudy.title} | Roushan Kumar`
      : currentPage === 'about'
        ? 'About | Roushan Kumar'
        : 'Home | Roushan Kumar';

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }, [currentPage, measurementId, selectedCaseStudy.id, selectedCaseStudy.title]);

  const caseStudiesRef = useRef(caseStudies);
  caseStudiesRef.current = caseStudies;

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash.startsWith('case-study')) {
        const studyId = hash.replace('case-study-', '');
        const matched = caseStudiesRef.current.find((s) => s.id === studyId);
        if (matched) {
          setSelectedCaseStudy(matched);
        }
        setCurrentPage('case-study');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'case-study') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setCurrentPage('case-study');
    window.location.hash = `case-study-${study.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCaseStudy = (newStudy: CaseStudy) => {
    setCaseStudies((prev) => [newStudy, ...prev]);
    setSelectedCaseStudy(newStudy);
    setCurrentPage('case-study');
    window.location.hash = `case-study-${newStudy.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] text-[#111111]">
      {/* 3-Zone Top Bar with Functional Resume Button */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      <div className="flex-1">
        {/* Main Content View */}
        <main>
          {currentPage === 'home' && (
            <HomePage
              caseStudies={caseStudies}
              onSelectCaseStudy={handleSelectCaseStudy}
              onOpenAddModal={() => setIsAddStudyOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'about' && <AboutPage />}

          {currentPage === 'case-study' && (
            <CaseStudyPage
              caseStudy={selectedCaseStudy}
              allCaseStudies={caseStudies}
              onSelectCaseStudy={handleSelectCaseStudy}
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

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
