import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { GameDetailPage } from './game-detail-page';

describe('GameDetailPage', () => {
  let component: GameDetailPage;
  let fixture: ComponentFixture<GameDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDetailPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getGameBySlug: () => of(undefined) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
