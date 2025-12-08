import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" mt-6 px-4  max-w-screen-sm  w-full mx-auto">
        <div className=" justify-center flex flex-wrap   gap-12">
          <Card className=" flex-1">
            <CardHeader>
              <CardTitle className=" text-center">Hits</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {" "}
                <p className="  text-center p2 text-BAccent text-bold">
                  100
                </p>{" "}
              </div>
            </CardContent>
          </Card>
          <Card className=" flex-1">
            <CardHeader>
              <CardTitle className=" text-center">Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {" "}
                <p className=" text-center p2 text-purple-600 text-bold">
                  100
                </p>{" "}
              </div>
            </CardContent>
          </Card>
          <Card className=" flex-1">
            <CardHeader>
              <CardTitle className=" text-center">Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {" "}
                <p className=" text-center p2 text-green-600 text-bold">
                  100
                </p>{" "}
              </div>
            </CardContent>
          </Card>
          <Card className=" flex-1">
            <CardHeader>
              <CardTitle className=" text-center">Drafts</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {" "}
                <p className=" text-center p2  text-yellow-600 text-bold">
                  100
                </p>{" "}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="  w-full mt-10">
          <Link
            href={"/makeposts"}
            className={buttonVariants({
              className: "w-full",
              variant: "default",
              size: "lg",
            })}
          >
            {" "}
            Make Post{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
