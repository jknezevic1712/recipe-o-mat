import { Action } from '@ngrx/store';

import { User } from '../auth/auth.model';

export enum PROFILE_ACTIONS {
  FETCH = 'FETCH',
  REFRESH = 'REFRESH',
  EDIT = 'EDIT',
}

export class FetchUserData implements Action {
  readonly type = PROFILE_ACTIONS.FETCH;
}

export class RefreshUserData implements Action {
  readonly type = PROFILE_ACTIONS.REFRESH;

  constructor(public payload: User) {}
}

export class EditUserData implements Action {
  readonly type = PROFILE_ACTIONS.EDIT;

  constructor(public payload: User) {}
}

export type ProfileActionTypes = FetchUserData | RefreshUserData | EditUserData;
