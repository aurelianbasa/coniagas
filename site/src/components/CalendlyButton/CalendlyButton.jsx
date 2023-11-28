import React from "react";
import ContentButtons from '@solid-ui-components/ContentButtons'

const CalendlyButton = ({ content: { calendly }, ...props }) => {
    if(typeof window == "undefined")
        return null
    const { text, link, variant } = calendly
    return (
        <>
            <ContentButtons content={[{
                type: "CALENDLY",
                text: text,
                variant: variant || "primary",
                link: link
            }]} />
        </>
    );
};

export default CalendlyButton