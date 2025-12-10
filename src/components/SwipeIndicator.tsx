import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeIndicatorProps {
  direction: 'left' | 'right' | null;
}

export function SwipeIndicator({ direction }: SwipeIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (direction) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  if (!isVisible || !direction) return null;

  return (
    <div className={`fixed top-1/2 transform -translate-y-1/2 z-50 pointer-events-none transition-opacity duration-200 ${
      direction === 'left' ? 'right-4' : 'left-4'
    }`}>
      <div className="bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20">
        {direction === 'left' ? (
          <ChevronLeft className="h-6 w-6 text-primary" />
        ) : (
          <ChevronRight className="h-6 w-6 text-primary" />
        )}
      </div>
    </div>
  );
}