import React, { useCallback, useRef } from 'react'
import { Menus } from '../../types/common'
import { motion } from 'framer-motion'

interface Props {
  icon: React.ReactNode
  tooltip?: Menus
  handleClick?: () => void
  active?: boolean
}

const MenuItem = ({ icon, tooltip, handleClick, active }: Props) => {
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
    <div className='flex justify-center items-center relative'>
      {tooltip && (
        <div
          className={`absolute left-12 bg-white p-2 rounded-md shadow-lg z-20 max-sm:hidden`}
          style={{ visibility: 'hidden', opacity: 0, transition: '.2s ease-out' }}
          ref={tooltipRef}
        >
          <p>{tooltip}</p>
        </div>
      )}
      <div
        className='cursor-pointer relative hover:-skew-y-12 duration-300 text-white w-10 h-10 p-2 z-10'
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        onClick={handleClick}
      >
        {icon}
      </div>
      {active && (
        <motion.div
          className='absolute bg-blue-500 w-full bottom-0 z-0 m-1'
          animate={{ height: '25%' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}

export default MenuItem
