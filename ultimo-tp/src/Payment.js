import React, {useState, useEffect} from 'react'
import FetchData from './helpers/FetchData'
import ChosenFlightInfo from './components/ChosenFlightInfo'
import './Payment.scss'

const Payment = ({match}) =>{
    const {flight, id} = match.params
    const [chosenFlight, setChosenFlight] = useState({})
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    console.log(chosenFlight)
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData(JSON.parse(atob(flight)))
            setChosenFlight(response.data.find(f=>f.id === id))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
	}, [])
    return(
        <div>
            <div className={'checkoutContainer'}>
                <div className={'mainInfo'}>
                    {isLoading ? <p>Loading...</p> : null}
                    {showResults ? <ChosenFlightInfo flight={chosenFlight}/> : null}
                </div>
                <div className={'asideInfo'}>
                    <div>
                        <h3>Booking Summary</h3>
                    </div>
                    <div>
                        <h3>Charges</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment