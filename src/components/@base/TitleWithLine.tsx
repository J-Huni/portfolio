import React from 'react'

interface Props {
  children: React.ReactNode
}

const TitleWithLine = ({ children }: Props) => {
  return (
    <div className='flex before:w-10 before:h-1 before:bg-blue-300 after:flex-grow after:h-1 after:bg-blue-300 items-center my-10'>
      <p className='text-2xl font-bold mx-5'>{children}</p>
    </div>
  )
}

export default TitleWithLine
