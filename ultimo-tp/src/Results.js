import React, { useEffect, useState } from 'react'
import FetchData from './helpers/FetchData'
import ResultItem from './components/ResultItem'
import './Results.scss'

const Results = ({match}) =>{
    const flightSearch = JSON.parse(atob(match.params.flight))
    console.log(flightSearch)
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData(flightSearch)
            console.log(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            setFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
	}, [])
    return(
        <div className={'resultsContainer'}>
            <div className={'filters'}>Filters</div>
            <div className={'results'}>
               <nav>
                <span>Sort by:</span>
                <button >Price</button>
                <button >Duration</button>
                <button >Recommended</button>
                <button >Airline</button>
                </nav>
                <div>
                    {isLoading ? <p>Loading...</p> : null}
                    <ul>{showResults && flights.length !== 0 ? flights.map((f,i)=><ResultItem key={i} flight={f} flightSearch={flightSearch}/>) : null}</ul>
                    {showResults && flights.length === 0 ? <p>No flights were found</p> : null}  
                </div>
            </div>
            <div className={'advertisements'}>Adverts</div>
        </div>
    )
}

export default Results