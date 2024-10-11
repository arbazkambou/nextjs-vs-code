import { CreatePostButton } from "@/components/CreatePostButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/lib/actions";

function Page() {
  function handleSubmit() {}
  return (
    <main className="mt-32">
      <h1 className="text-3xl font-bold text-left md:text-center md:text-5xl mb-4 md:mb-10">
        Create Post
      </h1>
      <div className="max-w-[600px] mx-auto">
        <Card className="p-10 bg-zinc-100">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-6">
              <div className="flex gap-x-2 justify-center items-center">
                <Label htmlFor="title">Title</Label>{" "}
                <Input className="py-6" name="title" id="title" required />
              </div>
              <div className="flex gap-x-2 justify-center items-center">
                <Label htmlFor="body">Body</Label>{" "}
                <Textarea className="h-10" name="body" id="body" required />
              </div>
              <div className="flex justify-end ">
                <CreatePostButton />
              </div>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default Page;
