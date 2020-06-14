import { UserState } from "./user.type";

export const USER_REQUEST = 'USER_REQUEST';
export const USER_RESPONSE = 'USER_RESPONSE';

export interface UserRequestAction {
  type: typeof USER_REQUEST
  payload: UserState
}

export interface UserResponseAction {
  type: typeof USER_RESPONSE
  payload: UserState
}

export type UserActions = UserRequestAction | UserResponseAction;