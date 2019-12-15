const flightsFilter = (flights, chosenStops) =>{
    let stops = chosenStops.map(e=>parseInt(e)).map(e=>e+1)
    let filteredFlights = flights.filter(flight=>{
        let isIncluded = false
        stops.forEach(s=>{
            if(flight.itineraries[0].segments.length === s && flight.itineraries[flight.itineraries.length-1].segments.length === s) isIncluded = true
        })
        if(isIncluded) return flight
    })

    return filteredFlights
}

export default flightsFilter