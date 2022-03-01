import React from 'react'
import { PortofolioSection } from './Styles'
import PortoTemp from './PortoTemp'
import Bright from '../../images/Portofolio/Bright.PNG'
import Education from '../../images/Portofolio/Education.PNG'
import NewEvent from '../../images/Portofolio/NewEvent.PNG'
import Tailwind from '../../images/Portofolio/Tailwind.PNG'
import TheEvent from '../../images/Portofolio/TheEvent.PNG'
import Countries from '../../images/Portofolio/countries.PNG'

function Portofolio() {
    return (
        <PortofolioSection className='p-8 h-auto'>
            <div className='container px-6 mt-8 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl text-white font-bold'>LATEST WORKS</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6">
                    <PortoTemp src={Bright} desc='Bright Template' link='https://bright-nine.vercel.app/' />
                    <PortoTemp src={Education} desc='Educational Template' link='https://educational-template.vercel.app/' />
                    <PortoTemp src={NewEvent} desc='Event Template' link='https://events-template.vercel.app/' />
                    <PortoTemp src={Tailwind} desc='Tailwind Template' link='https://tailwind-react-template.vercel.app/' />
                    <PortoTemp src={TheEvent} desc='Conference Template' link='https://application-on-bootstrap-4.vercel.app/' />
                    <PortoTemp src={Countries} desc='React Countries API' link='https://621d5b2171ee2e52b98616d9--competent-lichterman-f484dd.netlify.app/' />
                </div>
            </div>
        </PortofolioSection>
    )
}

export default Portofolio
