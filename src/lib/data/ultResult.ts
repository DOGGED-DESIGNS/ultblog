import { PostPerformance } from "@/types/Initialdata";
import { db } from "@/db/connect";

export const ultCategory = async (category: string) => {
  const DECAY_RATE = 0.08;
  const TRENDING_THRESHOLD = 5;
  const NOW = Date.now();

  const cat = await db.category.findUnique({
    where: {
      name: category,
    },
    select: {
      id: true,
      name: true,
      posts: {
        select: {
          id: true, // ✅ added
          title: true,
          status: true,
          featured: true,
          publishedAt: true,
          category: { select: { name: true } },
          author: { select: { name: true } },
          views: { select: { createdAt: true } },
          _count: { select: { views: true } },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const result2: PostPerformance[] = (cat?.posts ?? []).map((post) => {
    let performance = null;

    if (post.status === "PUBLISHED") {
      const score = post.views.reduce((total, view) => {
        const hoursAgo =
          (NOW - new Date(view.createdAt).getTime()) / (1000 * 60 * 60);

        const weight = Math.exp(-DECAY_RATE * hoursAgo);
        return total + weight;
      }, 0);

      performance =
        score >= TRENDING_THRESHOLD ? ("TRENDING" as const) : post._count.views;
    }

    return {
      id: post.id, // ✅ added
      title: post.title,
      category: post.category?.name ?? null,
      status: post.status,
      performance,
      featured: post.featured,
      author: post.author?.name ?? null,
    };
  });

  return result2;
};

export const ultResult = async () => {
  const DECAY_RATE = 0.08;
  const TRENDING_THRESHOLD = 5;
  const NOW = Date.now();

  const posts = await db.post.findMany({
    select: {
      id: true, // ✅ added
      title: true,
      status: true,
      featured: true,
      publishedAt: true,
      category: { select: { name: true } },
      author: { select: { name: true } },
      views: { select: { createdAt: true } },
      _count: { select: { views: true } },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const result: PostPerformance[] = posts.map((post) => {
    let performance = null;

    if (post.status === "PUBLISHED") {
      const score = post.views.reduce((total, view) => {
        const hoursAgo =
          (NOW - new Date(view.createdAt).getTime()) / (1000 * 60 * 60);

        const weight = Math.exp(-DECAY_RATE * hoursAgo);
        return total + weight;
      }, 0);

      performance =
        score >= TRENDING_THRESHOLD ? ("TRENDING" as const) : post._count.views;
    }

    return {
      id: post.id, // ✅ added
      title: post.title,
      category: post.category?.name ?? null,
      status: post.status,
      performance,
      featured: post.featured,
      author: post.author?.name ?? null,
    };
  });

  return result;
};
