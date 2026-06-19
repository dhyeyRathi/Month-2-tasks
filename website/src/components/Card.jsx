import React from "react";

const Card = ({
  children,
  className,
  image,
  title,
  price,
  sizes,
  stock,
  colors,
  desc,
  category,
}) => {
  return (
    <div className="w-full bg-secondary h-150 rounded-lg shadow-md shadow-black/25 hover:scale-110 group transition-all duration-300">
        
      <div
        aria-label="picture container"
        className="rounded-t-lg h-84 overflow-hidden shrink-0"
      >
        <img
          src={image}
          className="w-full h-full rounded-t-lg object-cover group-hover:scale-110 overflow-hidden transition-all duration-300"
          alt={`${title}'s image`}
        />
      </div>
      
      <div
        aria-label="title and description"
        className=" w-full p-4 flex flex-col gap-2"
      >
        <div aria-label="category" className={`p-1 text-secondary font-semibold text-l text-center w-20 rounded-full ${category =="Men"? "bg-blue-800": category=="Women"? "bg-pink-800" : category=="Kids"? "bg-amber-800": "bg-primary"} `}>
            {category}
        </div>




        <h1 className="text-md sm:text-l md:text-xl lg:text-2xl">{title}</h1>
        <p className="text-xs sm:text-sm md:text-md lg:text-xl text-gray-500">
          {desc}
        </p>

        <p aria-label="price" className="text-2xl">
          $ {price}
        </p>

        <div className="flex gap-2">
          {colors.map((e, index) => (
            <div
              key={index}
              aria-label="colors-available"
              className={`w-10 h-10 border-1 border-black`}
              style={{ backgroundColor: e, filter: "saturate(0.4)" }}
            ></div>
          ))}
        </div>

        {stock <= 5 ? (
          <p className="text-red-700">Only {stock} in stock left, hurry!! </p>
        ) : (
          <p className="text-gray-500">{stock} in stock</p>
        )}
      </div>
    </div>
  );
};

export default Card;
