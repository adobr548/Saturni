import React from 'react'
import { FaStaylinked } from "react-icons/fa";

type Props = {}

const Category = (props: Props) => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto grid grid-cols-2 gap-[40px] py-[40px]'>
            <div className='flex gap-[15px]'>
                <FaStaylinked fontSize={50} />
                <div>
                    <h1 className='text-[24px] pt-[10px] font-semibold text-[#000000]'>Company vision</h1>
                    <p className='text-[15px] font-normal leading-[23px]'>To become a benchmark European car logistics company.</p>
                </div>
            </div>
            <div className='flex gap-[15px]'>
                <div>
                    <h1 className='text-[24px] pt-[10px] font-semibold text-[#000000]'>Company mission</h1>
                    <p className='text-[15px] font-normal leading-[23px]'>Increase the efficiency of the automotive supply chain and the competitiveness of our customers by implementing, restructuring and improving innovations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category