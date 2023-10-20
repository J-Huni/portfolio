import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return (
    <div className='m-auto container mx-lg rounded-xl bg-white p-12 shadow-xl overflow-y-scroll max-h-full relative'>
      {children}
      <ArrowDownCircleIcon className='w-10 h-10 fixed bottom-10 animate-bounce opacity-60' />
    </div>
  )
}

export default Section
