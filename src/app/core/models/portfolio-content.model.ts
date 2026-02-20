export type TapeTone = 'yellow' | 'primary' | 'blue';

export type ProjectTilt = 'left' | 'right' | 'neutral';

export type ProjectCard = {
  title: string;
  description: string;
  year: string;
  code: string;
  image: string;
  tapeTone: TapeTone;
  tilt: ProjectTilt;
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
