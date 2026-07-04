import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { ReviewListPage } from './review-list-page';

describe('ReviewListPage', () => {
  let component: ReviewListPage;
  let fixture: ComponentFixture<ReviewListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewListPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getReviews: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
