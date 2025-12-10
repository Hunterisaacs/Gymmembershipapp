import { Button } from "./ui/button";

interface MobileHeaderProps {
  activeSection: string;
}

const sectionTitles = {
  home: "",
  community: "Community", 
  gallery: "Gallery",
  schedule: "Schedule"
};

export function MobileHeader({ activeSection }: MobileHeaderProps) {
  const getTitle = () => {
    if (activeSection === "home") {
      return "Empire Jiu-jitsu";
    }
    return sectionTitles[activeSection as keyof typeof sectionTitles] || "Empire Jiu-jitsu";
  };

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-40 px-4 py-3">
      <div className="flex items-center justify-between gap-2">
        {activeSection === "home" ? (
          <div className="flex items-center justify-center gap-2 flex-1">
            <h1 className="text-lg font-medium text-center">
              {getTitle()}
            </h1>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <h1 className="text-lg font-medium truncate">
                {getTitle()}
              </h1>
            </div>
            {activeSection === "community" && (
              <Button size="sm" className="flex-shrink-0">
                Create Post
              </Button>
            )}
          </>
        )}
      </div>
    </header>
  );
}