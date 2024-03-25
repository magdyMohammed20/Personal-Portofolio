import React from 'react'
import { Div } from './Styles'

function PortoTemp({ src, desc, link }) {
    return (
        <div>
            <Div className='shadow-lg m-3 relative '>
                <img src={src} alt={src} className='h-56' />
                <h3 className='text-gray-300 text-base  p-3 py-4 font-semibold'>{desc}</h3>
                <a href={link} target='_blank' rel="noreferrer" className='absolute px-12 py-3 rounded'>Visit</a>
            </Div>
        </div>
    )
}

export default PortoTemp
