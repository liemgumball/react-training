import { useEffect, useState } from 'react'

const useDebound = <T,>(initialValue: T, delay: number = 300) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(initialValue)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  })

  return value
}

export default useDebound
