import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { TbBrandTiktok } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className='bg-[#3399CC] text-white'>
        <div className='container mx-auto flex justify-between items-center py-2 px-3'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href='#' className='hover:text-gray-400'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href='#' className='hover:text-gray-400'>
                    <TbBrandTiktok className='h-5 w-5'/>
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>Sản phẩm chính hãng</span>
            </div>
            <div className='text-sm hover:text-gray-400 hidden md:block'>
                <a href='tel:+84399826212 '>(+84)399 826 212</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar
