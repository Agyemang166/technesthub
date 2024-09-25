import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Example product data
const products = [
  {
    id: 1,
    name: 'Bag of Rice THONKET',
    href: '/detailspage/1', // Adjusted href for individual product pages
    imageSrc: 'https://agrigoldmagazine.com/wp-content/uploads/2022/01/Wilmar.jpg',
    imageAlt: "Frytol",
    price: '$35',
  },
  {
    id: 2,
    name: 'Nestle Milo',
    href: '/detailspage/2',
    imageSrc: 'https://d2t3trus7wwxyy.cloudfront.net/catalog/product/m/i/milo-cereal-330g_2.jpg',
    imageAlt: "Nestle Milo",
    price: '$50',
  },
  {
    id: 3,
    name: 'Stylish Pants',
    href: '/detailspage/3',
    imageSrc: 'https://pictures-ghana.jijistatic.net/39500660_NjIwLTQ5Ni04NzU2YTIzOWQ4.webp',
    imageAlt: "Stylish Pants",
    price: '$45',
  },
  {
    id: 4,
    name: 'Tomato Paste',
    href: '/detailspage/4',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Xq-BVyvGZOZgZqrOqzz5BxWQINNjo4aThyIXD3QTGjvhgr9mTx-eqhRkAhEmLDeeJZw&usqp=CAU',
    imageAlt: "Cool Jacket",
    price: '$80',
  },
];

export default function ProductCard() {
  // State to track favorite products
  const [favoritedProducts, setFavoritedProducts] = useState({});

  const toggleFavorite = (id) => {
    setFavoritedProducts((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the favorite state for the specific product ID
    }));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Product Catalogue</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            const isFavorited = favoritedProducts[product.id];

            return (
              <div
                key={product.id}
                className="group relative border border-gray-300 rounded-md flex flex-col p-3" // Make the card a flex container
              >
                <Link to={product.href} className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>

                {/* Spacer to push buttons to the bottom */}
                <div className="flex-grow" />

                <div className="flex items-center mt-2">
                  <button onClick={() => toggleFavorite(product.id)} aria-label="Favorite" className="mr-2">
                    <FaHeart
                      size={20}
                      color={isFavorited ? 'red' : 'black'}
                      className="transition-colors duration-200"
                    />
                  </button>
                  <button className="flex items-center px-2 py-1 ml-12 border border-gray-300 rounded">
                    <FaShoppingCart className="mr-1" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
