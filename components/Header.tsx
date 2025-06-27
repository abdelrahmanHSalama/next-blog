import ThemeToggler from "./ThemeToggler";

const Header = ({
  version,
  className,
}: {
  version: "full" | "mini";
  className?: string;
}) => {
  return (
    <header className={`${className}`}>
      <div className="flex justify-between items-center">
        <p className="font-bold">Name</p>
        <ThemeToggler />
      </div>
      {version == "full" && (
        <p className="border-t border-b mt-[30px] border-gray-500 uppercase font-bold text-[100px] w-full text-center tracking-widest">
          The Blog
        </p>
      )}
    </header>
  );
};

export default Header;
