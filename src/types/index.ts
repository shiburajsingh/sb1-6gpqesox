export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'Novice' | 'Intermediate' | 'Advanced';
  percentage: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}