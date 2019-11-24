import React, { useEffect, useState } from 'react'
import FetchData from './components/FetchData'



const Results = () =>{
    //const [ flightSearch, setFlightSearch ] = useState(FlightModel)
    const [ flights, setFlights ] = useState([ '' ])

    const FlightModel = {
        departure: 'SYD', 
        arrival: 'BKK', 
        departureDate: '', 
        arrivalDate: '', 
        passengers: ''
    }

    useEffect(() => {
		async function getTrip() {
			const response = await FetchData()
            let foundFlights = response.data.filter(f=>f.itineraries[0].segments[0].departure.iataCode === 'SYD')
                .filter(f=>f.itineraries[0].segments[f.itineraries[0].segments.length -1 ].arrival.iataCode === 'BKK')
            console.log(foundFlights)
			//setFlights(response.data)
			//toogleLoading(false)
		}
		getTrip()
	}, [])
    return(
        <div>{FlightModel.departure}</div>
        
    )
}

export default Results