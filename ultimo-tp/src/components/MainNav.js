import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './MainNav.scss'
import mobileBreakpoint from '../helpers/mobileBreakpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const MainNav = ({className}) =>{
    const [mobileMenu, toggleMobileMenu] = useState(false)
    return(
        <nav className={className === 'transparent' ? 'navContainer transparent' : 'navContainer normal'}>
            <h1 className={'pageTitle'}><Link to={'/'} className={'pageTitleContent'}>Fly high!</Link></h1>
            <a
                className={window.innerWidth < mobileBreakpoint ? 'menuIcon show' : 'menuIcon hide'}
                href={'#'}><FontAwesomeIcon icon={faBars}
                onClick={()=>toggleMobileMenu(!mobileMenu)}
            /></a>
            <div className={mobileMenu ? 'dropdown show' : 'dropdown hide'}>
                <ul className={'mainNav'}>
                    <li><a href={'index.html'}>Hotels</a></li>
                    <li><a href={'index.html'}>Rooms</a></li>
                    <li><a href={'index.html'}>Flights</a></li>
                    <li><a href={'index.html'}>Cars</a></li>
                    <li><a href={'index.html'}>Experiences</a></li>
                </ul>
                <ul className={'optionsNav'}>
                    <li><a href={'index.html'}>USD</a></li>
                    <li><a href={'index.html'}>My Account</a></li>
                </ul> 
            </div>
            
        </nav>
    )
}

export default MainNav