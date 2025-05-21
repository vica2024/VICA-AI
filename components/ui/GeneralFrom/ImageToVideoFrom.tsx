"use client";
import { useState } from "react";
import { Textarea } from "../textarea";
import { Switch } from "../switch";
import { Button } from "../button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "../select";

import { CustomSelect } from "./CustomSelect";
import ImageUpload from "./ImageUpload";
import { AspectRatioSelector } from "./AspectRatioSelector";
import  OpenEdit  from "../../icons/OpenEdit";


const ImageToVideoFrom: React.FC = function () {
    const [text, setText] = useState("");
    const maxLength = 1000;
    const [selectedRatio, setSelectedRatio] = useState("16:9");

    const handleImageUpload = (file: File) => {
        console.log("Uploaded file:", file);
        // 这里可以处理文件上传逻辑
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="rounded-xl border-purple-900/50 bg-black/80 shadow-xl">
                <div className="space-y-3 lg:space-y-6 lg:pl-6 pr-6">
                    <ImageUpload
                        onImageUpload={handleImageUpload}
                        maxSize={10} // 可选，默认为10MB
                        allowedTypes={["image/jpeg", "image/png"]} // 可选，默认为jpeg和png
                    />
                </div>
                <div className="space-y-4 lg:space-y-6 lg:pl-6 pr-6">
                    <div className="relative rounded-2xl pb-10 border border-purple-500/30 bg-black/50 shadow-[0_0_10px_rgba(168,85,247,0.1)] backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                        <Textarea
                            className="flex rounded-md border-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-h-[200px] min-h-[120px] w-full resize-none overflow-auto border-0 bg-transparent px-4 py-4 text-base leading-relaxed text-white placeholder-gray-400 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                            maxLength={maxLength}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Describe the video scene you want to generate. More detail gives better results."
                        />
                        <div className="absolute bottom-3 left-3 text-xs text-purple-400">
                            {text.length} / {maxLength}
                        </div>
                         <div className="absolute right-3 bottom-3 text-xs text-purple-400">
                            <Button className="text-xs text-gray-400 bg-black/10">
                                <OpenEdit />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 lg:gap-4">
                        <div className="space-y-2">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300">Duration</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Button className="flex-col p-11 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0">
                                    <span>5s</span>
                                    <div className="text-xs text-gray-400">10 Credits</div>
                                </Button>
                                <Button className="flex-col p-11">
                                    <span>10s</span>
                                    <div className="text-xs text-gray-400">20 Credits</div>
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300">Duration</label>
                            <AspectRatioSelector
                                selectedRatio={selectedRatio}
                                onRatioChange={setSelectedRatio}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300">Video Quality</label>
                        <CustomSelect options={["1080p", "720p", "480p", "360p"]} />


                    </div>

                    <div className="flex items-center justify-between pt-6 pb-6">
                        <div className="flex items-center text-gray-400">Public Visibility</div>
                        <Switch className="data-[state=unchecked]:bg-purple-500  data-[state=checked]:bg-pink-500" />
                    </div>

                    <div className="space-y-3">
                        <Button className="w-full pt-6 pb-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            <span className="font-semibold text-lg tracking-wide">Generate</span>
                            <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs font-medium shadow-inner">
                                10 Credits
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default ImageToVideoFrom;