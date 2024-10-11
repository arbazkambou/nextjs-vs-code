import Post from "@/models/posts";

async function page({ params }) {
  const post = await Post.findById(params.id);
  return (
    <main className="mt-32">
      <h1 className="text-3xl font-bold text-center md:text-5xl mb-4 md:mb-10">
        {post.title}
      </h1>
      <p className="leading-8 text-lg">{post.body}</p>
    </main>
  );
}

export default page;
