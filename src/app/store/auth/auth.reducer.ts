import { User } from './auth.model';

import { AUTH_ACTIONS, AuthActionTypes } from './auth.actions';

export interface AuthState {
  user: User | null;
  authError: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(state = initialState, action: AuthActionTypes) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
    case AUTH_ACTIONS.SIGNUP_START:
      return {
        ...state,
        user: null,
        authError: null,
        loading: true,
      };

    case AUTH_ACTIONS.AUTH_SUCCESS:
      const { userId, email } = action.payload;
      const user = new User(userId, email, 'Jakov', 'Knezevic');

      return {
        ...state,
        user,
        authError: null,
        loading: false,
      };

    case AUTH_ACTIONS.AUTH_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        authError: action.payload,
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        authError: null,
        loading: false,
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
}
