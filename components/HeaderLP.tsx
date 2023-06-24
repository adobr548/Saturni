import React from 'react'

type Props = {}

const HeaderLP = (props: Props) => {
  return (
    <div className='bg-[#214fc6] head'>
      <div className='container mx-auto pt-[20px] text-[white]'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-[32px] font-semibold cursor-pointer'>Saturni</h1>
          </div>
          <div className='flex items-center gap-[50px]'>
          <ul className='flex items-center gap-[40px] cursor-pointer font-semibold'>
            <li><a href="#aboutSaturni">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contactus">Contacts</a></li>
          </ul>
          </div>
        </div>
        
        <div className='grid grid-cols-2 mt-[40px] pb-[40px]'>
        
        <div>
          <div className='text-[white]'>
            <h1 className='text-[48px] leading-[58px] w-[60%] font-bold mt-[50px]'>TRANSPORTATION PROFESSIONALS</h1>
            <p className='text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]'>Lightning fast services at competitive prices.</p>
          </div>
        </div>

        <div className='flex items-center justify-end'>
          <img src='https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80' className='w-[100%]' alt="menu bar img" />
        </div>

      </div>

      </div>
      
    </div>
  )
}

export default HeaderLP