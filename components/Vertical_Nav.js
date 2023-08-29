
import React from 'react';
import gridIcon from '../public/grid.svg';
import settingsIcon from '../public/settings.svg';
import editIcon from '../public/edit.svg';
import ThreeDots from '../public/3_dots.png';
import Image from 'next/image';


export default function Vertical_Nav() {
  return (
    <div className='verticalNavContainer bg-[#15182B] flex flex-col items-center w-[100px] gap-8 h-screen pt-6'>

      <div className='bg-[#0B1026] p-2 rounded-lg cursor-pointer'>
        <Image
          src={gridIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}

        />
      </div>

      <div className='bg-[#0B1026] p-2 rounded-lg cursor-pointer'>
        <Image
          src={editIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}
        />
      </div>

      <div className='bg-[#D1018C] p-2 rounded-lg cursor-pointer'>
        <Image
          src={gridIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}
        />
      </div>


      <div className='bg-[#0B1026] p-2 rounded-lg cursor-pointer'>
        <Image
          src={editIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}
        />
      </div>


      <div className='bg-[#0B1026] p-2 rounded-lg cursor-pointer'>
        <Image
          src={gridIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}
        />
      </div>

      <div className='bg-[#0B1026] p-2 rounded-lg cursor-pointer'>
        <Image
          src={settingsIcon}
          height={26}
          width={26}
          style={{objectFit:"contain"}}
        />
      </div>

    </div>
  )
}
