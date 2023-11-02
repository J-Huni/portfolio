import { useState, useEffect, useRef } from 'react'

const useObserver = () => {
  const obTarget = useRef<HTMLDivElement | null>(null)
  const [observe, setObserve] = useState<boolean>(false)

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([entry]) => {
        setObserve(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    obTarget.current && ob.observe(obTarget.current)

    return () => {
      ob.disconnect()
    }
  }, [obTarget])

  return { obTarget, observe }
}

export default useObserver
