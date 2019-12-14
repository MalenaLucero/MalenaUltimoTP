//from the array of flights, return an array with the stops for each flight
const stopsArray = (flights) =>{
    let newArray = flights.map(f=>{
        let toStops = f.itineraries[0].segments.length
        let fromStops = f.itineraries[f.itineraries.length-1].segments.length
        if(toStops === fromStops){
            return toStops -1
        }else if(toStops > fromStops){
            return toStops -1
        }else if(toStops < fromStops){
            return fromStops -1
        }
    } )
    let uniqueValues = [...new Set(newArray)]
    return uniqueValues
}
    
export default stopsArray