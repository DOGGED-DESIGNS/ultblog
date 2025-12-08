import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import "react-quill/dist/quill.snow.css";

export default function page() {
  return (
    <div>
      <div className=" max-w-screen-lg mt-12  px-4  w-full mx-auto">
        <div className=" w-full  my-5 flex">
          <div className=" ml-auto">
            <Button> category</Button>
          </div>
        </div>
        <div className=" my-5">
          <Label className="  block mb-3"> Title </Label>
          <Input value={"Title blog"} />
        </div>
        <div className="my-5">
          <Label className="  block mb-3"> Text_area </Label>
          <Textarea value={"Title blog"} />
        </div>

        <div className=" h-80 my-5">
          <Editor />
        </div>
      </div>
    </div>
  );
}
