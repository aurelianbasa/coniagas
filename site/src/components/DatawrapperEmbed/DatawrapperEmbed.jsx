import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;

    const isBrowser = typeof window !== "undefined";

    if (!isBrowser) {
        return null;
    }

    return (
        <div style={{ width: "100%" }}>
            <iframe
                src={src}
                scrolling="no"
                frameborder="0"
                style={{ width: "inherit", minWidth: "100% !important", border: "none" }}
                data-external="1"></iframe>
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