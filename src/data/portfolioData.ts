import { CaseStudy, Testimonial, ExperienceItem, EducationItem, ToolItem } from '../types';
import designerPortrait from '../assets/images/designer_profile_photo_1790248668488.jpg';

export const DESIGNER_INFO = {
  name: "Roushan Kumar",
  brandName: "Roushan",
  tagline: "UX/UI Designer",
  location: "Ahmedabad, Gujarat, India",
  headlineGreeting: "Hi! I'm Roushan a UX/UI Designer based in Ahmedabad, IND",
  headlineHero: "Focused on",
  headlineHighlight: "SaaS, B2B, and Fintech",
  headlineSuffix: ", simplifying complex workflows through research, collaboration, and AI.",
  aboutHeroSubtitle: "UX/UI Designer • based in Ahmedabad, India",
  bioShort:
    "I'm a seasoned UX/UI designer specializing in SaaS, enterprise workflows, and mobile experiences. I turn complex logic into intuitive products through deep user research, pragmatic design systems, and modern AI-assisted engineering.",
  availability: "Open to new opportunities | Available 1 Jul 2026",
  email: "roushan.ux@gmail.com",
  phone: "+91 83499 33768",
  whatsappNumber: "8349933768",
  whatsappUrl: "https://wa.me/918349933768?text=Hi%20Roushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resumeUrl: "https://drive.google.com/file/d/15BrKkSjx06m3ePtcjaTP5CrAr-ZJUA6m/view",
  socials: {
    linkedin: "https://www.linkedin.com/in/roushankuma/",
    behance: "https://www.behance.net/roushankuma",
    dribbble: "https://dribbble.com/roushankr",
    whatsapp: "https://wa.me/918349933768?text=Hi%20Roushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    email: "mailto:roushan.ux@gmail.com",
  },
  stats: [
    { value: "1000+", label: "User interface screens designed" },
    { value: "17+", label: "Projects completed" },
    { value: "7+", label: "Worked with Companies & Individuals" },
  ],
  portraitImage: designerPortrait,
  galleryImages: [
    "https://framerusercontent.com/images/DiT0AjiPApWtO5B0iv2chsQf34.jpg",
    "https://framerusercontent.com/images/TTzTzF5PsBgoBxwYGVgWHqCRi8.jpg",
    "https://framerusercontent.com/images/t2GLwdkI4irC1GKFfFYiHALqFw.jpg",
    "https://framerusercontent.com/images/HdopiU5CNvnYltKa9BUuB3VdQM.jpg",
    "https://framerusercontent.com/images/ErBoP46KXUdX53tMEH62HxKJJqU.jpg",
  ],
};

export const CREATIVE_TOOLKIT: ToolItem[] = [
  {
    name: "Figma",
    desc: "Leading collaborative design tool",
    category: "Design & Systems",
  },
  {
    name: "Claude / Codex / Gemini",
    desc: "Generative AI tools",
    category: "AI & Synthesis",
  },
  {
    name: "Antigravity / VS Code",
    desc: "Agentic AI coding tool",
    category: "Development",
  },
  {
    name: "Adobe Creative Suite",
    desc: "The OG of design world!",
    category: "Visual Design",
  },
  {
    name: "Framer",
    desc: "No-code website builder",
    category: "Interactive Web",
  },
  {
    name: "Miro / FigJam",
    desc: "Collaborative platform",
    category: "Strategy & Mapping",
  },
  {
    name: "Lovable / Cursor / Replit",
    desc: "AI app builders",
    category: "Rapid Prototyping",
  },
  {
    name: "Stitch / Figma Make",
    desc: "AI UI design builders",
    category: "AI UI Generation",
  },
  {
    name: "Jira / Asana / DevOps",
    desc: "Planning and tracking",
    category: "Project Management",
  },
];

