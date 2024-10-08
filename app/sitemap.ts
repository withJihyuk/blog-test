import { allPosts } from '@/.contentlayer/generated';
import type { MetadataRoute } from 'next';

interface Page {
  url: string;
  priority: number;
  changeFrequency:
    | 'daily'
    | 'monthly'
    | 'always'
    | 'hourly'
    | 'weekly'
    | 'yearly'
    | 'never'
    | undefined;
  lastModified: string | Date | undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...allPosts.map((post) => {
      return {
        url: `https://blog.mya.ong/blog/${post._id}`,
        priority: 0.8,
        changeFrequency: 'daily',
        lastModified: post.pubDate,
      } as Page;
    }),
    {
      url: 'https://blog.mya.ong',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
