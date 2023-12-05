import { useState, useEffect } from 'react';

/**
 * get the value in localStorage
//  * or return the initial value if not already in localStorage
 * @param key name in local storage
 * @param initialValue
 */
const getSavedValue = <T,>(key: string, initialValue: T | (() => T)) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue) return JSON.parse(savedValue) as T;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

/**
 * custom hook returns a stateful value connected with localStorage, and a function to update it.
 * @param key in localStorage
 * @param initialValue
 */
const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // set value after mount or update
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
