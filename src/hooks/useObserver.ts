import { useState, useEffect } from 'react'

const useObserver = (ref: React.MutableRefObject<Element | null>) => {
  const [observe, setObserve] = useState<boolean>(false)

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([entry]) => {
        setObserve(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    ref.current && ob.observe(ref.current)

    return () => {
      ob.disconnect()
    }
  }, [ref])

  return observe
}

export default useObserver
