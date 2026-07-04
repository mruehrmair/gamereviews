import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-game-list-page',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './game-list-page.html',
  styleUrl: './game-list-page.scss',
})
export class GameListPage {
  private readonly contentDataService = inject(ContentDataService);

  readonly games$ = this.contentDataService.getGames();
}
