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
        {/* Image Section */}
        <div className="w-full overflow-hidden rounded-t-2xl">
          <div className="w-full h-[260px] overflow-hidden border-b border-yellow-400">
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-125
              "
            />
          </div>
        </div>

        {/* Title */}
        <div className="px-4 py-4 text-center">
          <h3
            className="
              text-lg
              font-semibold
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
