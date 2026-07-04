import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-review-list-page',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './review-list-page.html',
  styleUrl: './review-list-page.scss',
})
export class ReviewListPage {
  private readonly contentDataService = inject(ContentDataService);

  readonly reviews$ = this.contentDataService.getReviews();
}
