import React, {useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
//components
import MainNav from './components/MainNav'
import ChosenFlightInfo from './components/ChosenFlightInfo'
import BookingSummary from './components/BookingSummary'
import Charges from './components/Charges'
import PaymentFooter from './components/PaymentFooter'
import PassengerDetailsInput from './components/PassengerDetailsInput'
import BillingInformationInputs from './components/BillingInformationInputs'
//helpers
import FetchData from './helpers/FetchData'
import passengerDetailsModel from './helpers/passengerDetailsModel'
import billingInformationModel from './helpers/billingInformationModel'
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
                    <Formik
                        initialValues={passengerDetailsModel, billingInformationModel}
                        onSubmit={values=>console.log(values)}
                    >
                        <Form class='mainPaymentForm'>
                            <h3>Enter Passenger Details</h3>
                            <PassengerDetailsInput/>
                            <h3>Enter Billing Information</h3>
                            <BillingInformationInputs/>
                            <div className={'paymentTotalContainer'}>
                                <div className={'paymentTotalText'}>
                                    <h3>Total</h3>
                                    <p>By clicking "book now" you agree with the terms and conditions and money back guarantee. Thank you for trusting our service.</p>
                                </div>
                                {showResults ? <p className={'paymentTotalAmount'}>{`$${chosenFlight.price.grandTotal}`}</p> : null}
                            </div>
                            <button className={'paymentMainButton'}>Book now</button>
                        </Form>
                    </Formik>
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