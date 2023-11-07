import { motion } from 'framer-motion'

interface Props {
  src: string
  name: string
}

const Skills = ({ src, name }: Props) => (
  <motion.div
    initial={{ width: '100%', height: '90%', opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={src}
      className='w-full h-full max-w-[90px] max-h-[90px] m-auto max-sm:w-full max-sm:h-3/4'
    />
    <p className='font-bold text-center mt-3 max-md:text-[10px]'>{name}</p>
  </motion.div>
)

export default Skills
