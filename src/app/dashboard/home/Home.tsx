import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import {
  LogOut,
  SunIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import data from "./data.json";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardStats } from "@/types/dashboard";
import { cn } from "@/lib/tiptap-utils";
import { MinusIcon } from "lucide-react";

import type { DailyViews } from "@/types/chart";
import SignOutbutton from "@/components/SignOutbutton";

type HomeProps = DailyViews[];

const trendConfig = {
  up: {
    icon: TrendingUpIcon,
    color: "text-green-700",
    template: (percentage: number) => `Trending up this week by ${percentage}%`,
  },
  down: {
    icon: TrendingDownIcon,
    color: "text-red-700",
    template: (percentage: number) =>
      `Trending down this week by ${percentage}%`,
  },
  stable: {
    icon: MinusIcon,
    color: "text-gray-500",
    template: (_: number) => `Stable this week`,
  },
} as const;

const trendStyles = {
  up: "bg-gradient-to-t from-green-600/30",
  down: "bg-gradient-to-t from-red-600/30",
  stable: "bg-gradient-to-t from-gray-500/20",
} as const;

export default function Home({
  stats,
  chartData,
}: {
  stats: DashboardStats;
  chartData: HomeProps;
}) {
  const {
    icon: Posticon,
    color: postColor,
    template: templatePost,
  } = trendConfig[stats.posts.trend];
  const {
    icon: Subicon,
    color: subColor,
    template: templateSub,
  } = trendConfig[stats.subscribers.trend];
  const {
    icon: Viewicon,
    color: viewsColor,
    template: templateView,
  } = trendConfig[stats.views.trend];

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* <SectionCards /> */}
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <Card
                  className={cn(
                    " bg-gradient-to-t  from-green-600/30",
                    trendStyles[stats.views.trend],
                  )}
                >
                  <CardHeader className="relative">
                    <CardDescription>Total Views Per Post</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      {stats.views.total}
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          "flex gap-1 rounded-lg text-xs items-center",
                          viewsColor,
                        )}
                      >
                        <Viewicon className="size-3" />
                        {stats.views.percentage}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      {templateView(stats.views.percentage)}
                      <Viewicon
                        className={cn(" text-green-700  size-4", viewsColor)}
                      />
                    </div>
                    <div className="text-muted-foreground">
                      Viewers status from last 7 days
                    </div>
                  </CardFooter>
                </Card>
                <Card className="bg-gradient-to-t  from-red-600/30">
                  <CardHeader className="relative">
                    <CardDescription>Total Subscribers</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      5
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      <Badge
                        variant="outline"
                        className="flex gap-1 rounded-lg text-xs"
                      >
                        <TrendingDownIcon className=" text-red-700 size-3" />
                        -20%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1  flex gap-2 font-medium">
                      Down 20% this period
                      <TrendingDownIcon className=" text-red-700 size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Subscribers status from last month
                    </div>
                  </CardFooter>
                </Card>
                <Card className="bg-gradient-to-t  from-green-600/30 ">
                  <CardHeader className="relative">
                    <CardDescription>Total Post Published</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      45,678
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      <Badge
                        variant="outline"
                        className="flex text-green-700 gap-1 rounded-lg text-xs"
                      >
                        <TrendingUpIcon className="text-green-700 size-3" />
                        +12.5%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Up by 12.5%
                      <TrendingUpIcon className="text-green-700 size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Post Published status from last month
                    </div>
                  </CardFooter>
                </Card>
                {/* <Card className="@container/card">
                            <CardHeader className="relative">
                              <CardDescription>Growth Rate</CardDescription>
                              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                4.5%
                              </CardTitle>
                              <div className="absolute right-4 top-4">
                                <Badge
                                  variant="outline"
                                  className="flex gap-1 rounded-lg text-xs"
                                >
                                  <TrendingUpIcon className="size-3" />
                                  +4.5%
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1 text-sm">
                              <div className="line-clamp-1 flex gap-2 font-medium">
                                Steady performance <TrendingUpIcon className="size-4" />
                              </div>
                              <div className="text-muted-foreground">
                                Meets growth projections
                              </div>
                            </CardFooter>
                          </Card> */}
                {/* <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" /> */}
              </div>
              {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
            </div>
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive chartData={chartData} />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
