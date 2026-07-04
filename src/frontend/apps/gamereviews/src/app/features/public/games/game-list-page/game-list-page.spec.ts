import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { GameListPage } from './game-list-page';

describe('GameListPage', () => {
  let component: GameListPage;
  let fixture: ComponentFixture<GameListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getGames: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
