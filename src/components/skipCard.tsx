import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "./ui/button";

const skip = {
  id: 1,
  name: "Builder's Skip",
  image: "/placeholder.svg",
  size: "8 Yard",
  hirePeriod: "7 days",
  price: "265.00",
  popular: true,
};

const SkipCard = () => {
  return (
    <>
      <Card
        className={cn(
          "cursor-pointer transition-all duration-300 hover:shadow-md",
          "bg-card text-card-foreground",
          "ring-selected shadow-selected scale-selected w-full md:w-[350px]"
        )}
      >
        <CardContent className="p-0">
          <div className="relative ">
            <img
              src="/skip.jpg"
              alt={skip.name}
              className="w-full h-48 object-cover rounded-md p-3"
            />
            <Badge
              variant="secondary"
              className={cn(
                "absolute top-4 bg-foreground text-background right-5 transition-colors duration-300",
                "badge-skip"
              )}
            >
              {skip.size}
            </Badge>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {skip.name}
            </h3>

            <div className="flex items-center text-muted-foreground mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{skip.hirePeriod}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold text-blue-500">
                £{skip.price}
              </div>
              <div className="text-sm text-muted-foreground">inc. VAT</div>
            </div>

            <Button
              className={cn("w-full transition-all duration-200", "btn-skip")}
              onClick={(e) => {
                e.stopPropagation();
              }}
              variant={"gray"}
            >
              <div className="flex items-center gap-4">
                Select This Skip
                <ArrowRight className="w-4 h-4 mr-2" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SkipCard;
