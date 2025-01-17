import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PostEditor from "./PostEditor";

export function CreatePost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-32 bg-teal-100 text-black hover:bg-black hover:text-white w-max text-xl md:text-2xl lg:text-3xl">
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[100%]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
          <DialogDescription>
            Create a new post to make it available to dashboard.
          </DialogDescription>
        </DialogHeader>
        <PostEditor />
      </DialogContent>
    </Dialog>
  );
}
