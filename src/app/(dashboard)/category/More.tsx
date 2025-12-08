"use client";
import React, { useState } from "react";
import Categorytable from "./Categorytable";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createCategory } from "./action";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function More() {
  const [value, setValue] = useState("");

  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: async (text: string) => {
      await createCategory(text);
    },
    mutationKey: ["createcategory"],
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Category added succefully",
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: `${err}`,
        variant: "destructive",
      });
    },
  });
  return (
    <div>
      <div className=" max-w-screen-xl mt-10 w-full px-5 mx-auto ">
        <Categorytable />
        <div className=" max-w-screen-sm mx-auto flex">
          <div className="   mx-auto mt-10">
            <Card className=" border border-BAccent">
              <CardHeader>
                <CardTitle className=" text-center text-BAccent">
                  ADD CATEGORY
                </CardTitle>
                <CardDescription className="text-center">
                  Make sure you Category is{" "}
                  <span className=" font-bold  italic p2 "> Unique </span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div>
                  <Label className="mb-3" />
                  <Input
                    className="p w-72 mx-auto font-medium"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="  mx-auto">
                  <Button disabled={isPending} onClick={() => mutate(value)}>
                    {isPending ? <Loader2 className="animate-spin" /> : "ADD"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
