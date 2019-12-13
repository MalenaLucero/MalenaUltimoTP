import React from 'react'
import {Field} from 'formik'

const BillingInformationInputs = () =>{
    const years = [...Array(30).keys()].map(e=>e+2020)
    const months = [
        {letters: 'January', number:'01'}, 
        {letters: 'February', number:'02'},
        {letters: 'March', number:'03'},
        {letters: 'April', number:'04'},
        {letters: 'May', number:'05'},
        {letters: 'June', number:'06'},
        {letters: 'July', number:'07'},
        {letters: 'August', number:'08'},
        {letters: 'September', number:'09'},
        {letters: 'October', number:'10'},
        {letters: 'November', number:'11'},
        {letters: 'December', number:'12'}]
    return(
        <React.Fragment>
            <div>
                <h4 className={'paymentFormSubtitle'}>Billing Address</h4>
                <div className={'inputsContainer'}>
                    <Field name='street1' placeholder='Street (line 1)' className={'paymentInput'}/>
                    <Field name='street2' placeholder='Street (line 2)' className={'paymentInput'}/>
                    <Field name='postalCode' placeholder='Postal code' className={'paymentInput'}/>
                    <Field name='city' placeholder='City' className={'paymentInput'}/>
                    <Field name='state' placeholder='State/Region' className={'paymentInput'}/>
                    <Field name='country' placeholder='Select country' className={'paymentInput'}/>
                </div>
                
            </div>
            <div>
                <h4 className={'paymentFormSubtitle'}>Card Details</h4>
                <div className={'inputsContainer'}>
                    <Field name='nameOnCard' placeholder='Name on card' className={'paymentInput'}/>
                    <Field name='cardNumber' placeholder='Card number' className={'paymentInput'}/>
                    <div className={'cardDetails'}>
                        <Field as='select' name='validUntilMonth'>
                            <option value="" disabled selected>Month</option>
                            {months.map(m=><option value={m.number}>{m.number}</option>)}
                        </Field>
                        <Field as='select' name='validUntilYear'>
                            <option value="" disabled selected>Year</option>
                            {years.map(y=><option value={y}>{y}</option>)}
                        </Field>
                        <Field name='securityCode' placeholder='Security code'/>  
                    </div>
                     
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default BillingInformationInputs