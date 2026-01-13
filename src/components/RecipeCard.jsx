import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block w-full">
      {/* Card */}
      <div
        className="
          relative
          w-full
          max-w-[260px]
          mx-auto
          bg-gray-900
          rounded-2xl
          border border-gray-800
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
            pointer-events-none
            absolute inset-0
            rounded-2xl
            border-2 border-transparent
            group-hover:border-blue-500/80
            transition-all duration-300
          "
        />

        {/* Image Section */}
        <div className="w-full p-4">
          <div className="w-full aspect-square overflow-hidden rounded-xl border border-yellow-400">
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-300
                ease-in-out
                group-hover:scale-110
              "
            />
          </div>
        </div>

        {/* Title */}
        <div className="px-4 pb-5 text-center">
          <h3
            className="
              text-base
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
