import { useContext } from 'react';
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { navigate } = useContext(AppContext);

  return (
    <div className="my-28 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 border bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-100 shadow-xl p-8 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400 opacity-10 rounded-full z-0"></div>

      <div className="relative z-10">
        <img src={assets.hero_girl} alt="Hero Girl" className="w-72 md:w-96 drop-shadow-2xl animate-fade-in" />
        <div className="hidden md:block absolute top-20 -right-40">
          <img src={assets.image8} alt="Decorative" className="w-40 animate-bounce-slow" />
        </div>
      </div>
      <div className="z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight drop-shadow-lg">
          Discover Your Next <br />
          <span className="text-primary">Favorite Book</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium">
          Dive into a world of stories, knowledge, and adventure.
        </p>
        <div className="my-10 flex flex-col md:flex-row gap-5 md:gap-10">
          <button
            onClick={() => {
              navigate("/books");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-primary hover:bg-orange-600 transition-colors duration-200 text-white rounded-full px-10 py-3 shadow-lg font-semibold text-lg cursor-pointer"
          >
            Shop Now
          </button>
          <button
            className="bg-white hover:bg-gray-100 transition-colors duration-200 text-primary border border-primary rounded-full px-10 py-3 shadow font-semibold text-lg cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
