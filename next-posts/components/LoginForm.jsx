"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signinAction } from "@/lib/actions";

export function LoginForm() {
  return (
    <form action={signinAction}>
      <Button type="submit">Sign in with google</Button>
    </form>
  );
}
