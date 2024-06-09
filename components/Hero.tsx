import React from 'react'
import Magicbuttons from './MagicButtons'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FaLocationArrow } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import profpic from '../public/profpic.jpeg'

const Hero = () => {
    return (
        <div className='pb-20 pt-36 h-screen'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.08] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center 
                justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                </div>
            </div>
            <div className='flex ml-4 md:ml-8 lg:ml-12  relative my-24 z-10 justify-around'>
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center ">
                    <h2 className='uppercase tracking-widest text-xs  text-left text-blue-100 max-w-80 mb-5'>Hello There, Welcome to my Site</h2>
                    <h2 className='uppercase tracking-widest text-4xl lg:text-4xl font-semibold text-left text-blue-100 mt-2'>I'm Dhrub Das</h2>
                    <TextGenerateEffect
                        className='text-left'
                        // size change karna h toh testgenerate ke component mai jaake hoga //
                        words="A FrontEnd Developer"
                    />
                    <p className='text-left lg:text-widest text-lg mt-4 mb-8 md:text-lg lg:text-2xl '>Here are some of my works...</p>
                    <Link href='#projects'><Magicbuttons
                        title='Show my Work'
                        icon={<FaLocationArrow />}
                        position='right'
                    /></Link>
                </div>
                <div className='hidden md:block'>
                    <Image
                        src={profpic}
                        height={350}
                        alt="Picture of the author"
                        className='rounded-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero 