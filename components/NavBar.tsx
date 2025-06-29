"use client";

import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

const navbarItems = ["Blog", "Projects", "About", "Newsletter"];

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <div className="hidden md:flex gap-4 items-center">
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
      <div className="md:hidden flex gap-2 items-center">
        {navOpen && <p>Hello! 👋🏻</p>}

        <button className="text-2xl" onClick={handleOpenNav}>
          ☰
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden w-full h-full bg-white dark:bg-[#090d1f] fixed z-10 flex flex-col gap-8 items-center justify-around left-0 top-0">
          <div></div>
          <div className="flex flex-col items-center gap-8">
            <p className="font-bold">Name</p>
            <nav>
              <ul className="flex flex-col justify-center items-center gap-8">
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
          <button className="text-4xl" onClick={handleOpenNav}>
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
