export interface Project {
  id: string;
  title: string;
  category: 'android' | 'servicenow';
  subtitle: string;
  bullets: string[];
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'android' | 'servicenow' | 'soft' | 'languages';
  subCategory: string;
}

export interface Education {
  institution: string;
  fieldOfStudy: string;
  degree: string;
  gpa: string;
  duration: string;
  details: string[];
}

export interface Training {
  id: string;
  title: string;
  provider: string;
  duration: string;
  bullets: string[];
  category: 'android' | 'servicenow';
}

export interface ContactInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  servicenowResume?: string;
  summary: string;
}
