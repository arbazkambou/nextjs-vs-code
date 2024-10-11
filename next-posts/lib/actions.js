"use server";
import Post from "@/models/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import dbConnect from "./db";
import User from "@/models/users";

export async function deletePost(formData) {
  await dbConnect();

  await Post.findByIdAndDelete(formData.get("id"));
  console.log("post deleted!");
  return revalidatePath("/posts");
}

export async function editPost({ id, data }) {
  try {
    await dbConnect();

    const res = await Post.findByIdAndUpdate(id, data);
    if (!res) {
      throw new Error("updation failed");
    }
  } catch (error) {
    return error.message;
  }
  // return "Updated successfully";
  return revalidatePath("/posts");
}

export async function createPost(formData) {
  await dbConnect();
  const session = await auth();
  const title = formData.get("title");
  const body = formData.get("body");
  const user = session.user.id;
  const postData = { title, body, user };
  await Post.create(postData);
  revalidatePath("/posts");
  redirect("/posts");
}

export async function signinAction() {
  await signIn("google", { redirectTo: "/posts/create" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(email) {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}
