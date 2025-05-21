import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <a 
        className="group flex items-center transition-all duration-300" 
        title="AnyVideo.ai 首页" 
        href="/"
      >
        <Image
          alt="AnyVideo.ai Logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full transition-transform duration-300 group-hover:scale-110"
          src="https://avatars.githubusercontent.com/u/167049259?v=4&size=64"
        />
        <span className="ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:to-purple-400">
          VicaZhuo
        </span>
      </a>
    </div>
  );
};

export default Logo;