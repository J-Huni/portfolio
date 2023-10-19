import React from 'react'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <div className=''>{children}</div>
}

export default Section
