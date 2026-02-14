"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageDown, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner"
import Dropzone, { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { set } from "zod";
import { useUploadThing } from "@/lib/uploadthing";
import { useQuery, useMutation } from "@tanstack/react-query";
// import { createFeature } from "./action";
import { Progress } from "@/components/ui/progress";

export default function Thumbnail() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File[] | null>(null);
  const [drag, setDrag] = useState(false);
  const [value, setValue] = useState("");
  const [progress, setProgress] = useState(0);
  const [disable, setDisable] = useState(false);

  //   const { mutate, isPending } = useMutation({
  //     mutationFn: async (ob: { name: string; url: string }) => {
  //       await createFeature(ob.name, ob.url);
  //     },
  //     mutationKey: ["uploadimg"],

  //     onSuccess: () => {
  //       toast.success("upload was successfull");
  //     },
  //     onError: (err) => {
  //       toast.error(`${err}`);
  //     },
  //   });

  //   const { startUpload, isUploading } = useUploadThing("imageUploader", {
  //     onClientUploadComplete: ([data]) => {
  //       const url = data.ufsUrl;
  //   this is when i would send the url to store in the database
  //       mutate({ name: value, url: url });
  //       setDisable(false);
  //     },
  //     onUploadProgress: (progress) => {
  //       setProgress(progress);
  //     },
  //   });

  //   const handleSubmit = () => {
  //     setDisable(true);
  //     const valve = value.trim();
  //     const f = file;

  //     if (!!valve && !!f) {
  //       startUpload(f, { user: undefined });
  //     } else {
  //       toast.error("fill all form fields");
  //       setDisable(false);
  //     }
  //   };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
    },
    onDragEnter: () => {
      setDrag(true);
    },
    onDragLeave: () => {
      setDrag(false);
    },
    onDropAccepted(files, event) {
      const f = files[0];
      console.log(file);
      setPreview(URL.createObjectURL(f));
      setFile(files);
      toast.success("your file was accepted proceed to upload");

      setDrag(false);
    },
    onDropRejected(fileRejections, event) {
      toast.error("this files are not accepted");
      setDrag(false);
    },
  });
  return (
    <div className="   w-full mx-auto">
      <div className="border rounded-xl p-2 flex flex-col justify-center items-center border-safeAccent h-28 my-2">
        <div
          className={cn(
            "flex-1 w-full p-4 flex items-center justify-center bg-slate-200 rounded-xl",
            { "bg-slate-900": drag }
          )}
          {...getRootProps()}
        >
          <input
            className="  cursor-auto border-black border-2"
            {...getInputProps()}
          />
          <div className="cursor-pointer">
            <ImageDown className="text-zinc-500  m-auto w-6 h-6 my-2" />
            <p className="p select-none text-center text-zinc-500">
              Upload Post Thumbnail
            </p>
          </div>
        </div>
      </div>
      {preview && (
        <div className=" w-full border">
          <div className=" relative w-full aspect-square">
            {file?.[0]?.type.startsWith("image/") && (
              <Image
                alt="image"
                src={preview}
                fill
                className=" w-full h-full object-cover object-top"
              />
            )}
          </div>

          {/* <div className=" mt-5">
              <Progress value={progress} />
            </div> */}
          {/* <div className="  mt-5">
              {isPending && <Loader2 className=" animate-spin" />}
            </div> */}
        </div>
      )}
      {/* <div className=" mt-10">
          <Button
            disabled={disable}
            onClick={handleSubmit}
            className=" w-full"
            size={"lg"}
          >
            {" "}
            SUBMIT{" "}
          </Button>
        </div> */}
    </div>
  );
}
