import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Clock, Slash, Weight } from "lucide-react";
import { Button } from "./ui/button";
import type { Skip } from "@/lib/types";

/**
 * Props for the SkipCard component.
 */
interface SkipCardProps {
  /** The skip object to display. */
  skip: Skip;
  /** A callback function to be called when the skip is selected. */
  onSelect?: (skip: Skip) => void;
  /** Indicates if the skip is currently selected. */
  isSelected?: boolean;
}

/**
 * A component to display the details of a single skip in a card format.
 * It shows the skip's size, price, hire period, and other attributes.
 * It also handles the selection of the skip.
 */
const SkipCard = ({ skip, onSelect, isSelected }: SkipCardProps) => {
  /**
   * Calculates the final price including VAT.
   */
  const finalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <>
      <Card
        className={cn(
          "cursor-pointer transition-all duration-300 hover:shadow-md",
          "bg-card text-card-foreground",
          "ring-selected shadow-selected scale-selected w-full md:w-[350px]",
          isSelected &&
            "ring-2 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        )}
      >
        <CardContent className="p-0">
          <div className="relative ">
            <img
              src="/skip.jpg"
              alt={`${skip.size} Yard Skip`}
              className="w-full h-48 object-cover rounded-md p-3"
            />
            <Badge
              variant="secondary"
              className={cn(
                "absolute top-4 bg-foreground text-background right-5 transition-colors duration-300",
                "badge-skip"
              )}
            >
              {skip.size} Yard
            </Badge>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {skip.size} Yard Skip
            </h3>

            <div className="flex items-center text-muted-foreground mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{skip.hire_period_days} days hire</span>
            </div>

            <div className="flex space-x-2 mb-4">
              {!skip.allowed_on_road && (
                <Badge variant="destructive" className="flex items-center">
                  <Slash className="w-4 h-4 mr-1" />
                  Not for road use
                </Badge>
              )}
              {skip.allows_heavy_waste && (
                <Badge
                  variant="default"
                  className="flex items-center bg-green-500 text-white"
                >
                  <Weight className="w-4 h-4 mr-1" />
                  Allows heavy waste
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold text-blue-500">
                £{formatPrice(finalPrice)}
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  (£{formatPrice(skip.price_before_vat)} ex. VAT)
                </div>
              </div>
            </div>

            <Button
              className={cn(
                "w-full transition-all duration-200",
                "btn-skip",
                isSelected && "bg-blue-500 text-white hover:bg-blue-600"
              )}
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(skip);
              }}
              variant={isSelected ? "outline" : "gray"}
              disabled={isSelected}
            >
              <div className="flex items-center gap-4">
                {isSelected ? "Selected Skip" : "Select This Skip"}
                {!isSelected && <ArrowRight className="w-4 h-4 mr-2" />}
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SkipCard;
