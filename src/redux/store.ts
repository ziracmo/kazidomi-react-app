import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

const wrapper = createWrapper(makeStore);

export default wrapper;
