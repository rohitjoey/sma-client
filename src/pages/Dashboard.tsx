import { Button } from "@/components/ui/button";
import ChatComponent from "@/components/ui/Chat";
import { CreatePost } from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import { useNavigate } from "react-router-dom";
import PostCardLoadMore from "@/components/PostCardLoadMore";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 h-[calc(100vh-72px)] w-full p-5 gap-6 ">
      {Array(10)
        .fill(0)
        .map((a, index) => (
          <PostCard key={index} />
        ))}
      <PostCardLoadMore />
      <div className="flex gap-6 w-max">
        
        <CreatePost/>
        <Button
          onClick={() => navigate("/chat-screen")}
          className="h-32 bg-teal-100 text-black *:hover:bg-black hover:text-white w-max text-xl md:text-2xl lg:text-3xl "
        >
          Chat
        </Button>
      </div>
    
    </div>
    // <ChatComponent/>
  );
};

export default Dashboard;
