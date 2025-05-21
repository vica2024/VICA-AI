import React from 'react';

const HeroVideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video 
        className="h-full w-full object-cover opacity-70" 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/images/first-frame.png"
        src="https://f.anyvideo.ai/cdn-cgi/media/width=700/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/1.mp4"
      >
        您的浏览器不支持视频标签。
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>
  );
};

export default HeroVideoBackground;