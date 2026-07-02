import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailPage } from './review-detail-page';

describe('ReviewDetailPage', () => {
  let component: ReviewDetailPage;
  let fixture: ComponentFixture<ReviewDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
