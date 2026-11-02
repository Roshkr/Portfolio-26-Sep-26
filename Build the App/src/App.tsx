const productScreens = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  const extension = index === 3 || index === 9 ? 'jpg' : 'png'
  return `/naie/naie-${number}.${extension}`
})

const problems = [
  {
    title: 'Long wait times at salons',
    body: 'Customers face unpredictable foot traffic and no reliable scheduling tool. This wastes time and frustrates people who need quick, dependable services.',
  },
  {
    title: 'Inefficient appointment management',
    body: 'Salons struggle to balance walk-ins and scheduled appointments, creating peak-hour overcrowding and underused capacity during quieter periods.',
  },
  {
    title: 'Lack of appointment transparency',
    body: 'Customers cannot see available slots or likely wait times before visiting, making every appointment difficult to plan around.',
  },
  {
    title: 'Inconsistent customer experience',
    body: 'Without an organized system, service quality depends on daily traffic, leading to dissatisfaction and lower customer retention.',
  },
]

const contributions = [
  'Defined the complete product UX and booking workflows',
  'Designed separate experiences for customers and salon owners',
  'Created live slot booking, availability, and queue-tracking flows',
  'Designed service and staff selection experiences',
  'Created rescheduling and appointment-reminder workflows',
  'Designed a hyperlocal salon discovery experience',
  'Structured an owner dashboard for appointments and staff management',
  'Built customer history, loyalty, and onboarding experiences',
  'Created a minimal, premium, Gen Z–friendly visual system',
]

const mistakes = [
  'I focused on booking flow and wait reduction before fully considering delayed arrivals and shifting schedules.',
  'I underestimated how important trust-building features would be for both salon owners and customers.',
  'Early concepts assumed people would strictly follow scheduled timings, but real behavior was far less predictable.',
  'The experience had to be reworked to support dynamic queues and live operational changes.',
]

const learnings = [
  'Reducing wait time is not only a scheduling problem; it is a trust and communication problem.',
  'Real-time updates and notifications help users feel confident that the system is actively managing their appointment.',
  'Small delays create a chain reaction, so queue management needs to be flexible rather than static.',
  'Service products must balance business efficiency and customer convenience at the same time.',
]

function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

function ProjectImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`project-image ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}

export default function App() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Naie · Product design case study</p>
          <h1>Optimizing salon appointments for a seamless, time-saving experience</h1>
        </div>

        <dl className="project-meta">
          <div><dt>Role</dt><dd>UX/UI Designer</dd></div>
          <div><dt>Team</dt><dd>Concept Project</dd></div>
          <div><dt>Duration</dt><dd>3 Months</dd></div>
          <div><dt>Company</dt><dd>Naie</dd></div>
        </dl>
      </section>

      <section className="screen-showcase" aria-label="Naie mobile app screens">
        <div className="screen-track">
          {productScreens.map((src, index) => (
            <img key={src} src={src} alt={`Naie product screen ${index + 1}`} loading={index < 4 ? 'eager' : 'lazy'} />
          ))}
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Overview" title="What is Naie?" />
        <p className="lead">
          Naie is a salon appointment scheduling app designed to save users time by reducing the wait typically experienced at salons. It lets customers book in advance, discover nearby services, and manage visits through a convenient, user-friendly experience.
        </p>
        <div className="quote-panel">
          <p>“How might we reduce wait times and improve the salon experience while helping salons manage daily operations more efficiently?”</p>
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="The context" title="A fragmented and unreliable booking experience" />
        <div className="prose-grid">
          <article>
            <h3>Problem</h3>
            <p>Most local salons rely on WhatsApp messages, calls, spreadsheets, or manual scheduling. The result is long waits, missed appointments, unclear availability, and chaotic communication.</p>
          </article>
          <article>
            <h3>Before</h3>
            <p>Customers had to message salons and wait for a response. Owners had no simple way to coordinate appointments, staff schedules, customer history, and real-time availability.</p>
          </article>
          <article>
            <h3>After</h3>
            <p>Customers can discover salons, check live availability, choose services and staff, and book with minimal effort. Owners get a cleaner way to manage schedules, reminders, and customer flow.</p>
          </article>
          <article>
            <h3>Business value</h3>
            <p>Naie reduces waiting, missed appointments, and communication overhead while creating a more scalable experience for both salon businesses and their customers.</p>
          </article>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="shell narrow">
          <SectionHeading eyebrow="My contribution" title="Designing both sides of the appointment" intro="As the sole designer, I shaped the product strategy, end-to-end workflows, and visual system for customers and salon owners." />
          <ul className="contribution-list">
            {contributions.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Vision" title="More than a booking utility" />
        <p className="lead">Naie aims to evolve from a scheduling app into a broader salon ecosystem where people can book appointments, explore services, receive personalized grooming recommendations, and build lasting relationships with local businesses.</p>
      </section>

      <section className="content-section shell">
        <div className="narrow"><SectionHeading eyebrow="Problem space" title="Four connected issues shaped the product" /></div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <article key={problem.title} className="problem-card">
              <span>0{index + 1}</span>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Project brief" title="Build conviction before building the product" />
        <p className="lead">Rather than delivering a fully developed app, the initial goal was to create a functional prototype that could demonstrate Naie’s potential to salon owners, customers, leadership, and future stakeholders.</p>
        <ProjectImage src="/naie/naie-18.png" alt="Naie project planning overview" className="wide-image" />
        <ProjectImage src="/naie/naie-19.png" alt="Naie project timeline" className="wide-image" />
      </section>

      <section className="content-section dark-section">
        <div className="shell narrow">
          <SectionHeading eyebrow="Research" title="Understanding appointments as a live operation" intro="I explored how customers experience salon visits and how salons manage appointments, walk-ins, staff, and service time throughout the day." />
          <div className="dark-copy">
            <p>I worked closely with salon owners and staff to understand day-to-day customer management and the practical constraints of appointment scheduling.</p>
            <p>The research revealed two primary user groups: customers looking for a fast, predictable booking experience and salon owners who need a flexible system for daily operations.</p>
          </div>
          <ProjectImage src="/naie/naie-20.png" alt="Naie customer persona" />
          <ProjectImage src="/naie/naie-21.png" alt="Naie user needs and behavior research" />
          <ProjectImage src="/naie/naie-22.png" alt="Naie research insights map" />
          <ProjectImage src="/naie/naie-23.png" alt="Naie user segmentation research" />
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Secondary research" title="Designing for engagement beyond the appointment" />
        <p className="lead">Competitor research focused on retention patterns such as loyalty programs, personalized offers, appointment streaks, reminders, and low-friction booking. These insights helped Naie stay useful after the immediate booking need was complete.</p>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Journey mapping" title="A booking flow that works before, during, and after the visit" />
        <ProjectImage src="/naie/naie-24.png" alt="User flow for booking a salon appointment" className="tall-artifact" />
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Information architecture" title="Organizing discovery, booking, and account management" />
        <ProjectImage src="/naie/naie-25.png" alt="Naie information architecture" />
      </section>

      <section className="content-section tinted">
        <div className="shell narrow">
          <SectionHeading eyebrow="Low fidelity" title="Testing the complete service before polishing the interface" intro="The early wireframes connected onboarding, discovery, salon details, service selection, booking, and account management into one testable flow." />
          <ProjectImage src="/naie/naie-26.png" alt="Naie low-fidelity wireframe flow" className="wireframe-map" />
        </div>
      </section>

      <section className="content-section shell">
        <div className="narrow"><SectionHeading eyebrow="Usability testing" title="Small points of friction surfaced quickly" intro="Early testing highlighted unclear labels, input choices, and navigation behavior that could make a simple booking feel harder than necessary." /></div>
        <div className="testing-grid">
          {[27, 28, 29, 30, 31, 32].map((number) => (
            <ProjectImage key={number} src={`/naie/naie-${number}.png`} alt={`Naie usability testing insight ${number - 26}`} />
          ))}
        </div>
      </section>

      <section className="content-section final-design">
        <div className="shell narrow">
          <SectionHeading eyebrow="High fidelity" title="A minimal booking experience designed for everyday use" intro="The final direction pairs a calm visual system with fast service discovery, transparent availability, and a booking flow that keeps choices easy to understand." />
          <ProjectImage src="/naie/naie-33.png" alt="Naie high-fidelity product screens" className="final-map" />
        </div>
      </section>

      <section className="content-section shell">
        <div className="reflection-grid">
          <article>
            <p className="eyebrow">Mistakes</p>
            <h2>What I would approach differently</h2>
            <ul>{mistakes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="eyebrow">Learning</p>
            <h2>What the project taught me</h2>
            <ul>{learnings.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="content-section future-section">
        <div className="shell narrow">
          <SectionHeading eyebrow="Future state" title="A scalable ecosystem for local services" />
          <p className="lead">Naie can expand beyond salons into other appointment-based businesses. Future opportunities include smart scheduling, AI-powered recommendations, loyalty systems, analytics, and deeper business-management tools while maintaining a fast, minimal experience.</p>
        </div>
      </section>
    </main>
  )
}
