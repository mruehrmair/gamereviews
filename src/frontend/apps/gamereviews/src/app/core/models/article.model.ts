import type { Screenshot } from './screenshot.model';

export interface Article {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  summary: string;
  body: string;
  referencedGameIds: string[];
  screenshots: Screenshot[];
  tags: string[];
}
