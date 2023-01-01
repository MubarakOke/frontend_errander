import * as type from "./types";
import baseApi from "../../Api/baseApi";
import { showSpinner, hideSpinner } from "./spinnerAction";


export const SignupAction = (navigate, formData, setContent) => {
  return async (dispatch) => {
    try {
      dispatch({type: type.errorSignup, payload: null})
      dispatch(showSpinner())
      const response= await baseApi.post("/errander/signup/", formData)
      dispatch({ type: type.signupType, payload: response })
      navigate("/thankyou");
      dispatch(hideSpinner())
    } catch (error) {
      dispatch({type: type.errorLogin, payload: {"signup": error.response.data.error}})
      setContent(0)
      dispatch(hideSpinner());
    }
  };
};