import React from "react";

//components
import ProductCard from "../ProductCard";
import { ProductLibrary } from "../../library/Media-ProductCard";

const Sale = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h3 className="text-center text-2xl md:text-4xl lg:text-5xl py-20">
        Safe For Today
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        {ProductLibrary.map((el) => (
          <ProductCard image={el.image} title={el.title} price={el.price} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
