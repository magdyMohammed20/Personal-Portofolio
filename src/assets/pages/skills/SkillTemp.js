import React from 'react'
import { Div } from './Styles'

function SkillTemp({ src, skillName, opClass, opWidth = '' }) {
    return (
        <div className={`mt-4 text-center p-4 pb-0 ${opWidth}`}>
            <Div className='px-3 py-4 cursor-pointer rounded-lg'>
                <img src={src} className={`h-12 mx-auto ${opClass}`} alt={src} />
                <span className='text-sm text-gray-400 font-bold mt-2 block'>{skillName}</span>
            </Div>
        </div>
    )
}

export default SkillTemp
