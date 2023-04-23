import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a onClick={() => navigate("/")} className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img
              className="h-6"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 capitalize"
          >
            {category || "Home"}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
