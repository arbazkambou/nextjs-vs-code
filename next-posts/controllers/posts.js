import dbConnect from "@/lib/db";
import Post from "@/models/posts";

export async function getPosts(pageNumber) {
  try {
    await dbConnect();
    const docsCount = await Post.countDocuments();
    const limit = 10;
    const page = pageNumber || 1;
    const skip = (page - 1) * limit;
    if (skip > docsCount)
      throw new Error("The page you are trying to access does not exist!");
    const data = await Post.find().skip(skip).limit(limit);
    const posts = JSON.parse(JSON.stringify(data));
    return { posts, docsCount };
  } catch (error) {
    return error.message;
  }
}

export async function getMyPosts(id) {
  try {
    const data = await Post.find({ user: id });
    const posts = JSON.parse(JSON.stringify(data));
    return posts;
  } catch (error) {
    console.log(error);
  }
}
