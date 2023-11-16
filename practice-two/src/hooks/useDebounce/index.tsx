import { useEffect, useState } from 'react';

/**
 * used to delay some actions
 * @param value to debounce
 * @param delay milliseconds of the debounce
 * @returns same value
 */
const useDebounce = <T,>(value: T | (() => T), delay: number = 300) => {
  const [debounced, setDebounced] = useState<T>(
    value instanceof Function ? value() : value
  );

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (value instanceof Function) {
      id = setTimeout(async () => {
        const result = await (value as () => Promise<T>)();
        setDebounced(result);
      }, delay);
    } else {
      id = setTimeout(() => {
        setDebounced(value as T);
      }, delay);
    }

    return () => {
      clearTimeout(id); // Remove the debounced timer when the component unmounts or updates
    };
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
