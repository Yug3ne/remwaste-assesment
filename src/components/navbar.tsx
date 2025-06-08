import { cn } from "@/lib/utils";

import { ModeToggle } from "./modeToggle";
import { MapPin, Truck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between">
      {/* left side with the logo */}
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
          )}
        >
          <Truck size={20} color="white"/>
        </div>
        <div>
          <p className={cn("font-bold text-foreground text-lg")}>
            We Want Waste
          </p>
          <span className="text-gray-500">Skip Hire Service</span>
        </div>
      </div>
      {/* right side with the location and theme togal */}
      <div className="flex items-center justify-center gap-4">
        <div className=" hidden md:flex items-center justify-center gap-2">
          <MapPin size={20} />
          <p className="text-gray-500 text-sm font-light">NR32, Lowestoft</p>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
