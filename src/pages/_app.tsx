import { AppProps } from 'next/app';

import '../styles/main.css';
import wrapper from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// Wrap our App with redux to use it
export default wrapper.withRedux(MyApp);
