"use client";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

const LanguageSelect = () =>{
  const className = "";
  const placeholder = "Select an option";
  const [Language, setLanguage] = useState<string>('zh');
  const languageOptions = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "简体中文",
      value: "zh",
    }
  ];

  return (
    <Select value={Language} onValueChange={setLanguage}>
      <SelectTrigger
        className={`bg-black/90 text-gray-300 border border-purple-500/40 ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-black/90 border border-purple-500/30 text-gray-300">
        <SelectGroup>
          {languageOptions.map((option, index) => (
            <SelectItem
              key={index}
              value={option.value}
              className="hover:bg-purple-500/10 focus:bg-purple-500/20 focus:text-white cursor-pointer"
            >
              {option.label.charAt(0).toUpperCase() + option.label.slice(1)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;