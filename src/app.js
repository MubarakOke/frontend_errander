import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { useSelector} from "react-redux";

import Login from "./Pages/login";
import SignUp from "./Pages/signup/signUp";
import Home from "./Pages/home/home";
import Profile from "./Pages/profile/profile";
import ProfileEdit from "./Pages/profile/profileEdit";
import Errand from "./Pages/home/errand";
import History from "./Pages/home/history";
import Running from "./Pages/home/running";
import Thankyou from "./Pages/thankyou";
import ForgotPassword from "./Pages/forgetPassword";
import ForgetPasswordReset from "./Pages/forgetPasswordReset";

import LoadingOverlay from 'react-loading-overlay'
import SyncLoader from 'react-spinners/SyncLoader'
import { Toaster } from "react-hot-toast";
import { RequireAuth } from "./Utils/requireAuth";
import { RequireLocation } from "./Utils/requireLocation";



const App = () => {
  const spinnerState= useSelector((state)=>state.spinner)
  const erranderID = useSelector((state) => state&&state.auth?state.auth.id:null);
  const [webSocket, setWebSocket]= useState(null)
  const [locationUnset, setlocationUnset]= useState(true)
  const [webSocketConnected, setWebSocketConnected]= useState(false)

  useEffect(()=>{
    if(erranderID && !webSocketConnected){
      setWebSocket(new WebSocket(`ws://${process.env.REACT_APP_BACKEND_BASE_URL}/ws/errander/${erranderID}/`));
      }
  },[erranderID])

  if (webSocket){
    webSocket.onopen= (e)=>{
      setWebSocketConnected(true)
    }
    webSocket.onclose = function(e) {
      setWebSocketConnected(false)
    }
  }

  if (webSocketConnected){
    navigator.geolocation.watchPosition((position)=>{
      if(locationUnset){
        setlocationUnset(false)
      }
      webSocket.send(JSON.stringify({coordinates : {lat: position.coords.latitude, long: position.coords.longitude}}))
      }, ()=>{
        if(!locationUnset){
          setlocationUnset(true)
        }
      },{enableHighAccuracy: true})
  }
  
  return (
    <div>
      {/* ----------------Notification Begins------------- */}
      <LoadingOverlay
        active={spinnerState}
        spinner={<SyncLoader color={'#0E4E48'}/>}
        styles={{
          overlay: (base) => ({
            ...base,
            position: 'fixed'
            })
          }}
       >

      <div>
        <Toaster
          toastOptions={{
            success: {
              duration: 5000,
              position: "top-center",
              style: { background: "#0E4E48", color: "white" },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: { background: "red", color: "white" },
            },
          }}
          containerStyle={{ top: 50 }}
        />
      </div>
      {/* ----------------Notification Ends------------- */}
      {/* -----------Routes Begins--------------- */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<RequireAuth loginPath="/"><RequireLocation locationUnset={locationUnset}><Home webSocketConnected={webSocketConnected} /></RequireLocation></RequireAuth>}>
          <Route index element={<Navigate to="/home/errand" />} /> 
          <Route path="/home/errand" element={<Errand />} />
          <Route path="/home/running" element={<Running />} />
          <Route path="/home/history" element={<History />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/change-forget-password/:token/:user" element={<ForgetPasswordReset />} />
      </Routes>
      {/* -----------Routes Ends--------------- */}
      </LoadingOverlay>
    </div>
  );
};

export default App;
