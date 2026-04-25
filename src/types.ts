export type ProjectType = 'Technique' | 'Theory' | 'Repertoire';

export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbUrl?: string;
  content?: string;
  type: ProjectType;
  level?: number;
  duration?: string;
  authorId: string;
  createdAt: any;
  updatedAt: any;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  updatedAt: any;
}
