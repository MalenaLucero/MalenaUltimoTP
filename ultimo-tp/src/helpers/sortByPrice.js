//rearranges the array so that cheaper flights come first

const sortByPrice = (flights, ascendingPrice) =>{
    let newArray = []
    flights.forEach((flight,index)=>{
        if(index === 0){
            newArray.push(flight)
        }else if(parseFloat(flight.price.grandTotal) <= parseFloat(newArray[0].price.grandTotal)){
            newArray.unshift(flight)
        }else if(parseFloat(flight.price.grandTotal) >= parseFloat(newArray[newArray.length-1].price.grandTotal)){
            newArray.push(flight)
        }else{
            let isFlightPushed = false
            newArray.forEach((f,i)=>{
                if(isFlightPushed === false && parseFloat(flight.price.grandTotal) < parseFloat(f.price.grandTotal)){
                    newArray.splice(i,0,flight)
                    isFlightPushed = true
                }else if(isFlightPushed === false && parseFloat(flight.price.grandTotal) == parseFloat(f.price.grandTotal)){
                    newArray.splice(i+1,0,flight)
                    isFlightPushed = true
                }
            })
        }
    })
    if(!ascendingPrice) newArray.reverse()
    return newArray
}

export default sortByPrice