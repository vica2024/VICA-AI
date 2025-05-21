import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

interface UserSectionProps {
  username: string;
  mobile?: boolean;
}

const UserSection: React.FC<UserSectionProps> = ({ username, mobile = false }) => {
  const initials = username.charAt(0).toUpperCase();

  if (mobile) {
    return (
      <div className="flex items-center">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {/* <button 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground border border-transparent transition-all duration-300 hover:border-purple-500/20 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 h-auto w-auto p-0"
          type="button"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-sm capitalize text-white shadow-[0_0_6px_rgba(168,85,247,0.2)] ring-1 ring-purple-500/40 transition-all duration-300 hover:ring-purple-400/70">
            {initials}
          </span>
        </button> */}
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className='bg-black'>
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-sm capitalize text-white shadow-[0_0_6px_rgba(168,85,247,0.2)] ring-1 ring-purple-500/40 transition-all duration-300 hover:ring-purple-400/70">
                {initials}
              </span>
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-xs font-medium text-transparent">
                {username}
              </span>
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              <div className="flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-gray-300">Credits Balance</span>
                  <button className="text-xs text-purple-400 transition-colors duration-300 hover:text-purple-300 hover:underline ml-2">Get More</button>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">5</span>
                  <span className="text-xs text-gray-400">credits remaining</span>
                </div>
              </div>
            </MenubarItem>
            <MenubarItem>My Creations</MenubarItem>
            <MenubarItem>Billing</MenubarItem>
            <MenubarItem>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default UserSection;