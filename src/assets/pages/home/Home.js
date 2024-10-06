import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { HomeSection, AboutBtn } from './Styles'
import myImg from '../../images/Personal/main.png'
import Colors from '../../aids/Colors'

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const { btnColor1} = Colors

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <HomeSection className='bg-cover flex justify-center bg-center h-screen relative'>
            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container px-6'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className=" h-screen flex content-center flex-wrap">
                        <div>
                            <span className='text-gray-400'>Hellow In My Portofolio</span>
                            <h1 className='text-3xl sm:text-5xl my-6 font-bold' style={{color: btnColor1}}>Magdy Mohammed</h1>
                            <h3 className='text-1xl sm:text-2xl mt-5 text-white'>Front End Developer</h3>
                            <p className='text-gray-500 text-[15px] leading-7 my-8'>
                                
I am Mid-level Front End Developer able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. 
                            </p>
                            <AboutBtn className='rounded about-btn py-4 px-6 shadow-md inline-block' to='/about'>More About Me</AboutBtn>
                        </div>
                    </div>
                    <div className='flex justify-center items-center hidden lg:flex'>
                        <img src={myImg} alt='Computer' />

                        
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Home
