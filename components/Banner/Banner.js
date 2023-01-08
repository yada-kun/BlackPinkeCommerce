import React from "react";

import { Aguafina_Script } from "@next/font/google";

const agua = Aguafina_Script({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  weight: "400",
});

const Banner = () => {
  return (
    <div className="lg:bg-[url('../public/assets/blackpink.jpg')] h-screen bg-cover bg-no-repeat	bg-left flex items-center justify-center ">
      <div className="flex-1 text-center space-y-12">
        <p style={{ fontSize: "20px" }}>NEW ECOMMERCE EXPERIENCE</p>
        <h3 style={{ fontSize: "60px" }} className={agua.className}>
          SUMMER SALE
        </h3>
        <h2 className="text-5xl lg:text-7xl xl:text-9xl">
          50%
          <span className="text-pink-300">OFF</span>
        </h2>
        <div className="flex justify-center space-x-12">
          <p className="text-lg md:text-2xl xl:text-3xl p-1 md:p-4">
            STARTING AT $199
          </p>
          <button className="text-lg md:text-2xl xl:text-3xl bg-slate-900 text-white rounded-lg p-2 md:p-4">
            SHOP NOW!
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1"> </div>
    </div>
  );
};

export default Banner;
