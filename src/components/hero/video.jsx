import React, {useEffect} from 'react';

const HeroVideo = () => {
  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden';
    return () => {
      // Re-enable horizontal scrolling when component unmounts
      document.body.style.overflowX = 'hidden';
    };
  }, []);
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="w-full h-auto md:min-w-full md:min-h-full absolute object-cover" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" autoPlay muted loop></video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-4xl md:text-6xl">Your Title Here</h1>
        <h3 className="font-light text-2xl md:text-3xl">Your Subtitle Here</h3>
      </div>
    </section>
  );
};

export default HeroVideo;
