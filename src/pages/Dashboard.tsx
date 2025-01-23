import { Button } from "@/components/ui/button";
import ChatComponent from "@/components/ui/Chat";
import { CreatePost } from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import { useNavigate } from "react-router-dom";
import PostCardLoadMore from "@/components/PostCardLoadMore";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/posts";
import { PostResponse } from "@/lib/typedef";

const Dashboard = () => {
  const navigate = useNavigate();

  const { isPending, error, data, isLoading } = useQuery<PostResponse[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-cente flex-col">
          <div className="flex items-center">
            <span className="text-3xl mr-4">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 h-[calc(100vh-72px)] w-full p-5 gap-6 ">
          {data &&
            data.map((post) => <PostCard key={post.id} cardProp={post} />)}
          {data && data.length >= 10 ? <PostCardLoadMore /> : null}
          <div className="flex gap-6 w-max">
            <CreatePost isCreate={true} postContent="" />
            <Button
              onClick={() => navigate("/chat-screen")}
              className="h-32 bg-teal-100 text-black *:hover:bg-black hover:text-white w-max text-xl md:text-2xl lg:text-3xl "
            >
              Chat
            </Button>
          </div>
        </div>
      )}
    </>
    // <ChatComponent/>
  );
};

export default Dashboard;
