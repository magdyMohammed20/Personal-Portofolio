
import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import { ExperienceSection } from './Styles'
import ExperienceTemp from './components/ExperienceTemp'
import leadsmart from '../../images/experience/leadsmart.png'
import mostaql from '../../images/experience/mostaql.png'
import asset from '../../images/experience/asset.jpg'
import samvalley from '../../images/experience/samvalley.jpeg'
import amanah from '../../images/experience/amanah.jpeg'
//import matrix from '../../images/experience/matrix.svg'
//import asad from '../../images/experience/asad.jpeg'

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
            name: 'LeadsMart',
            role: 'Front End Developer',
            compImg: leadsmart,
            startDate: '04/04/2022',
            endDate: '16/02/2023',
            width: '3em',
            height: '3em'
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
        },
        {
            id: 4,
            name: 'SamValley',
            role: 'Senior Front End Developer',
            compImg: samvalley,
            startDate: '06/03/2024',
            endDate: '06/10/2024',
            width: '3.5em',
            height: '3.5em'
        },
        {
            id: 5,
            name: 'Amanah Teknologia',
            role: 'Senior UI Developer',
            compImg: amanah,
            startDate: '20/03/2024',
            endDate: '',
            width: '3.5em',
            height: '3.5em'
        },
        /* {
            id: 6,
            name: 'Asad Holding',
            role: 'Senior UI Developer',
            compImg: asad,
            startDate: '01/09/2024',
            endDate: '',
            width: '3.5em',
            height: '3.5em'
        },
        {
            id: 7,
            name: 'Matrix',
            role: 'Vuejs Front End Developer',
            compImg: matrix,
            startDate: '26/09/2024',
            endDate: '',
            width: '3.5em',
            height: '3.5em'
        }, */
        
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


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-16'>

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
