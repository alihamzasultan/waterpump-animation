// Data.js

import React from 'react';
import Lottie from 'react-lottie';
import dataAnimation from './sing.json'; // Import the Lottie animation JSON file
import './single.css'; // Import the CSS file

const Data = () => {
  const text = " Working alone can be like navigating through a dense forest without a compass. Every step forward feels like an uphill battle, and exhaustion lurks at every turn. The weight of the entire project rests solely on your shoulders, leaving you vulnerable to burnout.";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 5 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 9) {
    groupedWords.push(words.slice(i, i + 9).join(' '));
  }

  return (
    <div className="single-container">
      <div className="single-content">
        {/* Text content goes here */}
        <h1>Why Go Solo When You Can Soar with a Team?</h1>
        {groupedWords.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
      {/* Lottie animation */}
      <div className="single-image">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: dataAnimation,
          }}
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default Data;
