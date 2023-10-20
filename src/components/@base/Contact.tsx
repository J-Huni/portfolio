import React from 'react'

interface Props {
  text: string
  icon: React.ReactNode
}

const Contact = ({ text, icon }: Props) => {
  return (
    <div className='flex items-center text-white gap-3 mt-2'>
      {icon}
      <p className='text-lg'>{text}</p>
    </div>
  )
}

export default Contact
