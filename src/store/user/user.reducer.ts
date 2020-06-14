import { UserState } from './user.type';
import { UserActions, USER_REQUEST, USER_RESPONSE } from './user.action.type';

const defaultState: UserState = {
  isFetching: false,
  user: null,
}

export default (state = defaultState, action: UserActions): UserState => {
  switch(action.type) {
    case USER_REQUEST: {
      return {
        ...action.payload,
      }
    }
    case USER_RESPONSE: {
      return {
        ...action.payload,
      }
    }
    default: {
      return defaultState;
    }
  }
}