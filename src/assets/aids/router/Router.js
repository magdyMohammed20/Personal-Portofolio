import React , {useState} from 'react'
import {BrowserRouter , Route , Link, Switch} from 'react-router-dom'
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

                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route path='/about'><About/></Route>
                    <Route path='/skills'><Skills/></Route>
                    <Route path='/services'><Services/></Route>
                    <Route path='/portofolio'><Portofolio/></Route>
                    <Route path='/contact'><Contact/></Route>
                </Switch>

                <button className='absolute humb' onClick={() => toggleNav()}>
                    <i className="fa fa-bars text-black" aria-hidden="true"></i>
                </button>

                <Overlay className={overlay ? 'block' : 'hidden' }></Overlay>
            </RouterParent>
        </BrowserRouter>
    )
}

export default Router
