import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';

export function SwipeHint() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem('swipe-hint-seen');
    if (!hasSeenHint) {
      // Show hint after a brief delay
      const showTimer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(showTimer);
    }
  }, []);

  useEffect(() => {
    // Auto-dismiss after 5 seconds when visible
    if (isVisible) {
      const autoHideTimer = setTimeout(() => {
        dismissHint();
      }, 5000);
      return () => clearTimeout(autoHideTimer);
    }
  }, [isVisible]);

  const dismissHint = () => {
    setIsVisible(false);
    localStorage.setItem('swipe-hint-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 left-4 right-4 z-50"
    >
      <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg border">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium">💡 Tip: Swipe to navigate!</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={dismissHint}
            className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <ChevronLeft className="h-3 w-3" />
            <span>Swipe right</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Swipe left</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}