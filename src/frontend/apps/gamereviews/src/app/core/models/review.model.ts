import type { Achievement } from './achievement.model';
import type { Screenshot } from './screenshot.model';

export interface Review {
  id: string;
  slug: string;
  gameId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  playedOn: string;
  dateStarted: string;
  dateCompleted: string;
  status: string;
  rating: number;
  favorite: boolean;
  summary: string;
  body: string;
  screenshots: Screenshot[];
  achievements: Achievement[];
  tags: string[];
}
