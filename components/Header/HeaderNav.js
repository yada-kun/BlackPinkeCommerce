import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

import BurgerNav from "./BurgerNav";

const HeaderNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const burgerNavHandler = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className=" w-full h-20 flex items-center justify-evenly">
      <div>
        <h1 className="text-4xl">
          SH<span className="text-pink-400">UPLIFT</span>ER
        </h1>
      </div>
      <div>
        <ul className=" hidden lg:flex pr-36 uppercase font-bold space-x-10 items-center text-[20px]">
          <Link href="/">
            <li className=" hover:text-pink-500 hover:scale-110 ">Home</li>
          </Link>

          <Link href="/about">
            <li className=" hover:text-pink-500 hover:scale-110 ">About Us</li>
          </Link>

          <Link href="/shop">
            <li className=" hover:text-pink-500 hover:scale-110 ">Shop</li>
          </Link>

          <Link href="/contact">
            <li className=" hover:text-pink-500 hover:scale-110">Contact</li>
          </Link>
        </ul>
      </div>

      <div className="flex space-x-3 items-center">
        <AiOutlineShoppingCart size={30} />
        <AiOutlineMenu
          onClick={burgerNavHandler}
          className="lg:hidden cursor-pointer"
          size={28}
        />

        {openNav && (
          <div className="lg:hidden">
            <BurgerNav burgerNavHandler={burgerNavHandler} />
          </div>
        )}
      </div>
      {openNav && (
        <div className="fixed top-0 h-screen w-screen bg-black/70 z-10"></div>
      )}
    </div>
  );
};

export default HeaderNav;
