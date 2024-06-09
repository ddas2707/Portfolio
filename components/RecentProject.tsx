import { projects } from '@/data'
import Image from 'next/image'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'

const RecentProject = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className="text-purple">Recent projects</span>
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-x-20 gap-y-8  p-4'>
                {projects.map((item) => (
                    <div key={item.id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <PinContainer
                            title="MovieHUB"
                        >
                            <a href={item.link}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <Image
                                            height={100}
                                            width={100}
                                            src="/bg.png"
                                            alt="bgimg" />
                                    </div>
                                    <Image
                                        height={200}
                                        width={500}
                                        src={item.img}
                                        alt="cover"
                                        className="z-10 absolute bottom-0"
                                    />
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                // This is the styling prop used for overlaping 
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            // overlap styling end
                                            >
                                                <Image height={100} width={100} src={icon} alt="icon5" className="p-2" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            Github
                                        </p>
                                        <FaLocationArrow className="ms-3" color="#CBACF9" />

                                    </div>
                                </div>
                            </a>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProject