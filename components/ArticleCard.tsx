import Image from "next/image";
import ArticleCategory from "./ArticleCategory";
import ArticleArrow from "./ArticleArrow";

type Article = {
  title: string;
  body: string;
};

type ArticleCardProps = {
  style?: "default" | "small" | "wide";
  article: Article;
  image: string;
  main?: boolean;
};

const DefaultArticleCard = ({ article, image, main }: ArticleCardProps) => {
  let articleTitleLength = main === true ? 50 : 25;
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="relative w-full aspect-5/2 overflow-hidden group">
        <Image
          src={image}
          alt="Blog Post Cover"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#6941C6]">
          Olivia Rhye • 1 Jan 2023
        </p>
        <p className="text-2xl font-semibold flex justify-between items-center">
          <span className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer">
            {article.title.length > articleTitleLength
              ? article.title.slice(0, articleTitleLength) + "..."
              : article.title}
          </span>
          <ArticleArrow />
        </p>
        <p className="text-[#667085]">{article.body}</p>
        <ArticleCategory category="Technology" />
      </div>
    </div>
  );
};

const SmallArticleCard = ({ article, image }: ArticleCardProps) => (
  <div className="w-full flex gap-4">
    <div className="relative w-1/2 overflow-hidden group">
      <Image
        src={image}
        alt="Blog Post Cover"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />{" "}
    </div>
    <div className="space-y-2 flex-1/2">
      <p className="text-sm font-semibold text-[#6941C6]">
        Olivia Rhye • 1 Jan 2023
      </p>
      <p className="text-2xl font-semibold flex justify-between items-center">
        <span className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer">
          {article.body.length > 25
            ? article.body.slice(0, 25) + "..."
            : article.body}
        </span>
      </p>
      <p className="text-[#667085]">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>
      <ArticleCategory category="Technology" />
    </div>
  </div>
);

const WideArticleCard = ({ article, image }: ArticleCardProps) => (
  <div className="w-full flex gap-8">
    <div className="relative w-1/2 aspect-5/2 overflow-hidden group">
      <Image
        src={image}
        alt="Blog Post Cover"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
    <div className="space-y-2 flex-1/2">
      <p className="text-sm font-semibold text-[#6941C6]">
        Olivia Rhye • 1 Jan 2023
      </p>
      <p className="text-2xl font-semibold flex justify-between items-center">
        <span className="border-b border-transparent hover:border-black transition-border duration-250 cursor-pointer">
          {article.title.length > 50
            ? article.title.slice(0, 50) + "..."
            : article.title}
        </span>
        <ArticleArrow />
      </p>
      <p className="text-[#667085]">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>
      <ArticleCategory category="Technology" />
    </div>
  </div>
);

const ArticleCard = ({
  style = "default",
  article,
  image,
  main,
}: ArticleCardProps) => {
  if (style === "small")
    return <SmallArticleCard article={article} image={image} />;
  if (style === "wide")
    return <WideArticleCard article={article} image={image} />;
  return <DefaultArticleCard article={article} image={image} main={main} />;
};

export default ArticleCard;
