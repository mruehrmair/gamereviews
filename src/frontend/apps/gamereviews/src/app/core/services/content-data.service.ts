import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import contentData from '../data/content.json';
import type { Article } from '../models/article.model';
import type { ContentFeedItem } from '../models/content-feed-item.model';
import type { ContentRoot } from '../models/content.model';
import type { Game } from '../models/game.model';
import type { Review } from '../models/review.model';

type ContentFeedSourceItem = Pick<
  Article,
  'id' | 'slug' | 'title' | 'updatedAt'
>;

interface ContentFeedSource {
  articles: readonly ContentFeedSourceItem[];
  reviews: readonly ContentFeedSourceItem[];
}

export function createLatestContentFeed({
  articles,
  reviews,
}: ContentFeedSource): ContentFeedItem[] {
  return [
    ...articles.map(({ id, slug, title, updatedAt }) => ({
      id,
      slug,
      title,
      updatedAt,
      type: 'article' as const,
    })),
    ...reviews.map(({ id, slug, title, updatedAt }) => ({
      id,
      slug,
      title,
      updatedAt,
      type: 'review' as const,
    })),
  ].sort(
    (first, second) =>
      new Date(second.updatedAt).getTime() -
      new Date(first.updatedAt).getTime(),
  );
}

@Injectable({
  providedIn: 'root',
})
export class ContentDataService {
  private readonly content$: Observable<ContentRoot> = of(contentData);

  getGames(): Observable<Game[]> {
    return this.content$.pipe(map(({ games }) => games));
  }

  getGameBySlug(slug: string): Observable<Game | undefined> {
    return this.getGames().pipe(
      map((games) => games.find((game) => game.slug === slug)),
    );
  }

  getReviews(): Observable<Review[]> {
    return this.content$.pipe(map(({ reviews }) => reviews));
  }

  getReviewBySlug(slug: string): Observable<Review | undefined> {
    return this.getReviews().pipe(
      map((reviews) => reviews.find((review) => review.slug === slug)),
    );
  }

  getArticles(): Observable<Article[]> {
    return this.content$.pipe(map(({ articles }) => articles));
  }

  getArticleBySlug(slug: string): Observable<Article | undefined> {
    return this.getArticles().pipe(
      map((articles) => articles.find((article) => article.slug === slug)),
    );
  }

  getLatestContent(): Observable<ContentFeedItem[]> {
    return this.content$.pipe(map(createLatestContentFeed));
  }
}
