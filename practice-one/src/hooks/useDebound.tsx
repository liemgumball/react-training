import { useEffect, useState } from 'react'

const useDebound = <T,>(value: T, delay: number = 300) => {
  const [debounded, setDebounded] = useState<T>(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounded(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  })

  return debounded
}

export default useDebound
