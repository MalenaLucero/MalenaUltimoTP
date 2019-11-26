import React from 'react'
import './MainNav.scss'

const MainNav = () =>{
    return(
        <nav className={'navContainer'}>
            <h1 className={'pageTitle'}>Tobe Fly!</h1>
            <ul className={'mainNav'}>
                <li><a href={'#'}>Hotels</a></li>
                <li><a href={'#'}>Rooms</a></li>
                <li><a href={'#'}>Flights</a></li>
                <li><a href={'#'}>Cars</a></li>
                <li><a href={'#'}>Experiences</a></li>
            </ul>
            <ul className={'optionsNav'}>
                <li><a href={'#'}>USD</a></li>
                <li><a href={'#'}>My Account</a></li>
            </ul>
        </nav>
    )
}

export default MainNav