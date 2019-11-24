import React, { useEffect, useState }from 'react'
import ResultItem from './ResultItem'

const Results = ({availableFlights}) =>{
    const [flights, setFlights] = useState(availableFlights)
    return(
        <div>
            <nav>
                <span>Sort by:</span>
                <a href={'#'}>Price</a>
                <a href={'#'}>Duration</a>
                <a href={'#'}>Recommended</a>
                <a href={'#'}>Airline</a>
            </nav>
            <ul>
                {flights.map((f,i)=><ResultItem key={i} flight={f}/>)}   
            </ul>
        </div>
    )
}

export default Results