import React from 'react'

type Props = {}

const FooterLP = (props: Props) => {
  return (
    <div id="contactus" className='bg-[#0E1D43]'>
        <div className='container mx-auto pt-[50px] pb-[70px]'>
            <div className='flex gap-[30px]'>
                <div className='basis-[30%] text-[white]'>
                    <h1 className='text-[30px] font-bold mb-[10px]'>Saturni</h1>
                    <p className='text-[14px] leading-[21px] font-normal mb-[30px]'>Vehicle transportation</p>
                </div>
                <div className='basis-[70%] grid grid-cols-3 gap-[30px] text-white'>
                    <div className='space-y-[15px]'>
                        <h2 className='text-[16px] leading-[19px] font-bold'>Useful Links</h2>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'><a href="">Home</a></p>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'><a href="#aboutSaturni">About us</a></p>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'><a href="#services">Services</a></p>
                    </div>
                    <div className='space-y-[15px]'>
                        <h1 className='text-[16px] leading-[19px] font-bold'>Our Services</h1>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'>Car transportation</p>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'>Temperature-controlled transportation</p>
                    </div>
                    <div className='space-y-[15px]'>
                        <h2 className='text-[16px] leading-[19px] font-bold'>Contact Us</h2>
                        <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'>Konrad-Adenauer-Strasse 43
                           Rinteln, 31737,
                           Germany
                        </p>
                        <div>
                            <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'><a href="tel:05751 76680"><span className='font-bold'>Phone:</span> 05751 76680</a></p>
                            <p className='text-[16px] leading-[19px] font-normal opcaity-[0.8]'><a href="mailto:cartransport@saturni.com"><span className='font-bold'>Email:</span> cartransport@saturni.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-[white] container mx-auto flex items-center justify-center py-[15px]'>
            <p className='text-[16px] leading-[19px] font-normal'>© 2023 Saturni. All rights reserved</p>
        </div>
    </div>
  )
}

export default FooterLP