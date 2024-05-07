import React, { useState, useEffect, useRef } from 'react';


import './pump.css';

function WaterPump() {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showManGif, setShowManGif] = useState(false);
  const pumpRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = pumpRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (top >= 0 && bottom <= windowHeight) {
        toggleRotation();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (isRotating) {
      let rotationSpeed = 1;

      const timeoutId = setTimeout(() => {
        rotationSpeed = 5;
        setIsVibrating(true);
      }, 5000);

      intervalId = setInterval(() => {
        setRotation((rotation) => rotation - rotationSpeed);
      }, 20);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    } else {
      clearInterval(intervalId);
      setIsVibrating(false);
    }
  }, [isRotating]);

  useEffect(() => {
    let animationTimeout;

    return () => clearTimeout(animationTimeout);
  }, [isRotating]);

  const toggleRotation = () => {
    if (!isRotating) {
      setIsRotating(true);
      setIsVideoStarted(true);
      setShowOverlay(true);
      setShowManGif(true);
      setTimeout(() => {
        setShowManGif(false);
      }, 2000);

      setTimeout(() => {
        setRotation(0);
        setIsVibrating(true);
        const videoElement = document.getElementById("overlay-video");
        if (videoElement) {
          videoElement.play();
        }
      }, 5000);
    } else {
      setIsRotating(false);
      setIsVideoStarted(false);
      setShowOverlay(false);
     
      const videoElement = document.getElementById("overlay-video");
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsRotating(false);
    setIsVideoStarted(false);

    setShowOverlay(false);
    setShowManGif(false);
  };

  return (
    <div className="water-pump-wrapper" id="water-pump-section">
      <div className="text-above-container">
        <h2>We make sales campaigns go viral.</h2>
        <p>With minimum expense while maximizing fast exponential growth. Once virality is achieved, it goes on a viral loop creating an automatic viral sales campaign. Virality is key for campaigns to thrive, not just survive. By lowering the CAC (Customer Acquisition Cost) from the beginning, we ensure long-term campaign sustainability and success.</p>
      </div>
      <div className="centered-container">
        <div className="overlay-container">
          {isVideoStarted && (
            <video src={window.innerWidth > 768 ? "/pipe.mp4" : "/final.mp4"} autoPlay muted loop id="overlay-video" className={`overlay-video ${isRotating ? '' : 'hidden'}`} onEnded={handleVideoEnd}>
              Your browser does not support the video tag.
            </video>
          )}
          {showOverlay && <img src="/man.gif" alt="Overlay" className={`man-gif ${showManGif ? '' : 'hidden'}`} />}
        </div>

        <div className="water-pump-container" style={{ marginTop: '100px' }} ref={pumpRef}>
          {isRotating && (
            <div className="tooltip" title="Turbine">
              <img
                src="/turbine.png"
                alt="Water Pump"
                className="water-pump-image"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <span className="tooltiptext">Turbine</span>
            </div>
          )}

          {isRotating && (
            <div className="tooltip" title="Generator">
              <img
                src="/generator.png"
                alt="Generator"
                className={`generator-image ${isVibrating ? 'vibrate' : ''}`}
              />
              <span className="tooltiptext">Generator</span>
            </div>
          )}





  
        </div>
      </div>
    </div>
  );
}

export default WaterPump;
