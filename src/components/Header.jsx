import React, { useState } from "react";
import { IoEarth } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const menuItems = [
    { id: 1, title: "Home", link: "#homePage" },
    { id: 2, title: "About", link: "#aboutPage" },
    { id: 3, title: "Services", link: "#servicesPage" },
    { id: 4, title: "Activites", link: "#blogPage" },
    { id: 5, title: "Join Us", link: "#JoinUsPage" },
  ];
  const rotateIcon = () => {
    setIsRotated(!isRotated);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="text-white z-10 fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-100 to-green-500"
      style={{
        cursor: "pointer",
        borderBottom: "1px solid green",
        borderStyle: "solid",
        userSelect: "none",
      }}
    >
      <div className="container mx-auto p-2 flex justify-between items-center">
        <p className="flex items-center space-x-0 rtl:space-x-reverse">
          <IoEarth className="text-5xl text-green-600" />
          <Link to="/eco-mind/"><span className="self-center text-2xl font-semibold whitespace-nowrap play-bold bg-gradient-to-r from-green-700 to-blue-300 bg-clip-text text-transparent">
            EcoMind
            <sup className="text-xs text-blue-500/100">NGO</sup>
          </span>
          </Link>
        </p>
        <ul className="hidden md:flex space-x-6 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="px-1 py-2 hover:scale-125 hover:text-blue-500"
            >
              {item.id !== 5 && (
                <a
                  href={item.link}
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.querySelector(item.link);
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item.title}
                </a>
              )}
              {item.id === 5 && (
                <a href={item.link}>
                  <button
                    type="button"
                    className="focus:outline-none font-medium rounded-lg text-sm px-1 py-2 text-center bg-gradient-to-r from-red-400 to-blue-500 hover:bg-gradient-to-l from-red-400 to-blue-500 hover:text-white"
                  >
                    {item.title}
                  </button>
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            className={`text-white focus:outline-none ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-800 ${
                isRotated ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={rotateIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`${isOpen ? "open-line1" : ""}`}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <ul
          className={`md:hidden p-4 flex flex-col items-center space-y-2 bg-gradient-to-b from-blue-600/60 to-green-600/30 text`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id !== 5 && (
                <a
                  href={item.link}
                  className="block"
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.querySelector(item.link);
                    setTimeout(() => {
                      targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 300);
                  }}
                >
                  {item.title}
                </a>
              )}
              {item.id === 5 && (
                <a className="block options" href={item.link}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
