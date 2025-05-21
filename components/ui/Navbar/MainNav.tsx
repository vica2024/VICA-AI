import React from 'react';
import DropdownNavItem from './DropdownNavItem';
import NavItem from './NavItem';
import { VideoIcon, TextIcon } from 'lucide-react';

const MainNav = () => {
  const meunlist = [
    {
      title: '首页',
      href: '/',
      isHot: false,
      items: []
    },
    {
      title: 'AI 视频',
      isHot: true,
      href: '/ai-image-generator',
      columns: 2,
      items: [
        {
          title: 'Text To Video',
          href: '/ai-image-generator',
          description: 'Convert text into engaging images',
          icon: <VideoIcon />,
        },
        {
          title: 'Image To Video',
          href: '/image-to-image',
          description: 'Transform your images into dynamic images',
          icon: <TextIcon />,
        },
      ],
    },
    {
      title: 'AI 图像',
      isHot: false,
      href: '/ai-image-generator',
      columns: 2,
      items: [
        {
          title: 'Text To Image',
          href: '/ai-image-generator',
          description: 'Convert text into engaging images',
          icon: <VideoIcon />,
        },
        {
          title: 'Image To Image',
          href: '/image-to-image',
          description: 'Transform your images into dynamic images',
          icon: <TextIcon />,
        },
      ],
    },
    {
      title: 'AI 音乐',
      href: '/text-to-music',
      isHot: true,
      items: []
    },
    {
      title: '价格',
      href: '/pricing',
      isHot: false,
      items: []
    },
  ];

  return (
    <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <div style={{ position: 'relative' }}>
        <div className="group flex flex-1 list-none items-center justify-center space-x-3">
          {meunlist.map((item, index) => {
            if (item.items.length > 0) {
              return <DropdownNavItem key={index} {...item} />;
            } else {
              return (
                <NavItem key={index} link={item.href} isHot={item.isHot} title={item.title} />
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
