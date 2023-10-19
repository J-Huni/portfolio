import React from 'react'
import Intro from './Intro'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full flex'>
      <Intro />
      {children}
    </div>
  )
}

export default Layout
