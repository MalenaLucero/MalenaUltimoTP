import React from 'react'
import {Link} from 'react-router-dom'
import './MainNav.scss'

const MainNav = () =>{
    return(
        <nav className={'navContainer'}>
            <h1 className={'pageTitle'}><Link to={'/'}>Fly high!</Link></h1>
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
        </nav>
    )
}

export default MainNav