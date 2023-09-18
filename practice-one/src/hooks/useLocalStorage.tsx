import { useState, useEffect } from 'react'

function getSavedValue<T>(key: string, initialValue: T | (() => T)) {
  const savedValue = localStorage.getItem(key)

  if (savedValue) return JSON.parse(savedValue) as T

  if (initialValue instanceof Function) return initialValue()

  return initialValue
}

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
