import { connect } from 'react-redux';

import { Product } from '../../../models/product';
import { openProductModal } from '../../../redux/actions/main';
import RatingStars from '../../rating';

type Props = {
  product: Product;
  openModal?: any;
};
const ProductCarouselSlide = (props: Props) => {
  const { product } = props;
  return (
    <div
      className="bg-white grid gap-4 grid-cols-12 px-14 pt-8 pb-10 hover:cursor-pointer"
      onClick={() => (props.openModal ? props.openModal(product) : null)}
    >
      <div className="col-span-12 md:col-span-4 aligner">
        <img className="max-h-52" src={product.image} alt="" />
      </div>
      <div className="col-span-12 md:col-span-8">
        <h4 className="font-bold text-2xl">{product.title}</h4>
        <style jsx>{`
          h4 {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}</style>
        <RatingStars rating={product.rating} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openModal: (product: Product) => {
      dispatch(openProductModal(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductCarouselSlide);
