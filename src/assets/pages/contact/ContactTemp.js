import React from 'react'
import {Div , Icon } from './Styles'

function ContactTemp({icon , name1 , desc}) {
    return (
        <Div className='shadow-xl p-12 m-1 mb-0 relative mt-32 border-b-4 border-t-4 border-gray-500'>
                <Icon className={icon}></Icon>
                <h3 className='text-white text-lg mt-2'>{name1}</h3>
                <p className='text-gray-500'>{desc}</p>
        </Div>
    )
}

export default ContactTemp
