import React from 'react';

interface NavItemProps {
  link: string;
  title: string;
  isHot: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ link, title, isHot = false }) => {
  return (
    <li>
      <a
        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative bg-transparent text-gray-300  hover:bg-purple-400/10 hover:text-white"
        href={link}
      >
        {isHot && (
          <span className="absolute -right-2 -top-2 animate-pulse rounded-full bg-red-500/20 px-1 py-0.5 text-[10px] font-medium text-red-500 shadow-[0_0_5px_rgba(239,68,68,0.3)]">
            热门
          </span>
        )}
        {title}
      </a>
    </li>
  );
};

export default NavItem;