import MenuItem from '../components/@base/MenuItem'
import { useCallback } from 'react'
import {
  RectangleStackIcon,
  IdentificationIcon,
  ChevronDoubleLeftIcon,
  ListBulletIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid'
import { Menus } from '../types/common'
import useStore from '../store/store'
import Avatar from '../components/@base/Avatar'

const Menu = () => {
  const { now, setNow: changeMenu, mbMode, setMbMode } = useStore((state) => state)

  const openWindow = useCallback((link: string) => {
    window.open(link)
  }, [])

  const handleMenus = useCallback(
    (menu: Menus) => {
      changeMenu(menu)
    },
    [changeMenu]
  )

  const handleMbMode = () => {
    setMbMode(!mbMode)
  }

  return (
    <div className='flex flex-col border-x-2 border-l-slate-700 border-r-slate-700'>
      <div className={`m-auto ${mbMode ? 'block' : 'hidden max-xl:block'}`}>
        <Avatar img='/assets/imgs/avatar.jpg' />
      </div>
      <div className='flex h-full items-center justify-center'>
        {!mbMode && (
          <ChevronDoubleLeftIcon
            className='text-white w-12 h-12 hover:animate-pulse cursor-pointer max-xl:hidden'
            onClick={handleMbMode}
          />
        )}
        <div className='h-full flex flex-col justify-center px-2'>
          <MenuItem
            icon={<IdentificationIcon />}
            tooltip='PROFILE'
            handleClick={() => handleMenus('PROFILE')}
            active={now === 'PROFILE'}
          />
          <MenuItem
            icon={<ListBulletIcon />}
            tooltip='HISTORY'
            handleClick={() => handleMenus('HISTORY')}
            active={now === 'HISTORY'}
          />
          <MenuItem
            icon={<RectangleStackIcon />}
            tooltip='PORTFOLIO'
            handleClick={() => handleMenus('PORTFOLIO')}
            active={now === 'PORTFOLIO'}
          />
        </div>
        {mbMode && (
          <ChevronDoubleRightIcon
            className='text-white w-10 h-10 hover:animate-pulse cursor-pointer max-xl:hidden'
            onClick={handleMbMode}
          />
        )}
      </div>
      <div className='grid grid-cols-2 border-t-[1px] border-slate-700'>
        <MenuItem
          icon={<img src='/assets/imgs/linkedin_logo.png' className='text-white' />}
          handleClick={() => openWindow('https://www.linkedin.com/in/frontenddaniel/')}
        />
        <MenuItem
          icon={<img src='/assets/imgs/github-mark-white.png' />}
          handleClick={() => openWindow('https://github.com/J-Huni')}
        />
      </div>
    </div>
  )
}

export default Menu
