import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;

    /*return (
        <div style={{maxWidth: "100%", display: "flex", justifyContent: "center"}}>
            <img src={src} alt="" style={{maxWidth: "95%"}} />
        </div>
    );*/ //"https://datawrapper.dwcdn.net/qOC7L/full.png" "https://datawrapper.dwcdn.net/DieoU/1/embed.js?v=2"
    /*return (
        <div style={{maxWidth: "100%", display: "flex", justifyContent: "center"}}>
            <script type="text/javascript" defer src="https://datawrapper.dwcdn.net/DieoU/1/embed.js?v=2" charSet="utf-8"></script>
            <img src="https://datawrapper.dwcdn.net/DieoU/full.png" alt="" />
        </div>
    );*/
    return (
        <div style={{ width: "100%" }}>
            <iframe
                title="Required scale-up in Demand and Mines"
                aria-label="Arrow Plot"
                id="datawrapper-chart-qOC7L"
                src={src/*"https://datawrapper.dwcdn.net/qOC7L/2/"*/}
                scrolling="no"
                frameborder="0"
                style={{ width: "inherit", minWidth: "100% !important", border: "none" }}
                height="214" data-external="1"></iframe>
            <script type="text/javascript">
                {!function () {
                    "use strict";
                    window.addEventListener("message", (function (a) {
                        if (void 0 !== a.data["datawrapper-height"]) {
                            var e = document.querySelectorAll("iframe");
                            for (var t in a.data["datawrapper-height"])
                                for (var r = 0; r < e.length; r++)
                                    if (e[r].contentWindow === a.source) {
                                        var i = a.data["datawrapper-height"][t] + "px"; e[r].style.height = i
                                    }
                        }
                    }
                    ))
                }()
                }
            </script>
        </div>
    );
}

export default DatawrapperEmbed