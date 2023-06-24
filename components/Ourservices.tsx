import React from 'react'

type Props = {}

const Ourservices = (props: Props) => {
  return (
    <div id="services">
        <div className='container mx-auto pt-[80px] pb-[80px]'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-[32px] font-bold text-[#0E1D43]'>Our Services</h1>
                <div className='h-[4px] w-[40px] mt-[8px] bg-[#0E1D43]'></div>
            </div>
            <div className='grid grid-cols-2 gap-[30px] mt-[50px]'>
                <div className='border shadow-lg p-[5px]'>
                    <img src="/containers.jpg" className='object-cover' alt="car transportation" />
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Car transportation</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[5px]'>Innovative decisions and investments to improve quality processes deliver impeccable results and ensure that the offered logistics services meet the highest customer expectations.</p>
                </div>
                <div className='border shadow-lg p-[5px]'>
                    <img src="/fish.jpg" className='h-[67%] w-[100%] object-cover' alt="car transportation" />
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Temperature-controlled transportation</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[5px]'>It is crucial to us that the temperature control is smooth throughout the transportation process from loading to unloading. We provide customers with detailed information about the temperature control of the transported goods during the entire trip.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservices