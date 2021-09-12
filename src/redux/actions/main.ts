import { Product } from '../../models/product';
import { showToast } from '../../services/toasts';
import { Types } from '../types';

export const addToCart = (product: Product) => (dispatch: any) => {
  showToast('Product added to cart !', 'success');
  dispatch({
    type: Types.ADD_TO_CART,
    product,
  });
};

export const removeFromCart = (product: Product) => (dispatch: any) => {
  dispatch({
    type: Types.REMOVE_FROM_CART,
    product,
  });
};

export const deleteFromCart = (product: Product) => (dispatch: any) => {
  dispatch({
    type: Types.DELETE_FROM_CART,
    product,
  });
};

export const openProductModal = (product: Product) => (dispatch: any) => {
  dispatch({
    type: Types.OPEN_PRODUCT_MODAL,
    product,
  });
};

export const closeProductModal = () => (dispatch: any) => {
  dispatch({
    type: Types.CLOSE_PRODUCT_MODAL,
  });
};
