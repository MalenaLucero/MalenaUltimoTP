const sortAlphabetically = (flights, alphabeticalAirline) =>{
    let sortedAirlines = [...new Set(flights.map(f=>f.itineraries[0].segments[0].carrierCode))].sort()
    let sortedFlights = []
    sortedAirlines.forEach(a=>{
        let aux = flights.filter(f=>f.itineraries[0].segments[0].carrierCode === a)
        sortedFlights = sortedFlights.concat(aux)
    })
    if(!alphabeticalAirline) sortedFlights.reverse()
    return sortedFlights
}

export default sortAlphabetically