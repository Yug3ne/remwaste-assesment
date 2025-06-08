import { Suspense } from "react";
import SkipCard from "./skipCard";
import SkipCardSkeleton from "./skipCardSkeleton";
import type { Skip } from "@/lib/types";

interface SkipGridProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSkipSelect: (skip: Skip) => void;
}

const SkipGrid = ({ skips, selectedSkip, onSkipSelect }: SkipGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 mb-8">
      <Suspense
        fallback={
          <>
            <SkipCardSkeleton />
            <SkipCardSkeleton />
            <SkipCardSkeleton />
            <SkipCardSkeleton />
            <SkipCardSkeleton />
            <SkipCardSkeleton />
          </>
        }
      >
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onSelect={onSkipSelect}
            isSelected={selectedSkip?.id === skip.id}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default SkipGrid;
