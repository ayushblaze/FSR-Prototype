import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ReportTypeMenuProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const ReportTypeMenu: React.FC<ReportTypeMenuProps> = ({
  selectedType,
  setSelectedType,
}) => {
  const types = [
    "Property Damage Survey 🏠",
    "Fire Damage Assessment 🔥",
    "Flood / Water Damage Survey 💧",
    "Theft / Burglary Report 🔓",
    "Workplace Accident Assessment 🏭",
    "Natural Disaster Assessment 🌪️",
    "Third-Party Damage Survey 👥",
  ];
  return (
    <div className="mb-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            {selectedType}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-62" align="start">
          <DropdownMenuGroup>
            {types.map((type) => (
              <DropdownMenuItem
                key={type}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ReportTypeMenu;
