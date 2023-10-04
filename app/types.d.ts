interface Website {
  createdAt: string;
  default: boolean;
  environment: string;
  id: number;
  ownerId: number;
  projectId: number;
  status: string;
  tracking: boolean;
  updatedAt: string;
  url: string;
}

interface Project {
  active: boolean;
  createdAt: string;
  description: string;
  github_url: string;
  image_url: string;
  language: string;
  live_url: string;
  name: string;
  updatedAt: string;
  websites: Website[];
}

interface ProjectsResponse {
  projects: Project[]
}