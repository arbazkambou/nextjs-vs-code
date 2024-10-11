import { getMyPosts, getPosts } from "@/controllers/posts";
import Link from "next/link";
import { PaginationComponent } from "./Pagination";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { DeleteButton } from "./DeleteButton";
import { EditPostForm } from "./EditPostForm";
import { Edit } from "lucide-react";
import { deletePost } from "@/lib/actions";

async function PostsList({ page = 1, id }) {
  let posts, docsCount;
  if (id) {
    posts = await getMyPosts(id);
  } else {
    const data = await getPosts(page);
    posts = data.posts;
    docsCount = data.docsCount;
  }
  return (
    <div>
      <div className="text-center grid md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card
            key={index}
            className="flex flex-col gap-y-4 pt-2 shadow-md hover:bg-zinc-100"
          >
            <CardTitle>{post.title}</CardTitle>
            <CardContent>
              {post.body.slice(0, 100)}{" "}
              <Link href={`/posts/${post._id}`} className="font-semibold">
                ...Read more
              </Link>
            </CardContent>
            {id && (
              <CardFooter className="flex justify-center items-center gap-x-4">
                <form action={deletePost}>
                  <input type="hidden" value={post._id} name="id" />
                  <DeleteButton text="Delete" />
                </form>
                <EditPostForm post={post}>
                  <Edit size={30} className="hover:text-green-600" />
                </EditPostForm>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      {!id && (
        <div className="mt-10">
          <PaginationComponent docsCount={docsCount} />
        </div>
      )}
    </div>
  );
}

export default PostsList;
