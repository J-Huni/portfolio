import MenuItem from '../components/@base/MenuItem'
import { useCallback } from 'react'
import {
  RectangleStackIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/20/solid'

const Menu = () => {
  const openGitHub = useCallback(() => {
    window.open('https://github.com/J-Huni')
  }, [])

  return (
    <div className='flex flex-row justify-center items-center border-x-2 border-l-slate-700 border-r-slate-700'>
      <ChevronDoubleLeftIcon className='text-white w-12 h-12' />
      <div className='flex flex-col h-full justify-between'>
        <div className='h-full flex flex-col justify-center'>
          <MenuItem icon={<IdentificationIcon />} tooltip='PROFILE' />
          <MenuItem icon={<RectangleStackIcon />} tooltip='PORTFOLIO' />
          <MenuItem icon={<ClipboardDocumentListIcon />} tooltip='CONTACT' />
        </div>
        <div>
          <hr className='h-1 border-slate-700 m-2' />
          <MenuItem
            icon={<img src='/assets/imgs/github-mark-white.png' />}
            tooltip='GITHUB'
            handleClick={openGitHub}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
