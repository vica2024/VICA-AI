interface MobileComparisonCardProps {
    title: string;
    isPopular?: boolean;
    features: {
        name: string;
        value: string;
        highlighted?: boolean;
    }[];
}

const MobileComparisonCard = ({
    title,
    isPopular = false,
    features,
}: MobileComparisonCardProps) => (
    <div
        className={`rounded-xl p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 border-2 ${isPopular
            ? 'border-purple-400/40 bg-gradient-to-b from-black/90 to-black/80 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
            : 'border-purple-400/20 bg-black/70 shadow-md hover:border-purple-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
            }`}
    >
        <div className="mb-3 flex items-center justify-between">
            <h4
                className={`text-lg font-bold ${isPopular
                    ? 'bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                    : 'text-white'
                    }`}
            >
                {title}
            </h4>
            {isPopular && (
                <span className="z-50 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-0.5 text-xs text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    Most Popular
                </span>
            )}
        </div>
        <ul className="space-y-2.5">
            {features.map((feature, index) => (
                <li
                    key={index}
                    className={`flex items-center justify-between ${index !== features.length - 1 ? 'border-b border-purple-400/10 py-1' : 'py-1'
                        }`}
                >
                    <span className="text-sm text-gray-400">{feature.name}</span>
                    <span className="text-sm">
                        {feature.highlighted ? (
                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-bold text-transparent drop-shadow-[0_0_5px_rgba(236,72,153,0.4)]">
                                {feature.value}
                            </span>
                        ) : (
                            feature.value
                        )}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
export default MobileComparisonCard;