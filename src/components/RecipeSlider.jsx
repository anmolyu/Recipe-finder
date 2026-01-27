import React from "react";
import Slider from "react-slick";

import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";

import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",

    // 🔥 MOBILE FIX
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );
  }

  return (
    <section className="mt-4">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-4 flex items-center">
        <Clock className="w-6 h-6 mr-3 text-blue-500" />
        {title}
      </h2>

      {/* Slider Wrapper */}
      <div className="px-2 sm:px-6">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-4">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
