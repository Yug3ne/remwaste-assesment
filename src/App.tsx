import Navbar from "./components/navbar";
import ProgressStep from "./components/progressStep";
import SkipCard from "./components/skipCard";
import { cn } from "./lib/utils";

function App() {
  return (
    <main className="flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32 ">
      <Navbar />
      <ProgressStep />
      <section className="max-w-7xl mx-auto ">
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

        {/* grid of cards with skips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <SkipCard />
          <SkipCard />
          <SkipCard />
          <SkipCard />
          <SkipCard />
        </div>

        {/* skip summarry */}
        <div
          className={cn(
            "rounded-xl shadow-lg border-2 p-6 mb-8",
            "bg-card text-card-foreground border-border"
          )}
        >
          <h3 className="text-lg font-semibold mb-4">Your Selection</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">6 Yard Skip</p>
              <p className={cn("text-sm", "text-muted-foreground")}>
                Up to 14 days hire
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">£220.00</p>
              <p className={cn("text-sm", "text-muted-foreground")}>
                including VAT
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
