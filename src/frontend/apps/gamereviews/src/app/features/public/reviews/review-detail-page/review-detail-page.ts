import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-review-detail-page',
  imports: [AsyncPipe],
  templateUrl: './review-detail-page.html',
  styleUrl: './review-detail-page.scss',
})
export class ReviewDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly contentDataService = inject(ContentDataService);

  readonly review$ = this.route.paramMap.pipe(
    map((params) => params.get('slug') ?? ''),
    switchMap((slug) => this.contentDataService.getReviewBySlug(slug)),
  );
}
