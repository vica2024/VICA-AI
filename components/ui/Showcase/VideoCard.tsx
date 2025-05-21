import React from 'react';
import Link from 'next/link';

interface VideoCardProps {
    href: string;
    videoSrc: string;
    title: string;
    description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ href, videoSrc, title, description }) => {
    return (
        <Link href={href} className="mx-2 block h-full w-64">
            <figure className="relative h-full w-full cursor-pointer overflow-hidden rounded-xl border border-purple-400/20 bg-black/60 backdrop-blur-md transition-all duration-300 hover:border-purple-700/40 hover:bg-black/70 hover:shadow-lg hover:shadow-purple-900/20">
                <div className="h-full w-full overflow-hidden rounded-xl">
                    <video className="h-full w-full object-cover" src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline />
                    <div className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="flex flex-col">
                            <figcaption className="text-sm font-medium text-white">{title}</figcaption>
                        </div>
                        <blockquote className="mt-2 text-sm text-gray-300">{description}</blockquote>
                    </div>
                </div>
            </figure>
        </Link>
    );
};

export default VideoCard;