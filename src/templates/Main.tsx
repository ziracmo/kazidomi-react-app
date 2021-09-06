import { ReactNode } from 'react';

import Navbar from '../components/navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <Navbar />

    <div className="mx-auto">
      <div className="py-5 text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };
