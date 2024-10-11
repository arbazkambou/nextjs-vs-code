import PostsList from "@/components/PostsList";
import { Suspense } from "react";

async function Page({ searchParams }) {
  return (
    <main className="mt-32 mb-8">
      <h1 className="text-3xl font-bold text-center md:text-5xl mb-4 md:mb-10">
        All Posts
      </h1>
      <Suspense fallback={"loading...."}>
        <PostsList page={searchParams?.page} />
      </Suspense>
    </main>
  );
}

export default Page;
