import React from 'react'
import { Div, DivNum } from './style'

function ExperienceTemp({ id, name, compImg, startDate, endDate = '', width, height, role }) {
    return (
        <Div className='shadow-sm p-5 m-1 mb-0 relative  rounded-lg border-gray-500 flex items-center relative'>
            <DivNum className='absolute -top-6 right-4 w-12 h-12 rounded-lg flex justify-center items-center text-gray-100 font-bold' >
                {id}
            </DivNum>
            <img src={compImg} style={{ width, height }} alt={name} />
            <div className='pl-5'>
                <h2 className='text-white text-lg mt-2 font-bold tracking-wider	'>{name}</h2>
                <div className='text-gray-400 text-base'>
                    {role}
                </div>
                <div className='text-gray-500 text-sm mt-1 italic'>
                    {startDate} {
                        endDate ? `- ${endDate}` : `(Present)`
                    }
                </div>
                {
                    /*
                <Button className='px-3 py-1 rounded mt-4'>
                    View More Details
                </Button>    
                    */
                }

            </div>

        </Div>
    )
}

export default ExperienceTemp