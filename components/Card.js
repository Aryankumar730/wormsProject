import React from 'react';
import Image from 'next/image';
import fileIcon from '../public/file_icon.png';
import copyIcon from '../public/copy_icon.svg';

export default function Card() {
  return (
    <div className='w-[386px] h-[279px] p-4 bg-white rounded-3xl m-4'>

      <div className='flex flex-row justify-between items-center'>
        <p className='text-[#0F2528] text-2xl font-semibold'>
          DevOps
        </p>

        <button className='px-8 py-[4.16px] outline-0 border-[0.75px] border-[#D90087] rounded-lg'>
          View
        </button>
      </div>

      <div className='mt-1 text-[#A9A9A9] text-sm'>
        <p>
          Pranathi 10 Nov 22
        </p>
      </div>

      <div className='my-4'>

        <div className='flex flex-row justify-between text-[#1D474D]'>

          <div className='w-full'>

            <div className='flex flex-row justify-between text-sm pr-5'>

              <p className='font-medium'>
                Invited
              </p>
              <p className='font-normal'>
                200
              </p>

            </div>

            <div className='flex flex-row justify-between text-sm mt-4 pr-5'>
              <p className='font-medium'>
                Evaluated
              </p>
              <p className='font-normal'>
                100
              </p>
            </div>

          </div>

          {/* vertical line */}
          <div className='w-[2px] h-[63px] bg-[#E0E0E0]'>
          </div>


          {/* second column */}

          <div className='w-full'>

            <div className='flex flex-row justify-between text-sm pl-5 '>
              <p className='font-medium'>
                Invited
              </p>
              <p className='font-normal'>
                200
              </p>

            </div>


            <div className='flex flex-row justify-between text-sm mt-4 pl-5'>
              <p className='font-medium'>
                Evaluated
              </p>
              <p className='font-normal'>
                100
              </p>
            </div>

          </div>
        </div>
      </div>

      <div>
        <p className=' text-xs text-[#28B894] font-normal'>
          Qualifing
        </p>

        <div className='flex flex-row gap-3 items-center'>
          <div className="h-[4px] bg-[#EBEBEB] rounded-[50px] w-[90%]">
            <div className=' h-[4px] bg-[#28B894] rounded-[50px] w-[85%]'></div>
          </div>
          <p className='text-[15px] font-medium'>
            70%
          </p>
        </div>
      </div>


      <div className='flex flex-row justify-between items-center gap-5 mt-2'>

        <div className='flex flex-row gap-5'>

          <div className='flex flex-col items-center w-min'>
            <Image
              src={fileIcon}
            />
            <p className='font-normal text-xs mt-2 text-[#808080]'>
              Duplicate
            </p>
          </div>

          <div className='flex flex-col items-center w-min'>
            <Image
              src={copyIcon}
            />
            <p className='font-normal text-xs mt-2 text-[#808080] whitespace-nowrap'>
              Copy link
            </p>
          </div>

        </div>

        <div className='h-1'>

          <div className='bg-[#EBEBEB] flex flex-row items-center rounded-[100px] p-[3.5px] h-[24px] w-[50px] '>


            <div className='rounded-full flex flex-row items-center bg-[#707070] p-1 h-[20px] w-[20px]'>

            </div>
          </div>
        </div>


      </div>


    </div>
  )
}
