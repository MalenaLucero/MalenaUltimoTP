import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import FlightDurationConverter from '../helpers/FlightDurationConverter'
import './ResultItem.scss'
import timeConverter from '../helpers/timeConverter'
import dateConverter from '../helpers/dateConverter'

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
            <li>{timeConverter(timeAndDate)}</li>
            <li>{cityName}</li>
            <li>{dateConverter(timeAndDate)}</li>
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
                    <p className={'duration'}>{FlightDurationConverter(duration)}</p>
                    <ul className={'segmentsDots'}>
                        {segments.map((s,i)=><li key={i}>o</li>)}
                        <li key={segments.length}>o</li>
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