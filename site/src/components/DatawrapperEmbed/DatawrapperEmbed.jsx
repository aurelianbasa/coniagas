import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;

    return (
        <div style={{maxWidth: "100%", display: "flex", justifyContent: "center"}}>
            <img src={src} alt="" style={{maxWidth: "80%"}} />
        </div>
    );
}

export default DatawrapperEmbed