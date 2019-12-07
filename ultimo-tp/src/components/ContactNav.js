import React from 'react'
import './ContactNav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const ContactNav = () =>{
    const footerNav = [
        {title: 'Hotels', href:'index.html'},
        {title: 'Flights', href:'index.html'},
        {title: 'Homes', href:'index.html'},
        {title: 'Cars', href:'index.html'},
        {title: 'Experiences', href:'index.html'},
        {title: 'About us', href:'index.html'},
        {title: 'Contact', href:'index.html'}
    ]

    return(
        <div className={'contactNavContainer'}>
            <ul className={'footerNav'}>
                {footerNav.map((f,i)=><a key={i} href={f.href}>{f.title}</a>)}
            </ul>
            <ul className={'socialMedia'}>
                <a href={"index.html"}><FontAwesomeIcon icon={faFacebook}/></a> 
                <a href={"index.html"}><FontAwesomeIcon icon={faTwitter}/></a>
                <a href={"index.html"}><FontAwesomeIcon icon={faGoogle}/></a>
                <a href={"index.html"}><FontAwesomeIcon icon={faInstagram}/></a>
            </ul>
        </div>
    )
}

export default ContactNav