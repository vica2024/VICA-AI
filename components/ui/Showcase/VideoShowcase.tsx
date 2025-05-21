import React from 'react';
import MarqueeVideo from './MarqueeVideo';
import SectionHeader from './SectionHeader';

interface VideoShowcaseProps {
  title: string;
  subtitle: string;
  videos: Array<{
    href: string;
    videoSrc: string;
    title: string;
    description: string;
  }>;
  reverseVideos?: Array<{
    href: string;
    videoSrc: string;
    title: string;
    description: string;
  }>;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ 
  title, 
  subtitle, 
  videos, 
  reverseVideos 
}) => {
  return (
    <div className="relative z-10">
      <div className="w-full py-12">
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row mb-6 [--duration:30s]">
            {[...Array(4)].map((_, i) => (
              <MarqueeVideo key={`forward-${i}`} videos={videos} />
            ))}
          </div>
          
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]">
            {reverseVideos && [...Array(4)].map((_, i) => (
              <MarqueeVideo key={`reverse-${i}`} videos={reverseVideos} reverse />
            ))}
          </div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;