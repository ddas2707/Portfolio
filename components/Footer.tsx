import { socialMedia } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import Magicbuttons from './MagicButtons'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>Your Digital presence  </span> to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let's connect
                </p>
                <a href='https://www.linkedin.com/in/dhrub-das-877659248/'>
                    <Magicbuttons
                        title="Let's Get in Touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-around items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Dhrub Das
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a href={info.link}
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>

    )
}

export default Footer