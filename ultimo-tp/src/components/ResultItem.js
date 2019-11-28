import React from 'react'
import {Link} from 'react-router-dom'
import FlightDurationConverter from '../helpers/FlightDurationConverter'

const ItemContent = ({data}) =>{
    const {duration, segments} = data
    return(
        <ul>
            <li>Duration: {FlightDurationConverter(duration)}</li>
            <li>Desde: {segments[0].departure.iataCode}</li>
            <li>Hasta: {segments[segments.length-1].arrival.iataCode}</li>
        </ul>
    )
}

const ResultItem = ({flight, flightSearch}) =>{
    const {itineraries, price, id} = flight
    return(
        <li>
            {itineraries.map((f,i)=><ItemContent key={i} data={f}/>)}
            <p>${price.grandTotal}</p>
            <button>
                <Link to={`/payment/${btoa(JSON.stringify(flightSearch))}/${id}`}>Book now</Link>
            </button>
        </li>
    )
}

export default ResultItem