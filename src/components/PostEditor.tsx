import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "./ui/button";

const PostEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (content:string) => {
    console.log(content)
    setContent(content)
  };

  const handleSave = () => {
    console.log("Content saved:", content);
    // Add your logic to save the content to a database or API
  };
  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  return (
    <div className="flex justify-center flex-col items-end">
      <div className="w-[100%] flex justify-center items-center flex-col mb-4">
        <ReactQuill
          className="h-[10rem] w-full mb-12"
          theme="snow"
          formats={[
            "header",
            "font",
            "ize",
            "bold",
            "italic",
            "underline",
            "trike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
          ]}
          placeholder="Write something amazing..."
          modules={modules}
          value={content}
          onChange={handleChange}
        />
      </div>
      <Button onClick={() => handleSave()} type="submit">
        Save changes
      </Button>
    </div>
  );
};

export default PostEditor;
