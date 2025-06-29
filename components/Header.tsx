import ThemeToggler from "./ThemeToggler";

const navbarItems = ["Blog", "Projects", "About", "Newsletter"];

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
        <div className="flex gap-4 items-center">
          <nav>
            <ul className="flex gap-4">
              {navbarItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-transparent hover:border-black dark:text-white dark:hover:border-white transition-border duration-250 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggler />
        </div>
      </div>
      {version == "full" && (
        <p className="border-t border-b mt-8 py-4 border-[#a8a8a8] dark:border-[#555966] uppercase font-bold text-6xl md:text-8xl w-full text-center tracking-widest">
          The Blog
        </p>
      )}
    </header>
  );
};

export default Header;
