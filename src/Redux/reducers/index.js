import { combineReducers } from "redux";
import AccountReducer from "./accountReducer"
import SpinnerReducer from "./spinnerReducer";
import ErrorReducer from "./errorReducer";
import {InitiatedOrderReducer, RunningOrderReducer, CompletedOrderReducer, ActiveOrderReducer } from "./orderReducer"


export default combineReducers({
  auth: AccountReducer,
  spinner: SpinnerReducer,
  error: ErrorReducer,
  initiatedOrders: InitiatedOrderReducer,
  runningOrders: RunningOrderReducer,
  completedOrders: CompletedOrderReducer,
  activeOrder: ActiveOrderReducer
});
