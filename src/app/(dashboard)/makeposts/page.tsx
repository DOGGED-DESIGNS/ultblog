import Editor from "@/components/Editor";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import "react-quill/dist/quill.snow.css";

export default function page() {
  return (
    <div className="  py-10">
      <form className=" max-w-screen-lg mt-12  px-4  w-full mx-auto">
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
          <Label className="  block mb-3"> Summary </Label>
          <Textarea value={"Title blog"} />
        </div>

        <div className="  border">
          {/* <Editor /> */}
          {/* <SimpleEditor onChange={} /> */}
        </div>

        <div className=" mt-10 flex gap-2">
          <Button> Publish </Button>
          <Button variant={"outline"}> Save as Draft </Button>
        </div>
      </form>
    </div>
  );
}
