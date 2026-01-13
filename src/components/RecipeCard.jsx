import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div
        className="
          relative 
          bg-gray-900 
          rounded-xl 
          overflow-hidden 
          border border-gray-800 
          shadow-lg shadow-black/50 
          transform transition duration-500 
        
          hover:shadow-blue-600/50 
          cursor-pointer 
          group
        "
      >
        {/* Hover Glow Border */}
        <div
          className="
            absolute inset-0 
            rounded-xl 
            border-2 border-transparent 
            group-hover:border-blue-500/80 
            transition duration-500
          "
        ></div>

        {/* Image Section */}
        <div className="flex justify-center items-center p-3 sm:p-4 md:p-5">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              w-full 
              max-w-[160px] 
              sm:max-w-[180px] 
              md:max-w-[220px] 
              lg:max-w-[240px]
              aspect-square
              object-cover
              rounded-xl 
              border border-yellow-400 
              transition duration-500 
          
            "
          />
        </div>

        {/* Title */}
        <div className="px-2 pb-4 text-center">
          <h3
            className="
              text-sm 
              sm:text-base 
              md:text-lg 
              lg:text-xl 
              font-bold 
              text-gray-100 
              group-hover:text-blue-400 
              transition duration-300 
              line-clamp-2
            "
          >
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
