import { Action } from '@ngrx/store';

import { User } from './auth.model';

export enum AUTH_ACTIONS {
  GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN',
  LOGIN_START = 'LOGIN_START',
  AUTO_LOGIN = 'AUTO_LOGIN',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAIL = 'AUTH_FAIL',
  LOGOUT = 'LOGOUT',
  SIGNUP_START = 'SIGNUP_START',
  CLEAR_ERROR = 'CLEAR_ERROR',
  START_USER_REFRESH = 'START_USER_REFRESH',
  FETCH_USER_DATA = 'FETCH_USER_DATA',
  REFRESH_USER_DATA = 'REFRESH_USER_DATA',
  EDIT_USER_DATA = 'EDIT_USER_DATA',
}

export class GoogleSignIn implements Action {
  readonly type = AUTH_ACTIONS.GOOGLE_SIGN_IN;
}

export class LoginStart implements Action {
  readonly type = AUTH_ACTIONS.LOGIN_START;

  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}
export class AutoLogin implements Action {
  readonly type = AUTH_ACTIONS.AUTO_LOGIN;
}

export class AuthSuccess implements Action {
  readonly type = AUTH_ACTIONS.AUTH_SUCCESS;

  constructor(
    public payload: {
      userId: string;
      email: string;
      fullName: string;
      photoURL: string;
      redirect: boolean;
    }
  ) {}
}
export class AuthFail implements Action {
  readonly type = AUTH_ACTIONS.AUTH_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AUTH_ACTIONS.LOGOUT;
}

export class SignupStart implements Action {
  readonly type = AUTH_ACTIONS.SIGNUP_START;

  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class ClearError implements Action {
  readonly type = AUTH_ACTIONS.CLEAR_ERROR;
}

export class StartUserRefresh implements Action {
  readonly type = AUTH_ACTIONS.START_USER_REFRESH;
}

export class FetchUserData implements Action {
  readonly type = AUTH_ACTIONS.FETCH_USER_DATA;
}

export class RefreshUserData implements Action {
  readonly type = AUTH_ACTIONS.REFRESH_USER_DATA;

  constructor(public payload: User) {}
}

export class EditUserData implements Action {
  readonly type = AUTH_ACTIONS.EDIT_USER_DATA;

  constructor(public payload: User) {}
}

export type AuthActionTypes =
  | GoogleSignIn
  | AuthSuccess
  | Logout
  | LoginStart
  | AuthFail
  | SignupStart
  | ClearError
  | AutoLogin
  | StartUserRefresh
  | FetchUserData
  | RefreshUserData
  | EditUserData;

//   import { Action, createAction, props } from '@ngrx/store';

// export enum AUTH {
//   LOGIN_START = 'LOGIN_START',
//   AUTH_SUCCESS = 'AUTH_SUCCESS',
//   AUTH_FAIL = 'AUTH_FAIL',
//   LOGOUT = 'LOGOUT',
//   SIGNUP_START = 'SIGNUP_START',
//   CLEAR_ERROR = 'CLEAR_ERROR',
//   AUTO_LOGIN = 'AUTO_LOGIN',
// }

// export const authSuccess = createAction(
//   AUTH_ACTIONS.AUTH_SUCCESS,
//   props<{
//     email: string;
//     userId: string;
//     redirect: boolean;
//   }>
// );
// export const authFail = createAction(AUTH_ACTIONS.AUTH_FAIL, props<{ error: string }>);

// export const loginStart = createAction(
//   AUTH_ACTIONS.LOGIN_START,
//   props<{
//     email: string;
//     password: string;
//   }>
// );
// export const autoLogin = createAction(AUTH_ACTIONS.AUTO_LOGIN);
// export const logout = createAction(AUTH_ACTIONS.LOGOUT);

// export const signupStart = createAction(
//   AUTH_ACTIONS.SIGNUP_START,
//   props<{
//     email: string;
//     password: string;
//   }>
// );

// export const clearError = createAction(AUTH_ACTIONS.CLEAR_ERROR);

// export const AuthActionTypes = {
//   authSuccess,
//   logout,
//   loginStart,
//   authFail,
//   signupStart,
//   clearError,
//   autoLogin,
// };
