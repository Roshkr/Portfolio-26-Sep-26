import { CaseStudy, Testimonial, ExperienceItem, EducationItem, ToolItem } from '../types';
import designerPortrait from '../assets/images/Roushan Picture.png';
import roushaniFinalVideo from '../assets/video/Roushani Final Invoice Video.mp4';
import bridge2BusinessVideo from '../assets/video/Bridge2business.mp4';
import maxlenceVideo from '../assets/video/Maxlence.mp4';
import naieVideo from '../assets/video/NAIE.mp4';

export const DESIGNER_INFO = {
  name: "Roushan Kumar",
  brandName: "Roushan",
  tagline: "UX/UI Designer",
  location: "Ahmedabad, Gujarat, India",
  headlineHero: "Product Designer focused on",
  headlineHighlight: "complex B2B/SaaS workflows and design systems.",
  headlineSuffix: "",
  aboutHeroSubtitle: "UX/UI Designer • based in Ahmedabad, India",
  bioShort:
    "I design B2B SaaS, enterprise, and mobile products. I use research and systems thinking to make complex workflows easier to use, and build prototypes with AI tools when they help me move faster.",
  availability: "Open to new opportunities",
  email: "roushan.ux@gmail.com",
  phone: "+91 83499 33768",
  whatsappNumber: "8349933768",
  whatsappUrl: "https://wa.me/918349933768?text=Hi%20Roushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resumeUrl: "https://docs.google.com/document/d/1CQuVRXt5uDUR33oXoyLrl58bzxQXjaqzEulRBmSpc_U/edit?usp=sharing",
  socials: {
    linkedin: "https://www.linkedin.com/in/roushankuma/",
    behance: "https://www.behance.net/roushankuma",
    dribbble: "https://dribbble.com/roushankr",
    whatsapp: "https://wa.me/918349933768?text=Hi%20Roushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    email: "mailto:roushan.ux@gmail.com",
  },
  stats: [
    { value: "6+", label: "Years designing digital products" },
    { value: "20+", label: "Enterprise & SaaS products shipped" },
    { value: "7+", label: "Companies & teams collaborated with" },
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
    desc: "Primary tool for interface design, design systems, and collaboration",
    category: "Design & Systems",
    iconUrl: "/tool-logos/figma.svg",
  },
  {
    name: "Claude / Codex / Gemini",
    desc: "Used for research synthesis, content exploration, and accelerating iteration",
    category: "AI & Synthesis",
    iconUrl: "https://cdn.simpleicons.org/claude/D97757",
  },
  {
    name: "VS Code + AI coding agents",
    desc: "For tighter collaboration with engineering and faster prototyping",
    category: "Development",
    iconUrl: "/tool-logos/visualstudiocode.svg",
  },
  {
    name: "Adobe Creative Suite",
    desc: "Still essential for brand and visual refinement",
    category: "Visual Design",
    iconUrl: "/tool-logos/adobe.svg",
  },
  {
    name: "Framer",
    desc: "For high-fidelity prototypes and marketing sites",
    category: "Interactive Web",
    iconUrl: "/tool-logos/framer.svg",
  },
  {
    name: "Miro / FigJam",
    desc: "Workshops, journey maps, and team collaboration",
    category: "Strategy & Mapping",
    iconUrl: "/tool-logos/miro.svg",
  },
  {
    name: "Cursor / Replit / Lovable",
    desc: "AI-assisted building when speed matters",
    category: "Rapid Prototyping",
    iconUrl: "/tool-logos/cursor.svg",
  },
  {
    name: "Figma Make / Stitch",
    desc: "Exploration and early concept generation",
    category: "AI UI Generation",
    iconUrl: "/tool-logos/figma.svg",
  },
  {
    name: "Jira / Asana",
    desc: "Working within real product delivery systems",
    category: "Project Management",
    iconUrl: "/tool-logos/jira.svg",
  },
];

