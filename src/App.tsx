import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AddCaseStudyModal } from './components/AddCaseStudyModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { DEFAULT_CASE_STUDIES } from './data/portfolioData';
import { CaseStudy } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'case-study'>('home');
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(DEFAULT_CASE_STUDIES);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(DEFAULT_CASE_STUDIES[0]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddStudyOpen, setIsAddStudyOpen] = useState(false);

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

      {/* Main Content View */}
      <main className="flex-1">
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

      {/* Dark Footer with Social Links & Resume */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

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
