import React from 'react'

interface Props {
  children: React.ReactNode
}

const TitleWithLine = ({ children }: Props) => {
  return (
    <div
      className='flex before:w-10 before:h-1 before:bg-blue-300 after:flex-grow after:h-1 after:bg-blue-300 
                 items-center my-10 before:max-md:w-4 before:max-md:h-[2px] after:max-md:w-4 after:max-md:h-[2px] max-md:my-2'
    >
      <p className='text-2xl font-bold mx-5 max-md:text-sm max-md:mx-2'>{children}</p>
    </div>
  )
}

export default TitleWithLine
