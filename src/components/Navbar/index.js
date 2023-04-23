import React from "react";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useSelector((state) => state.cart);

  const generatePathTitle = () =>
    location.pathname === "/"
      ? "Home"
      : location.pathname === "/mylist"
      ? "My List"
      : "";

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a onClick={() => navigate("/")} className="-m-1.5 p-1.5">
            <span className="sr-only">Movies</span>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            {/* Generate title for routes */}
            {generatePathTitle()}
          </a>
        </div>
        <div className="justify-end">
          <button
            onClick={() => navigate("mylist")}
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black rounded-lg"
          >
            <BsBookmark size={25} />
            <span className="sr-only">My List</span>
            {items.length > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-red-500 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {items.length}
              </div>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
