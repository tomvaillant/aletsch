import React from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';

const Index = () => {
  const datawrapperScript = `
    !function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source)e[r].style.height=a.data["datawrapper-height"][t]+"px"}))}();
  `;

  const flourishEmbedScript = `
    !function() {
      const flourishDivs = document.querySelectorAll('.flourish-embed');
      if (flourishDivs.length > 0) {
        for (let i = 0; i < flourishDivs.length; i++) {
          const flourishDiv = flourishDivs[i];
          const flourishScript = document.createElement('script');
          flourishScript.src = 'https://public.flourish.studio/resources/embed.js';
          flourishScript.async = true;
          flourishDiv.appendChild(flourishScript);
        }
      }
    }();
  `;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Vanishing Giants</title>
        <script dangerouslySetInnerHTML={{ __html: datawrapperScript }} />
        <script dangerouslySetInnerHTML={{ __html: flourishEmbedScript }} />
      </Head>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Vanishing Giants</h1>
        <p className={styles.subtitle}>The decline of Swiss Glaciers</p>
      </div>
      <img src="/images/hero.png" alt="Your Image" className={styles.image} />
      <div className={styles.textContainer}>
        <h1>Swiss glacers</h1>
        <p>in Decline</p>
      </div>

      <div className={styles.content}>
        <iframe
          title="Swiss Glaciers"
          aria-label="Map"
          id="datawrapper-chart-dZoOB"
          src="https://datawrapper.dwcdn.net/dZoOB/1/"
          scrolling="no"
          frameBorder="0"
          className={styles.iframeStyle}
          height="533"
          data-external="1"
        />
      </div>

      <div className={styles.spacer}></div> 
      <div className={styles.videoContainer}>
        <video
          className={styles.videoBackground}
          src="/videos/background.mov"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <p className={styles.boxContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac felis a magna ultrices elementum. Integer ullamcorper lectus at purus laoreet lacinia.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.boxContent}>
            Sed eu sagittis ipsum. Fusce gravida neque vitae justo fermentum, in elementum ipsum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
      <div id="flourish-embed">
        <iframe
          src='https://flo.uri.sh/visualisation/13602717/embed'
          title='Interactive or visual content'
          frameBorder='0'
          scrolling='no'
          className={styles.flourishPhotoStyler}
        ></iframe>
      </div>
      <div id="flourish-embed">
        <iframe
          src='https://flo.uri.sh/visualisation/13602609/embed'
          title='Interactive or visual content'
          frameBorder='0'
          scrolling='no'
          className={styles.flourishPhotoStyler}
        ></iframe>
      </div>

      <div className={styles.spacer}></div> 
    </div>
  );
};

export default Index;
