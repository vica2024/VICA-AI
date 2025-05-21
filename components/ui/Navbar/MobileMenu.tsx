"use client"; // 必须添加，因为使用了交互功能

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextCursor } from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  isHot?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  isHot?: boolean;
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  if (!isOpen) return null;
  // 菜单数据配置
  const menuSections: MenuSection[] = [
    {
      title: "AI Video",
      isHot: true,
      items: [
        {
          title: "Image To Video",
          href: "/image-to-video",
          icon: <ImageToVideoIcon />,
          description: "Transform your images into dynamic videos",
        },
        {
          title: "Text To Video",
          href: "/text-to-video",
          icon: <TextCursor />,
          description: "Convert text into engaging videos",
        },
      ],
    },
    {
      title: "AI Image",
      isHot: true,
      items: [
        {
          title: "Text To Image",
          href: "/ai-image-generator",
          icon: <TextCursor />,
          description: "Create stunning AI-generated images",
        },
        {
          title: "Image To Image",
          href: "/image-to-image",
          icon: <TextCursor />,
          description: "Transform your images into different styles",
        },
        {
          title: "Ghibli AI",
          href: "/m/ghibli-ai",
          icon: <TextCursor />,
          description: "Generate images in Ghibli animation style",
          isHot: true,
        },
        {
          title: "AI Action Figure",
          href: "/feature/ai-action-figure",
          icon: <TextCursor />,
          description: "Create custom AI action figures",
          isHot: true,
        },
      ],
    },
  ];

  const hotItems = [
    {
      title: "AI Music",
      href: "/ai-music-generator",
      isHot: true,
    },
  ];

  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Pricing", href: "/pricing" },
    { title: "Join Discord", href: "https://discord.gg/jZWxJFYyEb", external: true },
  ];

  return (
    <nav className="fixed inset-0 z-50 mt-14 lg:hidden">
      <div className="h-[calc(100vh-56px)] bg-black/95 backdrop-blur-md">
        <div className="flex h-full flex-col">
          {/* 顶部标题栏 */}
          <div className="flex items-center justify-between border-b border-purple-400/20 px-4 py-4">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-400/10 text-gray-300 transition-colors hover:bg-purple-400/20 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 主要内容区域 */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-4">
              <div className="space-y-6">
                {menuSections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="relative flex items-center px-2 text-sm font-medium text-purple-400">
                      {section.title}
                      {section.isHot && <HotBadge />}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <MenuItem key={item.href} item={item} pathname={pathname} />
                      ))}
                    </div>
                  </div>
                ))}

                {/* 热门项目 */}
                <div className="mt-6 space-y-2">
                  <h3 className="px-2 text-sm font-medium text-purple-400">Hot</h3>
                  <div className="space-y-2">
                    {hotItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center rounded-lg p-2.5 transition-all duration-200 hover:translate-x-0.5 hover:bg-purple-400/10 active:bg-purple-400/20"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-white">{item.title}</span>
                            {item.isHot && <HotBadge />}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部区域 */}
          <div className="mt-6 border-t border-purple-400/20 pt-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="flex items-center rounded-md px-2 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* 底部功能区 */}
          <div className="border-t border-purple-400/20 bg-black/95 px-4 py-4">
            <div className="flex items-center justify-between">
              <LanguageSelector />
              <CreditsDisplay credits={5} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// 辅助组件
function HotBadge() {
  return (
    <span className="absolute -top-2 right-0 animate-pulse rounded-full bg-red-500/20 px-1.5 py-0.5 text-xs font-medium text-red-500 shadow-[0_0_5px_rgba(239,68,68,0.3)]">
      Hot
    </span>
  );
}

function MenuItem({ item, pathname }: { item: MenuItem; pathname: string }) {
  const isActive = pathname === item.href;
  
  return (
    <Link
      href={item.href}
      className={`flex items-center rounded-lg p-2.5 transition-all duration-200 hover:translate-x-0.5 ${
        isActive ? "bg-purple-400/20" : "hover:bg-purple-400/10"
      }`}
    >
      <div className="mr-3 flex-shrink-0 text-gray-400 transition-colors duration-200 group-hover:text-purple-400">
        {item.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center">
          <span className="text-sm font-medium text-white">{item.title}</span>
          {item.isHot && (
            <span className="ml-2 animate-pulse rounded bg-red-500/20 px-1.5 py-0.5 text-xs font-medium text-red-500">
              Hot
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs text-gray-400">{item.description}</p>
      </div>
    </Link>
  );
}

function LanguageSelector() {
  return (
    <button
      type="button"
      className="flex h-10 items-center justify-between rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-32 border-purple-400/30 bg-black/60 text-sm"
    >
      <span style={{ pointerEvents: "none" }}>🇺🇸 English</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </button>
  );
}

function CreditsDisplay({ credits }: { credits: number }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-purple-400/20 bg-black/30 px-3 py-1.5">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
      <span className="text-sm font-medium text-purple-400">{credits}</span>
      <span className="text-xs text-gray-400">credits</span>
    </div>
  );
}

// 图标组件
function ImageToVideoIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  );
}
