import React, { useCallback, useRef } from 'react'
import { Menus } from '../../types/common'

interface Props {
  icon: React.ReactNode
  tooltip: Menus | 'GITHUB' | 'LINKED IN'
  handleClick?: () => void
}

const MenuItem = ({ icon, tooltip, handleClick }: Props) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const onHover = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.visibility = 'visible'
      tooltipRef.current.style.opacity = '1'
    }
  }, [])

  const onLeave = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.visibility = 'hidden'
      tooltipRef.current.style.opacity = '0'
    }
  }, [])

  return (
    <div className='flex justify-center items-center m-2 relative'>
      <div
        className='absolute left-12 bg-white p-2 rounded-md shadow-lg z-10'
        style={{ visibility: 'hidden', opacity: 0, transition: '.2s ease-out' }}
        ref={tooltipRef}
      >
        <p>{tooltip}</p>
      </div>
      <div
        className='cursor-pointer hover:skew-y-12 duration-300 text-white w-12 h-12 p-2'
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        onClick={handleClick}
      >
        {icon}
      </div>
    </div>
  )
}

export default MenuItem
