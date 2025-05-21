import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-10 px-4 text-center ${className}`}>
      <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-3xl text-gray-300">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;