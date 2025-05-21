import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick?: () => void; // Define the onClick prop
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  onClick, // Use the onClick prop
}) => {
  return (
    <button
      type="button"
      className="rounded-full p-1 text-gray-300 transition-colors duration-300 hover:bg-purple-400/10 hover:text-white"
      aria-expanded="false"
    >
      <span className="sr-only">菜单</span>
      <Menu onClick={onClick} className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default MobileMenuButton;