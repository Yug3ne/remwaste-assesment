import { cn } from "@/lib/utils";
import {
  Check,
  Truck,
  MapPin,
  Trash2,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";

const steps = [
  { id: 1, name: "Postcode", completed: true, icon: MapPin },
  { id: 2, name: "Waste Type", completed: true, icon: Trash2 },
  { id: 3, name: "Select Skip", current: true, icon: Truck },
  { id: 4, name: "Permit Check", upcoming: true, icon: Shield },
  { id: 5, name: "Choose Date", upcoming: true, icon: Calendar },
  { id: 6, name: "Payment", upcoming: true, icon: CreditCard },
];

const ProgressStep = () => {
  return (
    <div className={cn("bg-card border-b transition-colors duration-300 w-full")}>
      <div className="px-2 sm:px-6 lg:px-8 py-6 w-full">
        <div
          className={cn(
            "flex items-center justify-between overflow-x-auto whitespace-nowrap",
            "scrollbar-hide" // this class will hide the scrollbar
          )}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200",
                      step.completed && "bg-green-500 text-white shadow-lg",
                      step.current &&
                        !step.completed &&
                        "bg-blue-600 text-white shadow-lg",
                      !step.completed &&
                        !step.current &&
                        "bg-muted text-muted-foreground"
                    )}
                  >
                    {step.completed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "ml-3 text-sm font-medium hidden sm:block transition-colors duration-300",
                      step.completed && "text-green-500",
                      step.current && !step.completed && "text-blue-500",
                      !step.completed &&
                        !step.current &&
                        "text-muted-foreground"
                    )}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-8 sm:w-16 h-0.5 mx-3 sm:mx-4 transition-all duration-200",
                      step.completed && "bg-green-500",
                      !step.completed && "bg-muted"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStep;
