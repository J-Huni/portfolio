import React from 'react'
import Intro from './Intro'
import Menu from './Menu'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full flex p-4'>
      <Intro />
      <Menu />
      {children}
    </div>
  )
}

export default Layout
