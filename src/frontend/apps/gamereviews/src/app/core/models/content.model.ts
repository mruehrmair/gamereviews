import type { Article } from './article.model';
import type { Game } from './game.model';
import type { Review } from './review.model';

export interface ContentRoot {
  games: Game[];
  reviews: Review[];
  articles: Article[];
}