export const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    id: "roushani",
    title: "Roushani",
    subtitle:
      "Simplifying repetitive invoicing so service businesses can create professional, branded invoices in minutes without fighting Excel or outdated tools.",
    category: "B2B SaaS Product Design",
    tags: ["Concept to Market", "Product Design", "Interaction Design", "Mobile UX"],
    heroImage: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
    company: "Roushani Invoicing",
    status: "Production MVP",
    overview:
      "Roushani is a modern invoicing platform designed specifically for service-based businesses that still rely on Excel, Google Sheets, or outdated tools.\n\nAs the sole designer and full-stack builder, I owned the entire product lifecycle from user research and information architecture to AI-assisted frontend and backend implementation. The goal was to remove manual friction, eliminate repetitive data entry, and empower small businesses to look trustworthy.",
    role: "Product Designer + AI-Assisted Builder",
    team: "Solo Ownership (Design + AI Code)",
    timeline: "4 Weeks (Concept to Live MVP)",
    beforeScreen: "https://framerusercontent.com/images/obftsqMxDUXgDe57R2UsMuKmg.png",
    afterScreen: "https://framerusercontent.com/images/KTnRqrAiyWhbzM1PQbsH6Koggcg.jpeg",
    beforeLabel: "Cluttered Spreadsheet Tooling",
    afterLabel: "One-Click Branded Invoicing",
    interviewsText:
      "I interviewed freelance consultants, agency founders, and local studio owners who handle weekly billing. Nearly all reported extreme frustration with spreadsheet formulas breaking, inconsistent branding, and the time wasted repeatedly typing client details.",
    interviewBullets: [
      "Why do businesses still default to Excel over complex ERP tools?",
      "Where does the highest cognitive friction occur during billing?",
      "How do unprofessional invoices impact payment turnaround times?",
      "What automated shortcuts actually save real minutes each day?",
    ],
    keyInsights: [
      {
        title: "Repetitive Data Entry",
        desc: "Users spent 70% of their billing time manually retyping client tax IDs, addresses, and line-item totals.",
      },
      {
        title: "Branding Disconnect",
        desc: "Generic templates looked unpolished, eroding trust and causing delayed customer payment cycles.",
      },
      {
        title: "Feature Bloat Avoidance",
        desc: "Users rejected traditional accounting software because 90% of the advanced ledger features were irrelevant for them.",
      },
    ],
    designText:
      "I established a focused design system built for speed and accessibility. We implemented large click targets, high contrast typographic hierarchy, smart default fields, and real-time live preview rendering so what you type is instantly what the PDF looks like.",
    designBullets: [
      "Designed clean auto-calculating tax and discount logic",
      "Created instant logo upload and branded color themes",
      "Built one-click client directory with saved history",
      "Optimized for responsive mobile quick-edits on the go",
    ],
    designScreens: [
      {
        title: "01. Live Invoice Canvas",
        image: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
        note: "Interactive WYSIWYG editor showing real-time calculations and brand accent styling.",
      },
      {
        title: "02. Client & History Hub",
        image: "https://framerusercontent.com/images/obftsqMxDUXgDe57R2UsMuKmg.png",
        note: "Instant reuse of previous line items, tax rates, and client contact profiles.",
      },
      {
        title: "03. Mobile Responsive View",
        image: "https://framerusercontent.com/images/KTnRqrAiyWhbzM1PQbsH6Koggcg.jpeg",
        note: "Send PDFs and download invoices directly from any smartphone browser.",
      },
    ],
    usabilityText:
      "Tested the prototype with 8 independent business owners across 3 iterative cycles. Focused on measuring task completion time: from opening the tool to sending a completed invoice PDF.",
    problem1: {
      title: "Problem 1: Complex Tax & Currency Fields",
      desc: "Users paused and second-guessed GST/VAT calculations when presented with multiple stacked input boxes.",
      screen: "https://framerusercontent.com/images/obftsqMxDUXgDe57R2UsMuKmg.png",
    },
    solution1: {
      title: "Solution 1: Smart Presets & Inline Toggle",
      desc: "Created single-tap predefined tax presets with automatic itemized summaries that update live.",
      screen: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
    },
    impactText:
      "Roushani achieved immediate adoption within our pilot group, reducing the average time to generate and export a professional invoice from 18 minutes in Excel to under 3 minutes.",
    metrics: [
      {
        value: "80%",
        label: "Faster Invoice Creation",
        context: "Down from 18 mins to under 3 mins per invoice",
      },
      {
        value: "100%",
        label: "Error-Free Calculations",
        context: "Zero customer math errors reported across 500+ invoices",
      },
      {
        value: "4.9★",
        label: "User Satisfaction Score",
        context: "Across all active pilot service businesses",
      },
    ],
    learnings: [
      "Simplicity matters more than features – Keeping the core flow stripped of bloat drove 100% completion rates.",
      "UI and backend are tightly connected – Building alongside code revealed crucial edge-cases in data validation early.",
      "AI is a powerful force-multiplier – Enabled rapid iterations from design tokens directly into functioning logic.",
    ],
    nextSteps: [
      "Adding recurring subscription billing automation for retainers.",
      "Integrating direct multi-gateway payment links (Stripe / Razorpay).",
      "Exporting batch CSV reports for end-of-year accounting.",
    ],
    finalScreens: [
      {
        title: "Hero Canvas",
        image: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
      },
      {
        title: "Client Directory",
        image: "https://framerusercontent.com/images/obftsqMxDUXgDe57R2UsMuKmg.png",
      },
      {
        title: "Mobile View",
        image: "https://framerusercontent.com/images/KTnRqrAiyWhbzM1PQbsH6Koggcg.jpeg",
      },
      {
        title: "Export & Share",
        image: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
      },
      {
        title: "Template System",
        image: "https://framerusercontent.com/images/obftsqMxDUXgDe57R2UsMuKmg.png",
      },
    ],
  },
  {
    id: "umbrella",
    title: "Umbrella",
    subtitle:
      "Streamlining Enterprise Client Onboarding - Re-architecting a complex multi-step enterprise onboarding form with clear UX structure, validation logic, and reduced cognitive load.",
    category: "Enterprise UX & Workflow",
    tags: ["Usability Testing", "Enterprise UX", "Workflow Design", "User Research"],
    heroImage: "https://framerusercontent.com/images/ODQSiBSOgvzxpJFnv9I2iPjjc7s.png",
    company: "Confidential Client (NDA)",
    status: "Enterprise Rollout",
    overview:
      "The onboarding experience suffered from inconsistent UI patterns, unclear hierarchy, weak validation logic, and poor error handling, creating confusion during the client onboarding process. Users struggled to understand required actions, leading to mistakes, friction, and an overall unreliable onboarding experience.\n\nThe onboarding form had grown without a consistent UX structure. I conducted deep user research, task mapping, and restructured the workflow into an intuitive progressive journey.",
    role: "UX/UI Designer",
    team: "Design + Development Team",
    timeline: "1 Month",
    beforeScreen: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
    afterScreen: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
    beforeLabel: "Fragmented Form Layout",
    afterLabel: "Structured Step-by-Step Flow",
    interviewsText:
      "Recruited corporate compliance officers, operations leads, and clients who had recently completed or abandoned the legacy onboarding system. Analyzed drop-off logs and observed users live during task execution.",
    interviewBullets: [
      "Have you used any onboarding tool before?",
      "Where did you feel most uncertain when submitting business verification docs?",
      "How did ambiguous error alerts affect your willingness to finish?",
      "What information should always remain visible throughout the sequence?",
    ],
    keyInsights: [
      {
        title: "Cognitive Overload",
        desc: "Unfolding 30+ form inputs in a single long scroll intimidated users and led to high abandonment.",
      },
      {
        title: "Vague Error Messaging",
        desc: "Generic 'Submission failed' banners gave no guidance on which specific field was non-compliant.",
      },
      {
        title: "Lack of Save & Resume",
        desc: "Enterprise users frequently needed to gather documents from colleagues, requiring safe draft preservation.",
      },
    ],
    designText:
      "Re-engineered the onboarding architecture into clear thematic milestones: Company Profile, Stakeholder KYC, Compliance Checklist, and Final Sign-Off with inline autosave.",
    designBullets: [
      "Created persistent progress tracker with estimated completion time",
      "Implemented smart real-time input validation with contextual helper tooltips",
      "Designed instant document drag-and-drop verification with file preview",
      "Standardized design tokens across enterprise form controls",
    ],
    designScreens: [
      {
        title: "01. Onboarding Stepper",
        image: "https://framerusercontent.com/images/ODQSiBSOgvzxpJFnv9I2iPjjc7s.png",
        note: "Progressive milestone structure with clear visual completion states.",
      },
      {
        title: "02. Validation & Error Handling",
        image: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
        note: "Inline contextual alerts indicating exact fixes required before submission.",
      },
      {
        title: "03. Review & Authorization",
        image: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
        note: "Clean summary sheet enabling one-click digital signing and instant PDF receipt.",
      },
    ],
    usabilityText:
      "Conducted usability testing sessions with 10 enterprise users. Benchmarked time-to-complete, error rates, and System Usability Scale (SUS) scores before and after the redesign.",
    problem1: {
      title: "Problem: Unclear Document Upload Specs",
      desc: "Users frequently uploaded unsupported file formats or invalid resolutions, only finding out at the very end.",
      screen: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
    },
    solution1: {
      title: "Solution: Live Pre-Flight Validation",
      desc: "Added instant format checking, file size indicators, and visual preview upon drop.",
      screen: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
    },
    impactText:
      "The revamped onboarding pipeline drove a significant drop in support tickets and slashed onboarding turnaround time for new enterprise clients.",
    metrics: [
      {
        value: "45%",
        label: "Faster Completion Time",
        context: "Reduced enterprise onboarding time from 35m to 19m",
      },
      {
        value: "-62%",
        label: "Reduction in Support Tickets",
        context: "Fewer escalation requests for stuck onboarding forms",
      },
      {
        value: "92%",
        label: "First-Time Success Rate",
        context: "Up from 54% in legacy baseline audit",
      },
    ],
    learnings: [
      "Progressive disclosure reduces anxiety in dense enterprise flows.",
      "Clear feedback loops create trust and confidence during sensitive compliance steps.",
      "Building modular components allows easy maintenance across global client tiers.",
    ],
    nextSteps: [
      "Implementing AI autofill from corporate tax filings and domain records.",
      "Expanding multi-language localization for APAC and EMEA teams.",
    ],
    finalScreens: [
      {
        title: "Milestone Stepper",
        image: "https://framerusercontent.com/images/ODQSiBSOgvzxpJFnv9I2iPjjc7s.png",
      },
      {
        title: "Document Vault",
        image: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
      },
      {
        title: "Review Summary",
        image: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
      },
      {
        title: "Success State",
        image: "https://framerusercontent.com/images/2fTIlWkk5qVRqWmhMyT2zTDfKjg.png",
      },
      {
        title: "Mobile Approvals",
        image: "https://framerusercontent.com/images/UKVoKV7BniMAWNs6RSrIamms.png",
      },
    ],
  },
  {
    id: "bridge2business",
    title: "Bridge2Business",
    subtitle:
      "B2B Website Redesign & Brand Experience - Freelance website redesign focusing on responsive information hierarchy, UX strategy, and brand credibility.",
    category: "UX Strategy & Web",
    tags: ["Information Hierarchy", "UX Strategy", "Responsive Design"],
    heroImage: "https://framerusercontent.com/images/jq007KeZnDmvkFGcup4Y8OEXlw.png",
    company: "Freelance Website Redesign",
    status: "Shipped & Live",
    overview:
      "Bridge2Business needed a comprehensive redesign to bridge the gap between their complex B2B services and potential clients. The legacy website was cluttered, had poor mobile responsiveness, and failed to clearly articulate their value proposition.\n\nAs the sole UX/UI designer collaborating with a developer, I carried out audience research, restructured the content hierarchy, and delivered a responsive Figma design system that elevated brand authority.",
    role: "IC UX/UI Designer",
    team: "1 Designer, 1 Developer",
    timeline: "15 Days",
    beforeScreen: "https://framerusercontent.com/images/NvwCzpue7KQaYCXTYTFo3MbBtdE.png",
    afterScreen: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
    beforeLabel: "Legacy Unresponsive Site",
    afterLabel: "Modern B2B Experience",
    interviewsText:
      "Conducted stakeholder discovery sessions and interviewed 5 B2B clients to determine what information was critical when evaluating partnership opportunities.",
    interviewBullets: [
      "What key capabilities does a prospective partner search for within 10 seconds?",
      "How can case study summaries build immediate credibility?",
      "What CTA structures drive qualified discovery calls over spam?",
    ],
    keyInsights: [
      {
        title: "Cluttered Proposition",
        desc: "Visitors couldn't discern the company's core focus due to competing slogans and wall-of-text paragraphs.",
      },
      {
        title: "Mobile Experience Broken",
        desc: "Over 55% of executive traffic originated on mobile, where tables and media broke completely.",
      },
      {
        title: "Weak Call to Action",
        desc: "Burying contact forms behind multi-tier submenus resulted in negligible inquiry volume.",
      },
    ],
    designText:
      "Created an editorial, bold design system with crisp typography, high-impact project showcases, and a sticky navigation path directly to scheduling consultation calls.",
    designBullets: [
      "Established strict 8pt grid system across all breakpoints",
      "Designed interactive service comparison cards with expandable tabs",
      "Integrated social proof and partnership badges directly into hero view",
      "Created lightweight animations that maintain fast load speeds",
    ],
    designScreens: [
      {
        title: "01. Hero & Value Proposition",
        image: "https://framerusercontent.com/images/jq007KeZnDmvkFGcup4Y8OEXlw.png",
        note: "Bold typography paired with immediate capability categorization.",
      },
      {
        title: "02. Service Architecture",
        image: "https://framerusercontent.com/images/NvwCzpue7KQaYCXTYTFo3MbBtdE.png",
        note: "Clean modular service breakdown answering client questions upfront.",
      },
      {
        title: "03. Case Studies & Proof",
        image: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
        note: "Visual project teasers connecting directly to deep dive metrics.",
      },
    ],
    usabilityText:
      "Shared interactive clickable Figma prototypes with stakeholders and prospective buyers to validate scroll pacing, content absorption, and CTA discoverability.",
    problem1: {
      title: "Problem: Unclear Service Bundles",
      desc: "Clients couldn't determine which service tier aligned with their business stage.",
      screen: "https://framerusercontent.com/images/NvwCzpue7KQaYCXTYTFo3MbBtdE.png",
    },
    solution1: {
      title: "Solution: Interactive Solution Finder",
      desc: "Designed an intuitive 3-pillar selector filtering services by business size and goals.",
      screen: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
    },
    impactText:
      "Within 60 days of launching the redesigned platform, Bridge2Business experienced a dramatic surge in lead inquiries and session engagement.",
    metrics: [
      {
        value: "+68%",
        label: "Increase in Discovery Calls",
        context: "Direct conversion via streamlined CTA flow",
      },
      {
        value: "-40%",
        label: "Bounce Rate Reduction",
        context: "Across all mobile and tablet traffic",
      },
      {
        value: "2.4x",
        label: "Average Session Duration",
        context: "Users explored multiple service offerings",
      },
    ],
    learnings: [
      "Content strategy is 50% of UX – Clear writing makes complex B2B offerings digestible.",
      "Close dev handoff prevents design degradation – Annotated spacing tokens made build flawless.",
    ],
    nextSteps: [
      "Integrating automated calendar booking into the contact modal.",
      "Expanding the client portal for active project tracking.",
    ],
    finalScreens: [
      {
        title: "Landing Hero",
        image: "https://framerusercontent.com/images/jq007KeZnDmvkFGcup4Y8OEXlw.png",
      },
      {
        title: "Service Grid",
        image: "https://framerusercontent.com/images/NvwCzpue7KQaYCXTYTFo3MbBtdE.png",
      },
      {
        title: "Proof & Clients",
        image: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
      },
      {
        title: "Interactive Tabs",
        image: "https://framerusercontent.com/images/pN45S5o3SG8hlnFnlAsvbLF02zg.png",
      },
      {
        title: "Lead Capture",
        image: "https://framerusercontent.com/images/If1CQN4gzuz8VX85SFVjR0IQulw.png",
      },
    ],
  },
  {
    id: "maxlence",
    title: "Maxlence",
    subtitle:
      "HR and Project Management SaaS - Owned the UX design taking complex internal tooling from inception to developer-ready prototypes with seamless user onboarding.",
    category: "HR & Enterprise SaaS",
    tags: ["Onboarding Experience", "Interaction Design", "User Flows"],
    heroImage: "https://framerusercontent.com/images/mjVeVyTpIxBkX4PqovMB92wwao0.png",
    company: "Maxlence Consulting",
    status: "Product Released",
    overview:
      "Maxlence Consulting required an all-in-one SaaS platform to streamline HR management, daily project tracking, attendance, and client deliverables across distributed teams.\n\nAs the lead UX designer, I translated product requirements into end-to-end design artifacts, conducted user journey mapping, and produced scalable component libraries in Figma ready for agile engineering sprints.",
    role: "UX Designer",
    team: "1 Designer, 1 Lead Developer",
    timeline: "15 Days",
    beforeScreen: "https://framerusercontent.com/images/AD2obtND6Ll0w2gTlP6Kmocvcs.png",
    afterScreen: "https://framerusercontent.com/images/qmu2Y0W4uwUIGMxyJ9xliGA284.png",
    beforeLabel: "Fragmented Spreadsheets & Emails",
    afterLabel: "Unified Team Workspace",
    interviewsText:
      "Conducted discovery sessions with HR managers, team leaders, and remote employees to pinpoint administrative bottlenecks and daily collaboration blockers.",
    interviewBullets: [
      "How do team members log time and project progress each day?",
      "Where does HR spend the most manual effort during weekly reviews?",
      "What permissions and privacy boundaries are mandatory across roles?",
    ],
    keyInsights: [
      {
        title: "Disjointed Communication",
        desc: "Tasks, leave requests, and file attachments were scattered across email threads and chat channels.",
      },
      {
        title: "Time-Tracking Resistance",
        desc: "Employees hated clunky timers that required multiple clicks to start and pause.",
      },
      {
        title: "Manager Oversight Friction",
        desc: "Leaders lacked a single high-level dashboard to inspect squad velocity and resource allocation.",
      },
    ],
    designText:
      "Engineered an intuitive SaaS dashboard interface with modular widgets, one-tap timer logging, role-based navigation menus, and clean notification feeds.",
    designBullets: [
      "Modular card dashboard customizable by department",
      "One-click attendance and quick task timer",
      "Interactive Kanban and Gantt timeline views",
      "Clean onboarding checklist for new joiners",
    ],
    designScreens: [
      {
        title: "01. Central Team Dashboard",
        image: "https://framerusercontent.com/images/mjVeVyTpIxBkX4PqovMB92wwao0.png",
        note: "Consolidated metrics for active projects, team availability, and upcoming deliverables.",
      },
      {
        title: "02. HR & Employee Directory",
        image: "https://framerusercontent.com/images/AD2obtND6Ll0w2gTlP6Kmocvcs.png",
        note: "Fast search, performance reviews, and leave request management.",
      },
      {
        title: "03. Task & Sprint Tracker",
        image: "https://framerusercontent.com/images/qmu2Y0W4uwUIGMxyJ9xliGA284.png",
        note: "Fluid task management with drag-and-drop status transitions.",
      },
    ],
    usabilityText:
      "Carried out weekly design review sessions with internal teams to stress-test high-density tables and keyboard navigation efficiency.",
    problem1: {
      title: "Problem: Cluttered Project Boards",
      desc: "Teams with 50+ simultaneous tasks felt lost in dense table views without intuitive filters.",
      screen: "https://framerusercontent.com/images/AD2obtND6Ll0w2gTlP6Kmocvcs.png",
    },
    solution1: {
      title: "Solution: Dynamic Filter Chips & Saved Views",
      desc: "Allowed users to instantly toggle between 'My Tasks', 'Urgent', and 'Awaiting Review'.",
      screen: "https://framerusercontent.com/images/qmu2Y0W4uwUIGMxyJ9xliGA284.png",
    },
    impactText:
      "The newly designed SaaS ecosystem consolidated 4 disparate third-party tools into a single platform, eliminating recurring licensing fees and speeding up sprint handoffs.",
    metrics: [
      {
        value: "35%",
        label: "Improvement in Sprint Velocity",
        context: "Fewer sync meetings required to confirm task status",
      },
      {
        value: "4 in 1",
        label: "Tools Consolidated",
        context: "Replaced separate time, HR, task, and chat tools",
      },
      {
        value: "95%",
        label: "Daily Employee Adoption",
        context: "Within first 2 weeks of company-wide release",
      },
    ],
    learnings: [
      "Information density must be balanced with visual breathing room in SaaS tools.",
      "Clear design systems accelerate development and maintain UX consistency across releases.",
    ],
    nextSteps: [
      "Integrating automated payroll export functionality.",
      "Designing native iOS and Android companion apps for time tracking.",
    ],
    finalScreens: [
      {
        title: "Overview Dashboard",
        image: "https://framerusercontent.com/images/mjVeVyTpIxBkX4PqovMB92wwao0.png",
      },
      {
        title: "HR Portal",
        image: "https://framerusercontent.com/images/AD2obtND6Ll0w2gTlP6Kmocvcs.png",
      },
      {
        title: "Sprint Tracker",
        image: "https://framerusercontent.com/images/qmu2Y0W4uwUIGMxyJ9xliGA284.png",
      },
      {
        title: "Employee Profile",
        image: "https://framerusercontent.com/images/6yxVVeGGqpdxFH9KSskM70LCmA.png",
      },
      {
        title: "Analytics View",
        image: "https://framerusercontent.com/images/DxKUyeoZmZAh4ydZig2DzDcmHi0.png",
      },
    ],
  },
  {
    id: "naie",
    title: "Naie",
    subtitle:
      "Hyperlocal Salon Appointment & Discovery Platform - Solving appointment chaos, wait times, and booking transparency for customers and salon owners.",
    category: "Mobile Consumer & Operations",
    tags: ["Concept to Market", "Mobile UX", "Design System"],
    heroImage: "https://framerusercontent.com/images/9GDVkG0hUQjn0PrWmDa7kszBwI.png",
    company: "Concept Project",
    status: "Validated Prototype",
    overview:
      "Booking salon appointments is still a frustrating experience for both customers and salon owners. Most local salons rely on WhatsApp messages, manual scheduling, or outdated systems that create long waiting times, missed appointments, unclear slot availability, and chaotic communication.\n\nI designed Naie as a modern appointment booking platform focused on simplifying salon discovery, reducing waiting times, and creating a smoother scheduling experience for both customers and salon owners.",
    role: "UX/UI Designer",
    team: "Concept Project (Sole Designer)",
    timeline: "3 Months",
    beforeScreen: "https://framerusercontent.com/images/Zs90adwddfrJZVjvvO6DMwYIsX0.png",
    afterScreen: "https://framerusercontent.com/images/LCinjzvZZsansVCf8FEbNXAKHs.png",
    beforeLabel: "Manual WhatsApp / Call Chaos",
    afterLabel: "Live Slot Booking & Queue Tracking",
    interviewsText:
      "Conducted extensive qualitative and observational research in 8 local salons. Segmented users into two primary personas: salon customers seeking time-efficient bookings and salon owners needing operational clarity.",
    interviewBullets: [
      "How do customers currently pick a salon and specific stylist?",
      "Why do scheduled salon visits still result in 30-45 minute waiting times?",
      "How can owners manage walk-ins without alienating pre-booked customers?",
      "What incentive structures encourage loyalty and repeat visits?",
    ],
    keyInsights: [
      {
        title: "Wait Time Frustration",
        desc: "Customers felt deceived when appointment bookings didn't guarantee immediate service upon arrival.",
      },
      {
        title: "Stylist Loyalty",
        desc: "82% of users cared more about their specific hair stylist than the salon brand itself.",
      },
      {
        title: "Peak-Hour Overcrowding",
        desc: "Salons suffered chaotic rushes on weekends while sitting half-empty on Tuesday afternoons.",
      },
    ],
    designText:
      "Crafted a minimal, Gen Z-friendly design system with real-time queue visibility, live slot booking, stylist portfolios, and dynamic off-peak discounts.",
    designBullets: [
      "Hyperlocal map discovery with verified customer ratings and portfolio photos",
      "Live queue tracking showing '2 clients ahead of you, estimated seat at 3:15 PM'",
      "Individual stylist schedule picker with specialty badges",
      "Owner companion dashboard for managing walk-ins alongside digital reservations",
    ],
    designScreens: [
      {
        title: "01. Hyperlocal Discovery",
        image: "https://framerusercontent.com/images/9GDVkG0hUQjn0PrWmDa7kszBwI.png",
        note: "Explore nearby studios with transparent pricing and real-time open slots.",
      },
      {
        title: "02. Stylist & Slot Selection",
        image: "https://framerusercontent.com/images/Zs90adwddfrJZVjvvO6DMwYIsX0.png",
        note: "Choose your preferred professional and lock in a 15-minute window.",
      },
      {
        title: "03. Live Queue & Tracker",
        image: "https://framerusercontent.com/images/LCinjzvZZsansVCf8FEbNXAKHs.png",
        note: "Real-time updates allowing clients to arrive exactly when their chair is ready.",
      },
    ],
    usabilityText:
      "Conducted usability walkthroughs with 12 consumers and 4 salon owners using high-fidelity Figma prototypes.",
    problem1: {
      title: "Problem: Unpredictable Service Durations",
      desc: "Hair coloring or complex treatments frequently ran over, throwing off subsequent appointments.",
      screen: "https://framerusercontent.com/images/Zs90adwddfrJZVjvvO6DMwYIsX0.png",
    },
    solution1: {
      title: "Solution: Dynamic Buffer Time & Live Delay Alerts",
      desc: "Algorithm automatically prompts upcoming clients if a stylist runs 10 minutes behind schedule.",
      screen: "https://framerusercontent.com/images/LCinjzvZZsansVCf8FEbNXAKHs.png",
    },
    impactText:
      "Naie validated a scalable business framework that reduces customer idle waiting time by up to 70% while improving salon chair occupancy throughout the workweek.",
    metrics: [
      {
        value: "70%",
        label: "Reduction in In-Salon Wait Time",
        context: "Customers arrive just-in-time for their service",
      },
      {
        value: "+40%",
        label: "Off-Peak Booking Boost",
        context: "Driven by dynamic smart discounts during slow hours",
      },
      {
        value: "4.8★",
        label: "Prototype Concept Rating",
        context: "Across all tested salon owners and frequent customers",
      },
    ],
    learnings: [
      "Two-sided marketplaces require balancing distinct user needs without compromising simplicity.",
      "Transparency builds brand trust – Clear slot visibility turns frustrated walk-ins into loyal clients.",
    ],
    nextSteps: [
      "Piloting the MVP with 5 boutique salons in Ahmedabad.",
      "Adding loyalty reward streaks and personalized product recommendations.",
    ],
    finalScreens: [
      {
        title: "Discovery Screen",
        image: "https://framerusercontent.com/images/9GDVkG0hUQjn0PrWmDa7kszBwI.png",
      },
      {
        title: "Salon Details",
        image: "https://framerusercontent.com/images/Zs90adwddfrJZVjvvO6DMwYIsX0.png",
      },
      {
        title: "Service Selector",
        image: "https://framerusercontent.com/images/LCinjzvZZsansVCf8FEbNXAKHs.png",
      },
      {
        title: "Live Queue",
        image: "https://framerusercontent.com/images/sLYU06Fc7EvKRgIxGnxfbchZE.png",
      },
      {
        title: "Owner Dashboard",
        image: "https://framerusercontent.com/images/LEMq5qYu5Vh0m0ZBtmtiBfYN0R0.png",
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Roushan has an exceptional ability to unpack complex SaaS workflows and turn them into crisp, delightful user interfaces that developers can ship with confidence.",
    author: "Filipa Machado",
    role: "AML RightSource",
    company: "Enterprise FinTech",
    linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Filipa%20Machado%20AML%20RightSource",
  },
  {
    quote:
      "From user research through to high-fidelity design systems, Roushan brings deep product strategy, collaborative energy, and speed to every initiative.",
    author: "Nikhil Shirode",
    role: "Maxlence Consulting",
    company: "Product Strategy",
    linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Nikhil%20Shirode%20Maxlence%20Consulting",
  },
  {
    quote:
      "Roushan's mastery of AI-assisted design tooling and ethical interface research sets him apart. He always ties visual craft back to measurable business outcomes.",
    author: "Jaideep Banerjee",
    role: "UID Karnavati University",
    company: "Design Education",
    linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jaideep%20Banerjee%20Karnavati%20University",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "Jan 2025 - Jun 2026",
    company: "UID",
    role: "UX Designer (TA)",
    workMode: "On-site (Gandhinagar, GJ)",
    logoUrl: "https://framerusercontent.com/images/DiT0AjiPApWtO5B0iv2chsQf34.jpg",
    websiteUrl: "https://karnavatiuniversity.edu.in/uid/",
    description:
      "Taught UX/UI Design and related subjects while designing industry-aligned learning experiences, contributing to the UID and conference websites, developing the MVP for a Jury Management System, and supporting NAAC A+ accreditation through academic documentation.",
  },
  {
    year: "Oct 2022 - Jul 2024",
    company: "AML Rightsource",
    role: "UX Designer",
    workMode: "Onsite/remote (Noida, UP)",
    logoUrl: "https://framerusercontent.com/images/TTzTzF5PsBgoBxwYGVgWHqCRi8.jpg",
    websiteUrl: "https://www.amlrightsource.com",
    description:
      "Conducted 20+ user interviews, resolved 10+ critical UX issues, and led a platform redesign that improved usability, navigation, and user engagement across enterprise regulatory workflows.",
  },
  {
    year: "Sep 2021 - Oct 2022",
    company: "Maxlence Consulting",
    role: "UX Designer",
    workMode: "Remote/Onsite (Gurugram, HR)",
    logoUrl: "https://framerusercontent.com/images/t2GLwdkI4irC1GKFfFYiHALqFw.jpg",
    websiteUrl: "https://maxlence.com.au",
    description:
      "Owned the UX design of HR and project management SaaS products, taking ideas from inception to developer-ready prototypes with scalable design systems.",
  },
  {
    year: "Feb 2021 - Sep 2021",
    company: "SEEKMY",
    role: "UI/UX Designer",
    workMode: "Remote/Onsite (Thalassery, KR)",
    logoUrl: "https://framerusercontent.com/images/HdopiU5CNvnYltKa9BUuB3VdQM.jpg",
    websiteUrl: "https://www.linkedin.com/search/results/all/?keywords=SEEKMY%20Healthcare",
    description:
      "Conducted user research, interviews, and mobile-first UI design for B2C healthcare products, contributing from discovery through implementation.",
  },
  {
    year: "Nov 2019 - Jan 2021",
    company: "RADAR 108",
    role: "Visual Designer",
    workMode: "Onsite/Remote (Hyderabad, AR)",
    logoUrl: "https://framerusercontent.com/images/diSnALBTYBCZ1ucmUXt0F8bsEOY.jpg",
    websiteUrl: "https://radar108.com",
    description:
      "Designed visual assets, including social media creatives, presentations, iconography, animations, and UI interfaces to support internal branding and communication.",
  },
  {
    year: "Jan 2019 - Feb 2019",
    company: "SWASTIKA (PIXELA)",
    role: "Visual Design (Intern)",
    workMode: "Onsite (Indore, MP)",
    logoUrl: "https://framerusercontent.com/images/ErBoP46KXUdX53tMEH62HxKJJqU.jpg",
    websiteUrl: "https://www.linkedin.com/search/results/all/?keywords=Swastika%20Pixela%20Design",
    description:
      "Designed client email marketing templates and contributed to UI design projects, enhancing digital experiences and brand consistency.",
  },
  {
    year: "Jun 2018 - Aug 2018",
    company: "JAGANA",
    role: "Graphic Design (Intern)",
    workMode: "Onsite (Pune, MH)",
    logoUrl: "https://framerusercontent.com/images/TEpIlVzxxaMTMsnYVnueWcg2h94.jpg",
    websiteUrl: "https://theorg.com/org/jagana-design",
    description:
      "Developed Hindi brand assets, designed product packaging, and applied typography principles to create effective visual communication.",
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    year: "2025 to 2028 (Expected)",
    institution: "Karnavati University",
    degree: "Doctor of Philosophy (PhD) in Interface Design",
    logoUrl: "/karnavati-logo.webp",
    websiteUrl: "https://karnavatiuniversity.edu.in",
    details: "Research area: dark patterns, interfaceless UI, and ethical user experiences.",
  },
  {
    year: "2017 to 2019",
    institution: "Avantika University",
    degree: "Master of Design in Communication Design",
    logoUrl: "/avantika-logo.svg",
    websiteUrl: "https://www.avantikauniversity.edu.in",
    details: "Specialized in user interface, user research, interaction design, and graphic design.",
  },
  {
    year: "2014 to 2017",
    institution: "DAVV (IK College, Indore)",
    degree: "Bachelor of Arts (BA)",
    logoUrl: "/davv-logo.svg",
    websiteUrl: "https://www.dauniv.ac.in",
    details: "Subjects: Psychology, Sociology, Political Science, Entrepreneurship, Computer, and English.",
  },
  {
    year: "2007 to 2009",
    institution: "HD Jain College, Ara",
    degree: "Intermediate in Arts",
    logoUrl: "/hdjain-logo.svg",
    websiteUrl: "https://hdjaincollege.ac.in",
    details: "Completed higher secondary education in Arts stream.",
  },
  {
    year: "2007",
    institution: "HNK High School, Ara",
    degree: "Matriculation (10th)",
    logoUrl: "/hnk-logo.svg",
    details: "Completed secondary school education / Matriculation.",
  },
];
