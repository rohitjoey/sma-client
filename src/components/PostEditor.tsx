import { createPostApi, PostInputData } from "@/api/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const PostEditor = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}) => {
  const [content, setContent] = useState("");

  // const extensions = [StarterKit];
  // const contentT = "<p>Hello World!</p>";
  const queryClient = useQueryClient();

  const { isPending, data, isSuccess, mutate, error } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (content: PostInputData) => createPostApi(content),
    onSuccess: () => {
      toast.success("Post Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },

    onError: (error) => {
      if (Array.isArray(error.message)) {
        error.message.forEach(({ message }) => toast.error(message));
      } else if (typeof error.message === "string") {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
        console.error("Unexpected error structure:", error);
      }
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    console.log("Content saved:", content);
    mutate({ content });
    setIsDialogOpen(false);
    // Add your logic to save the content to a database or API
  };
  // const modules = {
  //   toolbar: [
  //     [{ size: [] }],
  //     ["bold", "italic", "underline"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link"],
  //   ],
  //   clipboard: {
  //     matchVisual: false,
  //   },
  // };
  return (
    <div className="flex justify-center flex-col items-end">
      <div className="w-[100%] flex justify-center items-center flex-col mb-4">
        <Input placeholder="Write something unique" onChange={handleChange} />
      </div>
      <Button onClick={handleSave} type="submit" disabled={isPending}>
        Save changes
      </Button>
    </div>
  );
};

export default PostEditor;
