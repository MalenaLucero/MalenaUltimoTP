import React, { useEffect, useState } from 'react'
import FetchData from './helpers/FetchData'
import ResultItem from './components/ResultItem'

const Results = ({match}) =>{
    const flightSearch = JSON.parse(atob(match.params.flight))
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData()
            console.log(response.data.filter(f=>f.oneWay === flightSearch.oneWay))
            setFlights(response.data.filter(f=>f.oneWay === flightSearch.oneWay))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
	}, [])
    return(
        <div>
            <h2>Results</h2>
            <nav>
                <span>Sort by:</span>
                <button >Price</button>
                <button >Duration</button>
                <button >Recommended</button>
                <button >Airline</button>
            </nav>
            {isLoading ? <p>Loading...</p> : null}
            {showResults && flights.length !== 0 ? flights.map((f,i)=><ResultItem key={i} flight={f} flightSearch={flightSearch}/>) : null}
            {showResults && flights.length === 0 ? <p>No flights were found</p> : null}
        </div>
    )
}

export default Results