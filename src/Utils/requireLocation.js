import React from "react";
import RequireLocationOverlay from "../Components/requireLocationOverlay";

export const RequireLocation = ({ children, locationUnset }) => {
    return <RequireLocationOverlay locationUnset={locationUnset}>{children}</RequireLocationOverlay>;
};