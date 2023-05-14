import React from 'react';
import { useEffect, useState, useRef } from "react";
import Head from 'next/head';
import styles from '../styles/Index.module.css';

const useOnScreen = (options, delay = 0) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Delay setting the visible state
      setTimeout(() => setVisible(entry.isIntersecting), delay);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, delay]);

  return [ref, visible];
};

const useScrollPositionRelativeToElement = (elementRef) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = elementRef.current ? elementRef.current.offsetTop : 0;
        setScrollPosition(Math.max(0, scrollTop - elementTop));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [elementRef]);

  return scrollPosition;
};

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

  const videoRef = useRef();
  const scrollPositionRelativeToVideo = useScrollPositionRelativeToElement(videoRef);
  const [ref1, visible1] = useOnScreen({ rootMargin: '-10px' }, 3000);
  const [ref2, visible2] = useOnScreen({ rootMargin: '-10px' }, 5000);

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
        <p>Swiss glaciers, a stunning landscape feature and an important part of the country's ecosystem, have been increasingly impacted by climate change. Over the last few decades, these majestic ice bodies have been in continuous decline, facing rapid melting as temperatures rise.</p>
        <p>According to studies, Swiss glaciers lost about 10% of their volume between 2010 and 2020, and the rate of loss has only accelerated since then. This melting not only threatens the scenic beauty of the Swiss Alps but also impacts water supplies, tourism, and power generation. In addition, it's been causing glacial lakes to swell dangerously, posing a risk of catastrophic flooding.</p>
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
      <div className={styles.textContainer}>
        <h1>The Aletsch Arena</h1>
        <p>The Aletsch Glacier, the largest glacier in the Alps, has not been immune to this worrisome trend. It is a UNESCO World Heritage site and a significant indicator of climate change in the region. Over the last century, the Aletsch Glacier has lost more than 3 kilometers of its length and hundreds of meters of its thickness. Scientists predict that if the current trend of global warming continues, the glacier could lose half of its current volume by the 2040s.</p>
      </div>
      <div className={styles.videoWrapper} ref={videoRef}>
      <video
        className={styles.videoBackground}
        src="/videos/background.mov"
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <div className={styles.boxContainer}>
        <div
          ref={ref1}
          className={`${styles.box} ${visible1 ? styles.visible : ''}`}
          style={{ transform: `translateY(${-scrollPositionRelativeToVideo}px)` }}
        >
          <p className={styles.boxContent}>
          Further studies on the Aletsch Glacier show that not only is the glacier receding, but its rate of decline is also accelerating. Monitoring data from the Swiss Federal Institute for Forest, Snow and Landscape Research (WSL) reveals a 50% increase in the rate of the glacier's retreat since the turn of the century.
          </p>
        </div>
        <div
          ref={ref2}
          className={`${styles.box} ${visible2 ? styles.visible : ''}`}
          style={{ transform: `translateY(${-scrollPositionRelativeToVideo}px)` }}
        >
          <p className={styles.boxContent}>
          This rapid melting poses grave challenges, as the glacier plays a key role in the region's water cycle, providing meltwater during the warm summer months. As the glacier diminishes, this natural water reservoir is threatened, leading to potential water shortages and impacts on hydroelectric power production.
          </p>
        </div>
      </div>
      </div>
      <div className={styles.textContainer}>
        <p>The decline of the Aletsch Glacier and other Swiss glaciers signifies an alarming signal of the ongoing impacts of global warming. The consequences of these changes are far-reaching, including ecological, hydrological, and socio-economic impacts. Efforts towards mitigating climate change, reducing greenhouse gas emissions, and implementing adaptive management strategies are needed to slow down the rate of glacial retreat and preserve these iconic landscapes for future generations.</p>
      </div>
      <div id="flourish-embed" className={styles.flourishEmbed}>
        <h1>Aletsch Glacier: 1980 and 2022</h1>
        <iframe
          src='https://flo.uri.sh/visualisation/13602717/embed'
          title='Interactive or visual content'
          frameBorder='0'
          scrolling='no'
          className={styles.flourishPhotoStyler}
        ></iframe>
      </div>
      <div id="flourish-embed" className={styles.flourishEmbed}>
      <h1>Aletsch Mass Volume Change 1916 to 2022</h1>
        <iframe
          src='https://flo.uri.sh/visualisation/13602609/embed'
          title='Interactive or visual content'
          frameBorder='0'
          scrolling='no'
          className={styles.flourishPhotoStyler}
        ></iframe>
      </div>
    </div>
  );
};

export default Index;
