export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
