import { useState } from "react";
import Navbar from "./components/navbar";
import ProgressStep from "./components/progressStep";
import { cn } from "./lib/utils";
import type { Skip } from "./lib/types";
import { fetchSkipsByLocation } from "./lib/api";
import SkipGrid from "./components/SkipGrid";
import SkipCardSkeleton from "./components/skipCardSkeleton";
import { useQuery } from "@tanstack/react-query";


function App() {
  /**
   * State to keep track of the currently selected skip.
   * It is initialized to null, meaning no skip is selected initially.
   */
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  /**
   * useQuery hook from TanStack Query to fetch skip data.
   * - queryKey: A unique key for this query. It includes the location to ensure
   *             the query is re-fetched if the location changes.
   * - queryFn: The function that performs the data fetching.
   *
   * The hook returns the fetched data, error state, and loading states.
   */
  const {
    data: skips,
    error,
    isLoading,
    isFetching,
  } = useQuery<Skip[], Error>({
    queryKey: ["skips", "NR32", "Lowestoft"],
    queryFn: () => fetchSkipsByLocation("NR32", "Lowestoft"),
  });

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <main className="flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar />
      <ProgressStep />
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-foreground transition-colors duration-300 mb-4"
            )}
          >
            Choose Your Skip Size
          </h2>
          <p
            className={cn(
              "text-lg transition-colors duration-300 text-secondary-foreground max-w-2xl mx-auto"
            )}
          >
            Select the skip size that best suits your needs. All prices include
            delivery, collection, and disposal.
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-8">{error.message}</div>
        )}

        {(isLoading || isFetching) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkipCardSkeleton key={i} />
            ))}
          </div>
        )}

        {!isLoading && !isFetching && skips && (
          <SkipGrid
            skips={skips}
            selectedSkip={selectedSkip}
            onSkipSelect={handleSkipSelect}
          />
        )}

        {selectedSkip && (
          <div
            className={cn(
              "rounded-xl shadow-lg border-2 p-6 mb-8",
              "bg-card text-card-foreground border-border"
            )}
          >
            <h3 className="text-lg font-semibold mb-4">Your Selection</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{selectedSkip.size} Yard Skip</p>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  Up to {selectedSkip.hire_period_days} days hire
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  £
                  {(
                    selectedSkip.price_before_vat *
                    (1 + selectedSkip.vat / 100)
                  ).toFixed(2)}
                </p>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  including VAT
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
