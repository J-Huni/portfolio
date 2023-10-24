import MenuItem from '../components/@base/MenuItem'
import { useCallback } from 'react'
import {
  RectangleStackIcon,
  IdentificationIcon,
  ChevronDoubleLeftIcon,
  ListBulletIcon,
} from '@heroicons/react/20/solid'
import { Menus } from '../types/common'
import useStore from '../store/store'

const Menu = () => {
  const { now, setNow: changeMenu } = useStore((state) => state)

  const openGitHub = useCallback(() => {
    window.open('https://github.com/J-Huni')
  }, [])

  const handleMenus = useCallback(
    (menu: Menus) => {
      changeMenu(menu)
    },
    [changeMenu]
  )

  return (
    <div className='flex flex-col border-x-2 border-l-slate-700 border-r-slate-700'>
      <div className='flex h-full items-center'>
        <ChevronDoubleLeftIcon className='text-white w-12 h-12' />
        <div className='h-full flex flex-col justify-center'>
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
      </div>
      <div className='grid grid-cols-2 border-t-[1px] border-slate-700'>
        <MenuItem
          icon={<img src='/assets/imgs/github-mark-white.png' />}
          tooltip='LINKED IN'
          handleClick={openGitHub}
        />
        <MenuItem
          icon={<img src='/assets/imgs/github-mark-white.png' />}
          tooltip='GITHUB'
          handleClick={openGitHub}
        />
      </div>
    </div>
  )
}

export default Menu
