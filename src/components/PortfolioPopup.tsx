import { ArrowDownCircleIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { PortfolioItem } from '../types/portfolio'
import Slider from './@base/Slider'
import useObserver from '../hooks/useObserver'

interface Props {
  content: PortfolioItem
  onClose: () => void
  open: boolean
}

const PortfolioPopup = ({ content, onClose, open }: Props) => {
  const { obTarget, observe } = useObserver()

  return (
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
      <div className='bg-white m-auto w-3/4 h-4/5 my-16 rounded-lg overflow-y-scroll relative'>
        <div className='flex items-center p-4 sticky top-0 bg-white border-b-2 border-slate-200'>
          {content.domain && (
            <a href='#' className='hover:scale-105' onClick={() => window.open(content.domain)}>
              <HomeIcon className='w-10 h-10' />
            </a>
          )}
          <p className='text-center text-2xl font-bold w-full'>{content.title}</p>
          <XMarkIcon className='w-10 h-10 cursor-pointer right-5 top-5' onClick={onClose} />
        </div>
        <div className='flex gap-4 justify-center p-4'>
          {content.techSkills.map((skill, idx) => (
            <span className='bg-blue-500 py-2 px-4 rounded-full font-bold text-white' key={idx}>
              {skill}
            </span>
          ))}
        </div>
        {open && <Slider imgs={content.imgs} />}
        <div className='p-4 '>
          {content.desc.map((v, idx) => (
            <p className='text-xl my-2' key={idx}>
              - {v}
            </p>
          ))}
        </div>
        <div ref={obTarget} />
        <ArrowDownCircleIcon
          className='sticky w-10 h-10 left-5 bottom-5 animate-bounce  '
          style={{ opacity: observe ? 0 : 0.6 }}
        />
      </div>
    </div>
  )
}

export default PortfolioPopup
