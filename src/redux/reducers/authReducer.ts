import { AnyAction } from 'redux';

import { AuthTypes } from '../types';

type State = {
  isAuthenticated: boolean;
  token: string;
};

const authReducer = (
  state: State = {
    isAuthenticated: false,
    token: '',
  },
  action: AnyAction
): State => {
  switch (action.type) {
    case AuthTypes.LOGIN: {
      return { isAuthenticated: true, token: action.token };
    }
    case AuthTypes.LOGOUT: {
      return { isAuthenticated: false, token: '' };
    }
    default:
      return { ...state };
  }
};
export default authReducer;
