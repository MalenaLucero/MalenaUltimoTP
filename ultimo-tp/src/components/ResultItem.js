import React from 'react'

const ItemContent = (props) =>{
    const {duration, segments} = props.data
    return(
        <ul>
            <li>Duration: {duration}</li>
            <li>Desde: {segments[0].departure.iataCode}</li>
            <li>Hasta: {segments[segments.length-1].arrival.iataCode}</li>
        </ul>
    )
}

const ResultItem = (props) =>{
    const {itineraries, price, id} = props.flight
    return(
        <li>
            {itineraries.map((f,i)=><ItemContent key={i} data={f} toOrFrom={i}/>)}
            <p>{price.grandTotal}</p>
            <a href={"#"} onClick={()=>console.log(id)}>Book now</a>
        </li>
    )
    
}

export default ResultItem