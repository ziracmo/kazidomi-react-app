import React from 'react';

import { Product } from '../models/product';
import { showToast } from '../services/toasts';
import Rating from './rating';

type State = {};
type Props = {
  product: Product;
};

export default class ItemCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    showToast('Item added to your cart');
  }

  render() {
    const { product } = this.props;
    return (
      <div className="p-4">
        <div className="p-6 rounded-lg shadow bg-green-50 hover:shadow-lg duration-200 hover:cursor-pointer hover:bg-green-100">
          <img
            className="md:w-50 w-32 m-auto object-cover object-center mb-6"
            src={product.image}
            alt="Image Size 720x400"
          ></img>
          <h3 className="text-base text-gray-900 font-medium title-font mb-2">
            {product.title}
          </h3>
          <Rating rate={product.rating.rate} />
          <button className="btn" onClick={this.handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
