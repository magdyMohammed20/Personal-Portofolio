import React from 'react'
import {Div} from './Styles'

function PortoTemp({src , desc , link}) {
    return (
        <div>
            <Div className='shadow-lg p-4 m-1 mb-0 relative'>
                    <img src={src} alt={src} className='h-56'/>
                    <h3 className='text-gray-500 text-lg mt-2'>{desc}</h3>
                    <a href={link} target='_blank' className='absolute px-12 py-3 rounded'>Visit</a>
            </Div>
        </div>
    )
}

export default PortoTemp
