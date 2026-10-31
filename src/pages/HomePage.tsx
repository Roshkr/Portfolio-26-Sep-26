import type { CaseStudy, SelectCaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { WindowControls } from '../components/WindowControls';

interface HomePageProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: SelectCaseStudy;
}

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
            <div>
              <h1>
                <span>
                  {DESIGNER_INFO.headlineHero}{' '}
                  <span>
                    {DESIGNER_INFO.headlineHighlight.split(/(B2B\/SaaS|design systems)/gi).map((part, index) =>
                      /^(B2B\/SaaS|design systems)$/i.test(part)
                        ? <span className="retro-hero-highlight" key={`${part}-${index}`}>{part}</span>
                        : part,
                    )}{DESIGNER_INFO.headlineSuffix}
                  </span>
                </span>
              </h1>
            </div>
            <div className="retro-hero-baseline retro-metadata">
              <span>{DESIGNER_INFO.tagline}</span>
              <span>{DESIGNER_INFO.location}</span>
            </div>
          </div>
        </div>

        <aside className="retro-window retro-facts-window" aria-label="Designer facts">
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
      </div>

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
