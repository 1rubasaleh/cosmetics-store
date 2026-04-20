import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-[90vh] relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        
      
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-vibes text-pink-500 animate-float font-bold leading-tight">
          Glow Your Beauty
        </h1>

        <p className="mt-2 text-[10px] xs:text-xs sm:text-sm md:text-lg opacity-80 tracking-wide uppercase">
          Discover the best cosmetics products
        </p>

       
        <button 
          onClick={() => navigate("/products")}
          className="mt-6 bg-pink-500 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg text-xs md:text-base transition-all duration-300 
                     hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] 
                     active:scale-95 font-medium shadow-md"
        >
          Shop Now
        </button>

      </div>
    </div>
  );
}