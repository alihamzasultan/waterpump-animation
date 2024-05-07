// Data.js

import React from 'react';
import './time.css'; // Import the CSS file

const Time = () => {
  const text = " Learning the ropes of viral marketing takes time. We’ve since spent over $10 million in ad campaigns. This experience has allowed us to refine a winning formula that can propel your sales to 6 or 7 figures within 3 months. We've helped our clients generate close to $200 million in combined sales – and we can do the same for you.";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 5 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 10) {
    groupedWords.push(words.slice(i, i + 10).join(' '));
  }

  return (
    <div className="time-container">
      <div className="time-content">
        {/* Text content goes here */}
        <h1>Time Is Money</h1>
        <h2>Skip the Struggle. Get Results.
We’ve burnt close to $100,000 before finding out this formula.Now you don't have to.
</h2>
        {groupedWords.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
      <img src="/logo512.png" alt="Data Analytics" className="time-image" />
    </div>
  );
};

export default Time;
