export interface ContentFeedItem {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
  type: 'article' | 'review';
}
