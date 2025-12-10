import { useState, useEffect, useCallback, useMemo } from "react";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { Navigation } from "./components/Navigation";
import { MobileNavigation } from "./components/MobileNavigation";
import { MobileHeader } from "./components/MobileHeader";
import { HomePage } from "./components/HomePage";
import { CommunityPage } from "./components/CommunityPage";
import { GalleryPage } from "./components/GalleryPage";
import { SchedulePage } from "./components/SchedulePage";
import { useSwipeGesture } from "./components/hooks/useSwipeGesture";
import { SwipeIndicator } from "./components/SwipeIndicator";
import { SwipeHint } from "./components/SwipeHint";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import backgroundPattern from "figma:asset/4bef19b26b2d35da6a687871b96fc807158b2d38.png";

function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const sections = ["home", "community", "gallery", "schedule"];
  const enableSwipeGestures = true;
  const mobileBreakpoint = 768;

  // Ensure active section is always valid
  useEffect(() => {
    if (!sections.includes(activeSection)) {
      setActiveSection(sections[0] || "home");
    }
  }, [sections, activeSection]);

  const navigateToSection = useCallback((direction: 'next' | 'prev') => {
    const currentIndex = sections.indexOf(activeSection);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
    }
    
    setActiveSection(sections[newIndex]);
  }, [sections, activeSection]);

  const handleSwipeLeft = useCallback(() => {
    if (isMobile && enableSwipeGestures) {
      navigateToSection('next');
    }
  }, [isMobile, enableSwipeGestures, navigateToSection]);

  const handleSwipeRight = useCallback(() => {
    if (isMobile && enableSwipeGestures) {
      navigateToSection('prev');
    }
  }, [isMobile, enableSwipeGestures, navigateToSection]);

  const handleSwipeStart = useCallback((direction: 'left' | 'right') => {
    if (isMobile && enableSwipeGestures) {
      setSwipeDirection(direction);
      // Clear the swipe direction after a short delay
      setTimeout(() => setSwipeDirection(null), 300);
    }
  }, [isMobile, enableSwipeGestures]);

  const swipeConfig = useMemo(() => ({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
    onSwipeStart: handleSwipeStart,
    minSwipeDistance: 75,
    maxVerticalDistance: 150
  }), [handleSwipeLeft, handleSwipeRight, handleSwipeStart]);

  // Only enable swipe gestures on mobile if enabled in settings
  useSwipeGesture(swipeConfig);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      }
    };
    
    checkIsMobile();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkIsMobile);
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, [mobileBreakpoint]);

  const renderContent = useCallback(() => {
    try {
      switch (activeSection) {
        case "home":
          return <HomePage />;
        case "community":
          return <CommunityPage />;
        case "gallery":
          return <GalleryPage />;
        case "schedule":
          return <SchedulePage />;
        default:
          return <HomePage />;
      }
    } catch (error) {
      console.error('Error rendering content:', error);
      return <HomePage />;
    }
  }, [activeSection]);

  if (isMobile) {
    return (
      <>
        <div 
          className="min-h-screen bg-background relative"
          style={{
            backgroundImage: `url(${backgroundPattern})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'top left',
          }}
        >
          <MobileHeader activeSection={activeSection} />
          <main className="px-4 py-4 pb-24 relative">
            {renderContent()}
          </main>
          <MobileNavigation 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          {enableSwipeGestures && (
            <>
              <SwipeIndicator direction={swipeDirection} />
              <SwipeHint />
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <SidebarProvider>
        <div 
          className="flex min-h-screen w-full"
          style={{
            backgroundImage: `url(${backgroundPattern})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'top left',
          }}
        >
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <SidebarInset className="flex-1">
            <main className="p-6">
              {renderContent()}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
      <Toaster />
    </ErrorBoundary>
  );
}