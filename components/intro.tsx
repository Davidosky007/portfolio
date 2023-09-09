import Image from 'next/image'
import React from 'react'
import davidImg from '@/public/david-dp.jpg'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image src={davidImg} alt={'David portrait'} width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl' />
          <span className='text-4xl'>
            👋
          </span>
        </div>
      </div>
    </section>
  )
}
