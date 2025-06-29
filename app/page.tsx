import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold">Welcome to Next-Blog!</h1>
      <Link
        href="./posts"
        className="flex items-center gap-1 border-b border-transparent hover:border-black cursor-pointer transition-border duration-250"
      >
        View Posts <Icon icon="lucide:chevron-right" />
      </Link>
    </div>
  );
}
