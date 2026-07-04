import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-game-detail-page',
  imports: [AsyncPipe],
  templateUrl: './game-detail-page.html',
  styleUrl: './game-detail-page.scss',
})
export class GameDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly contentDataService = inject(ContentDataService);

  readonly game$ = this.route.paramMap.pipe(
    map((params) => params.get('slug') ?? ''),
    switchMap((slug) => this.contentDataService.getGameBySlug(slug)),
  );
}
