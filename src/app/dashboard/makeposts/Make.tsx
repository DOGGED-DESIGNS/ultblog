"use client";
import { Category } from "@/app/generated/prisma/client";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import { Loader2, SunIcon } from "lucide-react";
import "react-quill/dist/quill.snow.css";

import Tags from "@/components/Tags";
import Thumbnail from "@/components/Thumbnail";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";

export default function Make({
  category,
  user,
}: {
  category: Category[];
  user: string;
}) {
  // usestate

  const [tags, setTags] = useState<string[]>([]);

  const [editor, setEditor] = useState<string>("");
  // end of use state

  // add tags
  const onChange = (value: string) => {
    setEditor(value);
  };
  const addTags = (value: string) => {
    setTags((prev) => {
      if (tags.includes(value)) return prev;
      return [...prev, value];
    });
  };

  const removeTags = (value: string) => {
    setTags((prev) => prev.filter((i) => i !== value));
  };

  const formSchema = z.object({
    Title: z.string().min(4, "text should not be less than 4 characters"),
    Summary: z
      .string()
      .min(2, "summary should not be less than 2 characters")
      .max(100, "summary should not be maximum of 100 characters"),
    Category: z
      .string()
      .min(4, "Category should not be less than r characters"),
  });
  type dataType = {
    title: string;
    summary: string;
    category: string;
    tags: string[];
    content: string;
    author: string;
    thumbnail: string;
    status: "DRAFT" | "PUBLISHED";
  };
  const handleSubmit = async (data: dataType) => {
    const res = await fetch("/api/make", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) throw new Error("something went wrong");

    return res.json();
  };

  //   use mutation

  const { mutate, isPending } = useMutation({
    mutationKey: ["post-form"],
    mutationFn: async (data: dataType) => {
      return await handleSubmit(data);
    },
    onSuccess: () => {
      toast.success("POST UPLOADDED SUCCESSFULLY");
    },
    onError: () => {
      toast.error(
        " SOMETHING WENT WRONG WHILE TRYING TO POST PLEASE MAKE SURE YOU FILLED ALL FIELDS ",
      );
    },
  });

  const form = useForm({
    defaultValues: {
      Title: "",
      Summary: "",
      Category: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      //  upload thi thumbnail check if there is file inside
      const thumbUrl = "/Achraf.jpeg";
      const author = user;
      const status = "DRAFT";

      if (!tags.length) {
        toast.error("please select at least one tag");
        return;
      }
      if (!editor) {
        toast.error("Write a blog post");
        return;
      }

      mutate({
        author,
        thumbnail: thumbUrl,
        title: value.Title,
        summary: value.Summary,
        category: value.Category,
        content: editor,
        status,
        tags: tags,
      });

      // but the url inside the handle form

      // tags, content, content, author, status
    },
  });
  return (
    <>
      <div className=" px-2 ">
        <form
          id="post-Form"
          className=" max-w-screen-lg mt-12    w-full mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field name="Title">
              {(field) => (
                <Field>
                  <FieldLabel>Title</FieldLabel>

                  <Input
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="Summary">
              {(field) => (
                <Field>
                  <FieldLabel>Summary</FieldLabel>
                  <Textarea
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="Category">
              {(field) => (
                <Field>
                  <FieldLabel>Category</FieldLabel>

                  <Select
                    onValueChange={(e) => field.handleChange(e)}
                    value={field.state.value}
                    name={field.name}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>CATEGORIES</SelectLabel>
                        {category.map((item) => (
                          <>
                            <SelectItem value={item.name}>
                              {item.name}
                            </SelectItem>
                          </>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>
        <div className=" pb-10 mt-10 mx-auto max-w-screen-lg w-full">
          <div className=" p-3 border w-full flex gap-2 flex-wrap">
            <Tags add={addTags} remove={removeTags} value="Entertainment" />
            <Tags add={addTags} remove={removeTags} value="Style" />
            <Tags add={addTags} remove={removeTags} value="Weddings" />
            <Tags add={addTags} remove={removeTags} value="Technology" />
            <Tags add={addTags} remove={removeTags} value="LifeStyle" />
          </div>

          <div className="mb-4">
            <Thumbnail />
            <Progress value={0} className=" h-2   " />
          </div>

          <div className="  border">
            {/* <Editor /> */}
            <SimpleEditor content={editor} onChange={onChange} />
          </div>

          <div className=" mt-10 flex gap-2">
            <Button type="submit" form="post-Form">
              {isPending ? <Loader2 className="animate-spin" /> : "Publish"}
            </Button>
            <Button variant={"outline"}> Save as Draft </Button>
          </div>
        </div>
      </div>
    </>
  );
}
