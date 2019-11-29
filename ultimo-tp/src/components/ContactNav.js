import React from 'react'
import './ContactNav.scss'

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
    const socialMedia = [
        {title: 'F', href:'index.html'},
        {title: 'T', href:'index.html'},
        {title: 'G', href:'index.html'},
        {title: 'I', href:'index.html'}
    ]

    return(
        <div className={'contactNavContainer'}>
            <ul className={'footerNav'}>
                {footerNav.map((f,i)=><a key={i} href={f.href}>{f.title}</a>)}
            </ul>
            <ul className={'socialMedia'}>
                {socialMedia.map((s,i)=><a key={i} href={s.href}>{s.title}</a>)}
            </ul>
        </div>
    )
}

export default ContactNav