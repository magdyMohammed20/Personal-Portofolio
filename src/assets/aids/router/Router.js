
import React, { useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Skills from '../../pages/skills/Skills'
import Experience from '../../pages/experience'
import Portofolio from '../../pages/portofolio/Portofolio'
import Contact from '../../pages/contact/Contact'

import { RouterParent, Overlay } from './Style'



function Router() {

    let [toggled, setToggled] = useState(false)
    let [overlay, setOverlay] = useState(false)

    let toggleNav = () => {
        setToggled(!toggled)
        setOverlay(!overlay)


        if (toggled === false) {
            document.body.style.paddingLeft = "250px"
        } else {
            document.body.style.padding = "0px"
        }

    }


    return (
        <BrowserRouter>
            <RouterParent>
                <nav className={toggled ? "open" : ''}>
                    <ul>
                        <li><Link to='/'>
                            <i className="fa fa-home mr-3"></i>
                            home
                        </Link>
                        </li>
                        <li><Link to='/about'>
                            <i className="fa fa-user mr-3"></i>
                            about
                        </Link>
                        </li>
                        <li><Link to='/skills'>
                            <i className="fa fa-star mr-3"></i>
                            skills
                        </Link>
                        </li>
                        <li>
                            <Link to='/experience'>
                                <i className="fa fa-cogs mr-3"></i>
                                experience
                            </Link>
                        </li>
                        <li>
                            <Link to='/portofolio'>
                                <i className="fa fa-briefcase mr-3"></i>
                                portofolio
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <i className="fa fa-envelope mr-3"></i>
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='/skills'><Skills /></Route>
                    <Route path='/experience'><Experience /></Route>
                    <Route path='/portofolio'><Portofolio /></Route>
                    <Route path='/contact'><Contact /></Route>
                </Switch>

                <button className='fixed humb' onClick={() => toggleNav()}>
                    <i className="fa fa-bars text-white" aria-hidden="true"></i>
                </button>

                <Overlay className={overlay ? 'block' : 'hidden'}></Overlay>
            </RouterParent>
        </BrowserRouter>
    )
}

export default Router
