import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import teamanimation from './tem.json'; // Import the first animation JSON file
import overlayAnimation from './sparkle.json'; // Import the overlay animation JSON file
import './team.css'; // Import the CSS file

const Team = () => {
  const text =
    "Partner with our team of experts who've driven multi-million dollar campaigns. We'll help you navigate the complexities, avoid burnout, and get you on the fast track to success.";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 5 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 10) {
    groupedWords.push(words.slice(i, i + 10).join(' '));
  }

  // State to track hover effect
  const [isHovered, setIsHovered] = useState(false);
  const [animationSize, setAnimationSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    function handleResize() {
      // Adjust size for wider screens
      const newWidth = window.innerWidth >= 768 ? 500 : 300;
      const newHeight = window.innerWidth >= 768 ? 500 : 300;
      setAnimationSize({ width: newWidth, height: newHeight });
    }

    // Call handleResize() once to set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="team-container" id="team-section">
      <div className="team-content">
        {/* Text content goes here */}
        <h1>Teamwork </h1>
        <h2>
          Launching a marketing campaign alone takes courage. But let's be honest, it's also tough. You might face:
        </h2>
        {groupedWords.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
        {/* Additional text */}
        <p>
          Launching a marketing campaign alone takes courage. But let's be honest, it's also tough. You might face:
        </p>
        <ul>
          <li>
            <span className="bold-text">Burnout:</span> Juggling all aspects of a campaign can exhaust you, hindering
            creativity.
          </li>
          <li>
            <span className="bold-text">Tunnel Vision:</span> Going solo may limit your ability to see flaws in your
            approach.
          </li>
          <li>
            <span className="bold-text">Wasted Resources:</span> Trial and error without experience can be costly,
            resulting in ineffective tactics.
          </li>
          <li>
            <span className="bold-text">Limited Expertise:</span> Solo efforts may lack the diverse skill sets needed for
            optimal success.
          </li>
        </ul>
        <p>This isn't to say going solo is impossible, but it's important to be aware of the challenges.</p>
      </div>
      <div
        className="team-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: !isHovered, // Autoplay only if not hovered
            animationData: teamanimation,
          }}
          height={animationSize.height}
          width={animationSize.width}
        />
        {/* Overlay animation */}
        {isHovered && (
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: overlayAnimation,
            }}
            height={animationSize.height}
            width={animationSize.width}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        )}
      </div>
    </div>
  );
};

export default Team;
