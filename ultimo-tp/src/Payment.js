import React, {useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
//components
import MainNav from './components/MainNav'
import ChosenFlightInfo from './components/ChosenFlightInfo'
import BookingSummary from './components/BookingSummary'
import Charges from './components/Charges'
import PaymentFooter from './components/PaymentFooter'
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
                        <Form>
                            <h3>Enter Passenger Details</h3>
                            <h4>Passenger 1</h4>
                            <Field as='select' name='birthMonth'>
                                <option value='01'>Jan</option>
                            </Field>
                            <Field as='select' name='gender'>
                                <option value='female'>female</option>
                                <option value='male'>male</option>
                            </Field>
                            <Field name='firstName' placeholder='First name'/>
                            <Field name='lastName' placeholder='Lastname'/>
                            <Field name='passportSerial' placeholder='Passport serial'/>
                            <Field name='citizenship' placeholder='Citizenship'/>    

                            <div>
                                <h3>Enter Billing Information</h3>
                                <div>
                                    <h4>Billing Address</h4>
                                    <Field name='street1' placeholder='Street (line 1)'/>
                                    <Field name='street2' placeholder='Street (line 2)'/>
                                    <Field name='postalCode' placeholder='Postal code'/>
                                    <Field name='city' placeholder='City'/>
                                    <Field name='state' placeholder='State/Region'/>
                                    <Field name='country' placeholder='Select country'/>
                                    <Field name='nameOnCard' placeholder='Name on card'/>
                                    <Field name='cardNumber' placeholder='Card number'/>
                                    <Field as='select' name='validUntilMonth' placeholder=''/>
                                    <Field as='select' name='validUntilYear' placeholder=''/>
                                    <Field name='securityCode' placeholder='Security code'/>
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