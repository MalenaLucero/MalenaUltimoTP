import React, {useState, useEffect} from 'react'
import FetchData from './helpers/FetchData'
import ChosenFlightInfo from './components/ChosenFlightInfo'
import './Payment.scss'
import BookingSummary from './components/BookingSummary'
import Charges from './components/Charges'

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
                    <div>
                        <h3>Enter Passenger Details</h3>
                    </div>
                    <div>
                        <h3>Enter Billing Information</h3>
                    </div>
                    <button>Book now</button>
                </div>
                <div className={'asideInfo'}>
                    {showResults ? <BookingSummary className={'bookingSummary'} flight={chosenFlight}/> : null}
                    {showResults ? <Charges className={'charges'} flight={chosenFlight}/> : null}
                </div>
            </div>
            <footer>
                Fly high
            </footer>
        </div>
    )
}

export default Payment