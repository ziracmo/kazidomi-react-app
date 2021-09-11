import React from 'react';

import { connect } from 'react-redux';

import CartProductListItem from '../../components/cart-product';
import Title from '../../components/typos/title';
import { Meta } from '../../layout/Meta';
import { CartProduct } from '../../models/product';
import { Main } from '../../templates/Main';

type Props = {
  total: number;
  products: CartProduct[];
};

// Cart page of our application
const Index = (props: Props) => {
  const { total, products } = props;
  const fees = 4.04;
  const getProductTotal = (): string => {
    let productTotal: number = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const product of products) {
      productTotal += product.total * product.product.price;
    }
    return productTotal.toFixed(2);
  };

  const getTotal = (): string => {
    return (Number(getProductTotal()) + fees).toFixed(2);
  };

  return (
    <Main
      meta={
        <Meta title="Kazidomi React JS App - Cart" description="Cart Page" />
      }
    >
      <Title text="Cart" />

      {total > 0 ? (
        <section>
          <h6 className="text-sm mb-4">Number of products in cart : {total}</h6>

          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-8">
              {products.map((product, index) => (
                <CartProductListItem
                  product={product.product}
                  key={index}
                  total={product.total}
                />
              ))}
            </div>
            <div className="md:col-span-4">
              <div className="bg-green-50 shadow p-4">
                <div className="grid grid-cols-2 mb-2 text-base">
                  <div>Total product</div>
                  <div className="text-right font-bold">
                    {getProductTotal()} €
                  </div>
                </div>
                <div className="grid grid-cols-2 mb-2 text-base">
                  <div>Sheeping fees</div>
                  <div className="text-right font-bold">{fees} €</div>
                </div>
                <div className="h-1 bg-green-400 w-full my-5"></div>
                <div className="grid grid-cols-2 mb-2 text-xl font-bold">
                  <div>Total</div>
                  <div className="text-right">{getTotal()} €</div>
                </div>
                <button className="btn font-bold">Order</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3 className="text-center mt-48">Your cart is empty... 🌸</h3>
      )}
    </Main>
  );
};

const mapStateToProps = (state: any): Props => {
  return {
    total: state.productsReducer.total,
    products: state.productsReducer.products,
  };
};

export default connect(mapStateToProps, null)(Index);
