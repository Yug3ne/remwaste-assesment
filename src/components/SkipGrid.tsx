import { Suspense } from "react";
import SkipCard from "./skipCard";
import SkipCardSkeleton from "./skipCardSkeleton";
import type { Skip } from "@/lib/types";

/**
 * Props for the SkipGrid component.
 */
interface SkipGridProps {
  /** An array of skip objects to display in the grid. */
  skips: Skip[];
  /** The currently selected skip, or null if no skip is selected. */
  selectedSkip: Skip | null;
  /** A callback function to handle the selection of a skip. */
  onSkipSelect: (skip: Skip) => void;
}

/**
 * A component that displays a grid of SkipCard components.
 * It also handles the suspense fallback for loading states.
 */
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
