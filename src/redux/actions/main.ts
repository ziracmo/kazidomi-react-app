import { Product } from '../../models/product';
import { showToast } from '../../services/toasts';
import { AuthTypes, ProductTypes } from '../types';

// Products Actions

export const addToCart = (product: Product) => (dispatch: any) => {
  showToast('Product added to cart !', 'success');
  dispatch({
    type: ProductTypes.ADD_TO_CART,
    product,
  });
};

export const removeFromCart = (product: Product) => (dispatch: any) => {
  dispatch({
    type: ProductTypes.REMOVE_FROM_CART,
    product,
  });
};

export const deleteFromCart = (product: Product) => (dispatch: any) => {
  dispatch({
    type: ProductTypes.DELETE_FROM_CART,
    product,
  });
};

export const openProductModal = (product: Product) => (dispatch: any) => {
  dispatch({
    type: ProductTypes.OPEN_PRODUCT_MODAL,
    product,
  });
};

export const closeProductModal = () => (dispatch: any) => {
  dispatch({
    type: ProductTypes.CLOSE_PRODUCT_MODAL,
  });
};

// Auth Actions

export const login = (token: string) => (dispatch: any) => {
  dispatch({
    type: AuthTypes.LOGIN,
    token,
  });
};

export const logout = () => (dispatch: any) => {
  dispatch({
    type: AuthTypes.LOGOUT,
  });
};
