import React from 'react'
import {PortofolioSection} from './Styles'
import PortoTemp from './PortoTemp'
import Bright from '../../images/Portofolio/Bright.PNG'
import Education from '../../images/Portofolio/Education.PNG'
import NewEvent from '../../images/Portofolio/NewEvent.PNG'
import Tailwind from '../../images/Portofolio/Tailwind.PNG'
import TheEvent from '../../images/Portofolio/TheEvent.PNG'


function Portofolio() {
    return (
        <PortofolioSection className='p-8'>
            <div className='container px-6'>
                <div className='text-center'>
                    <h2 className='text-3xl text-white font-bold'>LATEST WORKS</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        <PortoTemp src={Bright} desc='Bright Template' link='https://bright-nine.vercel.app/'/>
                        <PortoTemp src={Education} desc='Educational Template' link='https://educational-template.vercel.app/'/>
                        <PortoTemp src={NewEvent} desc='Event Template' link='https://events-template.vercel.app/'/>
                        <PortoTemp src={Tailwind} desc='Tailwind Template' link='https://tailwind-react-template.vercel.app/'/>
                        <PortoTemp src={TheEvent} desc='Tailwind Template' link='https://application-on-bootstrap-4.vercel.app/'/>
                </div>
            </div>
        </PortofolioSection>
    )
}

export default Portofolio
