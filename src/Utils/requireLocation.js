import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import RequireLocationOverlay from "../Components/requireLocationOverlay";

export const RequireLocation = ({ children, locationUnset }) => {
    return <RequireLocationOverlay locationUnset={locationUnset}>{children}</RequireLocationOverlay>;
};