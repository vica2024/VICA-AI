const FeatureComparisonTable = () => {
  const features = [
    {
      name: 'Credits per month',
      basic: '150',
      plus: '600',
      pro: '2500',
    },
    {
      name: 'Videos per month',
      basic: '15',
      plus: '60',
      pro: '250',
    },
    {
      name: 'Images per month',
      basic: '150',
      plus: '600',
      pro: '2500',
    },
    {
      name: 'Video quality',
      basic: 'Standard',
      plus: 'High',
      pro: 'Ultra HD',
    },
    {
      name: 'Concurrent tasks',
      basic: '1',
      plus: '2',
      pro: '5',
    },
    {
      name: 'Processing speed',
      basic: 'Standard',
      plus: 'Priority',
      pro: 'Fastest',
    },
    {
      name: 'Maximum video length',
      basic: 'Up to 5s',
      plus: 'Up to 10s',
      pro: 'Up to 10s',
    },
  ];

  return (
    <div className="hidden overflow-hidden rounded-xl border-2 border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] md:block">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-purple-400/30 bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-md">
            <th className="p-4 text-left font-medium text-gray-300">Feature</th>
            <th className="p-4 text-center">
              <span className="font-bold text-white">Basic</span>
            </th>
            <th className="p-4 text-center border-t-2 border-purple-400/40 bg-gradient-to-b from-purple-900/30 to-purple-900/10">
              <span className="font-bold text-white bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                Plus
              </span>
              <div className="z-50 mt-1 text-xs text-purple-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]">
                Most Popular
              </div>
            </th>
            <th className="p-4 text-center">
              <span className="font-bold text-white">Pro</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={`${
                index === features.length - 1
                  ? 'transition-colors hover:bg-purple-900/5'
                  : 'border-b border-purple-400/20'
              }`}
            >
              <td className="border-r border-purple-400/20 p-4 text-gray-300">
                {feature.name}
              </td>
              <td className="border-l border-r border-purple-400/20 p-4 text-center bg-black/70 backdrop-blur-md">
                <span className="font-bold text-gray-300">{feature.basic}</span>
              </td>
              <td className="border-l border-r border-purple-400/20 p-4 text-center bg-purple-900/10">
                <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(236,72,153,0.4)]">
                  {feature.plus}
                </span>
              </td>
              <td className="border-l border-r border-purple-400/20 p-4 text-center bg-black/70 backdrop-blur-md">
                <span className="font-bold text-gray-300">{feature.pro}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparisonTable;