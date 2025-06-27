import Image from "next/image";
import PostCategory from "./PostCategory";
import { Icon } from "@iconify/react";
import PostArrow from "./PostArrow";

const PostCard = ({ style }: { style?: string }) => {
  return (
    <div
      className={`w-full h-full flex ${
        style === "default" ? "flex-col space-y-2" : ""
      } ${style === "small" ? "space-x-2" : ""}`}
    >
      <div
        className={`relative ${style === "default" ? "w-full" : ""} ${
          style === "small" ? "w-1/2" : ""
        } aspect-5/2`}
      >
        <Image
          src="https://images.unsplash.com/photo-1664575602276-acd073f104c1"
          alt="Blog Post Cover"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className={`space-y-2 ${style === "small" ? "flex-1/2" : ""}`}>
        <p className="text-sm font-semibold text-[#6941C6]">
          Olivia Rhye • 1 Jan 2023
        </p>
        <p className="text-2xl font-semibold flex justify-between items-center">
          UX review presentations <PostArrow />
        </p>
        <p className="text-[#667085]">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <PostCategory category="Technology" />
      </div>
    </div>
  );
};

export default PostCard;
