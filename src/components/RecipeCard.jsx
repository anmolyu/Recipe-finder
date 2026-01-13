import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block w-full">
      <div
        className="
          relative
          w-full
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

        {/* IMAGE */}
        <div className="w-full p-4">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              w-full
              aspect-square
              object-cover
              rounded-xl
              border border-yellow-400
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* TITLE */}
        <div className="px-3 pb-5 text-center">
          <h3
            className="
              text-sm
              sm:text-base
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
