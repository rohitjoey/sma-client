import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import PostEditor from "./PostEditor";

export function CreatePost() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
        <PostEditor
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
