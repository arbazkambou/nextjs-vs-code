import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/models/users";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const hashPassword = await hash(password, 10);
    const res = await User.create({ email, password: hashPassword });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Success" });
}
