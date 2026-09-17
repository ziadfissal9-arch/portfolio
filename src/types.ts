export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** What the project is and what was actually built. */
  summary: string;
  /** The engineering decisions worth pointing at. */
  highlights: string[];
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Role {
  title: string;
  org: string;
  period: string;
  points: string[];
}
