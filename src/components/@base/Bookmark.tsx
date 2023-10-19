import React from 'react'

interface Props {
  text: string
}

const Bookmark = ({ text }: Props) => {
  return <div className='mt-2 rounded-r-lg p-5 bg-slate-400'>{text}</div>
}

export default Bookmark
