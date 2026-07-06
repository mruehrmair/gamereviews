import { createLatestContentFeed } from './content-data.service';

describe('createLatestContentFeed', () => {
  it('combines articles and reviews with the fields needed by the feed', () => {
    const result = createLatestContentFeed({
      articles: [
        {
          id: 'article-1',
          slug: 'article-slug',
          title: 'Article title',
          updatedAt: '2026-07-01',
        },
      ],
      reviews: [
        {
          id: 'review-1',
          slug: 'review-slug',
          title: 'Review title',
          updatedAt: '2026-07-02',
        },
      ],
    });

    expect(result).toEqual([
      {
        id: 'review-1',
        slug: 'review-slug',
        title: 'Review title',
        updatedAt: '2026-07-02',
        type: 'review',
      },
      {
        id: 'article-1',
        slug: 'article-slug',
        title: 'Article title',
        updatedAt: '2026-07-01',
        type: 'article',
      },
    ]);
  });

  it('sorts content by updatedAt with the newest item first', () => {
    const result = createLatestContentFeed({
      articles: [
        {
          id: 'oldest',
          slug: 'oldest',
          title: 'Oldest',
          updatedAt: '2026-01-15',
        },
        {
          id: 'newest',
          slug: 'newest',
          title: 'Newest',
          updatedAt: '2026-06-20',
        },
      ],
      reviews: [
        {
          id: 'middle',
          slug: 'middle',
          title: 'Middle',
          updatedAt: '2026-03-10',
        },
      ],
    });

    expect(result.map(({ id }) => id)).toEqual(['newest', 'middle', 'oldest']);
  });

  it('returns an empty feed when there are no articles or reviews', () => {
    expect(createLatestContentFeed({ articles: [], reviews: [] })).toEqual([]);
  });
});
