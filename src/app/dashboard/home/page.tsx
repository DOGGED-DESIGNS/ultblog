import Home from "./Home";
import { db } from "@/db/connect";

type Trend = "up" | "down" | "stable";

// Chart data type
type DailyViews = {
  date: string; // YYYY-MM-DD
  desktop: number;
  mobile: number;
};

export default async function Page() {
  // ────────────── Time windows ──────────────
  const now = new Date();

  const currentPeriodStart = new Date(now);
  currentPeriodStart.setDate(now.getDate() - 7);

  const previousPeriodStart = new Date(now);
  previousPeriodStart.setDate(now.getDate() - 14);

  // ────────────── Views ──────────────
  const currentViews = await db.postView.count({
    where: { createdAt: { gte: currentPeriodStart } },
  });

  const previousViews = await db.postView.count({
    where: { createdAt: { gte: previousPeriodStart, lt: currentPeriodStart } },
  });

  // ────────────── Subscribers ──────────────
  const totalSubscribers = await db.user.count({ where: { role: "READER" } });
  const currentSubscribers = await db.user.count({
    where: { role: "READER", createdAt: { gte: currentPeriodStart } },
  });
  const previousSubscribers = await db.user.count({
    where: {
      role: "READER",
      createdAt: { gte: previousPeriodStart, lt: currentPeriodStart },
    },
  });

  // ────────────── Posts ──────────────
  const totalPosts = await db.post.count({ where: { status: "PUBLISHED" } });
  const currentPosts = await db.post.count({
    where: { status: "PUBLISHED", createdAt: { gte: currentPeriodStart } },
  });
  const previousPosts = await db.post.count({
    where: {
      status: "PUBLISHED",
      createdAt: { gte: previousPeriodStart, lt: currentPeriodStart },
    },
  });

  // ────────────── Trend calculator ──────────────
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

  // ────────────── Stats object ──────────────
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

  // ────────────── Chart data: last 30 days ──────────────
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 30);

  // Aggregate real desktop/mobile counts from Prisma
  const dailyViewsRaw = await db.$queryRaw<
    { date: string; desktop: number; mobile: number }[]
  >`
    SELECT 
      TO_CHAR("createdAt", 'YYYY-MM-DD') AS date,
      COUNT(*) FILTER (WHERE device = 'DESKTOP') AS desktop,
      COUNT(*) FILTER (WHERE device = 'MOBILE') AS mobile
    FROM "PostView"
    WHERE "createdAt" >= ${startDate}
    GROUP BY date
    ORDER BY date ASC
  `;

  const chartData: DailyViews[] = dailyViewsRaw.map((v) => ({
    date: v.date,
    desktop: Number(v.desktop),
    mobile: Number(v.mobile),
  }));

  // ────────────── Render Home ──────────────
  return <Home stats={stats} chartData={chartData} />;
}
