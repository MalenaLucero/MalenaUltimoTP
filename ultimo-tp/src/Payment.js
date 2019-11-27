import React, {useState, useEffect} from 'react'
import FetchData from './helpers/FetchData'

const Payment = ({match}) =>{
    const {flight, id} = match.params
    const [chosenFlight, setChosenFlight] = useState({})
    useEffect(() => {
		async function getTrip() {
            let response = await FetchData(flight)
            console.log(response.data)
            console.log(id)
		}
		getTrip()
	}, [])
    return(
        <div>Payment</div>
    )
}

export default Payment