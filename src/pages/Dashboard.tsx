import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/PostCard";
import PostCardLoadMore from "@/components/ui/PostCardLoadMore";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 h-[calc(100vh-72px)] w-full p-5 gap-6 ">
      {Array(10)
        .fill(0)
        .map((a,index) => (
          <PostCard key={index} />
        ))}
      <PostCardLoadMore />
      <Button className="h-32 bg-teal-100 text-black text-3xl w-max hover:bg-black hover:text-white">Create Post</Button>
    </div>
  );
};

export default Dashboard;
