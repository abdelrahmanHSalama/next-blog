import ArticleCategory from "@/components/ArticleCategory";
import Header from "@/components/Header";
import { getPost } from "@/lib/api";
import Image from "next/image";
import { images } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "Blog Viewer, built using Next.js.",
};

export default async function PostsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const post = await getPost(id);

  return (
    <div className="dark:bg-[#090d1f] px-8">
      <Header version="mini" className="my-8 dark:text-white" />
      <article className="flex flex-col space-y-4 my-8">
        <p className="text-sm font-semibold text-[#6941C6]">
          Olivia Rhye • 1 Jan 2023
        </p>
        <h1 className="text-4xl font-bold dark:text-white">{post.title}</h1>
        <div className="overflow-hidden group relative w-full aspect-3/1">
          <Image
            src={images[Math.floor(Math.random() * 10)]}
            alt="Blog Post Cover"
            fill
            className="object-cover transition-transform duration-250 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#090d1f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />
        </div>
        <p className="dark:text-[#C0C5D0]">
          {Array(10).fill(post.body).join(" ")}
        </p>
        <ArticleCategory category="Technology" />
      </article>
    </div>
  );
}
