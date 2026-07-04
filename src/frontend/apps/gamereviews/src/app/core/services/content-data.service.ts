import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import type { Article } from '../models/article.model';
import type { ContentRoot } from '../models/content.model';
import type { Game } from '../models/game.model';
import type { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ContentDataService {
  private readonly http = inject(HttpClient);
  private readonly content$ = this.http
    .get<ContentRoot>('assets/data/content.json')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

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
}
