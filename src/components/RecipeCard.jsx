import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block">
      <div
        className="
          relative
          bg-gray-900
          rounded-2xl
          border border-gray-800
          overflow-hidden
          shadow-xl shadow-black/50
          transition-all duration-300
          hover:shadow-blue-600/50
          cursor-pointer
          group
        "
      >
        {/* Hover Border */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            border-2 border-transparent
            group-hover:border-blue-500/80
            transition-all duration-300
          "
        />

        {/* Image Section */}
        <div className="flex justify-center items-center p-4 sm:p-3 md:p-3">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              w-full
              max-w-[220px]      /* 📱 mobile → BIG image */
              sm:max-w-[180px]   /* tablet */
              md:max-w-[170px]   /* laptop */
              lg:max-w-[160px]   /* desktop */
              aspect-square
              object-cover
              rounded-xl
              border border-yellow-400
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* Title */}
        <div className="px-3 pb-5 text-center">
          <h3
            className="
              text-base        /* 📱 mobile → big text */
              sm:text-sm
              md:text-sm
              lg:text-base
              font-bold
              text-gray-100
              group-hover:text-blue-400
              transition-colors duration-300
              line-clamp-2
            "
          >
            {meal?.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
