import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-50">
      
  
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
     
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] px-2 py-1 rounded-full uppercase">
            New
          </span>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-sm md:text-base font-medium text-gray-800 truncate">
          {product.name}
        </h3>
        
        <p className="mt-1 text-pink-500 font-bold text-sm">
          {product.price} JOD
        </p>

     
        <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg text-xs font-semibold 
                           opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                           transition-all duration-300 hover:bg-pink-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;