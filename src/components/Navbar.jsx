import React, { useEffect, useState } from "react";
import { Sun, MoonStar } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { NavbarData } from "../data/Navbar";
import toast from "react-hot-toast";

function Navbar() {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  
  const toggleTheme = () => {
    const newTheme = (theme === "light") ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");

        toast('Dark Mode Enable!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          position: 'top-center',
          duration: 3000,
        }
      );
    } 
    else {
      document.documentElement.classList.remove("dark");

        toast('Light Mode Enable!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          position: 'top-center',
          duration: 3000,
        }
      );
    }

  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } 
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-blue-600 dark:bg-background">
      <header className="container mx-auto flex justify-between items-center h-16">
        <h1 className="font-bold text-lg md:text-2xl text-white animate-pulse underline">
          Note Sync
        </h1>
        <ul className="flex gap-5 font-semibold text-white p-4 text-lg cursor-pointer">
          {NavbarData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold text-xl"
                    : "text-white opacity-50 font-medium text-xl"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          {/* Theme Toggle */}
          <div onClick={toggleTheme}>
            {theme === "dark" ? 
            (
              <MoonStar className="cursor-pointer" />
            )
             :
            (
              <Sun className="cursor-pointer" />
            )}
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
