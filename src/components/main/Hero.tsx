import React from 'react'
import { Source } from 'three/src/Three.js'

export default function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full object-cover'
        >
        <source  src='/Assets/blackhole.webm ' type='video/webm'/>
        </video>
    </div>
  )
}
