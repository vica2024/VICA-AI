import React from "react";

const ImageToVideoPreview = () => {
    return (
        <div className="relative h-full w-full">
            <div className="border text-card-foreground flex h-full max-h-[90vh] flex-col rounded-xl border-purple-900/50 bg-black/80 shadow-xl">
                <div className="flex flex-col space-y-1.5 flex-none p-3 lg:p-4">
                    <div className="tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-base font-medium text-white lg:text-lg">Preview</div>
                </div>
                <div className="min-h-0 flex-1 p-0">
                    <div className="flex h-full w-full items-center justify-center p-3 lg:p-4">
                        <div className="relative w-full rounded-xl bg-black/40 p-6 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                            <div className="flex flex-col items-center justify-center">
                                <svg className="mb-2 h-10 w-10 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                <p className="text-center text-sm text-gray-400">Your video will appear here</p><p className="mt-1 text-center text-xs text-gray-500">Generate a video first</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ImageToVideoPreview;