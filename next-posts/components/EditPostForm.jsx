"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editPost } from "@/lib/actions";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { useRef } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Cross } from "lucide-react";

export function EditPostForm({ children, post }) {
  const buttonRef = useRef();
  const { handleSubmit, register } = useForm();
  const { isPending, mutate } = useMutation({
    mutationFn: editPost,
    onSettled: (msg) => {
      if (msg) {
        toast.error(msg);
      } else {
        toast.success("Post has been updated!");
        buttonRef.current.click();
      }
    },
  });
  function onSubmit(formData) {
    mutate({ id: post._id, data: formData });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit post</DialogTitle>
            <DialogDescription>
              Make changes to your post here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                defaultValue={post.title}
                className="col-span-3"
                {...register("title", { required: true })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="body" className="text-right">
                Body
              </Label>
              <Textarea
                id="body"
                defaultValue={post.body}
                className="col-span-3"
                name="body"
                {...register("body", { required: true })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isPending ? "Upadting..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <DialogClose asChild>
        <button ref={buttonRef} />
      </DialogClose>
    </Dialog>
  );
}
