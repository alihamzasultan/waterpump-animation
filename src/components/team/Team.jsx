import React, { useState, useEffect } from 'react';


import Lottie from 'lottie-react';
import './team.css';
import animationData from './tem.json'; // Import your Lottie animation JSON file

const TeamworkSection = () => {
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(null);
  const [imageToShow, setImageToShow] = useState("image1");

  const handleClick = () => {
    clearTimeout(timer); // Clear any existing timer
    setProgress(prevProgress => {
      if (prevProgress < 100) {
        return prevProgress + 5; // Increment progress
      } else {
        return prevProgress;
      }
    });
  };

  useEffect(() => {
    setTimer(setTimeout(() => {
      setProgress(prevProgress => {
        if (prevProgress > 0) {
          return prevProgress - 10; // Decrement progress
        } else {
          return prevProgress;
        }
      });
    }, 500)); // Adjust timeout duration (milliseconds)
  }, [progress]);

  useEffect(() => {
    // Determine which image to display based on the progress
    if (progress >= 95 && progress <= 100) {
      setImageToShow("image4");
    } else if (progress >= 50 && progress < 95) {
      setImageToShow("image3");
    } else if (progress >= 25 && progress < 50) {
      setImageToShow("image2");
    } else if (progress >= 0 && progress < 25) {
      setImageToShow("image1");
    } else {
      setImageToShow("defaultImage");
    }
  }, [progress]);

  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-full mx-auto px-2 sm:px-4 lg:px-0">
      <div className="my-10 mx-auto max-w-7xl px-2 sm:mt-12 sm:px-4 md:mt-16 lg:mt-20 xl:mt-28 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-800 sm:text-6xl md:text-7xl">
            <span className="block xl:inline">Team</span>
            <span className="block text-indigo-600 xl:inline">Work</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500">
            Launching a marketing campaign alone takes courage. But let's be honest, it's also tough. You might face:
            <br />
            <strong>Burnout:</strong> Juggling all aspects of the campaign can be exhausting, leading to burnout and hindering your creativity.
            <br />
            <strong>Tunnel Vision:</strong> It's easy to get stuck in your own ideas. Going solo can make it difficult to identify potential flaws in your approach.
            <br />
            <strong>Wasted Resources:</strong> Without experience, trial and error can be expensive. You might invest time, effort, and money into tactics that don't deliver the desired results.
            <br />
            <strong>Limited Expertise:</strong> Marketing campaigns require diverse skillsets. Going solo means you may lack access to the specialized knowledge needed for optimal success.
            <br />
            This isn't to say going solo is impossible, but it's important to be aware of the challenges.
          </p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 my-4 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
            <Lottie animationData={animationData} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
        {/* End of Image Section */}
      </div>

      
      
        <div className="loadingwork-container">
          <div className="loadingwork-left-content">
          <strong>Burnout: </strong> 
            Juggling all aspects of the campaign can be exhausting, leading to burnout and hindering your creativity.
          </div>
          <div className="loadingwork-right-content">
            <div className="loadingwork-image-container">
              <img
                src="/11.gif"
                alt="Image 1"
                className={`loadingwork-image ${imageToShow !== "image1" && "hidden"}`}
              />
              <img
                src="/22.png"
                alt="Image 2"
                className={`loadingwork-image ${imageToShow !== "image2" && "hidden"}`}
              />
              <img
                src="/33.png"
                alt="Image 3"
                className={`loadingwork-image ${imageToShow !== "image3" && "hidden"}`}
              />
              <img
                src="/44.png"
                alt="Image 4"
                className={`loadingwork-image ${imageToShow !== "image4" && "hidden"}`}
              />
            </div>
            <button className="loadingwork-button" onClick={handleClick}>Click Me</button>
            <div className="loadingwork-progress-bar">
              <div className="loadingwork-progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      
    
    </section>
  );
};

export default TeamworkSection;
