"use client"
import React from 'react';
import SparkleIcon from '@/components/icons/SparkleIcon';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

const HeroForm = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <form className="relative">
      <div className="flex items-center gap-3 p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-purple-400/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center group transition-all duration-300">
            <SparkleIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-grow bg-transparent border-0 text-white placeholder-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="输入提示以供我们的图像转视频 AI 使用"
          value={inputValue}
        />

        <div className="hidden gap-2 md:flex">
          <PrimaryButton
            gradientFrom="from-purple-400"
            gradientTo="to-pink-400"
            hoverFrom="hover:from-purple-500"
            hoverTo="hover:to-pink-500"
            shadow="hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            <Link href="/image-to-video">
              图像转视频
            </Link>
          </PrimaryButton>
          <PrimaryButton
            gradientFrom="from-blue-400"
            gradientTo="to-indigo-400"
            hoverFrom="hover:from-blue-500"
            hoverTo="hover:to-indigo-500"
            shadow="hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          >
            <Link href="/text-to-video">
              文本转视频
            </Link>

          </PrimaryButton>
        </div>
      </div>
      <div className="mt-4 flex w-full gap-2 md:hidden">
        <PrimaryButton
          gradientFrom="from-purple-400"
          gradientTo="to-pink-400"
          hoverFrom="hover:from-purple-500"
          hoverTo="hover:to-pink-500"
          shadow="hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          fullWidth
          small
        >
          <Link href="/image-to-video">
              图像转视频
            </Link>
        </PrimaryButton>
        <PrimaryButton
          gradientFrom="from-blue-400"
          gradientTo="to-indigo-400"
          hoverFrom="hover:from-blue-500"
          hoverTo="hover:to-indigo-500"
          shadow="hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          fullWidth
          small
        >
        <Link href="/text-to-video">
              文本转视频
            </Link>
        </PrimaryButton >
      </div>
    </form>
  );
};

export default HeroForm;