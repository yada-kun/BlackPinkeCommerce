import Image from "next/image";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className="text-center space-y-2">
      <div className="w-[250px] h-[250px]">
        <Image
          className="object-contain w-full h-full"
          src={props.image}
          alt={props.title}
        />
      </div>
      <h3 className="text-[20px]">{props.title}</h3>
      <p className="text-[20px] font-bold">${props.price}</p>
      <button className=" rounded-md bg-slate-900 p-1 text-white hover:bg-pink-400 duration-500">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
