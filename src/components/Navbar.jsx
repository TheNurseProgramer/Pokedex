import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <div>
      <nav className="relative flex w-full flex-wrap items-center justify-between  py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-red-600">
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <a
              className="mt-2 mr-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0"
              href="#"
            >
              <img
                className="mr-2 my-5"
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                style={{ height: "50px" }}
                alt=""
                loading="lazy"
              />
            </a>
            <div className=" grid grid-rows-3">
              <LoginButton></LoginButton>
              <h1 className=" text-white font-semibold">|</h1>
              <LogoutButton></LogoutButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
