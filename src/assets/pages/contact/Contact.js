import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { ContactSection } from './Styles'
import { Anchor } from '../../aids/style/globalStyle'
import ContactTemp from './ContactTemp'

function Contact() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <ContactSection className='p-8 h-auto lg:h-screen'>
            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container mx-auto px-6'>
                <div className='text-center mt-12'>
                    {
                        /*
                        <Span>CONTACT</Span>
                        */
                    }
                    <h2 className='text-2xl text-white font-bold'>GET IN TOUCH</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    <ContactTemp icon='fa fa-phone fa-2x' name1='phone' desc='01095270638' />
                    <ContactTemp icon='fa fa-map-marker fa-2x' name1='address' desc='cairo' />
                    <ContactTemp icon='fa fa-envelope fa-2x' name1='email' desc='magdymohammed37@yahoo.com' />
                </div>

                <ul className='flex justify-center mt-12'>
                    <li className='mx-3'><Anchor href='https://www.facebook.com/profile.php?id=100002594931715' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-facebook text-white" aria-hidden="true"></i></Anchor></li>
                    <li className='mx-3'><Anchor href='https://twitter.com/magdymo26260007' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-twitter text-white" aria-hidden="true"></i></Anchor></li>
                    <li className='mx-3'><Anchor href='https://www.instagram.com/magdyMohammed20/' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-instagram text-white" aria-hidden="true"></i></Anchor></li>
                    <li className='mx-3'><Anchor href='https://github.com/magdyMohammed20' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-github-alt text-white" aria-hidden="true"></i></Anchor></li>
                </ul>
            </div>
        </ContactSection>
    )
}

export default Contact

