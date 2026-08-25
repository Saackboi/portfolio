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

interface BrandMeta {
  color: string;
  tag: string;
  isLightBg?: boolean;
}

const BRAND_METAS: Record<string, BrandMeta> = {
  angular: { color: '#DD0031', tag: 'FRONTEND' },
  react: { color: '#61DAFB', tag: 'FRONTEND', isLightBg: true },
  vuedotjs: { color: '#4FC08D', tag: 'FRONTEND' },
  nextdotjs: { color: '#000000', tag: 'FRONTEND' },
  nuxtdotjs: { color: '#00DC82', tag: 'FRONTEND' },
  svelte: { color: '#FF3E00', tag: 'FRONTEND' },
  tailwindcss: { color: '#06B6D4', tag: 'FRONTEND' },
  typescript: { color: '#3178C6', tag: 'LANGUAGE' },
  javascript: { color: '#F7DF1E', tag: 'LANGUAGE', isLightBg: true },
  html5: { color: '#E34F26', tag: 'FRONTEND' },
  css3: { color: '#1572B6', tag: 'FRONTEND' },
  sass: { color: '#CC6699', tag: 'FRONTEND' },
  bootstrap: { color: '#7952B3', tag: 'FRONTEND' },
  threedotjs: { color: '#040404', tag: 'FRONTEND' },
  vite: { color: '#646CFF', tag: 'TOOL' },
  dotnet: { color: '#512BD4', tag: 'BACKEND' },
  csharp: { color: '#239120', tag: 'LANGUAGE' },
  cplusplus: { color: '#00599C', tag: 'LANGUAGE' },
  nodedotjs: { color: '#339933', tag: 'BACKEND' },
  nestjs: { color: '#E0234E', tag: 'BACKEND' },
  express: { color: '#111111', tag: 'BACKEND' },
  springboot: { color: '#6DB33F', tag: 'BACKEND' },
  openjdk: { color: '#ED8B00', tag: 'LANGUAGE' },
  java: { color: '#ED8B00', tag: 'LANGUAGE' },
  python: { color: '#3776AB', tag: 'LANGUAGE' },
  fastapi: { color: '#009688', tag: 'BACKEND' },
  django: { color: '#092E20', tag: 'BACKEND' },
  flask: { color: '#000000', tag: 'BACKEND' },
  go: { color: '#00ADD8', tag: 'LANGUAGE' },
  rust: { color: '#B7410E', tag: 'LANGUAGE' },
  php: { color: '#777BB4', tag: 'LANGUAGE' },
  laravel: { color: '#FF2D20', tag: 'BACKEND' },
  postgresql: { color: '#4169E1', tag: 'DATABASE' },
  microsoftsqlserver: { color: '#CC292B', tag: 'DATABASE' },
  mysql: { color: '#4479A1', tag: 'DATABASE' },
  mongodb: { color: '#47A248', tag: 'DATABASE' },
  redis: { color: '#DC382D', tag: 'DATABASE' },
  sqlite: { color: '#003B57', tag: 'DATABASE' },
  supabase: { color: '#3FCF8E', tag: 'DATABASE' },
  firebase: { color: '#FFCA28', tag: 'DATABASE', isLightBg: true },
  prisma: { color: '#2D3748', tag: 'DATABASE' },
  docker: { color: '#2496ED', tag: 'CONTAINER' },
  kubernetes: { color: '#326CE5', tag: 'DEVOPS' },
  amazonwebservices: { color: '#FF9900', tag: 'CLOUD', isLightBg: true },
  microsoftazure: { color: '#0078D4', tag: 'CLOUD' },
  googlecloud: { color: '#4285F4', tag: 'CLOUD' },
  linux: { color: '#FCC624', tag: 'SYSTEM', isLightBg: true },
  nginx: { color: '#009639', tag: 'DEVOPS' },
  githubactions: { color: '#2088FF', tag: 'CI/CD' },
  rabbitmq: { color: '#FF6600', tag: 'QUEUE' },
  apachekafka: { color: '#231F20', tag: 'STREAM' },
  graphql: { color: '#E10098', tag: 'API' },
  git: { color: '#F05032', tag: 'TOOL' },
  github: { color: '#181717', tag: 'TOOL' },
  figma: { color: '#F24E1E', tag: 'DESIGN' },
  postman: { color: '#FF6C37', tag: 'API' }
};

const CARD_VARIANTS = [
  'project-tech__card--blue',
  'project-tech__card--green',
  'project-tech__card--orange',
  'project-tech__card--red',
  'project-tech__card--purple',
  'project-tech__card--magenta'
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

  // Universal Brand Color & CDN resolution
  const slug = normalizeSlug(name);
  const brand = BRAND_METAS[slug];
  const hash = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  const variant = CARD_VARIANTS[hash % CARD_VARIANTS.length];

  const bgColor = brand?.color || '#2496ED';
  const isLight = brand?.isLightBg ?? false;
  const textColor = isLight ? '#0b0b0b' : '#ffffff';
  const tagBg = isLight ? '#0b0b0b' : '#ffffff';
  const tagText = isLight ? '#ffffff' : bgColor;

  return {
    displayName: name,
    logo: `https://cdn.simpleicons.org/${slug}`,
    color: bgColor,
    border: isLight ? '#0b0b0b' : '#0b0b0b',
    text: textColor,
    logoColor: textColor,
    shadow: 'rgba(0,0,0,0.5)',
    variant: variant,
    tagLabel: brand?.tag || 'TECH',
    tagBg: tagBg,
    tagText: tagText
  };
};
