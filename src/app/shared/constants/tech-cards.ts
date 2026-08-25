export type TechCardConfig = {
  displayName: string;
  logo: string;
  color: string;
  border: string;
  text: string;
  logoColor: string;
  shadow: string;
  variant: string;
  tagLabel: string;
  tagBg: string;
  tagText: string;
};

const TECH_CARD_MAP: Record<string, TechCardConfig> = {
  'Node.js': {
    displayName: 'Node.js',
    logo: 'assets/logos/tech/nodejs.svg',
    color: '#339933',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.45)',
    variant: 'project-tech__card--green',
    tagLabel: 'BACKEND',
    tagBg: '#ffffff',
    tagText: '#0b0b0b'
  },
  React: {
    displayName: 'React',
    logo: 'assets/logos/tech/react.svg',
    color: '#61DAFB',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.45)',
    variant: 'project-tech__card--blue',
    tagLabel: 'FRONTEND',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  Docker: {
    displayName: 'Docker',
    logo: 'assets/logos/tech/docker.svg',
    color: '#2496ED',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'CONTAINER',
    tagBg: '#ffffff',
    tagText: '#2496ED'
  },
  SQLite: {
    displayName: 'SQLite',
    logo: 'assets/logos/tech/sqlite.svg',
    color: '#003B57',
    border: '#ffffff',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--ink',
    tagLabel: 'DATA',
    tagBg: '#ffffff',
    tagText: '#003B57'
  },
  'Express.js': {
    displayName: 'Express.js',
    logo: 'assets/logos/tech/express.svg',
    color: '#000000',
    border: '#ffffff',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(255,255,255,0.15)',
    variant: 'project-tech__card--ink',
    tagLabel: 'BACKEND',
    tagBg: '#ffffff',
    tagText: '#000000'
  },
  HTML: {
    displayName: 'HTML5',
    logo: 'assets/logos/tech/html5.svg',
    color: '#E34F26',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--orange',
    tagLabel: 'FRONTEND',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  CSS: {
    displayName: 'CSS3',
    logo: 'assets/logos/tech/css3.svg',
    color: '#1572B6',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'FRONTEND',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  JavaScript: {
    displayName: 'JavaScript',
    logo: 'assets/logos/tech/javascript.svg',
    color: '#F7DF1E',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--yellow',
    tagLabel: 'FRONTEND',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  MySQL: {
    displayName: 'MySQL',
    logo: 'assets/logos/tech/mysql.svg',
    color: '#4479A1',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'DATA',
    tagBg: '#ffffff',
    tagText: '#4479A1'
  },
  Linux: {
    displayName: 'Linux',
    logo: 'assets/logos/tech/linux.svg',
    color: '#FCC624',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--yellow',
    tagLabel: 'INFRA',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  Cloudflared: {
    displayName: 'Cloudflare',
    logo: 'assets/logos/tech/cloudflare.svg',
    color: '#F38020',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--orange',
    tagLabel: 'PROXY',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  N8N: {
    displayName: 'n8n',
    logo: 'assets/logos/tech/n8n.svg',
    color: '#EA4B71',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#0b0b0b',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--magenta',
    tagLabel: 'AUTOMATION',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  Angular: {
    displayName: 'Angular',
    logo: 'assets/logos/tech/angular.svg',
    color: '#DD0031',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--red',
    tagLabel: 'FRONTEND',
    tagBg: '#ffffff',
    tagText: '#DD0031'
  },
  'C#': {
    displayName: 'C#',
    logo: 'assets/logos/tech/csharp.svg',
    color: '#239120',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--green',
    tagLabel: 'BACKEND',
    tagBg: '#ffffff',
    tagText: '#239120'
  },
  '.NET': {
    displayName: '.NET',
    logo: 'assets/logos/tech/dotnet.svg',
    color: '#0b0b0b',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#512BD4',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--purple',
    tagLabel: 'BACKEND',
    tagBg: '#ffffff',
    tagText: '#512BD4'
  },
  'SQL Server': {
    displayName: 'SQL Server',
    logo: 'assets/logos/tech/microsoftsqlserver.svg',
    color: '#0078D4',
    border: '#ffffff',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--red',
    tagLabel: 'DATA',
    tagBg: '#ffffff',
    tagText: '#0078D4'
  },
  'Microsoft Azure': {
    displayName: 'Microsoft Azure',
    logo: 'assets/logos/tech/microsoftazure.svg',
    color: '#0078D4',
    border: '#0b0b0b',
    text: '#ffffff',
    logoColor: '#ffffff',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'CLOUD',
    tagBg: '#ffffff',
    tagText: '#0078D4'
  },
  GCP: {
    displayName: 'Google Cloud',
    logo: 'assets/logos/tech/googlecloud.svg',
    color: '#ffffff',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#4285F4',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'CLOUD',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  },
  GC: {
    displayName: 'Google Cloud',
    logo: 'assets/logos/tech/googlecloud.svg',
    color: '#ffffff',
    border: '#0b0b0b',
    text: '#0b0b0b',
    logoColor: '#4285F4',
    shadow: 'rgba(0,0,0,0.5)',
    variant: 'project-tech__card--blue',
    tagLabel: 'CLOUD',
    tagBg: '#0b0b0b',
    tagText: '#ffffff'
  }
};

const SLUG_ALIASES: Record<string, string> = {
  'c#': 'csharp',
  'c++': 'cplusplus',
  '.net': 'dotnet',
  '.net 8': 'dotnet',
  '.net core': 'dotnet',
  'asp.net': 'dotnet',
  'node.js': 'nodedotjs',
  'nodejs': 'nodedotjs',
  'vue.js': 'vuedotjs',
  'vue': 'vuedotjs',
  'next.js': 'nextdotjs',
  'nextjs': 'nextdotjs',
  'nest.js': 'nestjs',
  'sql server': 'microsoftsqlserver',
  'ms sql': 'microsoftsqlserver',
  'tailwind': 'tailwindcss',
  'tailwind css': 'tailwindcss',
  'spring': 'springboot',
  'spring boot': 'springboot',
  'google cloud': 'googlecloud',
  'gcp': 'googlecloud',
  'aws': 'amazonwebservices',
  'azure': 'microsoftazure',
  'express': 'express',
  'express.js': 'express',
  'react native': 'react',
  'three.js': 'threedotjs',
  'threejs': 'threedotjs',
  'socket.io': 'socketdotio',
  'vitest': 'vitest',
  'jest': 'jest',
  'cypress': 'cypress',
  'playwright': 'playwright',
  'figma': 'figma',
  'vite': 'vite',
  'webpack': 'webpack',
  'electron': 'electron',
  'flutter': 'flutter',
  'dart': 'dart',
  'rust': 'rust',
  'golang': 'go',
  'go': 'go',
  'python': 'python',
  'django': 'django',
  'flask': 'flask',
  'fastapi': 'fastapi',
  'ruby': 'ruby',
  'rails': 'rubyonrails',
  'ruby on rails': 'rubyonrails',
  'php': 'php',
  'laravel': 'laravel',
  'symfony': 'symfony',
  'redis': 'redis',
  'rabbitmq': 'rabbitmq',
  'apache kafka': 'apachekafka',
  'kafka': 'apachekafka',
  'elasticsearch': 'elasticsearch',
  'graphql': 'graphql',
  'apollo': 'apollographql',
  'supabase': 'supabase',
  'firebase': 'firebase',
  'prisma': 'prisma',
  'typeorm': 'typeorm',
  'drizzle': 'drizzle',
  'git': 'git',
  'github': 'github',
  'gitlab': 'gitlab',
  'github actions': 'githubactions',
  'terraform': 'terraform',
  'ansible': 'ansible',
  'linux': 'linux',
  'ubuntu': 'ubuntu',
  'nginx': 'nginx',
  'apache': 'apache'
};

function normalizeSlug(name: string): string {
  const clean = name.trim().toLowerCase();
  if (SLUG_ALIASES[clean]) {
    return SLUG_ALIASES[clean];
  }
  return clean
    .replace(/\.js$/i, 'dotjs')
    .replace(/\+/g, 'plus')
    .replace(/\#/g, 'sharp')
    .replace(/[^a-z0-9]/g, '');
}

const DYNAMIC_VARIANTS = [
  { variant: 'project-tech__card--blue', color: '#2496ED', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#2496ED' },
  { variant: 'project-tech__card--green', color: '#339933', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#339933' },
  { variant: 'project-tech__card--orange', color: '#E34F26', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#E34F26' },
  { variant: 'project-tech__card--red', color: '#DD0031', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#DD0031' },
  { variant: 'project-tech__card--purple', color: '#6A1B9A', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#6A1B9A' },
  { variant: 'project-tech__card--magenta', color: '#D81B60', border: '#0b0b0b', text: '#ffffff', logoColor: '#ffffff', tagLabel: 'TECH', tagBg: '#ffffff', tagText: '#D81B60' }
];

export const getTechCard = (name: string): TechCardConfig => {
  if (!name) {
    return {
      displayName: 'Stack',
      logo: 'assets/logos/tech/generic.svg',
      color: '#111111',
      border: '#ffffff',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--ink',
      tagLabel: 'STACK',
      tagBg: '#ffffff',
      tagText: '#111111'
    };
  }

  if (TECH_CARD_MAP[name]) {
    return TECH_CARD_MAP[name];
  }

  // Case-insensitive search on hardcoded map
  const match = Object.keys(TECH_CARD_MAP).find(k => k.toLowerCase() === name.trim().toLowerCase());
  if (match) {
    return TECH_CARD_MAP[match];
  }

  // Universal CDN resolution for any tech stack
  const slug = normalizeSlug(name);
  const hash = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  const style = DYNAMIC_VARIANTS[hash % DYNAMIC_VARIANTS.length];

  return {
    displayName: name,
    logo: `https://cdn.simpleicons.org/${slug}`,
    color: style.color,
    border: style.border,
    text: style.text,
    logoColor: style.logoColor,
    shadow: 'rgba(0,0,0,0.5)',
    variant: style.variant,
    tagLabel: style.tagLabel,
    tagBg: style.tagBg,
    tagText: style.tagText
  };
};
