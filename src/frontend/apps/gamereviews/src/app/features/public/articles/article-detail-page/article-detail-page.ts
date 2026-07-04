import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-article-detail-page',
  imports: [AsyncPipe],
  templateUrl: './article-detail-page.html',
  styleUrl: './article-detail-page.scss',
})
export class ArticleDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly contentDataService = inject(ContentDataService);

  readonly article$ = this.route.paramMap.pipe(
    map((params) => params.get('slug') ?? ''),
    switchMap((slug) => this.contentDataService.getArticleBySlug(slug)),
  );
}
