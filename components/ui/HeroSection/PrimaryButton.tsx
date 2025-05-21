import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  hoverFrom: string;
  hoverTo: string;
  shadow?: string;
  fullWidth?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  gradientFrom,
  gradientTo,
  hoverFrom,
  hoverTo,
  shadow,
  fullWidth = false,
  small = false
}) => {
  return (
    <button 
      className={`
        inline-flex items-center justify-center whitespace-nowrap 
        text-sm ring-offset-background focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 
        transform rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} 
        ${small ? 'px-3 py-3' : 'px-4 py-6'} font-semibold text-white 
        transition-all duration-300 hover:-translate-y-0.5 
        ${hoverFrom} ${hoverTo} ${shadow}
        ${fullWidth ? 'flex-1' : ''}
      `}
      type="button"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;