import * as type from "./types";
import baseApi from "../../Api/baseApi";
import toast from "react-hot-toast";
import { showSpinner, hideSpinner } from "./spinnerAction";


export const FetchInitiatedOrderAction = () => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        dispatch(showSpinner())
        const response = await baseApi.get(
          "/order/uncompleted/list/",
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({ type: type.fetchInitiatedOrderType, payload: response.data.data.results });
        dispatch(hideSpinner());
      } catch {
        dispatch(hideSpinner())
        toast.error(
          "Cannot get your active orders, please check your internet connection"
        );
      }
    };
  };

export const FetchRunningOrderAction = () => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        dispatch(showSpinner())
        const response = await baseApi.get(
          "/order/running/list/",
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({ type: type.fetchRunningOrderType, payload: response.data.data.results });
        dispatch(hideSpinner());
      } catch {
        dispatch(hideSpinner());
        toast.error(
          "Cannot get your active orders, please check your internet connection"
        );
      }
    };
  };


  export const FetchCompletedOrderAction = () => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        dispatch(showSpinner())
        const response = await baseApi.get(
          "/order/completed/list/",
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({ type: type.fetchCompletedOrderType, payload: response.data.data.results });
        dispatch(hideSpinner());
      } catch {
        dispatch(hideSpinner());
        toast.error(
          "Cannot get your active orders, please check your internet connection"
        );
      }
    };
  };

export const SetActiveOrder= (activeOrder)=>{

  return async (dispatch)=>{
    dispatch({ type: type.activeOrder, payload: activeOrder });
  }
}