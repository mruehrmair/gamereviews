import { Route } from '@angular/router';

import { AboutPage } from './features/public/about/about-page/about-page';
import { ArticleDetailPage } from './features/public/articles/article-detail-page/article-detail-page';
import { ArticleListPage } from './features/public/articles/article-list-page/article-list-page';
import { GameDetailPage } from './features/public/games/game-detail-page/game-detail-page';
import { GameListPage } from './features/public/games/game-list-page/game-list-page';
import { HomePage } from './features/public/home/home-page/home-page';
import { ReviewDetailPage } from './features/public/reviews/review-detail-page/review-detail-page';
import { ReviewListPage } from './features/public/reviews/review-list-page/review-list-page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameListPage,
  },
  {
    path: 'games/:slug',
    component: GameDetailPage,
  },
  {
    path: 'reviews',
    component: ReviewListPage,
  },
  {
    path: 'reviews/:slug',
    component: ReviewDetailPage,
  },
  {
    path: 'articles',
    component: ArticleListPage,
  },
  {
    path: 'articles/:slug',
    component: ArticleDetailPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
];
