const productScreens = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  const extension = index === 3 || index === 9 ? 'jpg' : 'png'
  return `/naie/naie-${number}.${extension}`
})

const problems = [
  {
    title: 'Long wait times at salons',
    body: 'Customers may arrive while a salon is busy, with no clear estimate of how long they will wait.',
  },
  {
    title: 'Inefficient appointment management',
    body: 'Salons have to fit walk-ins around booked appointments, which can leave some periods crowded and others quiet.',
  },
  {
    title: 'Lack of appointment transparency',
    body: 'Customers cannot check available slots or likely wait times before they leave home.',
  },
  {
    title: 'Inconsistent customer experience',
    body: 'When appointments and customer details are tracked manually, staff may not have the same information about each visit.',
  },
]

const contributions = [
  'Designed booking flows for customers and salon owners',
  'Designed separate experiences for customers and salon owners',
  'Designed slot selection, availability, and queue views',
  'Designed service and staff selection experiences',
  'Created rescheduling and appointment-reminder workflows',
  'Designed local salon discovery',
  'Structured an owner dashboard for appointments and staff management',
  'Designed customer history and onboarding experiences; considered loyalty for future work',
  'Set the visual style for a mobile-first salon product',
]

const mistakes = [
  'I focused on booking flow and wait reduction before fully considering delayed arrivals and shifting schedules.',
  'I did not account early enough for the information both customers and salon owners need before booking.',
  'Early concepts assumed people would strictly follow scheduled timings, but real behavior was far less predictable.',
  'I revised the design to account for changing queues and appointment delays.',
]

const learnings = [
  'Wait times depend on both the schedule and how clearly salons communicate changes.',
  'Customers need updates when their appointment time or expected wait changes.',
  'A late appointment can affect the rest of the day, so the schedule needs to be easy to adjust.',
  'The booking flow needs to work for salon staff as well as customers.',
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
          <h1>Salon discovery and booking with clearer availability</h1>
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
          Naie is a mobile concept for finding salons, checking services and appointment slots, and booking ahead. It also explores tools for salon owners to manage appointments, staff, and walk-ins.
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
          <p>Many local salons coordinate appointments through WhatsApp, phone calls, spreadsheets, or paper schedules. Customers may not know what is available, and salon staff have to manage bookings and walk-ins across different channels.</p>
          </article>
          <article>
            <h3>Before</h3>
            <p>Customers had to message salons and wait for a response. Owners had no simple way to coordinate appointments, staff schedules, customer history, and real-time availability.</p>
          </article>
          <article>
            <h3>After</h3>
          <p>The proposed flow lets customers browse salons, choose a service and staff member, and review available times. Owner screens cover appointments, reminders, and walk-ins.</p>
          </article>
          <article>
            <h3>Business value</h3>
          <p>The concept puts booking and appointment management in one place. It explores whether showing availability earlier could reduce uncertainty for customers and scheduling work for salon staff.</p>
          </article>
        </div>
      </section>

      <section className="content-section tinted">
        <div className="shell narrow">
          <SectionHeading eyebrow="My contribution" title="Designing for customers and salon owners" intro="As the sole designer, I planned the product and designed the booking flows and visual system for both groups." />
          <ul className="contribution-list">
            {contributions.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Possible next steps" title="Features to consider after booking" />
        <p className="lead">The first concept focused on salon discovery and appointments. Later work could explore grooming recommendations and loyalty features if customers and salon owners find them useful.</p>
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
        <SectionHeading eyebrow="Project brief" title="Use a prototype to explain the idea" />
        <p className="lead">I created a prototype to show the booking concept to salon owners and customers and gather feedback before development.</p>
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
        <SectionHeading eyebrow="Secondary research" title="What other booking products offered" />
        <p className="lead">I reviewed how other products handled reminders, loyalty programs, offers, and appointment booking. This helped identify features Naie could explore after the core booking flow.</p>
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Journey mapping" title="Map the steps from discovery to appointment" />
        <ProjectImage src="/naie/naie-24.png" alt="User flow for booking a salon appointment" className="tall-artifact" />
      </section>

      <section className="content-section shell narrow">
        <SectionHeading eyebrow="Information architecture" title="Organizing discovery, booking, and account management" />
        <ProjectImage src="/naie/naie-25.png" alt="Naie information architecture" />
      </section>

      <section className="content-section tinted">
        <div className="shell narrow">
          <SectionHeading eyebrow="Low fidelity" title="Test the booking flow before polishing screens" intro="The early wireframes linked onboarding, salon discovery, service selection, booking, and account management into one flow." />
          <ProjectImage src="/naie/naie-26.png" alt="Naie low-fidelity wireframe flow" className="wireframe-map" />
        </div>
      </section>

      <section className="content-section shell">
        <div className="narrow"><SectionHeading eyebrow="Usability testing" title="Testing showed where people got stuck" intro="Early testing found unclear labels, confusing input choices, and navigation that made booking harder to follow." /></div>
        <div className="testing-grid">
          {[27, 28, 29, 30, 31, 32].map((number) => (
            <ProjectImage key={number} src={`/naie/naie-${number}.png`} alt={`Naie usability testing insight ${number - 26}`} />
          ))}
        </div>
      </section>

      <section className="content-section final-design">
        <div className="shell narrow">
          <SectionHeading eyebrow="High fidelity" title="Screens for finding and booking a salon" intro="The final design shows salon discovery, service details, appointment availability, and booking choices." />
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
          <SectionHeading eyebrow="Possible next steps" title="Where the concept could go next" />
          <p className="lead">Naie could extend to other appointment-based businesses. Possible additions include schedule management, recommendations, loyalty features, and business analytics.</p>
        </div>
      </section>
    </main>
  )
}
