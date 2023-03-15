import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { AboutSection, Btn } from './Styles'
import { Anchor } from '../../aids/style/globalStyle'
import myImg from '../../images/Personal/33.png'

function About() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <AboutSection className='p-8'>
            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container px-6'>
                <div className='text-center mt-12'>
                    {
                        /*
                        
                        <Span>MAIN INFO</Span>*/
                    }
                    <h2 className='text-2xl text-white font-bold'>ABOUT ME</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='flex justify-center hidden lg:flex flex-col'>
                        <img src={myImg} className='mx-auto rounded-lg' alt={myImg} />
                        <ul className='flex justify-center mt-8'>
                            <li className='mx-3'><Anchor href='https://www.facebook.com/profile.php?id=100002594931715' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-facebook text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='https://twitter.com/magdymo26260007' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-twitter text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='https://www.instagram.com/magdyMohammed20/' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-instagram text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='https://github.com/magdyMohammed20' target='_blank' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-sm'><i className="fa fa-github-alt text-white" aria-hidden="true"></i></Anchor></li>
                        </ul>

                    </div>
                    <div className="flex content-center flex-wrap mt-8">
                        <p className='text-gray-600 text-lg'>
                            I am Mid-level Front End Developer able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                            I have excellent design & coding skills, as well as an ability to convert requirements into exciting online applications.
                        </p>
                        <div className='mt-8'>
                            <Btn className='rounded about-btn py-3 px-4 shadow-md mr-4 inline-block' href='https://www.mediafire.com/file/asv2qa99c1r0lm9/Magdy_Mohammed_Abd_El-hamid_CV.pdf/file' target='black' download>Download CV</Btn>
                            <Btn className='rounded about-btn py-3 px-4 shadow-md inline-block' href='https://mostaql.com/u/Magdy_Mo10' target='_blank'>Hire Me</Btn>
                        </div>
                    </div>

                </div>
            </div>
        </AboutSection>
    )
}

export default About
