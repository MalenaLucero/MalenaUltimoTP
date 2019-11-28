import React, { useEffect, useState } from 'react'
import FetchData from './helpers/FetchData'
import ResultItem from './components/ResultItem'

const Results = ({match}) =>{
    //const {flight} = match.params
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    console.log(match.params.flight)
    let decodedFlight = JSON.parse(atob(match.params.flight))
    console.log(decodedFlight)
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            //let response = await FetchData(flight)
            //console.log(response.data)
            //setFlights(response.data.filter(f=>f.oneWay.toString() === oneWay))
            //console.log(response.data.filter(f=>f.oneWay.toString() === oneWay))
            toggleLoading(false)
            //setShowResults(true)
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
            {showResults ? flights.map((f,i)=><ResultItem key={i} flight={f}/>) : null}
        </div>
    )
}

export default Results