export const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    id: "roushani",
    title: "Roushani",
    subtitle:
      "A mobile invoicing tool for service businesses. Save customer and service details, create invoices, and send branded PDFs without rebuilding each invoice in a spreadsheet.",
    category: "B2B SaaS Product Design",
    tags: ["Concept to Market", "Product Design", "Interaction Design", "Mobile UX"],
    heroImage: "https://framerusercontent.com/images/xX41ciGUu12ACL5vkbPmnv8L2xM.png",
    heroVideo: roushaniFinalVideo,
    company: "Roushani Invoicing",
    status: "Production MVP",
    overview:
      "Service businesses using spreadsheets had to re-enter customer, tax, and line-item details for every invoice. I designed and built Roushani, a mobile-first invoicing product with saved customer and service details, automatic calculations, and branded PDF export.",
    role: "Product Designer + AI-Assisted Builder",
    team: "Solo Ownership (Design + AI Code)",
    timeline: "4 Weeks (Concept to Live MVP)",
    projectDetails: [
      { label: "Role", value: "UI/UX Designer & AI Assisted Developer" },
      { label: "Duration", value: "200 Hours" },
      { label: "Platform", value: "Mobile-first PWA" },
      { label: "Industry", value: "B2B SaaS" },
    ],
    liveUrl: "https://roushani.vercel.app/",
    contributionAreas: [
      {
        title: "Product Strategy",
        desc: "Defined product goals, prioritized features, and shaped the overall direction of the invoicing platform.",
      },
      {
        title: "UX Research",
        desc: "Studied how people billed clients and tested changes to the invoice flow.",
      },
      {
        title: "Information Architecture",
        desc: "Designed the complete structure of workflows, navigation, and data relationships for customers, services, and invoices.",
      },
      {
        title: "AI-Assisted Design & Development",
        desc: "Built and refined the interface and product logic with Figma Make, Stitch, Antigravity, and VS Code.",
      },
      {
        title: "Design System & Consistency",
        desc: "Established reusable visual rules for spacing, typography, and interaction patterns across the product.",
      },
      {
        title: "Full-Stack Ownership",
        desc: "Managed the Supabase database structure, authentication, data logic, PDF generation, and product stability.",
      },
    ],
    storySections: [
      {
        eyebrow: "Problem statement",
        title: "A broken billing workflow cost small businesses time and credibility",
        body: "For independent service businesses, invoicing was a recurring operational tax: up to 70% of billing time went to retyping customer, tax, and line-item details, while spreadsheet formulas and inconsistent templates created avoidable errors. The broken measure was the time from opening a tool to sending a correct invoice: the baseline was 18 minutes.",
        bullets: [
          "Repeated entry made routine billing slow and increased the chance of mistakes.",
          "Generic or inconsistent invoices made small businesses look less established to customers.",
          "Full accounting products brought ledger features and setup overhead that many users did not need.",
        ],
      },
      {
        eyebrow: "Business goals",
        title: "Help businesses create invoices with less repeat work",
        bullets: [
          "Speed up invoice creation and reduce manual effort.",
          "Let users save customers and services for instant reuse.",
          "Make branding simple for people without design skills.",
          "Make the steps clear for people without accounting software experience.",
        ],
      },
      {
        eyebrow: "Research insight",
        title: "Users wanted to spend less time repeating billing tasks",
        body: "Interviews with freelancers, agency founders, and local studio owners pointed to a narrow opportunity: reduce repeat work without importing the complexity of accounting suites. The value was both operational and presentational: get a correct invoice out quickly and make the business look credible.",
        bullets: [
          "Manual work was repeated for every invoice.",
          "Branding support was limited or missing.",
          "Users had no reliable place to manage invoice history.",
        ],
      },
      {
        eyebrow: "Core features",
        title: "Design decisions that reduced daily effort",
        bullets: [
          "Decision: put invoice creation first, then save customers and services for reuse; this prioritizes the frequent task over broad administration.",
          "Decision: limit branding to a logo and a small set of color controls, giving users a professional result without a page-builder burden.",
          "Decision: keep the dashboard to invoices, customers, services, and history; defer advanced accounting and reporting to protect a focused MVP.",
          "Decision: support responsive quick edits, PDF export, sharing, and print so the workflow fits the tools and devices small businesses already use.",
          "Pivot: stacked tax and currency inputs made users pause and second-guess calculations. I replaced the dense controls with preset choices and an inline toggle, keeping the underlying calculation visible in a live summary.",
        ],
      },
      {
        eyebrow: "Accessibility",
        title: "Keep the invoice flow easy to follow",
        body: "I used familiar labels, large controls, clear error messages, and a live total so users could check their work as they filled in an invoice.",
      },
      {
        eyebrow: "Reflection",
        title: "Test billing rules with more businesses",
        body: "Building Roushani showed me how interface choices affect calculations and the final invoice. I would test tax and currency cases with a wider range of businesses earlier. The invoice a customer receives matters as much as the screen used to create it.",
      },
    ],
    beforeScreen: "/projects/roushani-before-spreadsheet.svg",
    afterScreen: "https://framerusercontent.com/images/KTnRqrAiyWhbzM1PQbsH6Koggcg.jpeg",
    afterVideo: "/projects/roushani-invoice-demo.mp4",
    beforeLabel: "Cluttered Spreadsheet Tooling",
    afterLabel: "Setup your business and create invoice in less than 2 minutes",
    interviewsText:
      "I interviewed freelance consultants, agency founders, and local studio owners who handle weekly billing. Participants described spreadsheet formulas breaking, inconsistent branding, and time lost retyping client details. Across the observed billing workflow, repetitive entry accounted for 70% of the time.",
    interviewBullets: [
      "Why do businesses use Excel instead of accounting software?",
      "Which parts of billing take the most time?",
      "What makes an invoice feel clear and professional to a customer?",
      "Which repeated tasks could saved details remove?",
    ],
    keyInsights: [
      {
        title: "Repeated data entry",
        desc: "Users spent 70% of their billing time manually retyping client tax IDs, addresses, and line-item totals.",
      },
      {
        title: "Limited branding",
        desc: "Generic templates gave businesses little control over how an invoice looked.",
      },
      {
        title: "Too many features",
        desc: "The people I spoke with wanted a faster way to invoice, without the setup and accounting features of a larger platform.",
      },
    ],
    designText:
      "I set up large controls, clear steps, and useful defaults. A live preview shows how each change affects the invoice, and saved customer and service details reduce repeated typing.",
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
        device: "phone",
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
      "In the pilot, average invoice creation and export time fell from 18 minutes in Excel to under 3 minutes. Participants also reported no calculation errors across more than 500 invoices. The product reused customer and service details and produced branded PDFs.",
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
      "Keeping invoice creation at the center helped participants complete the core task.",
      "Building the interface alongside the data logic helped me catch validation cases earlier.",
      "AI coding tools helped me test design ideas in a working prototype sooner.",
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
        device: "phone",
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
      "I redesigned a third-party onboarding form within an existing enterprise system, clarifying company and individual paths while keeping required fields.",
    category: "Enterprise UX & Workflow",
    tags: ["Usability Testing", "Enterprise UX", "Workflow Design", "User Research"],
    heroImage: "https://framerusercontent.com/images/ODQSiBSOgvzxpJFnv9I2iPjjc7s.png",
    company: "Confidential Client (NDA)",
    status: "Final Implementation",
    overview:
      "The enterprise form needed to collect complete third-party details, but its company and individual paths were hard to scan and required fields were easy to miss. Five participants understood the field labels but rated the experience 3.5 out of 5. I tested the form with them, mapped where they hesitated, and revised the layout within the existing system.",
    role: "UX/UI Designer",
    team: "Design + Development Team",
    timeline: "1 Month",
    projectDetails: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Team", value: "Design + Development Team" },
      { label: "Duration", value: "1 Month" },
      { label: "Company", value: "Confidential Client (NDA)" },
    ],
    storySections: [
      {
        eyebrow: "Problem",
        title: "A fragmented onboarding experience",
        body: "The form needed to collect detailed third-party information, but its layout made it hard to tell which fields applied. All five participants understood the field labels, yet rated the form 3.5 out of 5. They still had to work out which path to follow and which details were required.",
      },
      {
        eyebrow: "What I did",
        title: "Map and refine the onboarding flow",
        bullets: [
          "Mapped the onboarding process before changing the form layout.",
          "Tested the existing form with five participants in 20-minute sessions; all understood field meanings, but the form still averaged 3.5/5.",
          "Reorganized company and individual fields and made required fields easier to spot.",
          "Kept the required information and documented the changes in the existing enterprise system.",
        ],
      },
      {
        eyebrow: "Research process",
        title: "Testing the moments where users hesitated",
        body: "Five participants took part in 20-minute sessions. They tried the onboarding flow and answered questions about their familiarity with onboarding tools, field meaning, required fields, and the overall form experience.",
        bullets: [
          "80% had used an onboarding tool before; 20% had not.",
          "All participants said they understood the meaning of the fields.",
          "Participants were asked whether they noticed the mandatory fields.",
          "The average experience rating was 3.5 out of 5.",
        ],
      },
      {
        eyebrow: "Participant feedback",
        title: "Make the form clearer and lighter",
        bullets: [
          "A company or individual row was confusing.",
          "Some companies may not have many details to provide.",
          "Participants asked for a clearer, less dated layout.",
          "The form should ask for fewer fields.",
        ],
      },
      {
        eyebrow: "Outcome",
        title: "A clearer form without dropping required fields",
        body: "The redesign grouped related details, clarified the company and individual paths, and made required fields easier to find. It kept the information the enterprise process needed. Any field removal would still need review with the business and compliance teams.",
      },
      {
        eyebrow: "Reflection",
        title: "Keep detailed forms focused",
        body: "Clear labels were not enough to make the form easy to use. Next, I would review each field with the teams responsible for the process, then measure completion time and errors after launch.",
      },
    ],
    beforeScreen: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
    afterScreen: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
    beforeLabel: "Fragmented Form Layout",
    afterLabel: "Structured Step-by-Step Flow",
    interviewsText:
      "I asked five participants to complete the third-party onboarding flow in 20-minute sessions, then asked about field labels, required details, and their overall experience.",
    interviewBullets: [
      "Have you used any onboarding tool before?",
      "Do you understand what the fields mean?",
      "Do you notice which fields are mandatory?",
      "How would you rate the form experience from 0 to 5?",
    ],
    keyInsights: [
      {
        title: "Most participants knew onboarding tools",
        desc: "80% said they had used an onboarding tool before; 20% had not.",
      },
      {
        title: "Fields were understood",
        desc: "All participants said they understood what the form fields meant.",
      },
      {
        title: "The form still felt confusing",
        desc: "Feedback called out confusing rows, a dated visual style, and a form with too many fields. The average experience rating was 3.5 out of 5.",
      },
    ],
    designText:
      "All five participants understood the field labels, but they still found some rows confusing, the visual design dated, and the form too long. I used the process map and their feedback to regroup fields, clarify the two paths, and make required details easier to spot. I kept controls that the enterprise process still needed.",
    designBullets: [
      "Mapped the onboarding process before changing its interface",
      "Clarified company and individual paths where participants hesitated",
      "Made required information easier to scan and improved field grouping",
      "Worked within the existing enterprise system and documented the before-and-after implementation",
    ],
    designScreens: [
      {
        title: "01. Onboarding Form",
        image: "/projects/umbrella-onboarding-flow.png",
        note: "Step-by-step onboarding flow, including service selection, action, success, and error paths.",
      },
      {
        title: "02. Existing Form",
        image: "/projects/umbrella-existing-form.png",
        note: "Original third-party form before the redesign.",
        fit: "natural",
      },
      {
        title: "03. Refined Form",
        image: "/projects/umbrella-refined-form.png",
        note: "Third-party form, shown at full height for review.",
        fit: "natural",
      },
    ],
    usabilityText:
      "Five participants reviewed the third-party onboarding flow in 20-minute sessions. The study asked about tool familiarity, field comprehension, mandatory fields, and the overall experience. Participants rated the form an average of 3.5 out of 5 and shared feedback on confusing rows, visual style, and the number of fields.",
    problem1: {
      title: "Before: Dense third-party form",
      desc: "Participants called out confusing rows, a dated appearance, and too many fields to complete.",
      screen: "https://framerusercontent.com/images/w65HWuxvZCSjNrQan5ezd20SHQ.png",
      device: "desktop",
    },
    solution1: {
      title: "After: Refined onboarding form",
      desc: "The final implementation reorganizes the form and clarifies the information users need to add a new third party.",
      screen: "https://framerusercontent.com/images/LXKJtGnGM3fv5qdOkDcpSRlbxqE.png",
      device: "desktop",
    },
    impactText:
      "The redesign addressed the issues participants could point to: a clearer hierarchy, more legible company and individual paths, visible required cues, and less competing visual noise. It reduced cognitive load by making the form easier to scan and the next action easier to infer, while keeping enterprise information requirements intact. The research suggested field reduction as an opportunity; any removal still needs validation against business and compliance needs.",
    metrics: [
      {
        value: "5",
        label: "Research participants",
        context: "20-minute sessions",
      },
      {
        value: "80%",
        label: "Had used an onboarding tool before",
        context: "20% had not",
      },
      {
        value: "3.5 / 5",
        label: "Average form experience rating",
        context: "Participant feedback",
      },
    ],
    learnings: [
      "Field comprehension alone does not guarantee a smooth form experience; users can understand fields and still find the layout confusing.",
      "A clearer visual hierarchy and fewer unnecessary fields can make detailed onboarding feel more manageable.",
      "Participant feedback helped surface specific issues in the company and individual rows.",
    ],
    nextSteps: [
      "Review the number of fields and remove information that is not essential to onboarding.",
      "Make required fields and the company or individual choices easier to scan.",
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
      "I redesigned Bridge2Business's B2B website with a developer, reorganizing its services and creating responsive desktop and mobile layouts.",
    category: "UX Strategy & Web",
    tags: ["Information Hierarchy", "UX Strategy", "Responsive Design"],
    heroImage: "https://framerusercontent.com/images/jq007KeZnDmvkFGcup4Y8OEXlw.png",
    heroVideo: bridge2BusinessVideo,
    company: "Freelance Website Redesign",
    status: "Shipped & Live",
    overview:
      "Bridge2Business's website made its services hard to understand and difficult to use on mobile. I interviewed five B2B clients, reorganized the site content, and designed responsive pages with a developer.",
    role: "IC UX/UI Designer",
    team: "1 Designer, 1 Developer",
    timeline: "15 Days",
    projectDetails: [
      { label: "Role", value: "IC UX/UI Designer" },
      { label: "Team", value: "1 Designer, 1 Developer" },
      { label: "Duration", value: "15 Days" },
      { label: "Company", value: "Bridge2Business" },
      { label: "Project type", value: "Freelance Website Redesign" },
    ],
    storySections: [
      {
        eyebrow: "Client problem",
        title: "An outdated structure made the business hard to understand",
        body: "Bridge2Business had a cluttered website with unclear page hierarchy, long blocks of text, inconsistent visuals, and hard-to-follow navigation. This made the company harder to understand and explore.",
      },
      {
        eyebrow: "What I did",
        title: "Reorganize the service information",
        bullets: [
          "Reviewed the site structure and navigation.",
          "Reordered pages and sections around the services clients needed to compare.",
          "Grouped related information into cards and clearer sections.",
          "Set consistent type, spacing, and visual rules.",
          "Redesigned the contact path and layouts for desktop and mobile.",
        ],
      },
      {
        eyebrow: "Research",
        title: "Clients needed to find services and proof quickly",
        body: "I asked five B2B clients what they look for when evaluating a potential partner and which parts of the site helped them decide whether to get in touch.",
        bullets: [
          "Clients wanted key services to be easy to find.",
          "They looked for examples and evidence of the company's work.",
          "Testimonials and case studies helped them assess the business.",
          "The site needed to work well on mobile.",
        ],
      },
      {
        eyebrow: "Concept to final design",
        title: "Group services so visitors can compare them",
        body: "I grouped related services, added project examples, and made the contact link easier to find. This gave visitors a route from reviewing services to making an inquiry.",
      },
      {
        eyebrow: "Reflection",
        title: "Responsive behavior belongs in the first concept",
        body: "I worked on the desktop structure first and addressed the mobile layout later. Next time, I would include mobile navigation and content decisions in the first round of design.",
      },
      {
        eyebrow: "Trade-offs & pushback",
        title: "Keep the service story complete without bringing back the clutter",
        body: "The site needed to explain many services without returning to long blocks of copy. I kept the details clients needed and grouped them into shorter summaries and sections.",
        bullets: [
          "Preserved the information clients needed to evaluate the offering.",
          "Used modular sections and clear calls to action to keep the experience focused.",
        ],
      },
    ],
    beforeScreen: "https://framerusercontent.com/images/NvwCzpue7KQaYCXTYTFo3MbBtdE.png",
    afterScreen: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
    beforeLabel: "Legacy Unresponsive Site",
    afterLabel: "Modern B2B Experience",
    interviewsText:
      "I interviewed five B2B clients about the information they need when evaluating a potential partner.",
    interviewBullets: [
      "Which capabilities do potential partners look for first?",
      "What do clients want to learn from a case study?",
      "What would help a client decide to book a discovery call?",
    ],
    keyInsights: [
      {
        title: "The offer was hard to scan",
        desc: "Competing slogans and long paragraphs made it difficult to see what the company did.",
      },
      {
        title: "Mobile layouts were breaking",
        desc: "More than 55% of executive traffic came from mobile devices, where tables and media did not display correctly.",
      },
      {
        title: "The contact link was hard to find",
        desc: "Visitors had to navigate several menu levels to reach the contact form.",
      },
    ],
    designText:
      "I set type and spacing rules, reorganized services and project examples, and added a sticky link to the consultation form.",
    designBullets: [
      "Established strict 8pt grid system across all breakpoints",
      "Designed interactive service comparison cards with expandable tabs",
      "Integrated social proof and partnership badges directly into hero view",
      "Created lightweight animations that maintain fast load speeds",
    ],
    designScreens: [
      {
        title: "01. Homepage and main offer",
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
      desc: "Designed a three-part selector to filter services by business size and goals.",
      screen: "https://framerusercontent.com/images/yzTTlSl6mf0PIHUI7qPAPbJVU.png",
    },
    impactText:
      "In the first 60 days after launch, the project reported 68% more discovery calls, a 40% lower bounce rate, and an average session duration 2.4 times the previous level.",
    metrics: [
      {
        value: "+68%",
        label: "Increase in Discovery Calls",
        context: "Visitors used the redesigned contact path",
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
      "Clear writing helped visitors compare the services.",
      "Documented spacing and components helped the developer implement the design consistently.",
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
      "I designed onboarding, HR, and project management workflows for a SaaS platform used by distributed teams.",
    category: "HR & Enterprise SaaS",
    tags: ["Onboarding Experience", "Interaction Design", "User Flows"],
    heroImage: "https://framerusercontent.com/images/mjVeVyTpIxBkX4PqovMB92wwao0.png",
    heroVideo: maxlenceVideo,
    company: "Maxlence Consulting",
    status: "Product Released",
    overview:
      "Maxlence wanted to bring HR tasks, project tracking, attendance, and client deliverables into one platform for distributed teams. I mapped the workflows, designed onboarding and dashboard screens, and created reusable components in Figma with the development team.",
    role: "UX Designer",
    team: "1 Designer, 1 Lead Developer",
    timeline: "15 Days",
    projectDetails: [
      { label: "Role", value: "IC UX/UI Designer" },
      { label: "Team", value: "1 Designer, 2 React Developers" },
      { label: "Duration", value: "15 Days" },
      { label: "Company", value: "Maxlence Consulting" },
    ],
    storySections: [
      {
        eyebrow: "Problem",
        title: "Onboarding had to work for different roles",
        body: "Users had to answer too many questions before reaching their dashboard. Long forms, unclear steps, and irrelevant options created confusion and made the first impression of the platform feel heavy.",
      },
      {
        eyebrow: "What I did",
        title: "Guide people to a useful dashboard faster",
        bullets: [
          "Designed the onboarding architecture from scratch.",
          "Created a step-by-step flow with grouped questions.",
          "Used conditional logic to personalize each path.",
          "Added progress indicators and clearer question hierarchy.",
          "Structured onboarding around dashboard customization goals.",
          "Optimized layouts for mobile responsiveness.",
        ],
      },
      {
        eyebrow: "Research process",
        title: "From competitive review to HR interviews",
        body: "I reviewed BambooHR, Keka, and Zendesk to understand how comparable products approached onboarding, then interviewed HR professionals to identify recurring pain points and missing functionality.",
        bullets: [
          "HR teams were bridging gaps with multiple tools.",
          "Users wanted click-based choices instead of long text input.",
          "Templates, suggestions, autocomplete, and skip options were missing.",
          "Teams needed more control over the dashboard experience.",
        ],
      },
      {
        eyebrow: "Outcome",
        title: "Onboarding questions that change by role",
        body: "The revised flow grouped questions into steps, changed options by role, and let people customize their dashboard. The team could add roles and workflows without showing every user the same long form.",
      },
      {
        eyebrow: "Reflection",
        title: "Onboarding should match the real product scope",
        body: "The product scope evolved while the flow was being designed. That made it clear that onboarding content must be validated against the confirmed MVP before adding future functionality, especially in an early-stage SaaS product.",
      },
    ],
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
        desc: "Teams handled tasks, leave requests, and file sharing across separate email and chat threads.",
      },
      {
        title: "Time-Tracking Resistance",
        desc: "Employees found the timer cumbersome to start and pause.",
      },
      {
        title: "No shared view of team work",
        desc: "Managers had no single view of project status and team availability.",
      },
    ],
    designText:
      "I designed a dashboard with configurable widgets, timer controls, role-based navigation, and a shared notification feed.",
    designBullets: [
      "Modular card dashboard customizable by department",
      "One-click attendance and quick task timer",
      "Interactive Kanban and Gantt timeline views",
      "An onboarding checklist for new employees",
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
        note: "Move tasks between project statuses with drag and drop.",
      },
    ],
    usabilityText:
      "Carried out weekly design review sessions with internal teams to stress-test high-density tables and keyboard navigation efficiency.",
    problem1: {
      title: "Problem: Cluttered Project Boards",
      desc: "Teams with more than 50 active tasks struggled to find work in dense tables without filters.",
      screen: "https://framerusercontent.com/images/AD2obtND6Ll0w2gTlP6Kmocvcs.png",
    },
    solution1: {
      title: "Solution: Filters and saved views",
      desc: "Allowed users to instantly toggle between 'My Tasks', 'Urgent', and 'Awaiting Review'.",
      screen: "https://framerusercontent.com/images/qmu2Y0W4uwUIGMxyJ9xliGA284.png",
    },
    impactText:
      "The platform brought HR, time tracking, project tasks, and chat together in one product, replacing four separate tools and reducing the number of handoffs between teams.",
    metrics: [
      {
        value: "35%",
        label: "More work completed per sprint",
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
    subtitle: "A salon booking concept that lets customers check services and availability before they visit.",
    category: "Mobile Consumer & Salon Operations",
    tags: ["Mobile UX", "Appointment Booking", "Service Design", "Two-Sided Platform"],
    heroImage: "/naie/naie-03.png",
    heroVideo: naieVideo,
    company: "Concept Project",
    status: "High-fidelity Prototype",
    overview:
      "Naie is a mobile concept for finding salons, checking services and appointment slots, and booking ahead. It also gives salon owners a way to manage appointments, staff, and walk-ins. The project explored how clearer availability could help customers plan visits and help salons coordinate their day.",
    role: "UX/UI Designer",
    team: "Concept Project (Sole Designer)",
    timeline: "3 Months",
    projectDetails: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Team", value: "Concept Project (Sole Designer)" },
      { label: "Duration", value: "3 Months" },
      { label: "Company", value: "Naie" },
    ],
    contributionAreas: [
      {
        title: "Product strategy and workflows",
        desc: "Defined the end-to-end booking experience, including discovery, appointment management, rescheduling, and reminders.",
      },
      {
        title: "Customer experience",
        desc: "Designed hyperlocal salon discovery, service and staff selection, live slot booking, and customer onboarding.",
      },
      {
        title: "Salon operations",
        desc: "Shaped owner-side appointment, staff, walk-in, customer history, and loyalty workflows.",
      },
    ],
    storySections: [
      {
        eyebrow: "Problem",
        title: "Salon appointments were fragmented and unpredictable",
        body: "Most local salons rely on WhatsApp messages, calls, spreadsheets, or manual scheduling. Customers cannot see real availability before visiting, while owners have to coordinate appointments, staff schedules, customer history, and walk-ins across separate tools.",
      },
      {
        eyebrow: "Project brief",
        title: "Show how salon booking could work",
        body: "I built a prototype to explain the booking idea to salon owners and customers and to gather feedback before development.",
      },
      {
        eyebrow: "Research",
        title: "Design for customers and salon staff",
        body: "I looked at how customers choose salons and how owners and staff handle appointments, walk-ins, and changing service times. Customers wanted to plan ahead; salon staff needed room to adjust the schedule during the day.",
      },
      {
        eyebrow: "Vision",
        title: "Room to add services later",
        body: "The first version focused on salon discovery and appointments. Later versions could add grooming recommendations and loyalty features if customers and salon owners need them.",
      },
      {
        eyebrow: "Reflection",
        title: "Schedule changes need clear updates",
        body: "A fixed appointment time cannot account for late arrivals, service delays, or a changing queue. Customers need updated wait information, and salons need room to adjust the schedule.",
      },
      {
        eyebrow: "Future state",
        title: "Where the concept could go next",
        body: "Naie could extend to other appointment-based businesses. Possible additions include schedule management, recommendations, loyalty features, and business analytics.",
      },
    ],
    beforeScreen: "/naie/naie-26.png",
    beforeLabel: "Low-fidelity flow",
    afterScreen: "/naie/naie-03.png",
    afterDevice: "phone",
    afterLabel: "High-fidelity salon discovery",
    interviewsText:
      "I explored how customers experience salon visits and how salons manage appointments, walk-ins, staff, and service time throughout the day. I worked closely with salon owners and staff to understand day-to-day customer management and the practical constraints of appointment scheduling.",
    interviewBullets: [
      "Customers need a fast, predictable way to find a salon, service, and time.",
      "Salon owners need a flexible view of appointments, staff availability, and walk-ins.",
      "Late arrivals and variable service durations can disrupt the rest of a salon's schedule.",
      "Customers want to see likely wait times and availability before they travel.",
    ],
    keyInsights: [
      {
        title: "Long wait times",
        desc: "Unpredictable foot traffic and the lack of reliable scheduling tools waste customers' time and create frustration.",
      },
      {
        title: "Inefficient appointment management",
        desc: "Balancing walk-ins with scheduled appointments creates peak-hour crowding and underused capacity at quieter times.",
      },
      {
        title: "Lack of transparency",
        desc: "Without available slots or estimated wait times, customers cannot tell when to visit.",
      },
      {
        title: "Inconsistent customer experience",
        desc: "Manual coordination makes service quality depend on daily traffic and can weaken customer retention.",
      },
    ],
    designText:
      "I designed the customer and salon-owner flows, including local salon discovery, service and staff selection, appointment booking, wait-time information, reminders, and appointment management.",
    designBullets: [
      "Defined customer and salon-owner booking workflows.",
      "Designed separate experiences for customers and salon owners.",
      "Created live slot booking, availability, and queue-tracking flows.",
      "Designed service and staff selection experiences.",
      "Created rescheduling and appointment-reminder workflows.",
      "Designed hyperlocal salon discovery.",
      "Structured an owner dashboard for appointments and staff management.",
      "Built customer history, loyalty, and onboarding experiences.",
      "Created a minimal, premium visual system for the target audience.",
    ],
    designScreens: [
      { title: "01. Style confirmation", image: "/naie/naie-01.png", note: "Review a chosen style before continuing.", device: "phone" },
      { title: "02. Choose your experience", image: "/naie/naie-02.png", note: "Select the customer or salon-owner path.", device: "phone" },
      { title: "03. Salon and service discovery", image: "/naie/naie-03.png", note: "Browse nearby services and salon categories.", device: "phone" },
      { title: "04. Customer onboarding", image: "/naie/naie-04.jpg", note: "Introduce the appointment experience and get started.", device: "phone" },
      { title: "05. Customer profile", image: "/naie/naie-05.png", note: "Manage preferences, bookings, and account support.", device: "phone" },
      { title: "06. Haircut styles", image: "/naie/naie-06.png", note: "Explore haircut styles with visual references.", device: "phone" },
      { title: "07. Service categories", image: "/naie/naie-07.png", note: "Browse grooming and salon services.", device: "phone" },
      { title: "08. Virtual try-on permission", image: "/naie/naie-08.png", note: "Request camera access before trying a style.", device: "phone" },
      { title: "09. Hairstyle try-on", image: "/naie/naie-09.png", note: "Preview a hairstyle before visiting the salon.", device: "phone" },
      { title: "10. Welcome and onboarding", image: "/naie/naie-10.jpg", note: "Explain the core value of booking with Naie.", device: "phone" },
      { title: "11. Grooming services", image: "/naie/naie-11.png", note: "Explore hair, beard, and other grooming services.", device: "phone" },
      { title: "12. Salon details and payment", image: "/naie/naie-12.png", note: "Review a salon, select a service, and complete a booking.", device: "phone" },
      { title: "13. Select services and stylist", image: "/naie/naie-13.png", note: "Build an appointment from services and staff choices.", device: "phone" },
      { title: "14. Service discovery", image: "/naie/naie-14.png", note: "Explore salon categories and local businesses.", device: "phone" },
      { title: "15. Try-on preview", image: "/naie/naie-15.png", note: "Review a hairstyle preview and continue to the salon.", device: "phone" },
      { title: "16. Naie welcome screen", image: "/naie/naie-16.png", note: "Introduce the Naie product and start the experience.", device: "phone" },
      { title: "17. Appointment management", image: "/naie/naie-17.png", note: "Review an upcoming booking and change its time.", device: "phone" },
    ],
    usabilityText:
      "Early usability testing highlighted unclear labels, input choices, and navigation behavior that could make a straightforward booking feel harder than necessary. The annotated screens capture the questions and expectations that shaped the next iteration.",
    problem1: {
      title: "Testing insight: Save a tried hairstyle",
      desc: "A participant wanted to download a hairstyle they had already tried, so they could revisit it later.",
      screen: "/naie/naie-27.png",
    },
    solution1: {
      title: "Testing insight: Phone-number sign-up",
      desc: "A participant preferred creating an account with a phone number rather than Facebook.",
      screen: "/naie/naie-28.png",
    },
    impactText:
      "The prototype brings salon discovery, service details, availability, and booking into the customer flow, with appointment and staff tools for salon owners. It explores whether showing availability earlier could reduce uncertainty and help salons coordinate their schedules.",
    metrics: [
      { value: "02", label: "Connected audiences", context: "Salon customers and owners" },
      { value: "17", label: "Product screens", context: "Discovery, booking, try-on, and appointments" },
      { value: "03", label: "Months", context: "Concept design project" },
    ],
    learnings: [
      "Reducing wait time is not only a scheduling problem; it is also a trust and communication problem.",
      "Real-time updates and notifications help users feel confident that the system is actively managing their appointment.",
      "Small delays create a chain reaction, so queue management needs to be flexible rather than static.",
      "Service products must balance business efficiency and customer convenience at the same time.",
    ],
    nextSteps: [
      "Explore smart scheduling for salons and other appointment-based businesses.",
      "Develop personalized recommendations, loyalty systems, analytics, and business-management tools.",
    ],
    visualSections: [
      {
        eyebrow: "Project brief",
        title: "Framing the service opportunity",
        intro: "The project framing and initial plan established the opportunity to save customers time while helping salons coordinate daily operations.",
        images: [
          { title: "Naie project framing", image: "/naie/naie-18.png", alt: "Naie project framing: customers wait for salon service, while the product aims to save time." },
          { title: "Naie project plan", image: "/naie/naie-19.png", alt: "Naie project timeline and phased product design plan." },
        ],
      },
      {
        eyebrow: "Research",
        title: "Understanding customer needs and salon operations",
        intro: "Persona, empathy, and research artifacts capture the expectations of customers and the practical needs of salon staff.",
        images: [
          { title: "Customer persona", image: "/naie/naie-20.png", alt: "Customer persona for a customer seeking faster local salon appointments." },
          { title: "Customer empathy map", image: "/naie/naie-21.png", alt: "Empathy map summarizing customer thoughts, needs, actions, and feelings." },
          { title: "Research insight map", image: "/naie/naie-22.png", alt: "Naie research insight map showing customer and salon opportunity areas." },
          { title: "Competitive research matrix", image: "/naie/naie-23.png", alt: "Competitive research matrix comparing salon appointment and discovery products." },
        ],
      },
      {
        eyebrow: "Journey mapping",
        title: "Map the booking steps",
        intro: "The map follows a customer from salon discovery through service selection, booking, and the appointment.",
        images: [
          { title: "Customer booking journey", image: "/naie/naie-24.png", alt: "Customer journey and service flow for booking a salon appointment with Naie." },
        ],
      },
      {
        eyebrow: "Information architecture",
        title: "Organize the product around salon tasks",
        intro: "The information architecture groups discovery, booking, services, and account management into a navigable product structure.",
        images: [
          { title: "Naie information architecture", image: "/naie/naie-25.png", alt: "Naie information architecture for customer discovery, booking, and account areas." },
        ],
      },
      {
        eyebrow: "Low fidelity",
        title: "Test the end-to-end service before polishing screens",
        intro: "Early wireframes connect onboarding, discovery, salon details, service selection, booking, and account management into a testable flow.",
        images: [
          { title: "Low-fidelity wireframe flow", image: "/naie/naie-26.png", alt: "Low-fidelity Naie mobile wireframes showing the end-to-end customer booking flow." },
        ],
      },
      {
        eyebrow: "Usability testing",
        title: "Testing showed where users got stuck",
        intro: "Annotated test screens record user preferences around try-on, sign-up, search, saved salons, quick availability, and navigation icons.",
        images: [
          { title: "Save a tried hairstyle", image: "/naie/naie-27.png", alt: "Usability note: a user wanted to download a hairstyle they had tried." },
          { title: "Phone-number sign-up", image: "/naie/naie-28.png", alt: "Usability note: a user preferred phone-number sign-up over Facebook." },
          { title: "Search behavior", image: "/naie/naie-29.png", alt: "Usability note: no user used the microphone feature to search." },
          { title: "Save a salon and stylist", image: "/naie/naie-30.png", alt: "Usability note: a user wanted to save a salon and stylist for later." },
          { title: "Find a salon soon", image: "/naie/naie-31.png", alt: "Usability note: a user wanted to find a nearby salon available in five or ten minutes." },
          { title: "Clear navigation icons", image: "/naie/naie-32.png", alt: "Usability note: users understood the meanings of the navigation icons." },
        ],
      },
      {
        eyebrow: "High fidelity",
        title: "A minimal booking experience for everyday use",
        intro: "The final direction pairs a calm visual system with fast service discovery, transparent availability, and easy-to-understand booking choices.",
        images: [
          { title: "High-fidelity product flow", image: "/naie/naie-33.png", alt: "Naie high-fidelity mobile product screens for salon discovery, appointments, and customer account tasks." },
        ],
      },
    ],
    finalScreens: [
      { title: "Salon and service discovery", image: "/naie/naie-03.png", device: "phone" },
      { title: "Salon details and payment", image: "/naie/naie-12.png", device: "phone" },
      { title: "Choose services and stylist", image: "/naie/naie-13.png", device: "phone" },
      { title: "Hairstyle try-on", image: "/naie/naie-15.png", device: "phone" },
      { title: "Manage an upcoming booking", image: "/naie/naie-17.png", device: "phone" },
    ],
  },
  {
    id: "design-system-icons",
    title: "Design system, components & icons",
    subtitle: "A practical foundation for consistent product interfaces: reusable components, clear usage rules, and an icon family that supports fast, confident scanning.",
    category: "Design Systems",
    tags: ["Design System", "Components", "Iconography"],
    heroImage: "",
    heroVideo: "/projects/color-system.mp4",
    overview: "I created a design system for the entire platform so product screens and workflows could stay consistent. I collaborated with the design manager and development team over two months, defining shared foundations, reusable components, and iconography for the platform.",
    role: "Product Designer, platform-wide design system",
    team: "Design Manager and Development Team",
    timeline: "2 Months",
    beforeScreen: "",
    afterScreen: "",
    interviewsText: "",
    interviewBullets: [],
    keyInsights: [],
    designText: "",
    designBullets: [],
    designScreens: [],
    usabilityText: "",
    problem1: { title: "", desc: "" },
    solution1: { title: "", desc: "" },
    impactText: "",
    metrics: [],
    learnings: [],
    nextSteps: [],
    finalScreens: [],
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
    role: "UX Designer (Teaching Assistant)",
    workMode: "On-site (Gandhinagar)",
    logoUrl: "https://framerusercontent.com/images/DiT0AjiPApWtO5B0iv2chsQf34.jpg",
    websiteUrl: "https://karnavatiuniversity.edu.in/uid/",
    description:
      "Led UX design for institutional products, including an MVP Jury Management System for student portfolio evaluations and academic conference web portals. Mentored design cohorts in user research, design systems, and interaction design. Wrote process documentation used for NAAC A+ accreditation.",
  },
  {
    year: "Oct 2022 - Jul 2024",
    company: "AML Rightsource",
    role: "UX Designer",
    workMode: "Onsite / Remote (Noida)",
    logoUrl: "https://framerusercontent.com/images/TTzTzF5PsBgoBxwYGVgWHqCRi8.jpg",
    websiteUrl: "https://www.amlrightsource.com",
    description:
      "Led UX for complex enterprise regulatory workflows. Conducted 20+ user interviews, identified and resolved critical usability issues, and drove a platform redesign that improved navigation, task completion, and overall engagement across high-stakes compliance tools.",
  },
  {
    year: "Sep 2021 - Oct 2022",
    company: "Maxlence Consulting",
    role: "UX Designer",
    workMode: "Remote / Onsite (Gurugram)",
    logoUrl: "https://framerusercontent.com/images/t2GLwdkI4irC1GKFfFYiHALqFw.jpg",
    websiteUrl: "https://maxlence.com.au",
    description:
      "Designed HR and project management SaaS products from discovery through developer-ready designs. Built reusable design systems and interaction patterns for the products.",
  },
  {
    year: "Feb 2021 - Sep 2021",
    company: "SEEKMY",
    role: "UI/UX Designer",
    workMode: "Remote / Onsite (Thalassery)",
    logoUrl: "https://framerusercontent.com/images/HdopiU5CNvnYltKa9BUuB3VdQM.jpg",
    websiteUrl: "https://www.linkedin.com/search/results/all/?keywords=SEEKMY%20Healthcare",
    description:
      "Led research and mobile-first design for B2C healthcare products, working from discovery through implementation and collaborating closely with product and engineering.",
  },
  {
    year: "Nov 2019 - Jan 2021",
    company: "RADAR 108",
    role: "Visual Designer",
    workMode: "Onsite / Remote (Hyderabad)",
    logoUrl: "https://framerusercontent.com/images/diSnALBTYBCZ1ucmUXt0F8bsEOY.jpg",
    websiteUrl: "https://radar108.com",
    description:
      "Designed visual systems, UI interfaces, iconography, and motion assets that supported internal branding and digital communication.",
  },
  {
    year: "Jan 2019 - Feb 2019",
    company: "SWASTIKA (PIXELA)",
    role: "Visual Design (Intern)",
    workMode: "Onsite (Indore, MP)",
    logoUrl: "https://framerusercontent.com/images/ErBoP46KXUdX53tMEH62HxKJJqU.jpg",
    websiteUrl: "https://www.linkedin.com/search/results/all/?keywords=Swastika%20Pixela%20Design",
    description:
      "Foundational work in branding, packaging, and digital design.",
  },
  {
    year: "Jun 2018 - Aug 2018",
    company: "JAGANA",
    role: "Graphic Design (Intern)",
    workMode: "Onsite (Pune, MH)",
    logoUrl: "https://framerusercontent.com/images/TEpIlVzxxaMTMsnYVnueWcg2h94.jpg",
    websiteUrl: "https://theorg.com/org/jagana-design",
    description:
      "Foundational work in branding, packaging, and digital design.",
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    year: "2025 - 2028 (Expected)",
    institution: "Karnavati University",
    degree: "Doctor of Philosophy (PhD) in Interface Design",
    logoUrl: "/karnavati-logo.webp",
    websiteUrl: "https://karnavatiuniversity.edu.in",
    details: "Research focus: dark patterns, interfaceless / invisible UI, and ethical design practices in digital products.",
  },
  {
    year: "2017 - 2019",
    institution: "Avantika University",
    degree: "Master of Design in Communication Design",
    logoUrl: "/avantika-logo.svg",
    websiteUrl: "https://www.avantikauniversity.edu.in",
    details: "Specialized in user interface design, interaction design, user research, and visual communication.",
  },
  {
    year: "2014 - 2017",
    institution: "DAVV (IK College, Indore)",
    degree: "Bachelor of Arts",
    logoUrl: "/davv-logo.svg",
    websiteUrl: "https://www.dauniv.ac.in",
    details: "Psychology, Sociology, Political Science, Entrepreneurship, and Computer Science.",
  },
];
