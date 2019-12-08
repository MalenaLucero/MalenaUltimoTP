import React, {useState, useEffect} from 'react'
import FetchData from './helpers/FetchData'
import MainNav from './components/MainNav'
import ChosenFlightInfo from './components/ChosenFlightInfo'
import BookingSummary from './components/BookingSummary'
import Charges from './components/Charges'
import PaymentFooter from './components/PaymentFooter'
//styles
import '../src/shared.scss'
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
        <React.Fragment>
            <MainNav className={'normal'}/>
            <div className={'checkoutContainer'}>
                <div className={'mainInfo'}>
                    {isLoading ? <p>Loading...</p> : null}
                    {showResults ? <ChosenFlightInfo flight={chosenFlight}/> : null}
                    <div>
                        <h3>Enter Passenger Details</h3>
                        <div>
                            <h4>Passenjer 1</h4>
                        </div>
                    </div>
                    <div>
                        <h3>Enter Billing Information</h3>
                        <div>
                            <h4>Billing Address</h4>
                        </div>
                        <div>
                            <h4>Card details</h4>
                        </div>
                    </div>
                    <div className={'paymentTotalContainer'}>
                        <div className={'paymentTotalText'}>
                            <h3>Total</h3>
                            <p>By clicking "book now" you agree with the terms and conditions and money back guarantee. Thank you for trusting our service.</p>
                        </div>
                        {showResults ? <p className={'paymentTotalAmount'}>{`$${chosenFlight.price.grandTotal}`}</p> : null}
                    </div>
                    <button className={'paymentMainButton'}>Book now</button>
                </div>
                <div className={'asideInfo'}>
                    {showResults ? <BookingSummary className={'bookingSummary'} flight={chosenFlight}/> : null}
                    {showResults ? <Charges className={'charges'} flight={chosenFlight}/> : null}
                </div>
            </div>
            <PaymentFooter/>
        </React.Fragment>
        
    )
}

export default Payment