import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

type Props = {
  total: number;
};

const CartButton = (props: Props) => {
  const { total } = props;
  const router = useRouter();
  return (
    <Link href="/cart" passHref={true}>
      <button
        type="button"
        className={`${
          router.pathname.includes('cart') ? 'text-green-400 ' : ''
        }relative p-1 hover:text-green-400`}
      >
        <span className="sr-only">View cart</span>
        {total && total > 0 ? (
          <span className="absolute bg-red-600 text-white rounded-full font-light text-xs w-4 h-4 aligner right-0">
            {total}
          </span>
        ) : null}
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  );
};

const mapStateToProps = (state: any) => {
  return { total: state.productsReducer.total };
};

export default connect(mapStateToProps)(CartButton);
