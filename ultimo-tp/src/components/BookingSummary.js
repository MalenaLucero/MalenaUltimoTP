import React from 'react'
import dateConverter from '../helpers/dateConverter'
import './BookingSummary.scss'

const BookingSummary = ({className, flight}) =>{
    const {itineraries, oneWay, travelerPricings} = flight
    const isOneWay = oneWay ? 'One way' : 'Round trip'
    const passengers = travelerPricings.length === 1 ? '1 passenger' : `${travelerPricings.length} passengers`
    const departureDate = itineraries[0].segments[0].departure.at
    const returnDate = itineraries[1].segments[0].departure.at
    return(
        <div className={className}>
            <h3 className={'bookingSummaryTitle'}>Booking Summary</h3>
            <p>{`${isOneWay}, ECONOMY, ${passengers}`}</p>
            <div>
                <p>Depart: {dateConverter(departureDate)}</p>
                <p>Return: {dateConverter(returnDate)}</p>
            </div>
        </div>
    )
}

export default BookingSummary