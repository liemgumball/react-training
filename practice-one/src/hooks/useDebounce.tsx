import { useEffect, useState } from 'react'

const useDebounce = <T,>(value: T, delay: number = 300) => {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  })

  return debounced
}

export default useDebounce
