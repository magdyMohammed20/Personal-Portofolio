import React , {useState} from 'react'
import {BrowserRouter , Route , Link} from 'react-router-dom'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Skills from '../../pages/skills/Skills'
import Services from '../../pages/services/Services'
import Portofolio from '../../pages/portofolio/Portofolio'
import Contact from '../../pages/contact/Contact'
import {RouterParent , Overlay} from './Style'



function Router() {

    let [toggled , setToggled] = useState(false)
    let [overlay , setOverlay] = useState(false)

    let toggleNav = () => {
        setToggled(!toggled)
        setOverlay(!overlay)

        /*
        if(toggled == false){
            document.body.style.paddingLeft = "250px"
        }else{
            document.body.style.padding = "0px"
        }
        */
    }

    
    return (
        <BrowserRouter>
            <RouterParent>
                <nav className={toggled ? "open" : ''}>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/skills'>skills</Link></li>
                        <li><Link to='/services'>services</Link></li>
                        <li><Link to='/portofolio'>portofolio</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                </nav>

                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/services' component={Services}/>
                <Route path='/portofolio' component={Portofolio}/>
                <Route path='/contact' component={Contact}/>

                <button className='absolute' onClick={() => toggleNav()}>
                    <i className="fa fa-bars text-white" aria-hidden="true"></i>
                </button>

                <Overlay className={overlay ? 'block' : 'hidden' }></Overlay>
            </RouterParent>
        </BrowserRouter>
    )
}

export default Router
