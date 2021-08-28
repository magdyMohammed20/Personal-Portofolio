import React from 'react'
import {AboutSection , Span , Anchor , Btn} from './Styles'
import myImg from '../../images/Personal/11.png'

function About() {
    return (
        <AboutSection className='p-8'>
            <div className='container px-6'>
                <div className='text-center'>
                    <Span>MAIN INFO</Span>
                    <h2 className='text-3xl text-white font-bold'>ABOUT ME</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='flex justify-center hidden lg:flex flex-col mt-8'>
                        <img src={myImg} className='mx-auto rounded-lg' alt={myImg}/>
                        <ul className='flex justify-center mt-8'>
                            <li className='mx-3'><Anchor href='#' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full'><i className="fa fa-facebook text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='#' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full'><i className="fa fa-twitter text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='#' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full'><i className="fa fa-instagram text-white" aria-hidden="true"></i></Anchor></li>
                            <li className='mx-3'><Anchor href='#' className='shadow bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full'><i className="fa fa-github-alt text-white" aria-hidden="true"></i></Anchor></li>
                        </ul>

                    </div>
                    <div className="flex content-center flex-wrap mt-8">
                        <p className='text-gray-600 text-lg'>
                        I am Mid-level Front End Developer able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                        I have excellent design & coding skills, as well as an ability to convert requirements into exciting online applications.
                        </p>
                        <div className='mt-8'>
                            <Btn className='rounded about-btn py-3 px-4 shadow-md mr-4'>Download CV</Btn>
                            <Btn className='rounded about-btn py-3 px-4 shadow-md'>Hire Me</Btn>
                        </div>
                    </div>

                </div>
            </div>
        </AboutSection>
    )
}

export default About
