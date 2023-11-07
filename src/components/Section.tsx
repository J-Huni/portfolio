import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import useObserver from '../hooks/useObserver'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  const { obTarget, observe } = useObserver()

  return (
    <motion.div
      className='m-auto container max-w-screen-xl rounded-xl bg-white p-12 shadow-xl overflow-y-scroll max-h-full relative opacity-0 max-md:p-4'
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
      <div ref={obTarget} />
      <ArrowDownCircleIcon
        className='w-10 h-10 sticky bottom-0 animate-bounce'
        style={{ opacity: observe ? 0 : 0.6 }}
      />
    </motion.div>
  )
}

export default Section
