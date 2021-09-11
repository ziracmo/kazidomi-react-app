import { AnyAction } from 'redux';

import { CartProduct, Product } from '../../models/product';
import { Types } from '../types';

type State = {
  products: CartProduct[];
  total: number;
  modalOpen: boolean;
  selectedProduct?: Product | null;
};

const productsReducer = (
  state: State = {
    products: [],
    total: 0,
    modalOpen: false,
  },
  action: AnyAction
): State => {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      // check if the product id exists in the cart
      const { products } = state;
      const productIndex = products.findIndex(
        (p) => action.product.id === p.product.id
      );

      // If we dont have an object we add in in the array
      if (productIndex === -1) {
        const cartProduct: CartProduct = {
          product: action.product,
          total: 1,
        };
        // Add it the the global state products
        products.push(cartProduct);
        // Update the total of products in states
        const total = state.total + 1;
        return {
          ...state,
          products,
          total,
        };
      }

      const cartProduct = products[productIndex];
      if (cartProduct) {
        cartProduct.total += 1;
        // Update it the the global state products
        products[productIndex] = cartProduct;
        // Update the total of products in states
        const total = state.total + 1;
        return {
          ...state,
          products,
          total,
        };
      }

      // if we don't find the product, just return the current state
      return { ...state };
    }
    case Types.REMOVE_FROM_CART: {
      const { products } = state;
      // Get the product index
      const productIndex = products.findIndex(
        (p) => action.product.id === p.product.id
      );

      if (productIndex !== -1) {
        const cartProduct = products[productIndex];
        if (cartProduct) {
          cartProduct.total -= 1;
          const total = state.total - 1;

          // If the total of this product in cart is zero, we delete it from the cart
          if (cartProduct.total === 0) {
            // Delete it from the cart
            products.splice(productIndex);
            return {
              ...state,
              products,
              total,
            };
          }
          // Update it the the global state products
          products[productIndex] = cartProduct;
          // Update the total of products in states
          return {
            ...state,
            products,
            total,
          };
        }
      }

      // if we don't find the product, just return the current state
      return { ...state };
    }
    case Types.DELETE_FROM_CART: {
      const { products } = state;
      // get the product index
      const productIndex = products.findIndex(
        (p) => action.product.id === p.product.id
      );

      if (productIndex !== -1) {
        // Delete it from the cart
        products.splice(productIndex);
        const total = state.total - 1;
        return {
          ...state,
          products,
          total,
        };
      }

      // if we don't find the product, just return the current state
      return { ...state };
    }
    case Types.OPEN_PRODUCT_MODAL: {
      return {
        ...state,
        selectedProduct: action.product,
        modalOpen: true,
      };
    }
    case Types.CLOSE_PRODUCT_MODAL: {
      return {
        ...state,
        selectedProduct: null,
        modalOpen: false,
      };
    }

    default:
      return { ...state };
  }
};
export default productsReducer;
