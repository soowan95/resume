export interface ProfileData {
  name: string;
  englishName: string;
  role: string;
  tagline: string;
  summary: string[];
  email: string;
  github: string;
  blog?: string;
  location: string;
  keyMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface PrimaryBackendSkill {
  name: string;
  badge: string;
  tagline: string;
  description: string;
  coreModules: string[];
  architectureStrengths: string[];
  accentColor: "emerald" | "blue";
}

export interface SupportingSkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    detail: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  defaultOpen?: boolean;
  techStack: string[];
  overview: string;
  highlights: string[];
  architecture: {
    title: string;
    summary: string;
    mermaidCode: string;
    dataFlowSteps: {
      step: string;
      title: string;
      detail: string;
    }[];
  };
  links?: {
    github?: string;
    docs?: string;
  };
}

export interface CompanyProjectItem {
  id: string;
  title: string;
  categoryBadge: string;
  techStack: string[];
  summary: string;
  highlights: string[];
  architecture?: {
    title: string;
    summary: string;
    mermaidCode: string;
    dataFlowSteps: {
      step: string;
      title: string;
      detail: string;
    }[];
  };
}

export interface CompanyExperience {
  id: string;
  companyName: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  coreStack: string[];
  projects: CompanyProjectItem[];
}

export interface ArchitectureStep {
  phase: string;
  period: string;
  title: string;
  repos: string[];
  problemOrLimitation: string;
  solutionOrLesson: string;
}

export interface ResumeData {
  profile: ProfileData;
  architectureEvolution: ArchitectureStep[];
  primaryBackend: PrimaryBackendSkill[];
  supportingSkills: SupportingSkillGroup[];
  projects: ProjectItem[];
  experiences: CompanyExperience[];
}
