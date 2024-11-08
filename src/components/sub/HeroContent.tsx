import React from 'react'
import {motion} from "framer-motion"
import { slideInFromTop } from '@/utils/motion'



export default function HeroContent() {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
<div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
<motion.div 
variants={slideInFromTop}
className='welcome-box py-[15px] px-[4px] boarder border-[#7042f88b] opacity-[0.9]'>

</motion.div>
</div>
    </motion.div>
  )
}
