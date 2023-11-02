import { useState, useMemo, useEffect } from 'react'
import { useAnimate } from 'framer-motion'

interface Props {
  imgs: string[]
}

const useSlider = (imgs: string[]) => {
  const [arr, setArr] = useState<string[]>(imgs)
  const [target, animate] = useAnimate<HTMLDivElement>()

  const elements = useMemo(() => {
    return arr.map((v, idx) => <img src={v} key={idx} className={`w-1/2 h-56 img-${idx}`} />)
  }, [arr])

  useEffect(() => {
    const interval = setInterval(() => {
      animate(`.img-0`, { width: 0, paddingRight: 0 }, { duration: 0.3 })

      const copiedArr = [...arr]
      setTimeout(() => {
        const firstElement = copiedArr.shift()
        if (firstElement) {
          copiedArr.push(firstElement)

          setArr(copiedArr)
        }
        animate(`.img-0`, { width: '50%' }, { duration: 0 })
      }, 300)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [animate, arr])

  return { elements, target }
}

const Slider = ({ imgs }: Props) => {
  const { elements, target } = useSlider(imgs)

  return (
    <div className='flex justify-between gap-4 overflow-x-hidden bg-slate-200 py-4' ref={target}>
      {elements}
    </div>
  )
}

export default Slider
