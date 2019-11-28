import React, {useState, useEffect} from 'react'
import FetchData from './helpers/FetchData'

const Payment = ({match}) =>{
    const {flight, id} = match.params
    const [chosenFlight, setChosenFlight] = useState({})
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData(flight)
            setChosenFlight(response.data.find(f=>f.id === id))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
	}, [])
    return(
        <div>
            <h1>Payment</h1>
            {isLoading ? <p>Loading...</p> : null}
            {showResults ? <div>{chosenFlight.price.grandTotal}</div> : null}
        </div>
    )
}

export default Payment