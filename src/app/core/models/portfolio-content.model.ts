export type TapeTone = 'yellow' | 'primary' | 'blue';

export type ProjectTilt = 'left' | 'right' | 'neutral';

export type ProjectCard = {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  year: string;
  code: string;
  image: string;
  heroImage?: string;
  tapeTone: TapeTone;
  tilt: ProjectTilt;
  slug?: string;
  longDescription?: string;
  technicalChallenges?: string[];
  techStackDetail?: string[];
  demoUrl?: string;
  repoUrl?: string;
  gallery?: Array<{ src: string; caption: string }>;
};

export type TechTone = 'primary' | 'secondary' | 'accent' | 'ink' | 'paper' | 'light';

export type BadgeTone = 'ink' | 'primary' | 'secondary' | 'accent' | 'paper' | 'muted';

export type TechCategory = {
  title: string;
  tone: TechTone;
  badges: string[];
  badgeTones: BadgeTone[];
};

export type SheetsPayload = {
  projects: ProjectCard[];
  techStack: TechCategory[];
};
