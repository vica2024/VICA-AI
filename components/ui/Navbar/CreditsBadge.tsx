import React from 'react';
import { DollarSign } from 'lucide-react';

interface CreditsBadgeProps {
  credits: number;
  mobile?: boolean;
}

const CreditsBadge: React.FC<CreditsBadgeProps> = ({ credits, mobile = false }) => {
  if (mobile) {
    return (
      <div className="flex items-center gap-1.5 rounded-md border border-purple-400/20 bg-black/30 px-1.5 py-0.5">
        <DollarSign className="h-3 w-3 text-purple-400" />
        <span className="text-xs font-medium text-purple-400">{credits}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-purple-400/20 bg-black/30 px-3 py-1.5">
      <DollarSign className="h-4 w-4 text-purple-400" />
      <span className="text-sm font-medium text-purple-400">{credits}</span>
      <span className="text-xs text-gray-400">credits</span>
    </div>
  );
};

export default CreditsBadge;