import { useRef, useCallback } from 'react';

export const useDebounce = (callback: any, delay: number) => {
   const timer = useRef<number>();

   const debouncedCallback = useCallback(
      (...args: string[] | boolean[] | number[]) => {
         clearTimeout(timer.current);
         timer.current = setTimeout(() => {
            callback(...args);
         }, delay);
      },
      [callback, delay],
   );

   return debouncedCallback;
};
