import React from 'react';

import { connect } from 'react-redux';

import { Product } from '../../models/product';
import { addToCart, openProductModal } from '../../redux/actions/main';

type Props = {
  product: Product;
  addToCart?: any;
  openModal?: any;
};

class ProductCard extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleAddToCart(e: any) {
    e.preventDefault();
    if (this.props.addToCart) {
      this.props.addToCart(this.props.product);
    }
  }

  handleProductClick(e: any) {
    if (this.props.openModal && e.target.localName !== 'button') {
      this.props.openModal(this.props.product);
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div className="p-4" onClick={this.handleProductClick}>
        <div className="p-6 h-72 rounded-lg shadow bg-green-50 hover:shadow-lg duration-200 hover:cursor-pointer hover:bg-green-100">
          <img
            className="max-h-20 m-auto object-cover object-center mb-6"
            src={product.image}
            alt="Image Size 720x400"
          ></img>
          <h3 className="text-base text-gray-900 font-medium title-font mb-2 h-12">
            {product.title}
          </h3>
          <style jsx>{`
            h3 {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          `}</style>
          <h4 className="text-base text-gray-700 mb-2 font-bold">
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: Product) => {
      dispatch(addToCart(product));
    },
    openModal: (product: Product) => {
      dispatch(openProductModal(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
