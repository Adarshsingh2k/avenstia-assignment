import React from "react";

type DiffStatProps = {
  added: number;
  removed: number;
  unchanged?: number;
  totalBars?: number;
};

const DiffStat: React.FC<DiffStatProps> = ({
  added,
  removed,
  unchanged = 0,
  totalBars = 5,
}) => {
  const totalChanges = added + removed + unchanged;

  const getBarCounts = () => {
    const counts = { added: 0, removed: 0, unchanged: 0 };

    if (totalChanges === 0) return { ...counts, unchanged: totalBars };

    counts.added = Math.round((added / totalChanges) * totalBars);
    counts.removed = Math.round((removed / totalChanges) * totalBars);
    counts.unchanged = totalBars - (counts.added + counts.removed);

    return counts;
  };

  const barCounts = getBarCounts();

  return (
    <div className="inline-flex items-center  text-sm font-mono">
      <span className="text-green-500">+{added}</span>
      <span className="text-red-500">-{removed}</span>

      <div className="flex gap-[1px] ml-2">
        {Array(barCounts.added)
          .fill(null)
          .map((_, i) => (
            <span key={`a-${i}`} className="w-2 h-3 bg-green-500 rounded-sm" />
          ))}
        {Array(barCounts.removed)
          .fill(null)
          .map((_, i) => (
            <span key={`r-${i}`} className="w-2 h-3 bg-red-500 rounded-sm" />
          ))}
        {Array(barCounts.unchanged)
          .fill(null)
          .map((_, i) => (
            <span
              key={`u-${i}`}
              className="w-2 h-3 bg-gray-800 border border-gray-600 rounded-sm"
            />
          ))}
      </div>
    </div>
  );
};

export default DiffStat;
