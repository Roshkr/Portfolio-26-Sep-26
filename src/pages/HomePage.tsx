import type { CaseStudy, SelectCaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { WindowControls } from '../components/WindowControls';

interface HomePageProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: SelectCaseStudy;
}

const headlineWords = `${DESIGNER_INFO.headlineHero} ${DESIGNER_INFO.headlineHighlight}${DESIGNER_INFO.headlineSuffix}`
  .trim()
  .replace(/\s+/g, ' ')
  .split(' ');
const heroHeadlineLines = [
  headlineWords.slice(0, 2).join(' '),
  headlineWords.slice(2, 5).join(' '),
  headlineWords.slice(5, 6).join(' '),
  headlineWords.slice(6, 8).join(' '),
  headlineWords.slice(8).join(' '),
];

export const HomePage = ({ caseStudies, onSelectCaseStudy }: HomePageProps) => (
  <div className="w-full">
    <section className="home-hero-background relative w-full">
      <div className="retro-home-grid w-full">
        <div className="retro-window retro-hero-window">
          <div className="retro-window-titlebar">
            <span>ROUSHAN.IN / HOME</span>
            <span aria-hidden="true">01</span>
            <WindowControls />
          </div>
          <div className="retro-hero-body">
            <div className="retro-hero-main">
              <h1>
                <span className="retro-hero-line retro-hero-line-outline">{heroHeadlineLines[0]}</span>
                <span className="retro-hero-line retro-hero-line-paper">{heroHeadlineLines[1]}</span>
                <span className="retro-hero-line retro-hero-line-highlight">{heroHeadlineLines[2]}</span>
                <span className="retro-hero-line retro-hero-line-ink">{heroHeadlineLines[3]}</span>
                <span className="retro-hero-line retro-hero-line-highlight retro-hero-line-highlight-final">{heroHeadlineLines[4]}</span>
              </h1>
            </div>
          </div>
        </div>

      </div>

    </section>

    <section className="retro-facts-section w-full" aria-label="Quick facts">
      <aside className="retro-window retro-facts-window">
        <div className="retro-window-titlebar">
          <span>QUICK FACTS</span>
          <span aria-hidden="true">INFO.DAT</span>
          <WindowControls />
        </div>
        <div className="retro-facts-body">
          <div className="retro-facts-list">
            {DESIGNER_INFO.stats.map((stat) => (
              <div className="retro-fact-row" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>

    <section id="projects" className="retro-projects">
      <div className="retro-window retro-projects-window">
        <div className="retro-window-titlebar">
          <span>SELECTED WORKS</span>
          <span aria-hidden="true">{String(caseStudies.length).padStart(2, '0')} PROJECTS</span>
          <WindowControls />
        </div>
        <div className="retro-projects-heading">
          <h2>Recent works</h2>
        </div>
        <div className="retro-project-list">
          {caseStudies.map((study, index) => (
            <ProjectCard
              key={study.id}
              study={study}
              onSelectCaseStudy={onSelectCaseStudy}
              stackIndex={index}
              variant="editorial"
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);
