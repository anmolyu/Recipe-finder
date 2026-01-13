import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 px-4">
      {/* Heading */}
      <h2
        className="
          flex items-center
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          font-extrabold
          text-gray-100
          mb-6
          sm:mb-8
          tracking-tight
          border-l-4
          border-yellow-400
          pl-4
        "
      >
        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-500" />
        Quick Filter by Primary Ingredient
      </h2>

      {/* Category Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
          sm:gap-5
          md:gap-6
        "
      >
        {featuredCategories.map((cat, index) => (
          <Link
            to={`/search/${cat}`}
            key={index}
            onClick={() => filterByCategory(cat)}
            className="
              flex
              items-center
              justify-center
              bg-gray-800
              px-4
              py-3
              sm:py-4
              rounded-xl
              text-sm
              sm:text-base
              font-semibold
              text-gray-100
              border
              border-gray-700
              shadow-md
              shadow-black/40
              transition-all
              duration-300
              hover:border-blue-500
              hover:text-blue-400
              hover:bg-gray-700/60
              hover:scale-[1.05]
            "
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySelection;
