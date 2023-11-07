import { useState, useCallback, useMemo } from 'react'
import { PortfolioItem } from '../types/portfolio'
import { useAnimate } from 'framer-motion'
import myPortFolio from '../constants/portfolio.json'
import PortfolioPopup from './PortfolioPopup'

interface ItemProps {
  level: number
  location: number
  changeLevel: () => void
  thumbnail: string
  highlight: boolean
  onOpen: () => void
}

const ListItem = ({ level, location, changeLevel, thumbnail, highlight, onOpen }: ItemProps) => {
  const width: string = useMemo(() => `calc(20% - ${100 - level}px)`, [level])
  const height: string = useMemo(() => `calc(70% - ${100 - level}px)`, [level])

  return (
    <div
      className={`absolute bottom-0 bg-slate-400 shadow-lg hover:bottom-5 duration-200 cursor-pointer m-auto`}
      style={{
        left: `${location}%`,
        zIndex: level,
        width,
        height,
      }}
      onMouseOver={changeLevel}
      onClick={onOpen}
    >
      <img src={thumbnail} className='w-full h-full p-2' />
      {!highlight && (
        <div className='w-full h-full absolute left-0 top-0 bg-slate-200 opacity-50' />
      )}
    </div>
  )
}

interface Props {
  content?: PortfolioItem[]
}

const Portfolio = ({ content = myPortFolio as PortfolioItem[] }: Props) => {
  const [scope, animate] = useAnimate()
  const [level, setLevel] = useState<number>(content ? Math.floor(content.length / 2) : 4)
  const [open, setOpen] = useState<boolean>(false)

  const handleCard = useCallback((next: number) => {
    setLevel(next)
  }, [])

  const onOpen = useCallback(() => {
    setOpen(true)

    animate(
      '#popup',
      {
        opacity: 1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        overflowY: 'scroll',
      },
      { duration: 0.2 }
    )
  }, [animate])

  const onClose = useCallback(() => {
    animate(
      '#popup',
      {
        opacity: 0,
        width: 0,
        height: 0,
        top: '50%',
        left: '50%',
      },
      { duration: 0.2 }
    )

    setOpen(false)
  }, [animate])

  const now = useMemo(() => {
    return level - 1
  }, [level])

  return (
    <div className='w-full p-4 bg-slate-200 rounded-lg' ref={scope}>
      {content && <PortfolioPopup content={content[now]} onClose={onClose} open={open} />}
      <div className='relative flex justify-center mb-32 h-80 m-auto w-full max-lg:hidden'>
        {content.map((v, idx) => (
          <ListItem
            thumbnail={v.thumbnail}
            key={idx}
            level={(content.length - Math.abs(level - (idx + 1))) * 10}
            location={Math.floor((80 / content.length) * idx) + 5}
            changeLevel={() => handleCard(idx + 1)}
            highlight={idx === now}
            onOpen={onOpen}
          />
        ))}
      </div>
      <div className='grid bg-slate-200 rounded-lg lg:hidden grid-cols-4 gap-4 max-sm:grid-cols-2'>
        {content.map((v, idx) => (
          <img
            src={v.thumbnail}
            key={idx}
            className='w-full h-[100px] cursor-pointer'
            onClick={onOpen}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
