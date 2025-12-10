import { Home, Users, Calendar, Image } from "lucide-react";

interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "community", label: "Community", icon: Users },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "schedule", label: "Schedule", icon: Calendar },
];

export function MobileNavigation({ activeSection, setActiveSection }: MobileNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 h-16">
      <div className="flex items-center justify-around h-full px-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center justify-center h-full min-w-0 flex-1 transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? "stroke-2" : "stroke-1.5"}`} />
              <span className={`text-xs truncate max-w-full ${isActive ? "font-medium" : "font-normal"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}