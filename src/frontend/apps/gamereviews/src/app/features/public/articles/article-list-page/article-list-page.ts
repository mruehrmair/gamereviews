import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-article-list-page',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './article-list-page.html',
  styleUrl: './article-list-page.scss',
})
export class ArticleListPage {
  private readonly contentDataService = inject(ContentDataService);

  readonly articles$ = this.contentDataService.getArticles();
}
