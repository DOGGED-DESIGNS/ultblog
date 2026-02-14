import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { db } from "@/db/connect";
import { Category } from "@/generated/prisma/client";
import { SunIcon } from "lucide-react";
import Categorytable from "./Categorytable";

// Props provided automatically by App Router
interface PageProps {
  params: {
    category: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Page({ params }: PageProps) {
  const { category } = params;

  // Build breadcrumbs from URL manually
  const breadcrumbs = ["dashboard", "category", category];
  //   const pathname = usePathname();
  // e.g. "/dashboard/category/readers"

  // Fetch directly from DB (this runs on the server automatically)
  const data: Category[] = await db.category.findMany();

  return (
    <div>
      {/* Example content */}
      {/* <h1 className="p-4 text-xl font-bold">Category: {category}</h1>
      <pre className="p-4">{JSON.stringify(data, null, 2)}</pre> */}
      <div className=" px-4">
        <Categorytable tableTitle={category} value={category} />
      </div>
    </div>
  );
}
