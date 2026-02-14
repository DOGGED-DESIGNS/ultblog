import Home from "./Home";
import { db } from "@/db/connect";

type Trend = "up" | "down" | "stable";

export default async function Page() {
  // ─────────────────────────────────────────────
  // Time windows
  // ─────────────────────────────────────────────
  const now = new Date();

  const currentPeriodStart = new Date(now);
  currentPeriodStart.setDate(now.getDate() - 7);

  const previousPeriodStart = new Date(now);
  previousPeriodStart.setDate(now.getDate() - 14);

  // ─────────────────────────────────────────────
  // Views
  // ─────────────────────────────────────────────
  const currentViews = await db.postView.count({
    where: {
      createdAt: { gte: currentPeriodStart },
    },
  });

  const previousViews = await db.postView.count({
    where: {
      createdAt: {
        gte: previousPeriodStart,
        lt: currentPeriodStart,
      },
    },
  });

  // ─────────────────────────────────────────────
  // Subscribers (READERS)
  // ─────────────────────────────────────────────
  const totalSubscribers = await db.user.count({
    where: { role: "READER" },
  });

  const currentSubscribers = await db.user.count({
    where: {
      role: "READER",
      createdAt: { gte: currentPeriodStart },
    },
  });

  const previousSubscribers = await db.user.count({
    where: {
      role: "READER",
      createdAt: {
        gte: previousPeriodStart,
        lt: currentPeriodStart,
      },
    },
  });

  // ─────────────────────────────────────────────
  // Posts
  // ─────────────────────────────────────────────
  const totalPosts = await db.post.count({
    where: { status: "PUBLISHED" },
  });

  const currentPosts = await db.post.count({
    where: {
      status: "PUBLISHED",
      createdAt: { gte: currentPeriodStart },
    },
  });

  const previousPosts = await db.post.count({
    where: {
      status: "PUBLISHED",
      createdAt: {
        gte: previousPeriodStart,
        lt: currentPeriodStart,
      },
    },
  });

  // ─────────────────────────────────────────────
  // Trend calculator
  // ─────────────────────────────────────────────
  const calculateTrend = (current: number, previous: number) => {
    let percentage = 0;
    let trend: Trend = "stable";

    if (previous === 0 && current > 0) {
      percentage = 100;
      trend = "up";
    } else if (previous === 0 && current === 0) {
      percentage = 0;
      trend = "stable";
    } else {
      const change = ((current - previous) / previous) * 100;
      percentage = Math.round(Math.abs(change));

      if (change > 0) trend = "up";
      else if (change < 0) trend = "down";
      else trend = "stable";
    }

    return { percentage, trend };
  };

  // ─────────────────────────────────────────────
  // Final dashboard payload
  // ─────────────────────────────────────────────
  const stats = {
    views: {
      total: currentViews + previousViews,
      current: currentViews,
      ...calculateTrend(currentViews, previousViews),
    },
    subscribers: {
      total: totalSubscribers,
      current: currentSubscribers,
      ...calculateTrend(currentSubscribers, previousSubscribers),
    },
    posts: {
      total: totalPosts,
      current: currentPosts,
      ...calculateTrend(currentPosts, previousPosts),
    },
  };

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────
  return <Home stats={stats} />;
}

// {
//   views: {
//     total: 12450,
//     current: 320,
//     percentage: 18,
//     trend: "up"
//   },
//   subscribers: {
//     total: 842,
//     current: 25,
//     percentage: 5,
//     trend: "down"
//   },
//   posts: {
//     total: 56,
//     current: 4,
//     percentage: 0,
//     trend: "stable"
//   }
// }
