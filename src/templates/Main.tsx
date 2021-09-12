import React, { ReactNode } from 'react';

import Footer from '../components/footer';
import ProductModal from '../components/modals/product-modal';
import Navbar from '../components/navbar/navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <Navbar />

    <div className="mx-auto pt-5 px-5 min-h-screen">
      <div className="py-5 text-xl content">{props.children}</div>
    </div>
    <ProductModal />
    <Footer />
  </div>
);

export { Main };
