import hero from "../assets/hero.png";
import Vc from "../assets/Vc.png";
import Concealer from "../assets/conseler.png";
import lipliner from "../assets/lipliner.png";
import blusher from "../assets/blusher.png";
import clickSound from "../assets/sounds/click.mp3";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const playClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.4;
    audio.play();
  };
  const navigate = useNavigate();

  const myProducts = [
    { id: 1, name: "Vitamin C", price: "12", image: Vc, isNew: true },
    {
      id: 2,
      name: "Full Coverage Concealer",
      price: "25",
      image: Concealer,
      isNew: false,
    },
    {
      id: 3,
      name: "Precision Lipliner",
      price: "15",
      image: lipliner,
      isNew: true,
    },
    {
      id: 4,
      name: "Creamy Blusher",
      price: "30",
      image: blusher,
      isNew: false,
    },
  ];

  return (
    <div>
      <div className="h-[80vh] md:h-[90vh] relative w-full overflow-hidden">
        {/* Image */}
        <img
          src={hero}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-vibes font-bold drop-shadow-lg">
            Glow Your <span className="text-pink-400">Beauty</span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base tracking-widest uppercase text-white/90">
            Discover the best cosmetics products
          </p>

          <button
            onClick={() => {
              playClick();
              navigate("/products");
            }}
            className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full text-sm md:text-base
                       transition-all duration-300 hover:scale-105 hover:bg-pink-600 hover:shadow-lg active:scale-95 font-semibold"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="py-20 px-4 md:px-12 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-vibes text-pink-600 text-center mb-12">
            Our Favorites
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {myProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
