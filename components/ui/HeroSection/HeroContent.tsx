import React from 'react';
import HeroTitle from './HeroTitle';
import HeroForm from './HeroForm';
import PromptSuggestions from './PromptSuggestions';

const HeroContent = () => {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-between pt-32 pb-16 px-4">
      <HeroTitle />
      <div className="w-full max-w-4xl mx-auto px-4">
        <HeroForm />
        <PromptSuggestions />
      </div>
    </div>
  );
};

export default HeroContent;