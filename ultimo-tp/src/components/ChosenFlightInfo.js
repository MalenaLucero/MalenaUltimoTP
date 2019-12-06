import React, {useState, useEffect} from 'react'
import dateConverter from '../helpers/dateConverter'
import './ChosenFlightInfo.scss'

const ChosenFlightInfo = ({flight}) =>{
    const {itineraries, oneWay, travelerPricings} = flight
    const departure = itineraries[0].segments[0].departure.iataCode
    const arrival = itineraries[0].segments[itineraries[0].segments.length-1].arrival.iataCode
    const isOneWay = oneWay ? 'One way' : 'Round trip'
    const passengers = travelerPricings.length === 1 ? '1 passenger' : `${travelerPricings.length} passengers`
    const departureDate = itineraries[0].segments[0].departure.at
    const returnDate = itineraries[1].segments[0].departure.at
    const carrierCode = itineraries[0].segments[0].carrierCode
    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    useEffect(()=>{
        async function getDepartureCity(){
            let city = await fetch(`https://airports-dpvsjndcod.now.sh/city/${departure}`)
                .then(res => res.json())
                .then(data => data.state)
            setDepartureCity(city)
        }
        getDepartureCity()
        async function getArrivalCity(){
            let city = await fetch(`https://airports-dpvsjndcod.now.sh/city/${arrival}`)
                .then(res => res.json())
                .then(data => data.state)
            setArrivalCity(city)
        }
        getArrivalCity()
    },[])
    return(
        <React.Fragment>
            <div className={'chosenFlight'}>
                <div className={'chosenFlightDetails'}>
                    <h2>{`${departureCity} --> ${arrivalCity}`}</h2>
                    <p>{`${isOneWay}, ECONOMY, ${passengers}`}</p>
                    <div>
                        <p>Depart: {dateConverter(departureDate)}</p>
                        <p>Return: {dateConverter(returnDate)}</p>
                    </div> 
                </div>
                <div className={'chosenFlightAirline'}>
                    <img src={`https://content.airhex.com/content/logos/airlines_${carrierCode}_200_200_s.png`}/>
                </div>
            </div>
            <a className={'flightDetailsBtn'} href={'index.html'}>Flight details</a>
        </React.Fragment>
    )
}

export default ChosenFlightInfo