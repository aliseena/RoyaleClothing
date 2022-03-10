import { UserActionTypes } from './User-action-types';
const UserReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
