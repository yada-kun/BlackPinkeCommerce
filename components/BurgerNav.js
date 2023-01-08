import React from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import { easeIn, easeInOut, motion } from "framer-motion";

const BurgerNav = (props) => {
  return (
    <motion.div
      initial={{
        x: -500,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="fixed left-0 top-0 h-screen w-[50%] bg-white z-20"
    >
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex items-center space-x-10">
          <h1 className="py-10">
            SH<span className="text-pink-400">UPLIFT</span>ER
          </h1>
          <AiFillCloseCircle onClick={props.burgerNavHandler} size={30} />
        </div>

        <ul className=" uppercase font-bold space-y-5 items-center">
          <li className=" ">Home</li>
          <li className=" ">About Us</li>
          <li className="  ">Shop</li>
          <li className=" ">Contact</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BurgerNav;
