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

const ResultItem = ({flight}) =>{
    const {itineraries, price, id} = flight
    const iataOrigin = itineraries[0].segments[0].departure.iataCode
    const iataDest = itineraries[0].segments[itineraries[0].segments.length - 1].arrival.iataCode
    const fromDate = itineraries[0].segments[0].departure.at.toString().slice(0, 10)
    //falta resolver toDate (esta hardcodeado)
    const toDate = itineraries[itineraries.length - 1].segments[2].departure.at.toString().slice(0, 10)
    const adults = '2'
    return(
        <li>
            {itineraries.map((f,i)=><ItemContent key={i} data={f}/>)}
            <p>${price.grandTotal}</p>
            {<button>
                <Link to={`/payment/originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toDate}&adults=${adults}/${id}`}>Book now</Link>
            </button>}
        </li>
    )
    
}

export default ResultItem