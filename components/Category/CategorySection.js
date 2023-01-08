import React from 'react';

const CategorySection = () => {
  return (
    <div className="flex h-[50vh] items-center text-white flex-wrap">
      <div className="w-full h-full p-2 px-6 bg-cover lg:flex-1 bg-women-section">
        <div className="flex flex-col items-center justify-center h-full space-y-2 lg:items-end ">
          <h2 className="lg:text-4xl">Womens</h2>
          <h2 className="lg:text-4xl">Section</h2>
          <p className="lg:text-2xl">Checkout This Weeks Hottest Styles </p>
          <button className="w-40 p-2 px-4 space-y-8 text-white duration-500 bg-black rounded hover:bg-pink-300 hover:text-black">
            Shop now
          </button>
        </div>
      </div>
      <div className="w-full h-full p-2 px-6 bg-cover lg:flex-1 bg-men-section">
        <div className="flex flex-col items-center justify-center h-full space-y-2 lg:items-start ">
          <h2 className="lg:text-4xl">Mens</h2>
          <h2 className="lg:text-4xl">Section</h2>
          <p className="lg:text-2xl">Checkout This Weeks Hottest Styles</p>
          <button className="w-40 p-2 px-4 space-y-8 text-white duration-500 bg-black rounded hover:bg-pink-300 hover:text-black">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
