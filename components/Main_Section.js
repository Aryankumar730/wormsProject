import React from 'react';
import Card from '@/components/Card';
import Image from 'next/image';
import searchIcon from '../public/search_icon.svg'


export default function Main_Section() {

  let noOfCards = 12;

  return (

    <div className='flex flex-col mt-4 pl-[111px] pt-[100px] items-center'>

      <div className='flex flex-col w-full items-center'>

        <div className='w-[88%]'>



          <div className='flex p-3 justify-start'>
            <p className='font-semibold text-[34px]'>
              Candidate Assessments
            </p>
          </div>

          <div className='flex flex-row justify-between gap-20 p-3 mt-2 w-full'>

          {/* search bar */}

          <div className=' flex flex-row justify-between bg-white p-3 rounded-[10px] w-full '>

            <input type="text" placeholder='Search Assessments' className='outline-none w-full' />

            <Image
              src={searchIcon}
            />
          </div>


          {/* button */}

          <button className='w-[200px] py-[7px] outline-0 border-[0.75px] bg-[#D90087] rounded-[10px] text-[white] whitespace-nowrap'>
            + Create New
          </button>

        </div>

        </div>
      </div>



      <div className='flex flex-row flex-wrap justify-center'>

        {
          Array.from({ length: noOfCards }, (_, index) => (

            <Card key={index} />
          ))
        }

      </div>

    </div>
  )
}
