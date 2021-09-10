import React from 'react';

import { Product } from '../models/product';

type Props = {
  product: Product;
  addToCartClick?: (product: Product) => {};
  productClick?: (product: Product) => {};
};

export default class ProductCard extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleAddToCart() {
    if (this.props.addToCartClick) {
      this.props.addToCartClick(this.props.product);
    }
  }

  handleProductClick() {
    if (this.props.productClick) {
      this.props.productClick(this.props.product);
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div className="p-4" onClick={this.handleProductClick}>
        <div className="p-6 rounded-lg shadow bg-green-50 hover:shadow-lg duration-200 hover:cursor-pointer hover:bg-green-100">
          <img
            className="md:w-50 w-32 m-auto object-cover object-center mb-6"
            src={product.image}
            alt="Image Size 720x400"
          ></img>
          <h3 className="text-base text-gray-900 font-medium title-font mb-2">
            {product.title}
          </h3>
          <h4 className="text-base text-gray-700 font-medium mb-2">
            {product.price} €
          </h4>
          <button className="btn" onClick={this.handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
