import React, { useEffect } from 'react';

const HeroVideo = () => {
  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden';
    return () => {
      // Re-enable horizontal scrolling when component unmounts
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <video
      id="hero-video" // Add the ID here
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{ 
        width: '100%', 
        height: 'auto', 
        objectFit: 'cover',
        border: '15px solid #ccc', // Example border style
      }}
      controls={false}
    />
  );
};

export default HeroVideo;
