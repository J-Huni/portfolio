import { useState, useCallback, useMemo } from 'react'
import { PortfolioItem } from '../types/portfolio'
import { useAnimate } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/20/solid'
import myPortFolio from '../constants/portfolio.json'

interface ItemProps {
  level: number
  location: number
  changeLevel: () => void
  img: string
  highlight: boolean
  onOpen: () => void
}

const ListItem = ({ level, location, changeLevel, img, highlight, onOpen }: ItemProps) => {
  const width: string = useMemo(() => `calc(20% - ${100 - level}px)`, [level])
  const height: string = useMemo(() => `calc(100% - ${100 - level}px)`, [level])

  return (
    <div
      className={`absolute bottom-0 bg-slate-400 shadow-lg hover:bottom-5 duration-200 cursor-pointer`}
      style={{
        left: `${location}%`,
        zIndex: level,
        width,
        height,
      }}
      onMouseOver={changeLevel}
      onClick={onOpen}
    >
      <img src={img} className='w-full h-full p-4' />
      {!highlight && (
        <div className='w-full h-full absolute left-0 top-0 bg-slate-200 opacity-50' />
      )}
    </div>
  )
}

interface Props {
  content?: PortfolioItem[]
}

const Portfolio = ({ content = myPortFolio }: Props) => {
  const [scope, animate] = useAnimate()
  const [level, setLevel] = useState<number>(content ? Math.floor(content.length / 2) : 4)

  const handleCard = useCallback((next: number) => {
    setLevel(next)
  }, [])

  const onOpen = useCallback(() => {
    animate(
      '#popup',
      {
        opacity: 1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
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
  }, [animate])

  const now = useMemo(() => {
    return level - 1
  }, [level])

  return (
    <div className='h-full w-full p-4 bg-slate-200 rounded-lg' ref={scope}>
      <div
        id='popup'
        style={{
          opacity: 0,
          position: 'absolute',
          width: 0,
          height: 0,
          left: '50%',
          top: '50%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 2000,
        }}
      >
        <div className='p-4 bg-white m-auto w-3/4 h-4/5 my-16 rounded-lg'>
          <div className='flex items-center'>
            <p className='pl-10 text-center text-2xl font-bold w-full'>{content[now].title}</p>
            <XMarkIcon className='w-10 h-10 cursor-pointer' onClick={onClose} />
          </div>
          <div className='flex gap-4 justify-center p-4'>
            {content[now].techSkills.map((skill, idx) => (
              <span className='bg-blue-500 py-2 px-4 rounded-full font-bold text-white' key={idx}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='relative my-20 h-80 m-auto w-full'>
        {content.map((v, idx) => (
          <ListItem
            img={v.img}
            key={idx}
            level={(content.length - Math.abs(level - (idx + 1))) * 10}
            location={Math.floor((80 / content.length) * idx) + 5}
            changeLevel={() => handleCard(idx + 1)}
            highlight={idx === now}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
