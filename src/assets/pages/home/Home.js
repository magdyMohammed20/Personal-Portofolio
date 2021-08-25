import React from 'react'
import {HomeSection , AboutBtn , Img} from './Styles'
import myImg from '../../images/Personal/personal.jpg'
function Home() {
    return (
        <HomeSection className='bg-cover bg-center h-screen'>
            <div className='container px-6'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className=" h-screen flex content-center flex-wrap">
                        <div>
                            <span className='text-gray-400'>Hellow</span>
                            <h1 className='text-3xl sm:text-5xl my-6 text-white'>Magdy Mohammed</h1>
                            <h3 className='text-1xl sm:text-2xl mt-5 mb-6 text-white'>Front End Developer</h3>
                            <AboutBtn className='rounded about-btn py-3 px-4 shadow-md'>More About Me</AboutBtn>
                        </div>
                    </div>
                    <div className='flex justify-center items-center hidden lg:flex'>
                        <Img src={myImg} className='rounded-full border-8'/>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Home
