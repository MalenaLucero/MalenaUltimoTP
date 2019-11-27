import React, { useEffect, useState } from 'react'
import FetchData from './helpers/FetchData'


const Results = ({match}) =>{
    const [ isLoading, toggleLoading ] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    useEffect(() => {
		async function getTrip() {
			console.log('buscando')
				toggleLoading(true)
                let response = await FetchData(match.params.flight)
                console.log(response.data)
				setFlights(response.data)
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
            {isLoading ? <p>Loading...</p> : flights.map((f,i)=><div>{f.id}</div>)}
        </div>
    )
}

export default Results