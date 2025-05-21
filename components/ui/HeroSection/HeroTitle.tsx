import React from 'react';

const HeroTitle = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
        图像转视频 AI
        <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          免费在线
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        AI 视频生成器 & AI 图像生成器 免费在线。
      </p>
    </div>
  );
};

export default HeroTitle;