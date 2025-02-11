import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { TbBrandTiktok } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container mx-auto flex justify-between items-center py-1 px-4'>
            <div className='hidden md:flex items-center space-x-2'>
                <a href='#' className='hover:text-gray-300'>
                 <TbBrandMeta className='h-5 w-5' />
                </a>
                <a href='#' className='hover:text-gray-300'>
                 <TbBrandTiktok className='h-5 w-5' />
                </a>
            </div>

            <div className='text-sm text-center flex-grow'>
                <span>San pham chinh hang</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href='tel: +84399826212' className='hover:text-gray-300'>(+84)399 826 212</a>
            </div>

        </div>
    </div>
  )
}

export default Topbar