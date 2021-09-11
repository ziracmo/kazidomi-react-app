import React from 'react';

import { connect } from 'react-redux';

import { Product } from '../../models/product';
import { addToCart, closeProductModal } from '../../redux/actions/main';
import RatingStars from '../rating';

type Props = {
  product?: Product;
  modalOpen?: boolean;
  closeProductModal?: () => {};
  addToCart?: (product: Product) => {};
};

function ProductModal(props: Props) {
  const { product, modalOpen } = props;
  return (
    <>
      {modalOpen && product ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <div className="grid md:grid-cols-2">
                    <div className="aligner mb-8 md:mb-0">
                      <img className="max-h-44" src={product.image} alt="" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {product.title}
                      </h3>
                      <div className="tag">{product.category}</div>
                      <RatingStars rating={product.rating} />
                      <p className="my-4 text-base leading-relaxed">
                        {product.description}
                      </p>
                      <h4 className="text-base text-gray-700 mb-2 font-bold">
                        {product.price} €
                      </h4>
                      <button
                        className="btn"
                        onClick={() =>
                          props.addToCart ? props.addToCart(product) : null
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                      props.closeProductModal ? props.closeProductModal() : null
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state: any): Props => {
  return {
    modalOpen: state.productsReducer.modalOpen,
    product: state.productsReducer.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeProductModal: () => {
      dispatch(closeProductModal());
    },
    addToCart: (product: Product) => {
      dispatch(addToCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
