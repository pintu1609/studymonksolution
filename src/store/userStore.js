import { combineReducers } from "redux";

const USER_LOGIN = "USER_LOGIN";
const USER_SIGNUP = "USER_SIGNUP";


export const signup = (userData) => {
    return {
      type: USER_SIGNUP,
      payload: userData,
    };
  };
  
  export const login = (userData) => {
    return {
      type: USER_LOGIN,
      payload: userData,
    };
  };
  const initialState = {
    user: null,
    isloggedIn: false,
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNUP:
        // Perform signup logic and update state
        return {
          ...state,
          user: action.payload,
          isloggedIn: true,
        };
      case USER_LOGIN:
        // Perform login logic and update state
        return {
          ...state,
          user: action.payload,
          isloggedIn: true,
        };
      default:
        return state;
    }
  };

const UserApp = combineReducers({ rootReducer });
export default UserApp;
