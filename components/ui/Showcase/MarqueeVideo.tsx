import React from 'react';
import VideoCard from './VideoCard';

interface MarqueeVideoProps {
  videos: Array<{
    href: string;
    videoSrc: string;
    title: string;
    description: string;
  }>;
  reverse?: boolean;
  duration?: number;
}

const MarqueeVideo: React.FC<MarqueeVideoProps> = ({ 
  videos, 
  reverse = false, 
  duration = 30 
}) => {
  const animationDirection = reverse ? 'reverse' : 'normal';
  
  return (
    <div 
      className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
      style={{
        animationDirection: animationDirection as any,
        animationDuration: `${duration}s`
      }}
    >
      {videos.length > 0 && videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default MarqueeVideo;