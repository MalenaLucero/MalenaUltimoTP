import React, {useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
//components
import MainNav from './components/MainNav'
import Loader from './components/Loader'
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
                    {isLoading ? <Loader text={'Estamos buscando el vuelo que elegiste. Ya falta poco :)'}/> : null}
                    {showResults ? <ChosenFlightInfo flight={chosenFlight}/> : null}
                    <Formik
                        initialValues={passengerDetailsModel(chosenFlight.travelingPricings), billingInformationModel}
                        onSubmit={values=>console.log(values)}
                    >
                        <Form className='mainPaymentForm'>
                            <div className={'passengerDetailsContainer'}>
                                <h3>Enter Passenger Details</h3>
                                {showResults ? chosenFlight.travelerPricings.map((adult,i)=><PassengerDetailsInput key={i} number={i+1}/>) : null} 
                            </div>
                            <div className={'billingInformationContainer'}>
                                <h3>Enter Billing Information</h3>
                                <BillingInformationInputs/>
                            </div>
                            <div className={'paymentTotalContainer'}>
                                <div className={'paymentTotalText'}>
                                    <h3>Total</h3>
                                    <p>By clicking "book now" you agree with the terms and conditions and money back guarantee. Thank you for trusting our service.</p>
                                </div>
                                {showResults ? <p className={'paymentTotalAmount'}>{`$${chosenFlight.price.grandTotal}`}</p> : null}
                            </div>
                            <button type={'button'} className={'paymentMainButton'}>Book now</button>
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