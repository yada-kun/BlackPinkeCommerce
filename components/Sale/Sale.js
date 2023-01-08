import React from "react";

//components
import ProductCard from "../ProductCard";
import { ProductLibrary } from "../../library/Media-ProductCard";

const Sale = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <h3 className="text-center text-2xl md:text-4xl lg:text-5xl ">
        Safe For Today
      </h3>

      <div className="flex flex-wrap justify-center gap-10 py-20">
        {ProductLibrary.map((el) => (
          <ProductCard image={el.image} title={el.title} price={el.price} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
