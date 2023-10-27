import { useState, useCallback, useMemo } from 'react'

interface ItemProps {
  level: number
  location: number
  changeLevel: () => void
}

const ListItem = ({ level, location, changeLevel }: ItemProps) => {
  const width: string = useMemo(() => `calc(16% - ${100 - level}px)`, [level])
  const height: string = useMemo(() => `calc(100% - ${100 - level}px)`, [level])

  return (
    <div
      className={`absolute bottom-0 p-4  bg-slate-400 shadow-lg hover:bottom-5 duration-100`}
      style={{ left: `${location}%`, zIndex: level, width, height }}
      onClick={changeLevel}
    >
      test
    </div>
  )
}

interface Props {
  content?: number[]
}

const Portfolio = ({ content = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }: Props) => {
  const [level, setLevel] = useState<number>(4)

  const changeLevel = useCallback((next: number) => {
    setLevel(next)
  }, [])

  return (
    <div className='h-full w-full p-4 bg-slate-200 rounded-lg'>
      <div className='relative my-20 h-80 m-auto w-full'>
        {content.map((idx) => (
          <ListItem
            key={idx}
            level={(content.length - Math.abs(level - (idx + 1))) * 10}
            location={Math.floor((70 / content.length) * idx) + 10}
            changeLevel={() => changeLevel(idx + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
