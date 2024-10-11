"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function CreatePostButton() {
  const { pending } = useFormStatus();
  return <Button type="submit">{pending ? "Creating..." : "Create"}</Button>;
}
