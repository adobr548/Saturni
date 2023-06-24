import React from 'react'
import { FaCalendar, FaTruck, FaUser } from "react-icons/fa";

type Props = {}

const About = (props: Props) => {
  return (  
    <div id="aboutSaturni">
        <div className='container mx-auto grid grid-cols-2 gap-[40px] py-[40px]'>
            <div>
                <h1 className='text-[32px] font-bold text-[#0E1D43]'>About</h1>
                <p className='text-[15px] font-normal leading-[23px]'>We started our operations back in 2004 and have been successfully providing transportation services in Europe for more than a decade. During this time, we have significantly expanded our vehicle fleet and trained many professionals who are real experts of their work.</p>
                <div className='space-y-[15px] pt-[20px] pl-[10px]'>
                    <div className='flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] items-center'>
                        <FaCalendar fontSize={38} />
                        <div>
                            <h1 className='text-[22px] font-semibold tracking[0.3px] text-[#0E1D43]'>Fleet vehicle</h1>
                            <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Our auto park is modern and neat, because of that we ensure secure car transportation at the lowest cost.</p>
                        </div>
                    </div>
                    <div className='flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] items-center'>
                        <FaTruck fontSize={38} />
                        <div>
                            <h1 className='text-[22px] font-semibold tracking[0.3px] text-[#0E1D43]'>Drivers</h1>
                            <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Highly qualified long-distance drivers safely and quickly transport the cargo they are entrusted to.</p>
                        </div>
                    </div>
                    <div className='flex gap-[15px] border-[#0E1D43]/[0.2] border-b-[1px] pb-[10px] items-center'>
                        <FaUser fontSize={38} />
                        <div>
                            <h1 className='text-[22px] font-semibold tracking[0.3px] text-[#0E1D43]'>Management</h1>
                            <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Saturni company employs professional logistics managers, who always find the best solution for their customers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/about.jpg" className='w-[100%] h-[100%]' alt="about img" />
            </div>
        </div>
    </div>
  )
}

export default About