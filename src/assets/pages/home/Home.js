import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { HomeSection, AboutBtn } from './Styles'
import myImg from '../../images/Personal/comp.png'

function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <HomeSection className='bg-cover bg-center h-screen relative'>
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
                            <h1 className='text-3xl sm:text-5xl my-6 text-white font-bold'>Magdy Mohammed</h1>
                            <h3 className='text-1xl sm:text-2xl mt-5 mb-6 text-white'>Front End Developer</h3>
                            <AboutBtn className='rounded about-btn py-3 px-4 shadow-md inline-block' to='/about'>More About Me</AboutBtn>
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
