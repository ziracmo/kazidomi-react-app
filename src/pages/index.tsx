import React from 'react';

import ItemCard from '../components/item-card';
import { Meta } from '../layout/Meta';
import { Product } from '../models/product';
import { Main } from '../templates/Main';

const Index = () => {
  const product: Product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <Main
      meta={
        <Meta title="Kazidomi React JS App - Home" description="Home Page" />
      }
    >
      <section>
        <div className="px-5 pt-5 mx-auto">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                Products
              </h1>
              <div className="h-1 w-20 bg-green-400 rounded"></div>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <ItemCard product={product} />
          <ItemCard product={product} />
          <ItemCard product={product} />
          <ItemCard product={product} />
          <ItemCard product={product} />
        </section>
      </section>
    </Main>
  );
};

export default Index;
