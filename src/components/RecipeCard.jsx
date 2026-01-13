import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block w-full">
      <div
        className="
          relative

          w-full              /* 🔒 card width fixed */
          bg-gray-900
          rounded-2xl
          border border-gray-800
          shadow-xl shadow-black/50
          transition-shadow duration-300
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

        {/* Image Wrapper (controls zoom safely) */}
        <div className="w-full flex justify-center p-4 overflow-hidden">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              block
              w-full
              max-w-[888px]      /* 📱 mobile big */
              sm:max-w-[720px]
              md:max-w-[490px]
              lg:max-w-[470px]
              xl:max-w-[250px]
              aspect-square
              object-cover
              rounded-xl
              border border-yellow-400
              transition-transform duration-300
              group-hover:scale-[1.05]
            "
          />
        </div>

        {/* Title */}
        <div className="px-3 pb-5 text-center">
          <h3
            className="
              text-base
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
