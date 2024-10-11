import PostsList from "@/components/PostsList";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

async function Page() {
  const session = await auth();
  return (
    <main className="mt-32 mb-8">
      <h1 className="text-3xl font-bold text-center md:text-5xl mb-4 md:mb-10">
        My Posts
      </h1>

      <Suspense fallback={"loading...."}>
        <PostsList id={session.user.id} />
      </Suspense>
    </main>
  );
}

export default Page;
