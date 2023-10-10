import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;

    return (
        <iframe src={src} style={{width: '1px', minWidth: '100%', border: 'none', minHeight: '100%', height: '100vh'}} data-external="1" />
    );
}

export default DatawrapperEmbed