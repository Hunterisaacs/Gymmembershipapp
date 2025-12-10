import { useEffect, useRef, useCallback } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeStart?: (direction: 'left' | 'right') => void;
  minSwipeDistance?: number;
  maxVerticalDistance?: number;
}

export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
  onSwipeStart,
  minSwipeDistance = 50,
  maxVerticalDistance = 100
}: SwipeGestureOptions) {
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const handleSwipe = useCallback(() => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = Math.abs(touchEndY.current - touchStartY.current);
    const absDeltaX = Math.abs(deltaX);

    // Check if it's a horizontal swipe (more horizontal than vertical movement)
    if (absDeltaX > minSwipeDistance && deltaY < maxVerticalDistance) {
      if (deltaX > 0) {
        onSwipeStart && onSwipeStart('right');
        onSwipeRight && onSwipeRight();
      } else if (deltaX < 0) {
        onSwipeStart && onSwipeStart('left');
        onSwipeLeft && onSwipeLeft();
      }
    }
  }, [onSwipeLeft, onSwipeRight, onSwipeStart, minSwipeDistance, maxVerticalDistance]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX.current = e.changedTouches[0].screenX;
      touchEndY.current = e.changedTouches[0].screenY;
      handleSwipe();
    }
  }, [handleSwipe]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchEnd]);
}