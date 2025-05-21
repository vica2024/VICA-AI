import { ReactNode } from 'react';
import {
  FiCamera,
  FiFilm,
  FiImage,
  FiMaximize2,
  // 其他图标...
} from 'react-icons/fi';

export const sidebarLinks = [
  {
    title: 'Video',
    links: [
      {
        href: '/image-to-video',
        label: 'Image To Video',
        icon: <FiCamera className="mr-2 h-5 w-5" />,
        isActive: true,
      },
      {
        href: '/text-to-video',
        label: 'Text To Video',
        icon: <FiFilm className="mr-2 h-5 w-5" />,
      },
      // 其他视频工具...
    ],
  },
  {
    title: 'Image',
    links: [
      {
        href: '/ai-image-generator',
        label: 'Text To Image',
        icon: <FiImage className="mr-2 h-5 w-5" />,
      },
      // 其他图片工具...
    ],
  },
  // 其他分类...
];

export const footerLinks = [
  {
    title: 'Video Tools',
    links: [
      { href: '/text-to-video', label: 'Text To Video' },
      { href: '/image-to-video', label: 'Image To Video' },
    ],
  },
  // 其他页脚链接分类...
];

export const socialLinks = [
  {
    href: 'https://x.com/AnyVideoAI',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        {/* Twitter/X 图标路径 */}
      </svg>
    ),
  },
  // 其他社交媒体链接...
];

export const videoQualities = [
  { value: '360p', label: '360p - Low Quality (+0 Credits)' },
  { value: '720p', label: '720p - Medium Quality (+5 Credits)' },
  { value: '1080p', label: '1080p - HD Quality (+10 Credits)' },
];

// 其他常量...