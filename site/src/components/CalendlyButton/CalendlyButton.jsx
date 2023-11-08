import React from "react";
import { PopupButton } from "react-calendly";
import "./calendly.css";

const CalendlyButton = ({ content: {links}, ...props }) => {
    // Show a 404 text until the 'document' element becomes accessible
    if(typeof window == "undefined") {
        return (
            <div>404</div>
        )
    }
    
    const calendlyUrl = links.filter((link) => link.type === "calendly")[0].url

    return (
        <div className="calendly-btn-box">
            <PopupButton 
                url={calendlyUrl} 
                rootElement={document.getElementById("___gatsby")} 
                text="Book Appointment"
                className="calendly-btn"
            />
        </div>
    );
};

export default CalendlyButton