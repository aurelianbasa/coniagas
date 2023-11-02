import React from 'react';

const DatawrapperEmbed = ({ as: CustomComponent, content, ...props }) => {
    const { text } = content;
    const src = text[1].text;
    const dwRef = React.useRef(null);
    const isBrowser = typeof window !== "undefined";

    if (!isBrowser) {
        return null;
    }

    return (
        <div style={{ width: "100%" }}>
            <iframe
                ref={dwRef}
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
                            var e = dwRef.current;
                            for (var t in a.data["datawrapper-height"])
                                if (e && e.contentWindow === a.source) {
                                    var i = a.data["datawrapper-height"][t] + "px"; e.style.height = i
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