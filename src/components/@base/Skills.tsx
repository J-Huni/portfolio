import React from 'react'
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
    <img src={src} className='w-[100px] h-[100px] m-auto' />
    <p className='font-bold text-center mt-3'>{name}</p>
  </motion.div>
)

export default Skills
