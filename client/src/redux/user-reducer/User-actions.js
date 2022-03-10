import { UserActionTypes } from './User-action-types';
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
