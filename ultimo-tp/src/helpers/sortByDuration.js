//rearranges the array so that the fights with less duration come first
//the comparison is made in total minutes

const durationConverter = (PTtime) =>{
    let time = PTtime.slice(2)
    let hours, minutes

    for(let i=0; i<3; i++){
        if(time.charAt(i)==='H'){
            hours = time.slice(0,i+1).slice(0,-1)
            minutes = time.slice(i+1).slice(0,-1)
        }else if(time.charAt(i)==='M'){
            minutes = time.slice(0,i+1).slice(0,-1)
        }
    }

    if(minutes && hours){
        return parseInt(hours,10) * 60 + parseInt(minutes,10)
    }else if(hours){
        return parseInt(hours,10) * 60
    }else{
        return parseInt(minutes,10)
    }
}

const sortByDuration = (flights) =>{
    let newArray = []

    flights.forEach((flight,index)=>{
        if(index === 0){
            newArray.push(flight)
        }else if(durationConverter(flight.itineraries[0].duration) <= durationConverter(newArray[0].itineraries[0].duration)){
            newArray.unshift(flight)
        }else if(durationConverter(flight.itineraries[0].duration) >= durationConverter(newArray[newArray.length-1].itineraries[0].duration)){
            newArray.push(flight)
        }
    })
    
    return newArray.map(f=>durationConverter(f.itineraries[0].duration))
}

export default sortByDuration