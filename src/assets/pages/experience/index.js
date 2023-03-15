
import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { ExperienceSection } from './Styles'
import ExperienceTemp from './components/ExperienceTemp'
import digifi from '../../images/experience/digifi.png'
import mostaql from '../../images/experience/mostaql.png'
import asset from '../../images/experience/asset.jpg'

function Experience() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    const allComps = [
        {
            id: 1,
            name: 'Mostaql',
            role: 'Freelancer',
            compImg: mostaql,
            startDate: '01/01/2019',
            endDate: '01/04/2022',
            width: '3em',
            height: '3em'
        },
        {
            id: 2,
            name: 'DigiFi Network',
            role: 'Front End Developer',
            compImg: digifi,
            startDate: '04/04/2022',
            endDate: '16/02/2023',
            width: '4em',
            height: '3.2em'
        },
        {
            id: 3,
            name: 'ASSET Technology Group',
            role: 'Software Engineer',
            compImg: asset,
            startDate: '20/02/2023',
            endDate: '',
            width: '3.5em',
            height: '3.5em'
        }
    ]
    return (
        <ExperienceSection className='p-8 h-auto lg:h-screen'>

            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container mx-auto px-6'>
                <div className='text-center mt-12'>
                    <h2 className='text-2xl text-white font-bold'>My Experience</h2>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>

                    {
                        allComps.map(({ id, name, role, compImg, startDate, endDate, width, height }) => <ExperienceTemp
                            key={id}
                            id={id}
                            name={name}
                            role={role}
                            compImg={compImg}
                            startDate={startDate}
                            endDate={endDate}
                            width={width}
                            height={height}
                        />)
                    }

                </div>
            </div>
        </ExperienceSection>
    )
}

export default Experience
