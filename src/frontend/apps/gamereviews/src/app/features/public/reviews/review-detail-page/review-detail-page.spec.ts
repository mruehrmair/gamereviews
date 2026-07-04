import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { ReviewDetailPage } from './review-detail-page';

describe('ReviewDetailPage', () => {
  let component: ReviewDetailPage;
  let fixture: ComponentFixture<ReviewDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDetailPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getReviewBySlug: () => of(undefined) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
