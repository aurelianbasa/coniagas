import * as React from 'react';

export default function DataWrapper({ src, title }) {
  const iframeRef = React.useRef(null);

  const handleIframeLoad = () => {
    window.addEventListener('message', function (event) {
      let iframe = iframeRef.current;

      for (let id in event.data['datawrapper-height']) {
        if (iframe && iframe.contentWindow === event.source) {
          let innerHeight = event.data['datawrapper-height'][id] + 'px';
          iframe.style.height = innerHeight;
        }
      }
    });
  };

  React.useEffect(() => {
    handleIframeLoad();

    return () => {};
  }, []);

  return (
    <div>
      <iframe width='100%' ref={iframeRef} src={src} title={title} />
    </div>
  );
}
