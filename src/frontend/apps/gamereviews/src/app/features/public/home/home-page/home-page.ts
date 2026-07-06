import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentDataService } from '../../../../core/services/content-data.service';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly contentDataService = inject(ContentDataService);

  readonly latestContent$ = this.contentDataService.getLatestContent();
}
