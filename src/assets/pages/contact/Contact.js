import React from 'react'
import {ContactSection , Span} from './Styles'
import ContactTemp from './ContactTemp'

function Contact() {
    return (
        <ContactSection className='p-8 h-auto lg:h-screen'>
            <div className='container mx-auto px-6'>
                <div className='text-center mt-8'>
                    <Span>CONTACT</Span>
                    <h2 className='text-3xl text-white font-bold'>GET IN TOUCH</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    <ContactTemp icon='fa fa-phone fa-2x' name1='phone' desc='01012935745'/>
                    
                    <ContactTemp icon='fa fa-map-marker fa-2x' name1='address' desc='cairo'/>
                    <ContactTemp icon='fa fa-envelope fa-2x' name1='email' desc='magdymohammed96@yahoo.com'/>
                </div>
            </div>
        </ContactSection>
    )
}

export default Contact

