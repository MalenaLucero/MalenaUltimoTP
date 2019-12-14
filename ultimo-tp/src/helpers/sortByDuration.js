//rearranges the array so that the fights with less duration come first
//the comparison is made in total minutes

import durationConverter from './durationConverter'

const sortByDuration = (flights, ascendingDuration) =>{
    let newArray = []
    flights.forEach((flight,index)=>{
        if(index === 0){
            newArray.push(flight)
        }else if(durationConverter(flight.itineraries[0].duration) <= durationConverter(newArray[0].itineraries[0].duration)){
            newArray.unshift(flight)
        }else if(durationConverter(flight.itineraries[0].duration) >= durationConverter(newArray[newArray.length-1].itineraries[0].duration)){
            newArray.push(flight)
        }else{
            let isFlightPushed = false
            newArray.forEach((f,i)=>{
                if(isFlightPushed === false && durationConverter(flight.itineraries[0].duration) < durationConverter(f.itineraries[0].duration)){
                    newArray.splice(i,0,flight)
                    isFlightPushed = true
                }else if(isFlightPushed === false && durationConverter(flight.itineraries[0].duration) == durationConverter(f.itineraries[0].duration)){
                    newArray.splice(i+1,0,flight)
                    isFlightPushed = true
                }
            })
        }
    })
    if(!ascendingDuration) newArray.reverse()
    return newArray
}

export default sortByDuration