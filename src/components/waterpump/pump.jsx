import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import treeAnimationData from './tree.json';
import anotherAnimationData from './tree2.json';
import thirdAnimationData from './tree2.json';

import './pump.css';

function WaterPump() {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState(false);
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
    if (isRotating) {
      animationTimeout = setTimeout(() => {
        setShowFirstAnimation(true);
      }, 20000);

      animationTimeout = setTimeout(() => {
        setShowSecondAnimation(true);
      }, 21000);

      animationTimeout = setTimeout(() => {
        setShowThirdAnimation(true);
      }, 22000);
    } else {
      clearTimeout(animationTimeout);
      setShowFirstAnimation(false);
      setShowSecondAnimation(false);
      setShowThirdAnimation(false);
    }
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
      setShowFirstAnimation(false);
      setShowSecondAnimation(false);
      setShowThirdAnimation(false);
      const videoElement = document.getElementById("overlay-video");
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsRotating(false);
    setIsVideoStarted(false);
    setShowFirstAnimation(false);
    setShowSecondAnimation(false);
    setShowThirdAnimation(false);
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

          {showFirstAnimation && (
            <div className="animation-container first-animation">
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: treeAnimationData,
                }}
                height={500}
                width={500}
              />
            </div>
          )}

          {showSecondAnimation && (
            <div className="animation-container second-animation">
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: anotherAnimationData,
                }}
                height={500}
                width={500}
              />
            </div>
          )}

          {showThirdAnimation && (
            <div className="animation-container third-animation">
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: thirdAnimationData,
                }}
                height={500}
                width={500}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WaterPump;
