import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { Clock, Loader } from "lucide-react";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );
  }

  return (
    <section className="mt-6 px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 mb-6 tracking-tight flex items-center border-l-4 border-yellow-400 pl-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-500" />
        {title}
      </h2>

      <Slider {...settings}>
        {meals.map((meal) => (
          <div key={meal.idMeal} className="px-2 flex justify-center">
            <Link to={`/recipe/${meal.idMeal}`} className="w-full">
              <div
                className="
                  w-full
                  max-w-[260px]
                  mx-auto
                  bg-gray-900
                  rounded-2xl
                  border border-gray-800
                  shadow-xl shadow-black/50
                  transition-all duration-300
                  hover:shadow-blue-600/50
                  group
                "
              >
                {/* Image */}
                <div className="p-4 flex justify-center">
                  <div
                    className="
                      w-full
                      aspect-square
                      max-w-[200px]
                      overflow-hidden
                      rounded-xl
                      border border-yellow-400
                    "
                  >
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="
                        w-full h-full
                        object-cover
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrendingSlider;
