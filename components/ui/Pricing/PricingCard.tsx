interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  billingPeriod: string;
  totalPerYear?: string;
  savingsText?: string;
  features: {
    text: string;
    highlighted?: boolean;
  }[];
  isPopular?: boolean;
  buttonVariant?: 'gradient' | 'outline';
}

const PricingCard = ({
  title,
  description,
  price,
  billingPeriod,
  totalPerYear,
  savingsText,
  features,
  isPopular = false,
  buttonVariant = 'outline',
}: PricingCardProps) => (
  <div className="group relative transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
    {isPopular && (
      <div className="absolute -top-4 right-4 z-50">
        <div className="rounded-t-lg bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-0.5 text-xs font-bold text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]">
          Most Popular
        </div>
      </div>
    )}
    
    <div
      className={`h-full rounded-xl p-4 backdrop-blur-md transition-all md:p-6 border-2 ${
        isPopular
          ? 'border-purple-400/40 bg-black/80 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
          : 'border-purple-400/20 bg-black/60 shadow-md group-hover:border-purple-400/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
      }`}
    >
      <h3 className="mb-1 text-lg font-bold text-white md:text-xl">{title}</h3>
      <p className="mb-4 text-xs text-gray-400 md:text-sm">{description}</p>
      
      <div className="mb-4">
        <p className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent drop-shadow-[0_0_5px_rgba(168,85,247,0.3)] md:text-3xl">
          {price}
          <span className="ml-1 text-sm text-gray-400">/{billingPeriod}</span>
        </p>
        {totalPerYear && (
          <>
            <p className="mt-0.5 text-xs text-gray-500">Billed Annually</p>
            <p className="mt-1 text-xs font-medium text-gray-300 md:text-sm">
              {totalPerYear} <span className="text-xs text-gray-500">Total/year</span>
            </p>
          </>
        )}
        {savingsText && (
          <p className="mt-0.5 text-xs text-purple-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.2)]">
            {savingsText}
          </p>
        )}
      </div>
      
      <div className="mb-4">
        <button
          className={`group w-full rounded-lg py-2 font-medium transition-all duration-300 hover:scale-[1.02] ${
            buttonVariant === 'gradient'
              ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
              : 'border-2 border-purple-400/40 bg-black text-white hover:border-purple-400/70 hover:bg-purple-400/10'
          }`}
        >
          Get Started
        </button>
      </div>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400 drop-shadow-[0_0_3px_rgba(168,85,247,0.3)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
            </svg>
            <span
              className={`text-xs md:text-sm ${
                feature.highlighted
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-bold text-transparent drop-shadow-[0_0_5px_rgba(236,72,153,0.4)]'
                  : 'text-gray-300'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PricingCard;