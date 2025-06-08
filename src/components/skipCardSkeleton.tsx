import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const SkipCardSkeleton = () => {
  return (
    <Card
      className={cn(
        "w-full md:w-[350px]",
        "bg-card text-card-foreground",
        "animate-pulse"
      )}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="w-full h-48 bg-muted rounded-md m-3" />
          <div className="absolute top-4 right-5 w-20 h-6 bg-muted rounded-full" />
        </div>

        <div className="p-6">
          <div className="h-7 w-32 bg-muted rounded-md mb-2" />

          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-muted rounded-full mr-2" />
            <div className="h-4 w-24 bg-muted rounded-md" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="h-8 w-24 bg-muted rounded-md" />
            <div className="h-4 w-16 bg-muted rounded-md" />
          </div>

          <div className="w-full h-10 bg-muted rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SkipCardSkeleton;
