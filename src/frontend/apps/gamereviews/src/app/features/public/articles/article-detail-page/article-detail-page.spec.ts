import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { ArticleDetailPage } from './article-detail-page';

describe('ArticleDetailPage', () => {
  let component: ArticleDetailPage;
  let fixture: ComponentFixture<ArticleDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getArticleBySlug: () => of(undefined) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
