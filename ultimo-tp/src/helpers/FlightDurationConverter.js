const FlightDurationConverter = (PTtime) =>{
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
      return `${hours}h ${minutes}m`  
    }else if(hours){
        return `${hours}h` 
    }else{
        return `${minutes}m`
    }
}

export default FlightDurationConverter