export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags?: string[];
  heroImage: string;
  /** Optional video to play instead of heroImage (auto-plays muted in loop) */
  heroVideo?: string;
  overview: string;
  role: string;
  team: string;
  timeline: string;
  company?: string;
  status?: string;
  beforeScreen: string;
  afterScreen: string;
  beforeVideo?: string;
  afterVideo?: string;
  beforeLabel?: string;
  afterLabel?: string;
  interviewsText: string;
  interviewBullets: string[];
  keyInsights: Array<{ title: string; desc: string }>;
  designText: string;
  designBullets: string[];
  designScreens: Array<{
    title: string;
    image: string;
    note: string;
    /** Optional video that replaces image in the carousel slide */
    videoSrc?: string;
  }>;
  usabilityText: string;
  problem1: { title: string; desc: string; screen?: string; videoSrc?: string };
  solution1: { title: string; desc: string; screen?: string; videoSrc?: string };
  impactText: string;
  metrics: Array<{ value: string; label: string; context?: string }>;
  learnings: string[];
  nextSteps: string[];
  finalScreens: Array<{
    title: string;
    image: string;
    /** Optional video shown in the final screens gallery */
    videoSrc?: string;
  }>;
  coreFeatures?: Array<{ title: string; desc: string }>;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  linkedinUrl?: string;
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  description?: string;
  logoUrl?: string;
  logoInitials?: string;
  logoColor?: string;
  websiteUrl?: string;
  workMode?: string;
}

export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  details?: string;
  logoUrl?: string;
  websiteUrl?: string;
}

export interface ToolItem {
  name: string;
  desc: string;
  category: string;
  iconName?: string;
}
