import * as type from "./types";
import baseApi from "../../Api/baseApi";
import { showSpinner, hideSpinner } from "./spinnerAction";

export const SigninAction = (navigate, formData) => {
  
  return async (dispatch) => {
    try {
      dispatch({type: type.errorLogin, payload: null})
      dispatch(showSpinner())
      const res= await baseApi.post("/account/auth/errander/", formData)
      await Promise.all([
      dispatch({ type: type.signinType, payload: res }), 
      // dispatch(FetchInitiatedOrderAction()), 
      // dispatch(FetchRunningOrderAction()),
      // dispatch(FetchCompletedOrderAction()),
      ]) 
      navigate("/home/errand/");
      dispatch(hideSpinner())
    } catch (error) {
      // console.log(error);
      dispatch(hideSpinner())
      dispatch({type: type.errorLogin, payload: {"login": error.response.data.error}})
    }
  };
};
