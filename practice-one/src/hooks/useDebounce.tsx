import { useEffect, useState } from 'react';

/**
 * used to delay some actions
 * @param value to debounce
 * @param delay of the debounce
 * @returns same value
 */
const useDebounce = <T,>(value: T, delay: number = 300) => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(id); // remove the debounced timer when component updated
    };
  });

  return debounced;
};

export default useDebounce;
