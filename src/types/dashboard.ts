export type Trend = "up" | "down" | "stable";

export type Metric = {
  total: number;
  current: number;
  percentage: number;
  trend: Trend;
};

export type DashboardStats = {
  views: Metric;
  subscribers: Metric;
  posts: Metric;
};
