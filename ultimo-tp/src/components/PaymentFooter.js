import React from 'react'
import './PaymentFooter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const PaymentFooter = () =>{
    return(
        <footer className={'paymentFooter'}>
            <div className={'paymentFooterTop'}>
                <div className={'about'}>
                    <h4>Fly high!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className={'footerLinks'}>
                    <ul>
                        <li className={'footerLinksTitle'}>Travel Mate</li>
                        <li><a href={'#'}>About Travel Mate</a></li>
                        <li><a href={'#'}>Mobile App</a></li>
                        <li><a href={'#'}>Customer Support</a></li>
                        <li><a href={'#'}>Advertising</a></li>
                        <li><a href={'#'}>Jobs</a></li>
                        <li><a href={'#'}>Privacy Policy</a></li>
                        <li><a href={'#'}>Terms of Use</a></li>
                    </ul>
                    <ul>
                        <li className={'footerLinksTitle'}>Explore</li>
                        <li><a href={'#'}>Countries</a></li>
                        <li><a href={'#'}>Regions</a></li>
                        <li><a href={'#'}>Cities</a></li>
                        <li><a href={'#'}>Districts</a></li>
                        <li><a href={'#'}>Airpots</a></li>
                        <li><a href={'#'}>Hotels</a></li>
                        <li><a href={'#'}>Places of Interest</a></li>
                    </ul>
                    <ul>
                        <li className={'footerLinksTitle'}>Book</li>
                        <li><a href={'#'}>Apartments</a></li>
                        <li><a href={'#'}>Resorts</a></li>
                        <li><a href={'#'}>Villas</a></li>
                        <li><a href={'#'}>Hostels</a></li>
                        <li><a href={'#'}>B&Bs</a></li>
                        <li><a href={'#'}>Guesthouses</a></li>
                        <li><a href={'#'}>Hotel Chains</a></li>
                    </ul>
                </div>
                <div className={'newsletter'}>
                    <h4>Save up to 50% off your next trip</h4>
                    <p>Suscribe to unlock our secret deals</p>
                    <input type={'text'} placeholder={'Type your e-mail here'}/>
                    <button>GET DEALS</button>
                </div>
            </div>
            <div className={'paymentFooterBottom'}>
                <p className={'copyright'}>Copyright © <a href={'index.html'} className={'pageCreator'}>Malena Lucero</a> 2019. All rights reserved.</p>
                <ul className={'socialMedia'}>
                    <a href={"index.html"}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href={"index.html"}><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href={"index.html"}><FontAwesomeIcon icon={faGoogle}/></a>
                    <a href={"index.html"}><FontAwesomeIcon icon={faInstagram}/></a>
                </ul>
            </div>
        </footer>
    )
}

export default PaymentFooter