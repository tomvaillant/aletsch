import React from 'react';
import Head from 'next/head';

const Index = () => {
  const datawrapperScript = `
    !function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  `;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: datawrapperScript }} />
      </Head>
      <iframe
        title="Swiss Glaciers"
        aria-label="Map"
        id="datawrapper-chart-dZoOB"
        src="https://datawrapper.dwcdn.net/dZoOB/1/"
        scrolling="no"
        frameBorder="0"
        style={{ width: '100%', minWidth: '100%', border: 'none' }}
        height="533"
        data-external="1"
      />
    </div>
  );
};

export default Index;
