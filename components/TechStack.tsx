
import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
} from "../data/index";
import React from "react";
import SkillDataProvider from '../components/ui/SkillDataProvider'
//import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
        <div className='pt-20' id='techstack'>
            <h1 className='heading'>
                My
                <span className="text-purple"> Tech_Stack</span>
            </h1>
            <section
                id="skills"
                className="flex flex-row items-center justify-center gap-3 h-full relative overflow-hidden pb-80"
                style={{ transform: "scale(0.9" }}
            >
                {/* <SkillText /> */}
                <div className="border-2 p-20 rounded-lg justify-evenly">
                    <div className="flex flex-row justify-around flex-wrap mt-4 gap-10 items-center">
                        {Skill_data.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="flex flex-row justify-around flex-wrap mt-4 gap-16 items-center">
                        {Frontend_skill.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="flex flex-row  flex-wrap mt-4 gap-12 items-center justify-evenly">
                        {Backend_skill.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div> */}

                {/* <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div> */}
            </section>
        </div>
    );
};

export default Skills;
