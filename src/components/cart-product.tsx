import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { connect } from 'react-redux';

import { Product } from '../models/product';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../redux/actions/main';

type Props = {
  product: Product;
  total: number;
  addToCart?: any;
  removeFromCart?: any;
  deleteFromCart?: any;
};

const CartProductListItem = (props: Props) => {
  const { product, total } = props;
  return (
    <div className="grid grid-cols-12 mb-4 border border-gray-50 shadow hover:shadow-lg duration-200 rounded p-3">
      <div className="hidden lg:block lg:col-span-1">
        <div className="aligner h-full w-full">
          <img className="h-14" src={product.image} alt="" />
        </div>
      </div>
      <div className="col-span-9 lg:col-span-8 lg:pl-9">
        <h3>{product.title}</h3>
        <div className="tag">{product.category}</div>
        <div className="aligner w-20 border mt-2 p-1">
          <MinusIcon
            className="h-4 hover:text-green-400 duration-200"
            onClick={() =>
              props.removeFromCart ? props.removeFromCart(product) : null
            }
          />
          <span className="mx-2">{total}</span>
          <PlusIcon
            className="h-4 hover:text-green-400 duration-200"
            onClick={() => (props.addToCart ? props.addToCart(product) : null)}
          />
        </div>
      </div>
      <div className="col-span-3 text-right relative">
        <h5
          className="text-red-300 font-bold uppercase text-sm hover:text-red-600 hover:cursor-pointer duration-200"
          onClick={() =>
            props.deleteFromCart ? props.deleteFromCart(product) : null
          }
        >
          Delete
        </h5>
        <h4 className="font-bold absolute bottom-0 right-0">
          {product.price * total} €
        </h4>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: Product) => {
      dispatch(addToCart(product));
    },
    removeFromCart: (product: Product) => {
      dispatch(removeFromCart(product));
    },
    deleteFromCart: (product: Product) => {
      dispatch(deleteFromCart(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartProductListItem);
