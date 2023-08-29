import React from 'react';
import Image from 'next/image';
import moon from '../public/moon.svg';
import sun from '../public/sun.svg';
import bell from '../public/bell.svg';
import arrowDown from '../public/arrow_down.svg';
import profileIcon from '../public/profile_icon.png';



export default function Horizontal_Nav() {
  return (
    <div className='horizontalNavContainer bg-white flex flex-row items-center h-[75px] w-[100%] justify-end gap-6 px-[6%]'>

      <div>

        <div className='bg-[#EBEBEB] flex flex-row items-center rounded-[100px] p-[3.5px] '>
          <Image
            src={moon}
            height={20}
            width={20}
            className='mr-2'
            style={{objectFit:"contain"}}
          />

          <div className='rounded-full flex flex-row items-center bg-[#D90091] p-1'>
            <Image
              src={sun}
              height={20}
              width={20}
              style={{objectFit:"contain"}}
            />
          </div>
        </div>

      </div>

      <div>
        <Image
          src={bell}
          height={36}
          width={36}
          style={{objectFit:"contain"}}
        />
      </div>

      <div className='flex items-center gap-2'>
        <p className=' text-base font-medium'>
          Jessica James
        </p>

        <Image
          src={profileIcon}
          height={36}
          width={36}
          style={{objectFit:"contain"}}
        />

        <Image
          src={arrowDown}
          height={24}
          width={24}
          style={{objectFit:"contain"}}
        />
      </div>


    </div>
  )
}
