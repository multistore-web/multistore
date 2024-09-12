import React, { useState } from 'react';

const ProductCard = ({ name, price, rating }) => (
  <div className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <div className="flex justify-between items-center mb-2">
      <span className="text-xl font-bold">${price}</span>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-1 text-sm">{rating}/5</span>
      </div>
    </div>
    <button className="w-full mt-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">Ver oferta</button>
  </div>
);

const PlatformSection = ({ platform, products }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-teal-200 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {platform}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

const MultiStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const sampleProducts = {
    Amazon: [
      { name: "Smartphone XYZ", price: 299.99, rating: 4.5 },
      { name: "Laptop ABC", price: 799.99, rating: 4.7 },
      { name: "Auriculares Noise-Cancelling", price: 149.99, rating: 4.3 },
    ],
    Temu: [
      { name: "Smartwatch ABC", price: 89.99, rating: 4.2 },
      { name: "Power Bank 10000mAh", price: 19.99, rating: 4.0 },
      { name: "Funda para Smartphone", price: 9.99, rating: 4.5 },
    ],
    Shein: [
      { name: "Vestido de Verano", price: 39.99, rating: 4.7 },
      { name: "Camiseta Estampada", price: 14.99, rating: 4.4 },
      { name: "Pantalones Vaqueros", price: 29.99, rating: 4.6 },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-teal-600 mb-4">MultiStore</h1>
        <p className="text-xl text-gray-600">Compara productos de múltiples tiendas en un solo lugar</p>
      </header>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center bg-white rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Buscar productos en todas las tiendas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border-none focus:ring-0 text-lg p-4"
          />
          <button type="submit" className="m-1 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      {Object.entries(sampleProducts).map(([platform, products]) => (
        <PlatformSection key={platform} platform={platform} products={products} />
      ))}
    </div>
  );
};

export default MultiStore;
