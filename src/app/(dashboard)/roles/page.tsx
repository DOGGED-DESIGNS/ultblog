"use client";
import React, { useState } from "react";
import Rolestable from "./Rolestable";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { addUsers } from "./action";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

enum Role {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>(Role.READER);

  // revalidate data

  const queryclient = useQueryClient();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationKey: ["addusers"],
    mutationFn: async (data: { email: string; Roles: Role }) => {
      await addUsers(data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "users added successfully",
      });
      queryclient.invalidateQueries({ queryKey: ["getroles"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: `${error}`,
      });
    },
  });
  return (
    <div>
      <div className=" max-w-screen-xl mt-10 w-full px-5 mx-auto ">
        <Rolestable />
        <div className=" max-w-screen-sm mx-auto flex">
          <div className="   mx-auto mt-10">
            <Card className=" border border-BAccent">
              <CardHeader>
                <CardTitle className=" text-center text-BAccent">
                  ADD USERS
                </CardTitle>
                <CardDescription className="text-center">
                  Make sure you USERS ARE
                  <span className=" font-bold  italic p2 "> Unique </span>
                  and email is a{" "}
                  <span className=" font-bold  italic p2 text-BAccent ">
                    {" "}
                    G MAIL{" "}
                  </span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className=" w-full">
                  <Label className=" block mb-3">Email </Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p  mx-auto font-medium"
                  />
                </div>
                <div className=" mt-5 mx-auto">
                  <Select
                    value={role}
                    onValueChange={(value: string) => setRole(value as Role)}
                  >
                    <SelectTrigger
                      className={`w-full font-bold
                        ${
                          role === Role.READER
                            ? "bg-green-900 text-white"
                            : role === Role.ADMIN
                            ? " bg-BAccent text-white"
                            : role === Role.AUTHOR
                            ? "bg-black text-white"
                            : ""
                        }
                      `}
                    >
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value={Role.READER}>READER</SelectItem>
                        <SelectItem value={Role.ADMIN}> ADMIN </SelectItem>
                        <SelectItem value={Role.AUTHOR}> AUTHOR</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <div className="  mx-auto">
                  <Button
                    disabled={isPending}
                    onClick={() => mutate({ email: email, Roles: role })}
                  >
                    {" "}
                    {isPending ? (
                      <Loader2 className=" animate-spin" />
                    ) : (
                      "ADD USERS"
                    )}{" "}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
