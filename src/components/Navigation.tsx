import { Home, Users, Calendar, Image } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "./ui/sidebar";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "community", label: "Community", icon: Users },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "schedule", label: "Schedule", icon: Calendar },
];

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-primary text-center">Empire Jiu-jitsu</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  onClick={() => setActiveSection(item.id)}
                  isActive={activeSection === item.id}
                  className="w-full"
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}