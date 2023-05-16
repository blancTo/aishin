import React, { useRef, useEffect } from 'react'

const EigyoIframe = ({ src }) => {
    const iframeRef = useRef(null);
  
    useEffect(() => {
      const handleLoad = () => {
        if (iframeRef.current) {
          const iframe = iframeRef.current;
          const height = iframe.contentWindow.document.body.scrollHeight;
          iframe.style.height = `${height}px`;
        }
      };
  
      if (iframeRef.current) {
        iframeRef.current.addEventListener('load', handleLoad);
      }
  
      return () => {
        if (iframeRef.current) {
          iframeRef.current.removeEventListener('load', handleLoad);
        }
      };
    }, []);
  
    return <iframe ref={iframeRef} src={src} />;
  };
  
export default EigyoIframe;


