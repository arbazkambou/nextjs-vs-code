"use client";
import { Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function DeleteButton({ text }) {
  const { pending } = useFormStatus();
  return (
    <button className="hover:text-red-600" type="submit">
      {pending ? "Deleting..." : <Trash2 size={30} />}
    </button>
  );
}
