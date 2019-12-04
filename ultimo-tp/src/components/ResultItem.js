import React from 'react'
import {Link} from 'react-router-dom'
import FlightDurationConverter from '../helpers/FlightDurationConverter'
import './ResultItem.scss'

const ItemContent = ({data}) =>{
    const {duration, segments} = data
    return(
        <div className={'itemData'}>
            <div className={'itemDetails'}>
                <p className={'airline'}>A</p>
                <ul className={'fromData'}>
                    <li></li>
                    <li>{segments[0].departure.iataCode}</li>
                    <li></li>
                </ul>
                <ul className={'segmentsData'}>
                    <li>{FlightDurationConverter(duration)}</li>
                </ul>
                <ul className={'toData'}>
                    <li></li>
                    <li>{segments[segments.length-1].arrival.iataCode}</li>
                    <li></li>
                </ul>
            </div> 
            <p>Operated by <span></span></p>
        </div>
        
    )
}

const ResultItem = ({flight, flightSearch}) =>{
    const {itineraries, price, id} = flight
    return(
        <li className={'itemContainer'}>
            <div className={'itemDataContainer'}>{itineraries.map((f,i)=><ItemContent key={i} data={f}/>)}</div>
            <div className={'booking'}>
                <p>${price.grandTotal}</p> 
                <p>Economy</p>
                <button>
                    <Link to={`/payment/${btoa(JSON.stringify(flightSearch))}/${id}`}>Book now</Link>
                </button>
            </div>
        </li>
    )
}

export default ResultItem