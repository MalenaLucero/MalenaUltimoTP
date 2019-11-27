import React from 'react'
import {Link} from 'react-router-dom'
import './MainNav.scss'

const MainNav = () =>{
    return(
        <nav className={'navContainer'}>
            <h1 className={'pageTitle'}><Link to={'/'}>Fly me to the moon</Link></h1>
            <ul className={'mainNav'}>
                <li><button href={'#'}>Hotels</button></li>
                <li><button href={'#'}>Rooms</button></li>
                <li><button href={'#'}>Flights</button></li>
                <li><button href={'#'}>Cars</button></li>
                <li><button href={'#'}>Experiences</button></li>
            </ul>
            <ul className={'optionsNav'}>
                <li><button href={'#'}>USD</button></li>
                <li><button href={'#'}>My Account</button></li>
            </ul>
        </nav>
    )
}

export default MainNav