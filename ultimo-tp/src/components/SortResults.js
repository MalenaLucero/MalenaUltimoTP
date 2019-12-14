import React, {useState} from 'react'
import sortByPrice from '../helpers/sortByPrice'
import sortByDuration from '../helpers/sortByDuration'
import './SortResults.scss'

const SortResults = ({flights, setFlights}) =>{
    const [ascendingPrice, setAscendingPrice] = useState(true)
    const [ascendingDuration, setAscendingDuration] = useState(true)
    const [alphabeticAirline, setAlphabeticAirline] = useState(true)
    return(
        <nav className={'sortingNav'}>
            <div>Sort by:</div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'} 
                    onClick={()=>setFlights(sortByPrice(flights, ascendingPrice))}>
                        Price
                </a> 
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setAscendingPrice(!ascendingPrice)}>
                    {ascendingPrice ? 'Low → High' : 'High → Low'}
                </a>
            </div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'} 
                    onClick={()=>setFlights(sortByDuration(flights, ascendingDuration))}>
                        Duration
                </a> 
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setAscendingDuration(!ascendingDuration)}>
                    {ascendingDuration ? 'Short → Long' : 'Long → Short'}
                </a>
            </div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'}>
                        Airline
                </a>
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setAlphabeticAirline(!alphabeticAirline)}>
                    {alphabeticAirline ? 'A → Z' : 'Z → A'}
                </a>
            </div>
        </nav>
    )
}

export default SortResults