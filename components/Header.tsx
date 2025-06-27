const Header = ({ version }: { version: "full" | "mini" }) => {
  return (
    <header className="my-[30px]">
      <div className="flex justify-between">
        <p className="font-bold">Name</p>
        <p>themePicker</p>
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
