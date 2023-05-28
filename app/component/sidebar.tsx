import Image from 'next/image'
import React from 'react'
import { Envelope, Twitter, Medium, Linkedin,  } from './icons'

// interface dataType  {
    
//     name: string;
//     role: string;
//     education: string[];
//     contactLinks: string[];

// }

const Sidebar = ({data }) => {

    const {name, role, education, contactLinks} = data 
  return (
    <div className='bg-black flex flex-col  w-full content-between h-auto sm:justify-around sm:h-screen sm:w-1/3 sm:fixed'>
      <div className=' text-white flex flex-col p-10 items-center'>
        <Image
        priority
        width={300}
        height={300}
        className='rounded-full h-full mb-6'
          src='/azad.jpg'
            alt='azad'
            aria-label='azad'
        />
      <h1 className='mb-2'>{name}</h1>
      <h2 className='mb-8'>{role}</h2>
      <p className='mb-2'>{education[0]}</p>
      <p className='mb-2'>{education[1]}</p>
      <div>
        <h3 className='text-white text-center my-4 sm:mt-8'>Contact Me</h3>
        <div className="flex flex-row justify-center gap-2">
        <a className='icons-Contactme' href="{contactLinks?.[0]}" aria-label='email link'><Envelope className={undefined}/></a>
        <a className='icons-Contactme' href="{contactLinks?.[1]}" aria-label='twitter link'><Twitter className={undefined}/></a>
        <a  className='icons-Contactme' href="{contactLinks?.[2]}" aria-label='linkedin link'><Linkedin className={undefined}/></a>
        <a  className='icons-Contactme' href="{contactLinks?.[3]}" aria-label='medium link'><Medium className={undefined}/></a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar