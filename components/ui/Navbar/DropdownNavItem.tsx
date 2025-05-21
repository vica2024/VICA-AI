import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";

interface DropdownNavItemProps {
  title: string;
  columns?:number;
  isHot?: boolean;
  className?: string;
  items?: Array<{
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({
  title,
  items,
  columns = 2,
  isHot = false,
  className,
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("bg-black rounded-lg border border-purple-400/20", className)}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group relative bg-black hover:bg-black data-[state=open]:bg-black px-4 py-2 rounded-md transition-colors">
            <span className="text-gray-200 group-hover:text-white transition-colors">
              {title}
            </span>
            {isHot && (
              <span className="absolute -right-2 -top-2 animate-pulse rounded-full bg-red-500/20 px-1 py-0.5 text-[10px] font-medium text-red-500 shadow-[0_0_5px_rgba(239,68,68,0.3)]">
                热门
              </span>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black border border-gray-700 rounded-lg shadow-xl p-4">
            <ul className={cn(
              "grid gap-3",
              columns === 1 && "grid-cols-1 w-[300px]",
              columns === 2 && "grid-cols-2 w-[600px]",
              columns === 3 && "grid-cols-3 w-[900px]"
            )}>
              {items?.map((item, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="flex items-center p-3 rounded-md transition-colors hover:bg-black hover:text-white"
                    >
                      <div className="flex-shrink-0 mr-3 text-gray-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-md font-medium text-gray-100">
                            {item.title}
                          </span>
                          {isHot && (
                            <span className="ml-2 animate-pulse rounded-full bg-red-500/20 px-1.5 py-0.5 text-xs font-medium text-red-500">
                              New
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownNavItem;