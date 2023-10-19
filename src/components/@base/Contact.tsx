import React from 'react'

interface Props {
  text: string
  icon: React.ReactNode
}

const Contact = ({ text, icon }: Props) => {
  return (
    <div className='flex items-center text-white gap-5 ml-5 mt-5'>
      {icon}
      <p className='text-xl'>{text}</p>
    </div>
  )
}

export default Contact
