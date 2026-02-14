"use client";
// import { uploadFiles } from "@/lib/uploadthing";
import React, {
  useCallback,
  useMemo,
  useRef,
  useContext,
  useState,
} from "react";
import ReactQuill from "react-quill";
// import { ContextProvider } from "@/context/Context";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export default function Editor({
  valuez,
  onChange,
}: {
  valuez?: string;
  onChange?: (content: string) => void;
}) {
  // usestate

  const [keyarray, setKeyarray] = useState<string[]>([]);

  // this is the context
  //   const { load, setLoad, titleState, titleDispatch, setProgress } =
  //     useContext(ContextProvider);
  const quillRef = useRef<ReactQuill>(null);

  // function for reactquill
  const handleImageUpload = useCallback(() => {
    alert("image upload triggered");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // when the use seclect a file
    input.onchange = async () => {
      const file = input.files?.[0]; //Get the selected file

      if (!file) return;
      //  upload the file to uploadthing

      if (file.size > 2 * 1024 * 1024) {
        alert("File size must not exceed 2MB.");
        return;
      }

      //   setLoad(true);
      //   const uploaded = await uploadFiles("imageUploader", {
      //     files: [file],
      //     input: {},
      //     onUploadProgress: (p) => {
      //       setProgress(p.progress);
      //     },
      //   });

      //   const imageUrl = uploaded[0]?.url; //get the url of uploaded image

      //   const imageKey = uploaded[0]?.key;

      //   titleDispatch({ type: "arrayupdate", payload: imageKey });

      // const data = mutate({ id: title?.id, images: newArray });

      //   if (!imageUrl) return;

      const editor = quillRef.current?.getEditor();

      const range = editor?.getSelection(true);

      const indexz = range?.index ?? 0;

      // editor?.insertEmbed(indexz, "image", imageUrl);

      //   setLoad(false);
    };
  }, []);
  //   setLoad, setProgress, titleDispatch

  // mutation function for updateing blog imageskeys

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
    };
  }, [handleImageUpload]);
  return (
    <>
      <ReactQuill
        value={valuez}
        onChange={onChange}
        ref={quillRef}
        modules={modules}
        className=" h-full  "
      />
    </>
  );
}
