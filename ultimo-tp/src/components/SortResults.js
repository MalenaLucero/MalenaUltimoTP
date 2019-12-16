import React, {useState} from 'react'
import sortByPrice from '../helpers/sortByPrice'
import sortByDuration from '../helpers/sortByDuration'
import sortAlpabetically from '../helpers/sortAlphabetically'
import './SortResults.scss'

const SortResults = ({flights, setFlights}) =>{
    const [isAscendingPrice, setPriceOrder] = useState(true)
    const [isAscendingDuration, setDurationOrder] = useState(true)
    const [isAlphabetical, setAlphabeticalOrder] = useState(true)
    return(
        <nav className={'sortingNav'}>
            <div>Sort by:</div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'} 
                    onClick={()=>setFlights(sortByPrice(flights, isAscendingPrice))}>
                        Price
                </a> 
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setPriceOrder(!isAscendingPrice)}>
                    {isAscendingPrice ? 'Low → High' : 'High → Low'}
                </a>
            </div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'} 
                    onClick={()=>setFlights(sortByDuration(flights, isAscendingDuration))}>
                        Duration
                </a> 
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setDurationOrder(!isAscendingDuration)}>
                    {isAscendingDuration ? 'Short → Long' : 'Long → Short'}
                </a>
            </div>
            <div>
                <a href={'#'} 
                    className={'biggerAnchor'}
                    onClick={()=>setFlights(sortAlpabetically(flights, isAlphabetical))}>
                        Airline
                </a>
                <a href={'#'} 
                    className={'smallerAnchor'} 
                    onClick={()=>setAlphabeticalOrder(!isAlphabetical)}>
                    {isAlphabetical ? 'A → Z' : 'Z → A'}
                </a>
            </div>
        </nav>
    )
}

export default SortResults