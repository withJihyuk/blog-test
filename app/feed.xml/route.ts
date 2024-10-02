import RSS from 'rss';
import { allPosts } from '../../.contentlayer/generated';

export async function GET() {
  const feed = new RSS({
    title: 'withJihyuk blog',
    feed_url: 'https://blog.mya.ong/feed.xml',
    site_url: 'https://blog.mya.ong',
  });

  if (allPosts) {
    allPosts.map((post) => {
      feed.item({
        title: post.title,
        description: post.title,
        url: `https://blog.mya.ong/blog/${post._id}`,
        date: post.pubDate,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
