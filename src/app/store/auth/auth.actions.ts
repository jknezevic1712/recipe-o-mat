import { Action } from '@ngrx/store';

export enum AUTH_ACTIONS {
  LOGIN_START = 'LOGIN_START',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAIL = 'AUTH_FAIL',
  LOGOUT = 'LOGOUT',
  SIGNUP_START = 'SIGNUP_START',
  CLEAR_ERROR = 'CLEAR_ERROR',
  AUTO_LOGIN = 'AUTO_LOGIN',
}

export class AuthSuccess implements Action {
  readonly type = AUTH_ACTIONS.AUTH_SUCCESS;

  constructor(
    public payload: {
      userId: string;
      email: string;
      fullName: string;
      photoURL: string;
      idToken: string;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = AUTH_ACTIONS.LOGOUT;
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

export class AuthFail implements Action {
  readonly type = AUTH_ACTIONS.AUTH_FAIL;

  constructor(public payload: string) {}
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

export class AutoLogin implements Action {
  readonly type = AUTH_ACTIONS.AUTO_LOGIN;
}

export type AuthActionTypes =
  | AuthSuccess
  | Logout
  | LoginStart
  | AuthFail
  | SignupStart
  | ClearError
  | AutoLogin;

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
