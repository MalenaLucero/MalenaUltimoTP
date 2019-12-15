const flightsFilter = (flights, chosenStops) =>{
    let stops = chosenStops.map(e=>parseInt(e)).map(e=>e+1)
    switch(stops.length){
        case 1: return flights.filter(f=>f.itineraries[0].segments.length === stops[0] && f.itineraries[f.itineraries.length-1].segments.length === stops[0])
            break
    }
}

export default flightsFilter