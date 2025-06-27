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
  "https://images.unsplash.com/photo-1664575602276-acd073f104c1",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
  "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
];

const RecentPosts = ({ articles, className }: ArticlesComponent) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <div className="row-span-2 col-span-1">
          <ArticleCard
            style="default"
            article={articles[0]}
            image={images[0]}
            main={true}
          />
        </div>
        <div>
          <ArticleCard style="small" article={articles[1]} image={images[1]} />
        </div>
        <div>
          <ArticleCard style="small" article={articles[2]} image={images[2]} />
        </div>
      </div>
      <div>
        <ArticleCard style="wide" article={articles[3]} image={images[3]} />
      </div>
    </div>
  );
};

export default RecentPosts;
