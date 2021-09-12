import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product } from '../../../models/product';
import ProductCarouselSlide from './products-carousel-slide';

type Props = {
  products: Product[];
};

const ProductsCarousel = (props: Props) => {
  return (
    <section>
      <style jsx>{`
        .image-container {
          background: url('https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg');
        }
      `}</style>
      <Swiper
        className="mb-4"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {props.products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCarouselSlide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsCarousel;
