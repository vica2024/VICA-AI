"use client"
import React from 'react';

const SUGGESTIONS = [
  "汽车在雪地中行驶，微风轻拂",
  "女性演奏乐器，伴随灯光效果",
  "美人鱼摇摆尾巴，长发飘扬"
];

const PromptSuggestions = () => {
  const [promptValur, setPromptValue] = React.useState("");

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2">
      {SUGGESTIONS.map((suggestion, index) => (
        <button 
          key={index}
          onClick={() => setPromptValue(suggestion)}
          className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-purple-400/20 hover:bg-purple-400/10 text-sm text-gray-300 transition-colors hover:text-purple-400 hover:border-purple-400/40"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions;