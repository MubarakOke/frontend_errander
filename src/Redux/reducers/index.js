import { combineReducers } from "redux";
import AccountReducer from "./accountReducer"
import SpinnerReducer from "./spinnerReducer";
import ErrorReducer from "./errorReducer";
import {InitiatedOrderReducer, RunningOrderReducer, CompletedOrderReducer, ActiveOrderReducer } from "./orderReducer"
import * as type from "../actionCreators/types";

// const rootReducer = combineReducers({
//   auth: AccountReducer,
//   spinner: SpinnerReducer,
//   error: ErrorReducer,
//   initiatedOrders: InitiatedOrderReducer,
//   runningOrders: RunningOrderReducer,
//   completedOrders: CompletedOrderReducer,
//   activeOrder: ActiveOrderReducer
// });

// export default (state, action) => rootReducer(action.type === type.signoutType ? undefined : state, action);

export default combineReducers({
  auth: AccountReducer,
  spinner: SpinnerReducer,
  error: ErrorReducer,
  initiatedOrders: InitiatedOrderReducer,
  runningOrders: RunningOrderReducer,
  completedOrders: CompletedOrderReducer,
  activeOrder: ActiveOrderReducer
});
