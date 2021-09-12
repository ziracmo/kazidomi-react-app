import React from 'react';

import ProductCard from '../components/cards/product-card';
import ProductsCarousel from '../components/carousels/products-carousel/products-carousel';
import CarouselSkeletons from '../components/skeletons/carousel-skeletons';
import ProductsSkeletons from '../components/skeletons/products-skeletons';
import Title from '../components/typos/title';
import { Meta } from '../layout/Meta';
import { Product } from '../models/product';
import productsService from '../services/products';
import { Main } from '../templates/Main';

type State = {
  products: Product[];
  electronics: Product[];
  loading: any;
};

// Home page of our application
export default class Index extends React.Component<null, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      electronics: [],
      loading: {
        products: true,
        electronics: true,
      },
    };
  }

  async getProducts() {
    this.setState({ loading: { ...this.state.loading, products: true } });
    const products = await productsService.getProducts();
    this.setState({
      products,
      loading: { ...this.state.loading, products: false },
    });
  }

  async getElectronics() {
    this.setState({ loading: { ...this.state.loading, electronics: true } });
    const electronics = await productsService.getElectronicsProducts();
    this.setState({
      electronics,
      loading: { ...this.state.loading, electronics: false },
    });
  }

  componentDidMount() {
    this.getProducts();
    this.getElectronics();
  }

  render() {
    const { products, electronics, loading } = this.state;
    return (
      <Main
        meta={
          <Meta title="Kazidomi React JS App - Home" description="Home Page" />
        }
      >
        <Title text="Products" />

        {loading.products ? (
          <ProductsSkeletons />
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </section>
        )}

        <section className="mt-4">
          <Title text="Electronics" />

          {loading.electronics ? (
            <CarouselSkeletons />
          ) : (
            <ProductsCarousel products={electronics} />
          )}
        </section>
      </Main>
    );
  }
}
