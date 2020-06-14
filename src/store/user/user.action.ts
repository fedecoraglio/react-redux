import { User, UserState } from "./user.type";
import { UserActions, USER_RESPONSE } from "./user.action.type";
import { RootState } from "../root-reducer";
import { Dispatch } from "react";

const requestUser = (userState: UserState) : UserActions => {
  return {
    type: USER_RESPONSE,
    payload: userState
  }
};

const responseUser = (userState: UserState) : UserActions => {
  return {
    type: USER_RESPONSE,
    payload: userState
  }
};

export const listUser = () => {
  return async (dispatch: Dispatch<UserActions>, getState: () => RootState) => {
    dispatch(requestUser({
      ...getState().user,
      isFetching: true
    }));
    // we should call service here and user the field users
    dispatch(responseUser({
      ...getState().user,
      isFetching: false
    }));
  }
}

export const addUser = (user: User) => { 
  return async (dispatch: Dispatch<UserActions>, getState: () => RootState) => {    
    dispatch(requestUser({
      ...getState().user,
      isFetching: true
    }));
    const users = getState().user.users || [];
    // we should call service here to save new user.
    users.push(user);
    dispatch(responseUser({
      users: users,
      user: null,
      isFetching: false 
    }));
  }
};