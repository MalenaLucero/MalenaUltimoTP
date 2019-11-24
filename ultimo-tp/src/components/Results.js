import React from 'react'

const ResultItem = (props) =>{
    return(
        <li>
            {props.flight.itineraries.map((f,i)=><div key={i}>{f.id}</div>)}
            <p>{props.flight.price.grandTotal}</p>
        </li>
    )
    
}

const Results = ({availableFlights, numberToShow}) =>{
    let flights = availableFlights.slice(0,numberToShow)
    console.log(flights)
    return(
        <div>
            <ul>
                {flights.map((f,i)=><ResultItem key={i} flight={f}/>)}   
            </ul>
        </div>
    )
}

export default Results