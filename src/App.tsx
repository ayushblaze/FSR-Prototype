import { useState } from "react";
import { Menu, X, Home, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Main from "./components/Main";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-white shadow-md flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span
            className={`text-lg font-bold transition-all ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Dashboard
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex-1 p-2 space-y-2">
          <SidebarItem
            icon={<Home className="h-5 w-5" />}
            label="Home"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<User className="h-5 w-5" />}
            label="Users"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            isOpen={isOpen}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <Main />
    </div>
  );
}

// Fix for SidebarItem props
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
}

function SidebarItem({ icon, label, isOpen }: SidebarItemProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
      {icon}
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}
