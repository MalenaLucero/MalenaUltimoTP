import React from 'react'
import {Field} from 'formik'
import './PassengerDetailsInput.scss'

const PassengerDetailsInput = () =>{
    const years = [...Array(100).keys()].map(e=>e+1920)
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
    const days = [...Array(31).keys()].map(e=>e+1)
    return(
        <React.Fragment>
            <h4 className={'paymentFormSubtitle'}>Passenger 1</h4>
            <div className={'inputsContainer'}>
                <div className={'birthdayInputs'}>
                    <Field as='select' name='birthDay' className={'birthDay'}>
                        <option value="" disabled selected>Day</option>
                        {days.map(d=><option value={d}>{d}</option>)}
                    </Field>
                    <Field as='select' name='birthMonth' className={'birthDay'}>
                        <option value="" disabled selected>Month</option>
                        {months.map(m=><option value={m.number}>{m.letters}</option>)}
                    </Field>
                    <Field as='select' name='birthYear' className={'birthDay'}>
                        <option value="" disabled selected>Year</option>
                        {years.map(y=><option value={y}>{y}</option>)}
                    </Field>
                </div>
                <Field as='select' name='gender' className={'paymentInput'}>
                    <option value="" disabled selected>Gender</option>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                    <option value='other'>other</option>
                </Field>
                <Field name='firstName' placeholder='First name' className={'paymentInput'}/>
                <Field name='lastName' placeholder='Lastname' className={'paymentInput'}/>
                <Field name='passportSerial' placeholder='Passport serial' className={'paymentInput'}/>
                <Field name='citizenship' placeholder='Citizenship' className={'paymentInput'}/>  
            </div>
        </React.Fragment>
    )
}

export default PassengerDetailsInput