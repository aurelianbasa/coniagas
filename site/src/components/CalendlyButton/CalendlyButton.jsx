import React from "react";
import { PopupButton } from "react-calendly";
import "./calendly.css";

const CalendlyButton = () => {
    if(typeof window == "undefined") {
        return (
            <div>404</div>
        )
    }
    return (
        <div className="calendly-btn-box">
            <PopupButton 
                url="https://calendly.com/aurelianbasa/30-minute-meeting?hide_event_type_details=1&hide_gdpr_banner=1" 
                rootElement={document.getElementById("___gatsby")} 
                text="Book Appoitment"
                className="calendly-btn"
            />
        </div>
    );
};

export default CalendlyButton