import React from "react";

const BillingToggle = ({
    activeTab,
    setActiveTab,
}: {
    activeTab: 'monthly' | 'yearly';
    setActiveTab: (tab: 'monthly' | 'yearly') => void;
}) => (
    <div className="mb-6 flex justify-center md:mb-10">
        <div className="inline-flex rounded-xl border-2 border-purple-400/30 bg-black/60 p-1 backdrop-blur-md">
            <button
                onClick={() => setActiveTab('monthly')}
                className={`rounded-lg px-3 py-1.5 text-sm transition-all duration-300 md:px-5 md:py-2 ${activeTab === 'monthly'
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
            >
                Monthly
            </button>
            <button
                onClick={() => setActiveTab('yearly')}
                className={`rounded-lg px-3 py-1.5 text-sm transition-all duration-300 md:px-5 md:py-2 ${activeTab === 'yearly'
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
            >
                Yearly

                <span className="ml-1 rounded-full border border-purple-500/50 bg-black/60 px-1.5 py-0.5 text-xs text-purple-300">
                    Save 30%
                </span>

            </button>
        </div>
    </div>
);
export default BillingToggle;