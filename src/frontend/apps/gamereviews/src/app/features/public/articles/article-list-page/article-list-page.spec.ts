import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ContentDataService } from '../../../../core/services/content-data.service';

import { ArticleListPage } from './article-list-page';

describe('ArticleListPage', () => {
  let component: ArticleListPage;
  let fixture: ComponentFixture<ArticleListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleListPage],
      providers: [
        provideRouter([]),
        {
          provide: ContentDataService,
          useValue: { getArticles: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
