import ArticleCard from "./ArticleCard";

type Article = {
  title: string;
  body: string;
};

type ArticlesComponent = {
  articles: Article[];
  className?: string;
};

const images = [
  "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
  "https://images.unsplash.com/photo-1506097425191-7ad538b29cef",
  "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c",
  "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
];

const AllPosts = ({ articles, className }: ArticlesComponent) => {
  return (
    <div className={`grid grid-rows-2 grid-cols-3 gap-4 ${className}`}>
      <ArticleCard
        style="default"
        main={false}
        article={articles[0]}
        image={images[0]}
      />
      <ArticleCard
        style="default"
        main={false}
        article={articles[1]}
        image={images[1]}
      />
      <ArticleCard
        style="default"
        main={false}
        article={articles[2]}
        image={images[2]}
      />
      <ArticleCard
        style="default"
        main={false}
        article={articles[3]}
        image={images[3]}
      />
      <ArticleCard
        style="default"
        main={false}
        article={articles[4]}
        image={images[4]}
      />
      <ArticleCard
        style="default"
        main={false}
        article={articles[5]}
        image={images[5]}
      />
    </div>
  );
};

export default AllPosts;
