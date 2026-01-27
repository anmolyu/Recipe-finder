import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link
      to={`/recipe/${meal?.idMeal}`}
      className="
        block
        w-full
        sm:w-[260px]
        md:w-[280px]
        lg:w-[300px]
        mx-auto
      "
    >
      <div
        className="
          relative
          min-w-[240px]
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

        {/* Image */}
        <div className="w-full flex justify-center p-4">
          <div
            className="
              w-[180px]
              h-[180px]
              sm:w-[200px]
              sm:h-[200px]
              md:w-[220px]
              md:h-[220px]
              overflow-hidden
              rounded-xl
              border border-yellow-400
            "
          >
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>
        </div>

        {/* Title */}
        <div className="px-4 pb-5 text-center">
          <h3
            className="
              text-sm
              sm:text-sm
              md:text-base
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
