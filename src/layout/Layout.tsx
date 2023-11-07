import React from 'react'
import Intro from './Intro'
import Menu from './Menu'
import useStore from '../store/store'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const mb = useStore((state) => state.mbMode)

  return (
    <div className='w-full h-full flex'>
      {!mb && <Intro />}
      <Menu />
      <div className='p-4 w-full h-full flex '>{children}</div>
    </div>
  )
}

export default Layout
