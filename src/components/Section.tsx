import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import useObserver from '../hooks/useObserver'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  const obTarget = useRef<HTMLDivElement | null>(null)

  const observe = useObserver(obTarget)

  return (
    <motion.div
      className='m-auto container mx-lg rounded-xl bg-white p-12 shadow-xl overflow-y-scroll max-h-full relative opacity-0'
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
      <div className='w-1 h-1 absolute' ref={obTarget} />
      {!observe && (
        <ArrowDownCircleIcon className='w-10 h-10 sticky bottom-0 animate-bounce opacity-60 ' />
      )}
    </motion.div>
  )
}

export default Section
