import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;

    return (
        <iframe src={src} frameborder="0" style={{width: '100%', minWidth: '100% !important', border: 'none'}} height="942" data-external="1" />
    );
}

export default DatawrapperEmbed