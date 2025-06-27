import PostCard from "./PostCard";

const RecentPosts = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-4">
      <div className="row-span-2 col-span-1">
        <PostCard style="default" />
      </div>
      <div className="row-span-1 col-span-1">
        <PostCard style="small" />
      </div>
      <div className="row-span-1 col-span-1">
        <PostCard style="small" />
      </div>
      <div className="row-span-1 col-span-2 bg-red-200 flex items-center justify-center">
        D
      </div>
    </div>
  );
};

export default RecentPosts;
