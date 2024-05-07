// Time.js

import React, { useEffect, useRef } from 'react';
import './time.css'; // Import the CSS file

const Time = () => {
  const timeContainerRef = useRef(null);

  useEffect(() => {
    const timeContainer = timeContainerRef.current;
    const handleScroll = () => {
      const timeContainerPosition = timeContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (timeContainerPosition < windowHeight * 0.75) {
        // When the time section is about 75% visible in the viewport, add animation class to each child
        Array.from(timeContainer.children).forEach(child => {
          child.classList.add('animate');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures that the effect runs only once

  const text = " Learning the ropes of viral marketing takes time. We’ve since spent over $10 million in ad campaigns. This experience has allowed us to refine a winning formula that can propel your sales to 6 or 7 figures within 3 months. We've helped our clients generate close to $200 million in combined sales – and we can do the same for you.";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 10 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 10) {
    groupedWords.push(words.slice(i, i + 10).join(' '));
  }

  return (
    <div className="time-container" ref={timeContainerRef}>
      <div className="time-content">
        {/* Text content goes here */}
        <h1>Time Is Money</h1>
        <h2>Skip the Struggle. Get Results. We’ve burnt close to $100,000 before finding out this formula.</h2>
        {groupedWords.map((chunk, index) => (
          <p key={index} className="animate">{chunk}</p>
        ))}
      </div>
      <img src="/time.png" alt="Data Analytics" className="time-image animate" />
    </div>
  );
};

export default Time;
