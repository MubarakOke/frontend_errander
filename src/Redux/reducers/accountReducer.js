import * as type from "../actionCreators/types";

const INITIAL_STATE = null;

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.signupType:
      return {...action.payload.data};
    case type.signinType:
      return {...action.payload.data};
    case type.updateAuth:
      return {...action.payload};
    case type.signoutType:
      return null;
    default:
      return state;
  }
};

export default CustomerReducer;
