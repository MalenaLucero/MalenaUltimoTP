import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import FlightDurationConverter from '../helpers/FlightDurationConverter'
import './ResultItem.scss'
import timeConverter from '../helpers/timeConverter'
import dateConverter from '../helpers/dateConverter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'

const CityAndDate = ({className, iataCode, timeAndDate}) =>{
    const [cityName, setCityName] = useState('')
    useEffect(()=>{
        async function getCity(){
            let city = await fetch(`https://airports-dpvsjndcod.now.sh/city/${iataCode}`)
                .then(res => res.json())
                .then(data => data.state)
            setCityName(city)
        }
        getCity()
    },[])
    return(
        <ul className={className}>
            <li className={'flightDataTime'}>{timeConverter(timeAndDate)}</li>
            <li className={'flightDataCity'}>{cityName}</li>
            <li className={'flightDataDate'}>{dateConverter(timeAndDate)}</li>
        </ul>
    )
}

const ItemContent = ({data}) =>{
    const {duration, segments} = data
    const carrierCode = segments[0].carrierCode
    return(
        <div className={'itemData'}>
            <div className={'itemDetails'}>
                <div className={'airline'}>
                    <img src={`https://content.airhex.com/content/logos/airlines_${carrierCode}_200_200_s.png`}/>
                </div>
                <CityAndDate
                    className={'fromData'}
                    iataCode={segments[0].departure.iataCode}
                    timeAndDate={segments[0].departure.at}
                />
                <div className={'segmentsData'}>
                    <div className={'duration'}>
                        <FontAwesomeIcon className={'durationIcon'} icon={faPlaneDeparture}/>
                        <p className={'durationDetail'}>{FlightDurationConverter(duration)}</p>
                        <FontAwesomeIcon className={'durationIcon'} icon={faPlaneArrival}/>
                    </div>
                    <ul className={'segmentsDots'}>
                        {segments.map((s,i)=><li key={i}></li>)}
                        <li key={segments.length}></li>
                        <div className={'segmentsLine'}></div>
                    </ul>
                    <ul className={'segmentsList'}>
                        {segments.map((s,i)=><li key={i}>{s.departure.iataCode}</li>)}
                        <li key={segments.length}>{segments[segments.length-1].arrival.iataCode}</li>
                    </ul>
                </div>
                <CityAndDate
                    className={'toData'}
                    iataCode={segments[segments.length-1].arrival.iataCode}
                    timeAndDate={segments[segments.length-1].arrival.at}
                />
            </div> 
            <p className={'itemAirlineName'}>Operated by <span>{carrierCode}</span></p>
        </div>
        
    )
}

const ResultItem = ({flight, flightSearch}) =>{
    const {itineraries, price, id} = flight
    return(
        <li className={'itemContainer'}>
            <div className={'itemDataContainer'}>{itineraries.map((f,i)=><ItemContent key={i} data={f}/>)}</div>
            <div className={'booking'}>
                <p className={'bookingPrice'}>${price.grandTotal}</p> 
                <p className={'bookingClass'}>Economy</p>
                <button className={'bookingButton'}>
                    <Link className={'bookingButtonContent'} to={`/payment/${btoa(JSON.stringify(flightSearch))}/${id}`}>Book now</Link>
                </button>
            </div>
        </li>
    )
}

export default ResultItem