import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { firstValueFrom } from 'rxjs';
import { ContentDataService } from './core/services/content-data.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'games/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      const contentDataService = inject(ContentDataService);
      const games = await firstValueFrom(contentDataService.getGames());

      return games.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: 'reviews/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      const contentDataService = inject(ContentDataService);
      const reviews = await firstValueFrom(contentDataService.getReviews());

      return reviews.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: 'articles/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      const contentDataService = inject(ContentDataService);
      const articles = await firstValueFrom(contentDataService.getArticles());

      return articles.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
